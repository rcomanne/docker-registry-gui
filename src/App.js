import './App.css';
import {Container} from "react-bootstrap";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ListRepositories from "./repository/ListRepositories";
import ListTags from "./tag/ListTags";
import ManifestView from "./manifest/ManifestView";
import Header from "./common/Header";

function App() {
    return (
        <Container>
            <Header/>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<ListRepositories/>}/>
                    <Route path="repositories" element={<ListRepositories/>}/>
                    <Route path="repositories/:repository" element={<ListTags/>}/>
                    <Route path="repositories/:repository/manifests/:tag" element={<ManifestView/>}/>
                </Routes>
            </BrowserRouter>
        </Container>
    );
}

export default App;
