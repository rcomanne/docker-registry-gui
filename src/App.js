import './App.css';
import {Container, Nav} from "react-bootstrap";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ListRepositories from "./repository/ListRepositories";
import ListTags from "./tag/ListTags";
import ManifestView from "./manifest/ManifestView";
import Header from "./common/Header";
import LoginView from "./authentication/LoginView";
import LogoutView from "./authentication/LogoutView";
import {isLoggedIn} from "./authentication/AuthHelper";

function App() {

    let homeRoute;
    if (isLoggedIn()) {
        homeRoute = <Route exact path="/" element={<ListRepositories/>}/>
    } else {
        homeRoute = <Route exact path="/" element={<LoginView/>}/>
    }

    return (
        <Container>
            <Header/>
            <BrowserRouter>
                <Routes>
                    {homeRoute}
                    <Route path="/login" element={<LoginView/>}/>
                    <Route path="/logout" element={<LogoutView/>}/>
                    <Route path="repositories" element={<ListRepositories/>}/>
                    <Route path="repositories/:repository" element={<ListTags/>}/>
                    <Route path="repositories/:repository/manifests/:tag" element={<ManifestView/>}/>
                </Routes>
            </BrowserRouter>
        </Container>
    );
}

export default App;
