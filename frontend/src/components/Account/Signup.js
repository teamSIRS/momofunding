import styled from "styled-components";
import React from 'react';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Form = styled.div`
    flex-direction: column;
    position: static;
`;

const InputForm = styled.div`
    width: 388px;
    height: 43px;
    border: none;
    background-color: #DDDEED; 
    font-size: 18px;
    position: static;
`;

const Info = styled.input`
    width: 310px;
    height: 38px;
    border: none;
    background-color: #DDDEED; 
    font-size: 18px;
    position: relative;
    &:focus{
        outline: none;
    }
`;

const CheckBtn = styled.button`
    background-color: #B0E0E6;
    color: black;
    font-size: 12px;
    width: 75px;
    height: 33px;
    border: none;
    border-radius: 5px;
    position: absolute;
    right: 10px;
    &:hover{
        background-color: #8BDAE3;
    }
`;

const ConfirmBtn = styled.button`
    background-color: #6667AB;
    color: white;
    width: 388px;
    height: 43px;
    border: none;
    font-size: 18px;
    &:hover{
        background-color: #3C3D8B;
    }
`;

function SignUp() {
    return (

        <Container>
            <h1>회원가입</h1>

            <div>
                <div >
                    <h4>아이디</h4>
                    <Form>
                        <InputForm><Info></Info></InputForm>
                        {/* <Info></Info> */}
                        <CheckBtn>중복 확인</CheckBtn>
                    </Form>
                </div>
                <Form>
                    <h4>닉네임</h4>
                    <InputForm><Info></Info></InputForm>
                    <CheckBtn>중복 확인</CheckBtn>
                </Form>
                <div>
                    <h4>비밀번호</h4>
                    <Form>
                        <Info placeholder=" 비밀번호"></Info><br></br><br></br>
                        <Info placeholder=" 비밀번호 확인"></Info>
                    </Form>
                </div>
                <div>
                    <h4>이메일</h4>
                    <InputForm><Info></Info></InputForm>
                    <CheckBtn>인증하기</CheckBtn>
                </div>
            </div>
            <Form><input type="checkbox"/> 동의합니다</Form>
            {/* 체크박스 배경색은 background-image로 넣어야 함 */}
            <ConfirmBtn>회원가입</ConfirmBtn>
        </Container>

        
    );
}

export default SignUp;