import marvellogoImg from '../../assets/marvel.svg';
import { Logo, MainHeader } from './styles';

export const Header = () =>
    (
        <MainHeader>
            <div className="container">
                <div className="row align-items-center p-3">
                    <div className="col d-flex justify-content-center">                      
                        <Logo src={ marvellogoImg } alt="Marvel" />   
                    </div>   
                </div> 
            </div> 
        </MainHeader>     
    );