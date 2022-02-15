import { Link } from 'react-router-dom';
import { Div } from './style';

interface ICardProps {    
    title: string;
    image: string;
    idroute: number;
}

export const CreatorCard: React.FC<ICardProps> = ({title, image, idroute}) => (    
        <Div className="card align-self-stretch" >
            <Link to={`/creators/${idroute}`}>
            <img 
            className="card-img-top" 
            src= {image}             
            alt="Imagem" 
            />
            </Link>
            <div className="card-body d-flex">
                <h5 className="card-title mt-auto mb-0">
                    <Link to={`/creators/${idroute}`}> 
                        {title}
                    </Link>
                </h5> 
            </div>
        </Div> 
); 