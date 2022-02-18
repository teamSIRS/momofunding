import { IonIcon } from "@ionic/react";
import {
  cloudUploadOutline,
  imageOutline,
  fileTrayFullOutline,
  documentOutline,
  closeOutline,
} from "ionicons/icons";
import { useState, useRef, ChangeEvent } from "react";
import styled from "styled-components";

const Icon = styled(IonIcon)`
  font-size: 48px;
  margin: 10px;
`;

const ImgUploaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  border: 3px dashed rgba(255, 255, 255, 55%);
  width: 75%;
  position: relative;
  align-self: center;
  padding: 20px;
  transition: 0.5s;
  margin: 7px;
  &:hover,
  .dragover {
    transform: scale(1.1, 1.1);
    opacity: 0.6;
  }
`;

const DropFileInput = styled.input`
  opacity: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  cursor: pointer;
`;

const DropFilePreviews = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DropFilePreview = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 10%);
  border-radius: 6px;
  margin: 10px;
  padding: 5px 30px;
  justify-content: space-between;
  &:hover span {
    opacity: 1;
  }
`;

const DeleteBtn = styled.span`
  width: 42px;
  height: 42px;
  background: transparent;
  right: 10px;
  border: 1px solid;
  border-radius: 21px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  opacity: 0.2;
  transition: opacity 0.3s ease;
`;

const ImageUploader = () => {
  const wrapperRef = useRef<any>(null);
  const [fileList, setFileList] = useState<File[]>([]);

  const onDragEnter = () => wrapperRef.current.classList.add("dragover");
  const onDragLeave = () => wrapperRef.current.classList.remove("dragover");
  const onDrop = () => wrapperRef.current.classList.add("dragover");
  const onFileDrop = (event: ChangeEvent<HTMLInputElement>) => {
    const newFile = event.target.files![0];
    if (newFile) {
      const updatedList = [...fileList, newFile];
      setFileList(updatedList);
    }
  };

  const removeFile = (idx: number) => {
    const updatedList = [...fileList];
    updatedList.splice(idx, 1);
    setFileList(updatedList);
  };

  return (
    <ImgUploaderWrapper
      ref={wrapperRef}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      <h5>업로드할 이미지를 드래그 앤 드롭</h5>
      <Icon icon={cloudUploadOutline}></Icon>
      <DropFileInput type="file" value="" onChange={onFileDrop} />
      {fileList.length > 0 && (
        <DropFilePreviews>
          <Icon icon={fileTrayFullOutline} size="large"></Icon>
          <h5>Preview</h5>
          {fileList.map((file, idx) => (
            <DropFilePreview key={idx}>
              {file.type.split("/")[0] === "image" ? (
                <Icon icon={imageOutline} size="large"></Icon>
              ) : (
                <Icon icon={documentOutline} size="large"></Icon>
              )}
              {file.name}
              <DeleteBtn onClick={() => removeFile(idx)}>
                <Icon icon={closeOutline}></Icon>
              </DeleteBtn>
            </DropFilePreview>
          ))}
        </DropFilePreviews>
      )}
    </ImgUploaderWrapper>
  );
};

export default ImageUploader;
