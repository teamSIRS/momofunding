import styled from 'styled-components';
import { useState } from 'react';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 150px;
`;

const Info = styled.div`
    width: 470px;
    height: 70px;
`;

const InputEmail = styled.input`
    width: 470px;
    height: 58px;
    margin-bottom: 15px;
    background-color: #DDDEED;
    border: none;
    padding-left: 20px;
    :focus{
        outline: none;
    }
`;

const Btn = styled.button`
    width: 470px;
    height: 58px;
    margin: 15px;
    background-color: #B0E0E6;
    border: none;
    :hover{
        background-color: #8BDAE3;
    }
`;

const Message = styled.div`
    margin:30px;
    font-weight: bold;
`;

const Exist = styled.p`
    color: green;
`;

const NonExist = styled(Exist)`
    color: tomato;
`;

function FindId(){
    let [email, setEmail] = useState(false); ///////////test용
    let [modal, setModal] = useState(false); ///////////test용

    return(
        <Container>
            <Info><p>가입하셨던 이메일 계정을 입력하시면<br/>가입 여부를 확인해드립니다</p></Info>
            <InputEmail placeholder='이메일 계정'></InputEmail>
            <Btn onClick={() => {setModal(true)}}>확인</Btn>

            {
                modal
                ? (
                    email
                    ? <Message><Exist>이미 가입한 회원입니다</Exist></Message>
                    : <Message><NonExist >가입정보가 존재하지 않습니다</NonExist></Message>
                 )
                : null
            }
        </Container>
    );
}

export default FindId;