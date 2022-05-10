import './App.css';
import {Header} from './components/header';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import {Home} from './pages/home';
import {MeusServicos} from './pages/meusServicos';
import {ServicosContratados} from './pages/servicosContratados';
function App() {
  return (
    <Router>
      <Header/>
      <Routes> 
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/meus-servicos' element = {<MeusServicos/>}/>
        <Route path = '/servicos-contratados' element = {<ServicosContratados/>}/>
      </Routes>
    </Router>
  );
}

export default App;
