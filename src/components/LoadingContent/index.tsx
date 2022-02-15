import ContentLoader from 'react-content-loader';

const LoadingContent: React.FC = () => (
    <div className="row">
        <div className="col-3">
            <ContentLoader
                speed={2}
                width="100%"
                height={500}
                backgroundColor='#131313'
                foregroundColor='#191919'
            >
                <rect x="0" y="0" rx="5" width="100%" height="500" />                
            </ContentLoader>
        </div>
        <div className="col-9">
            <ContentLoader
            speed={2}
            width="70%"
            height={50}
            backgroundColor='#131313'
            foregroundColor='#191919'
            >
                <rect x="0" y="0" rx="5" width="100%" height="50" />     
            </ContentLoader>
        </div>
        <div className="mb-5">
            <ContentLoader
            speed={2}
            width="30%"
            height={30}
            backgroundColor='#131313'
            foregroundColor='#191919'
            >
                <rect x="0" y="0" rx="5" width="100%" height="30" />  
            </ContentLoader>            
        </div>
        <div className="row row-cols-3 g-5">
            {[...Array(6)].map((_, id) => (
                <div key={id} className="col">
                    <ContentLoader
                    speed={2}
                    width="80%"
                    height={60}
                    backgroundColor='#131313'
                    foregroundColor='#191919'
                    >
                        <rect
                            x="0"
                            y="0"
                            rx="5"
                            ry="5"
                            width="80%"
                            height="60"
                        />
                    </ContentLoader>
                </div>
            ))}            
        </div>
    </div>
);

export default LoadingContent;