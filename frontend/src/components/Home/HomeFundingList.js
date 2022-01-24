import { Container, Row, Col, Button, Card } from 'react-bootstrap';

function HomeFundingList(){
    return(
        <Container>
        <Row>
            <Cards>1 of 3</Cards>
            <Cards>2 of 3</Cards>
            <Cards>3 of 3</Cards>
        </Row>
        <Row>
            <Cards>1 of 3</Cards>
            <Cards>2 of 3</Cards>
            <Cards>3 of 3</Cards>
        </Row>
        </Container>
    );
}

function Cards(){
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="./test1.jpg" />
            <Card.Body>
                <Card.Title>킹왕 소시지</Card.Title>
                <Card.Subtitle>멕시코</Card.Subtitle>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
            </Card.Body>
        </Card> 
    );
}

function Project(){
    return(
        <div>
            <img src="./test1.jpg" alt="" />
            <h4>킹왕 소시지</h4> <span>멕시코</span>
            <p>수제 소시지 업체 멕시코입니다 최고의 재료로 만든 윌의 소시지! 킹왕 소시지를 한번 잡솨봐</p>
        </div>
    );
}

export default HomeFundingList;