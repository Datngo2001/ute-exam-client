import './App.css';
import TopNav from './layouts/TopNav/TopNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Login from './pages/authentication/Authentication';
import Profile from './pages/profile/Profile';
import DoTest from './pages/doTest/DoTest';
import FindTest from './pages/findTest/FindTest';
import CreateTest from './pages/createTest/CreateTest';
import TestList from './pages/testList/TestList';
import UserContext from './context/UserContext';
import { useEffect, useState } from 'react';
import Spinner from './components/Spinner/Spinner';
import LoadingContext from './context/LoadingContext';
import Cookies from 'js-cookie';
import jwt from 'jwt-decode';
import {
    faHome,
    faUser,
    faComputer,
    faBook,
    faTentArrowTurnLeft,
    faChalkboardTeacher,
    faList,
    faTextSlash
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab, faHome, faUser, faComputer, faBook, faTentArrowTurnLeft, faChalkboardTeacher, faList, faTextSlash);

function App() {
    const [user, setUser] = useState({});
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        if (user.username !== undefined) {
            return;
        }
        const token = Cookies.get('Authorization');
        if (!token) {
            return;
        }
        const userdata = jwt(token);
        setUser({
            id: userdata.id,
            username: userdata.username,
            role: userdata.role,
        });
    }, []);

    var spinnerElement;
    if (isLoading) {
        spinnerElement = <Spinner></Spinner>;
    } else {
        spinnerElement = null;
    }

    return (
        <div className="App d-block">
            <LoadingContext.Provider value={setLoading}>
                <UserContext.Provider value={{ user, setUser }}>
                    <TopNav></TopNav>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/auth" element={<Login />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/create" element={<CreateTest />} />
                        <Route path="/do" element={<DoTest />} />
                        <Route path="/find" element={<FindTest />} />
                        <Route path="/list" element={<TestList />} />
                    </Routes>
                </UserContext.Provider>
            </LoadingContext.Provider>
            {spinnerElement}
        </div>
    );
}

export default App;
