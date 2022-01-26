import Card from 'react-bootstrap/Card';
import { COLORS } from '../Assets/Colors.js';

function Welcome() {
    const divStyle = {
        background: `linear-gradient(180deg, ${COLORS.mango} 0%, ${COLORS.orange} 100%)`,
    }

    const cardStyle = {
        width: "500px",
        borderRadius: "10px", 
        borderColor: `${COLORS.navy}`, 
        borderWidth: "9px",
    }

    return (
        <div className="py-5 mb-5 text-center" style={divStyle}>
            <Card body className="shadow-lg mx-auto px-5" style={cardStyle}>
                <h1 className="mt-3"> 
                    Welcome to the Calculizer!
                </h1>
                <p className="lead">
                    A tool used to visualize fundamental calculus concepts. 
                </p>
            </Card>
        </div>
    );
}

export default Welcome
