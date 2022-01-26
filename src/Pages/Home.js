import Heading from '../Components/Heading';
import ButtonPages from '../Components/ButtonToPages';
import Welcome from '../Components/Welcome';
import { COLORS } from '../Assets/Colors.js';

function Home() {
    return (
        <>
            <Heading title="Calculizer" subtitle="A calculus visualizer" />
            <Welcome />
            <ButtonPages />
        </>
    )
}

export default Home
