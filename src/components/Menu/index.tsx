import { Link } from 'react-router-dom';
import { Container, Contant } from './styles';


export const Menu = () =>
    (
        <Container>
            <Contant className="d-flex justify-content-center mt-auto">  
                <Link to="/">HOME</Link>  
                <Link to="/characters">CHARACTERS</Link>
                <Link to="/comics">COMICS</Link>
                <Link to="/creators">CREATORS</Link>
                <Link to="/events">EVENTS</Link>
                <Link to="/series">SERIES</Link>  
                <Link to="/stories">STORIES</Link>
            </Contant>    
        </Container>
    );
