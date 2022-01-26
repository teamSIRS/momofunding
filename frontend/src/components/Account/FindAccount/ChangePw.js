import { Container, InputForm, Input, Btn } from './styles';
import styled from 'styled-components';

const Title = styled.h3`
    font-weight: bold;
    margin-bottom: 100px;
    /* 위치조정............... */
`;

function ChangePw(){
    let newPw = '';
    let newPwCheck = '';

    function passCheck(){

    };

    return(
        <>
            <Title>비밀번호 재설정</Title>
            <Container>
                <InputForm>
                    <Input 
                        placeholder='새로운 비밀번호' 
                        onChange={(e)=>{
                            // console.log(e.target.value);
                            newPw = e.target.value;
                            console.log(newPw);
                        }}/>
                    <Input
                        placeholder='새로운 비밀번호 확인'
                        onChange={(e)=>{
                            newPwCheck = e.target.value;
                        }}/>
                    <Btn
                        onClick={()=> {
                            
                        }}>확인</Btn>
                </InputForm>
            </Container>
        </>
    );
}
export default ChangePw;