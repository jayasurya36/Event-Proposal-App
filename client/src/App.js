import './App.css';
import ContextProvider from './contexts/ContextProvider';
import AppRouter from './routers/AppRouter';
import "./styles/home.css"
import './styles/register.css'
import './styles/header.css'
import './styles/Proposals.css'
import './styles/EachProposals.css'
import './styles/userProposals.css'
import './styles/singleProposal.css'
function App() {
  return <ContextProvider>
    <AppRouter/>
  </ContextProvider>
  
}

export default App;
