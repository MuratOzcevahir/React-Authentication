import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import AdminPanel from './pages/AdminPanel';
import LogOut from './pages/LogOut';
import AdminPanelMain from './pages/AdminPanelMain';
import AdminPanelTask from './pages/AdminPanelTask';

function App() {
    return (
        <>
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route path='/' Component={Home} />
                    <Route path='/login' Component={Login} />
                    <Route path='/register' Component={Register} />
                    <Route path='/adminPanel' Component={AdminPanel} >
                        <Route path='/adminPanel/' Component={AdminPanelMain} />
                        <Route path='/adminPanel/AdminPanelTask' Component={AdminPanelTask} />
                    </Route>
                    <Route path='*' element={"nopage"} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
