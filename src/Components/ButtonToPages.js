import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { COLORS } from '../Assets/Colors.js';

function ButtonPages() {
    const visualizers = [
        { name: "Riemann Sums", urlExt: "/riemann-sums" },
        { name: "Disc Integration", urlExt: "/disc-integration"},
        { name: "Taylor Series", urlExt: "/taylor-series"}
    ];

    const buttonStyle = {
        backgroundColor: `${COLORS.navy}`,
        color: "white",
    }

    const cardStyle = {
        width: "500px"
    }   

    // Handles page navigation when buttons clicked
    const history = useHistory();

    function handleClick(path) {
        history.push(path);
    }

    return (
        <Container className="my-5 text-center">
            <Card className="border-dark mx-auto shadow-lg" style={cardStyle}>
                <Row className="mb-3 pt-3">
                    <p className="lead fw-normal">
                        What would you like to visualize:
                    </p>
                </Row>
                {visualizers.map(({ name, urlExt }) => ( 
                    <Row className="mb-3">
                        <Col>
                            <Button className="mb-3 hover-shadow border-dark" style={buttonStyle} onClick={() => handleClick(`${urlExt}`)}>
                                {name}
                            </Button>
                        </Col>
                    </Row>))}
            </Card>
        </Container>
    )
}

export default ButtonPages
