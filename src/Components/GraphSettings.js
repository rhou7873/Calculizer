// React Bootstrap
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function GraphSettings({ settings, sumType, loadLeftSum, loadRightSum, loadMiddleSum, setFn, setN }) {
    return (
        <Form>
            <Container className="mb-3">
                <Form.Check inline defaultChecked onChange={loadLeftSum} label="Left" name="sumType" type="radio" />
                <Form.Check inline onChange={loadMiddleSum} label="Midpoint " name="sumType" type="radio" />
                <Form.Check inline onChange={loadRightSum} label="Right" name="sumType" type="radio" />
            </Container>
            <Container className="my-5">
                <Row className="align-items-center">
                    <Col className="h3 mb-0 text-center" xs={1}>
                        <Form.Label>f(x):</Form.Label>
                    </Col>
                    <Col>
                        <Form.Control size="lg" value={settings.fn} onChange={e => setFn(e.target.value)} placeholder="Input f(x)" />       
                    </Col>
                </Row>
            </Container>
            <Container className="mb-3">
                <Form.Label>Number of Rectanges: {settings.n === "1000" ? "∞" : settings.n}</Form.Label>
                <Form.Range 
                    value={settings.n} 
                    onChange={e => setN(e.target.value)} 
                    min={settings.minRectangles}
                    max={settings.maxRectangles}
                    step={settings.n < 10 ? 1 : 5}
                />
            </Container>
        </Form>
    )
}

export default GraphSettings
