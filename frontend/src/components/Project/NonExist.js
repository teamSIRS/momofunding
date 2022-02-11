import styled from 'styled-components';

const Container = styled.div`
    height: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

function NonExist(props){
    return(
        <Container>
            <h2>{props.ment}가 존재하지 않습니다</h2>
        </Container>
    );
}

export default NonExist;