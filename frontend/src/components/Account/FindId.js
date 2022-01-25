import styled from 'styled-components';
import { useState } from 'react';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 100px 150px;
`;

const Info = styled.div`
    width: 470px;
    height: 70px;
`;

const InputEmail = styled.input.attrs({required:true})`
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

const InputForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

function FindId(){
    let [email, setEmail] = useState('');
    let [isEmail, setIsEmail] = useState(false); ///////////test용
    let [modal, setModal] = useState(false); ///////////test용

    const checkEmail = (e) => {

        console.log(email);
        
        // if(email === '')
        //     setModal(false);
        setModal(true);

        if( isEmail ){ //이메일이 존재한다면(if문 안에 비교)
            return setIsEmail(true);
        }
        return null; //이메일이 존재하지 않는다면 setIsEmail(false);

    }

    return(
        <Container>
            <Info><p>가입하셨던 이메일 계정을 입력하시면<br/>가입 여부를 확인해드립니다</p></Info>
            <InputForm>
                <InputEmail placeholder='이메일 계정' type='email' onChange={(e) => {setEmail(e.target.value)}}></InputEmail>
                <Btn onClick={checkEmail} type='button'>확인</Btn>
            </InputForm>

            {
                modal
                ? (
                    email
                    ? <Message><Exist>이미 가입한 회원입니다</Exist></Message>
                    : <Message><NonExist>가입정보가 존재하지 않습니다</NonExist></Message>
                 )
                : null
            }

        </Container>
    );
}



export default FindId;