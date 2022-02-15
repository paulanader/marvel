import { GlobalStyle } from './styles/global';
import { PagesRoutes } from './PagesRoutes';
import { Wrapper } from './components/Wrapper';



export const App: React.FC = () => 
  (
    <> 
      <GlobalStyle /> 
      <PagesRoutes />
    </>
  );
