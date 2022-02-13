import styled from 'styled-components';

const Container = styled.div`
    height: 18rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export type NoneExistProps = {
    ment: string;
}

export const NoneExist = ({
    ment,
}: NoneExistProps) => {

    return(
        <Container>
            <h2>{ment}가 존재하지 않습니다</h2>
        </Container>
    );
}