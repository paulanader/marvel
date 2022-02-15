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
import LoadingContent from '../../components/LoadingContent';
import { getThumbnail } from '../../uteis/data';
import { Breadcrumb } from '../../components/Breadcrumb';
import { ComicType } from '../../@types/ComicType';


export const Comic: React.FC = () => {

    const [isLoading, setLoading] = useState(true);
    const [comic, setComic] = useState<ComicType | null>(null);
   
    const { id } = useParams();
    const getComic = (): void => {
        
        setLoading(true);

        Api.get(

            `https://gateway.marvel.com/v1/public/comics/${id}?ts=1&apikey=61c2e48bb48d5c410b93389820c710b1&hash=d139ac9c3eb046861b8fd4b7bd23e163`
        )
            .then(response => {
                setComic(response.data?.data?.results[0] ?? null);
                
            })
            .catch(() => null)
            .finally(() => {
                setLoading(false);
            });
    };

    useEffect(() => {
        getComic();
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
                                title: "Comics",
                                backTo: "/comics",
                            },
                            {
                                title: `${comic?.title}`,
                                backTo: "/comics/:id",
                            },                            
                        ]}
                    />                                        
                    <LoadingGate 
                        waitFor={isLoading === false}
                        meanWhile={<LoadingContent />}
                    >
                        { comic && (
                            <div className="row g-5">
                                <div className="col-5">
                                    <img 
                                    className="img-fluid" 
                                    src={getThumbnail(comic.thumbnail)} 
                                    alt={comic?.title} />
                                </div>
                                <div className="col">
                                    <PageTitle title={comic?.title ?? 'Loading...'} />
                                    <p>Description: {comic.diamondCode}</p>                             
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