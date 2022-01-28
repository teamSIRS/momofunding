import { InputWrapper, TextArea, TextAreaWrapper } from "./styles";

export const PjCommunityInput = () => {
  return (
    <InputWrapper>
      <TextAreaWrapper>
        <TextArea placeholder="창작자에게 문의하고 싶은 내용을 적어주세요"></TextArea>
      </TextAreaWrapper>
    </InputWrapper>
  );
};
