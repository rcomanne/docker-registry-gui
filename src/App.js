import './App.css';
import {Container, Nav} from "react-bootstrap";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ListRepositories from "./repository/ListRepositories";
import ListTags from "./tag/ListTags";
import ManifestView from "./manifest/ManifestView";
import Header from "./common/Header";
import LoginView from "./login/LoginView";
import Logout from "./login/Logout";
import {isLoggedIn} from "./login/LoginHelper";

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
                    <Route path="/logout" element={<Logout/>}/>
                    <Route path="repositories" element={<ListRepositories/>}/>
                    <Route path="repositories/:repository" element={<ListTags/>}/>
                    <Route path="repositories/:repository/manifests/:tag" element={<ManifestView/>}/>
                </Routes>
            </BrowserRouter>
        </Container>
    );
}

export default App;
