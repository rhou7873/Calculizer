import { COLORS } from '../Assets/Colors.js';
import { useState, useEffect } from 'react';

// My components
import Graph from '../Components/Graph';
import Heading from '../Components/Heading';

// React Bootstrap
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import InputGroup from 'react-bootstrap/InputGroup';
import { FormControl } from 'react-bootstrap';
import GraphSettings from "../Components/GraphSettings";

function RiemannSums() {
    // State Variables
    const [n, setN] = useState(10);
    const [fn, setFn] = useState("");
    const [windowMinX, setWindowMinX] = useState(-10);
    const [windowMaxX, setWindowMaxX] = useState(10);
    const [windowMinY, setWindowMinY] = useState(-10);
    const [windowMaxY, setWindowMaxY] = useState(10);
    const [integralStart, setIntegralStart] = useState(0);
    const [integralEnd, setIntegralEnd] = useState(9);
    const [graphStart, setGraphStart] = useState(windowMinX);
    const [graphEnd, setGraphEnd] = useState(windowMaxX);
    const [sumType, setSumType] = useState("left");

    // Constants
    const minRectangles = 0; 
    const maxRectangles = 1000;
    const graphSettings = {
        n: n,
        fn: fn,
        windowMinX: windowMinX,
        windowMaxX: windowMaxX,
        windowMinY: windowMinY,
        windowMaxY: windowMaxY,
        integralStart: integralStart,
        integralEnd: integralEnd,
        graphStart: graphStart,
        graphEnd: graphEnd,
        sumType: sumType,
        minRectangles: minRectangles,
        maxRectangles: maxRectangles
    }

    // Functions
    const zoomIn = () => {
        setWindowMinX(windowMinX / 2);
        setWindowMaxX(windowMaxX / 2);
        setWindowMinY(windowMinY / 2);
        setWindowMaxY(windowMaxY / 2);
    }
    const zoomOut = () => {
        setWindowMinX(windowMinX * 2);
        setWindowMaxX(windowMaxX * 2);
        setWindowMinY(windowMinY * 2);
        setWindowMaxY(windowMaxY * 2);        
    }
    const loadLeftSum = () => setSumType("left");
    const loadMiddleSum = () => setSumType("midpoint");
    const loadRightSum = () => setSumType("right");
    const changeFn = newFn => setFn(newFn);
    const changeN = newN => setN(newN);

    return (
        <>
            <Heading title="Riemann Sums" /> 
            <GraphSettings settings={graphSettings} loadLeftSum={loadLeftSum} loadMiddleSum={loadMiddleSum} loadRightSum={loadRightSum} setN={changeN} setFn={changeFn} />
            <Container>
                <Graph settings={graphSettings} zoomIn={zoomIn} zoomOut={zoomOut} />
            </Container>
        </>
    )
}

export default RiemannSums
