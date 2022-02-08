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

    private final CreatorRepository creatorRepository;

    @Transactional
    public void updateCreator(Long projectId, CreatorUpdateRequestDto creatorUpdateRequestDto, MultipartFile creatorImg)
    throws IOException{
        Creator creator = creatorRepository.findByProjectId(projectId)
                .orElseThrow(()-> new IllegalArgumentException("잘못된 프로젝트 번호입니다:: projectId-"+projectId));

        if(creatorImg != null){
            String imgName = creatorImg.getOriginalFilename()+"";

            String defaultImg = imagePath+"\\creator\\default.png";
            try{
                String curImgUrl = creator.getCreatorImageUrl();
                if(!imgName.equals("")){
                    if(!curImgUrl.equals(defaultImg)){
                        File file = new File(curImgUrl);
                        file.delete();
                    }
                    File creatorImgFile = new File("\\creator\\"+projectId+"_creator"+imgName.substring(imgName.lastIndexOf(".")));
                    creatorImg.transferTo(creatorImgFile);
                    creatorUpdateRequestDto.setCreatorImageUrl(imagePath+creatorImgFile.getPath());
                }else{
                    if(creatorUpdateRequestDto.getCreatorImageUrl().equals("")){ //에디터에서 이미지를 삭제했을 때
                        File file = new File(curImgUrl);
                        file.delete();
                        creatorUpdateRequestDto.setCreatorImageUrl(defaultImg);
                    }
                }
            } catch (IOException | NullPointerException e){
                throw new IOException("파일 이미지 업로드에 실패하였습니다.");
            }
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
