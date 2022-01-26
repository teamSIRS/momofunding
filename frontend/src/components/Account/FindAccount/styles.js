import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 100px 150px;
`;

export const Info = styled.div`
    width: 470px;
    height: 70px;
`;

export const InputForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Input = styled.input.attrs({required:true})`
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

export const Btn = styled.button`
    width: 470px;
    height: 58px;
    margin: 15px;
    color: black;
    background-color: #B0E0E6;
    border: none;
    :hover{
        background-color: #8BDAE3;
    }
`;