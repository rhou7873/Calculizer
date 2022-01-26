import Row from 'react-bootstrap/Row';

function Heading({ headingStyle, title, subtitle }) {
    const titleStyle = {
        letterSpacing: "3px",
    }

    const smallStyle = {
        letterSpacing: "1px"
    }

    return (
        <div className="pt-3 pb-4 text-center" style={headingStyle}>
            <Row>
                <h1 className="fw-normal display-1 spread" style={titleStyle}>{title}</h1>
            </Row>
            <Row>
                <small className="spread" style={smallStyle}><em>{subtitle}</em></small>
            </Row>
        </div>
    );
}

Heading.defaultProps = {
    title: "",
    subtitle: ""
}

export default Heading
