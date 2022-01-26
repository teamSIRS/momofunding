import styled from 'styled-components';
import { useState } from 'react';
import { Container, Info, InputForm, Input, Btn } from './styles';

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
            <Info>가입하셨던 이메일 계정을 입력하시면<br/>가입 여부를 확인해드립니다</Info>
            <InputForm>
                <Input placeholder='이메일 계정' type='email' onChange={(e) => {setEmail(e.target.value)}}></Input>
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