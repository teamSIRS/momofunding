import styled from 'styled-components';

const Container = styled.div`
    /* border: 1px solid red; */
    width: 100vw;
    height: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

function NonExist(){
    return(
        <Container>
            <h2>검색 결과가 존재하지 않습니다</h2>
        </Container>
    );
}

export default NonExist;