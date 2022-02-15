package com.ssafy.momofunding.domain.creator.service;

import com.ssafy.momofunding.domain.creator.domain.Creator;
import com.ssafy.momofunding.domain.creator.dto.CreatorDetailResponseDto;
import com.ssafy.momofunding.domain.creator.dto.CreatorUpdateRequestDto;
import com.ssafy.momofunding.domain.creator.repository.CreatorRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import java.io.File;
import java.io.IOException;

@RequiredArgsConstructor
@Service
public class CreatorService {

    @Value("${spring.servlet.multipart.location}")
    private String imagePath;

    @Value("${pathSeparator}")
    private String separator;

    @Value("${serverUrl}")
    private String imageUrl;

    private final CreatorRepository creatorRepository;

    @Transactional
    public void updateCreator(Long projectId, CreatorUpdateRequestDto creatorUpdateRequestDto, MultipartFile creatorImg)
    throws IOException{
        Creator creator = creatorRepository.findByProjectId(projectId)
                .orElseThrow(()-> new IllegalArgumentException("잘못된 프로젝트 번호입니다:: projectId-"+projectId));

        File creatorImgPath = new File(separator + "creator");
        if(!creatorImgPath.exists()){
            creatorImgPath.mkdir();
        }

        String curImgUrl = creator.getCreatorImageUrl();
        String defaultImgUrl = imageUrl+"api/images/creator/default.png";

        if(creatorImg != null){
            String imgName = creatorImg.getOriginalFilename()+"";
            try{
                if(!imgName.equals("")){
                    if(!curImgUrl.equals(defaultImgUrl)){
                        File file = new File(creator.getCreatorImagePath());
                        file.delete();
                    }
                    String creatorFileName = projectId+"_creator"+imgName.substring(imgName.lastIndexOf("."));
                    File creatorImgFile = new File(imagePath + separator + "creator" + separator +creatorFileName);
                    creatorImg.transferTo(creatorImgFile);
                    creatorUpdateRequestDto.setCreatorImageUrl(imageUrl+"creator/"+creatorFileName);;
                    creator.updateCreatorImagePath(creatorImgFile.getPath());
                }
            } catch (IOException | NullPointerException e){
                throw new IOException("창작자 파일 이미지 처리에 실패하였습니다.");
            }
        }
        if(creatorUpdateRequestDto.getCreatorImageUrl().equals("")){ //에디터에서 이미지를 삭제했을 때
            if (!curImgUrl.equals(defaultImgUrl)) {
                File file = new File(curImgUrl);
                file.delete();
            }

            creatorUpdateRequestDto.setCreatorImageUrl(defaultImgUrl);
            creator.updateCreatorImagePath(imagePath+ separator + "creator" + separator + "default.png");
        }

        creator.updateCreator(creatorUpdateRequestDto);
    }

    @Transactional
    public CreatorDetailResponseDto findCreatorByProjectId(Long projectId) {
        Creator creator = creatorRepository.findByProjectId(projectId)
                .orElseThrow(()-> new IllegalArgumentException("잘못된 프로젝트 번호입니다:: projectId-"+projectId));
        return new CreatorDetailResponseDto(creator);
    }
}
