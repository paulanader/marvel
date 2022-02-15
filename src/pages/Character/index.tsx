import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Menu } from '../../components/Menu';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Main } from '../../components/Main';
import { Container } from '../../components/Container';
import { PageTitle } from '../../components/PageTitle';
import { LoadingGate } from '../../components/LoadingGate';

import { Api } from '../../services/Api';
import { CharacterType } from '../../@types/CharacterType';
import LoadingContent from '../../components/LoadingContent';
import { getThumbnail } from '../../uteis/data';
import { Breadcrumb } from '../../components/Breadcrumb';


export const Character: React.FC = () => {

    const [isLoading, setLoading] = useState(true);
    const [character, setCharacter] = useState<CharacterType | null>(null);
   
    const { id } = useParams();
    const getCharacter = (): void => {
        
        setLoading(true);

        Api.get(
            `https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=61c2e48bb48d5c410b93389820c710b1&hash=d139ac9c3eb046861b8fd4b7bd23e163`
        )
            .then(response => {
                setCharacter(response.data?.data?.results[0] ?? null);
                
            })
            .catch(() => null)
            .finally(() => {
                setLoading(false);
            });
    };

    useEffect(() => {
        getCharacter();
    },[]);

    return (
        <>
            <Header />
            <Menu />
            <Main>                
                <Container> 
                    <Breadcrumb
                        data={[
                            {
                                title: "Characters",
                                backTo: "/characters",
                            },
                            {
                                title: `${character?.name}`,
                                backTo: "/characters/:id",
                            },                            
                        ]}
                    />                                        
                    <LoadingGate 
                        waitFor={isLoading === false}
                        meanWhile={<LoadingContent />}
                    >
                        { character && (
                            <div className="row g-5">
                                <div className="col-5">
                                    <img 
                                    className="img-fluid" 
                                    src={getThumbnail(character.thumbnail)} 
                                    alt={character?.name} />
                                </div>
                                <div className="col">
                                    <PageTitle title={character?.name ?? 'Loading...'} />
                                    <p>Description: {character.description}</p>                             
                                </div>
                             
                        </div>
                        )}                       
                    </LoadingGate>              
                </Container>
            </Main>        
            <Footer />
            </>
    );
};