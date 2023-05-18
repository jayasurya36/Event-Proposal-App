import './App.css';
import ContextProvider from './contexts/ContextProvider';
import AppRouter from './routers/AppRouter';
import "./styles/home.css"
import './styles/register.css'


function App() {
  return <ContextProvider>
    <AppRouter/>
  </ContextProvider>
  
}

export default App;
