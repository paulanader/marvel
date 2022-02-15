import marvellogoImg from '../../assets/marvel.svg';
import { Container, Logo } from './styles';

export const Footer = () =>
    (
        <Container>  
            <div className="row align-items-center p-3">
                <div className="col d-flex justify-content-center">                      
                    <Logo src={ marvellogoImg } alt="Marvel" />   
                </div>   
            </div>         
        </Container>
    );