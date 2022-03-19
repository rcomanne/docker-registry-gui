import {useEffect, useState} from "react";
import {Col, Container, Form, ListGroup, Row} from "react-bootstrap";
import RepositoryListItem from "./RepositoryListItem";
import {listRepositories} from "../client/DockerClient";
import {isLoggedIn} from "../authentication/AuthHelper";


export default function ListRepositories() {
    const [repositories, setRepositories] = useState([]);
    const [filteredRepositories, setFilteredRepositories] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        if (isLoggedIn()) {
            listRepositories().then(response => {
                setRepositories(response.repositories);
                setFilteredRepositories(response.repositories);
            })
        } else {
            window.location.href = '/login';
        }

    }, []);

    useEffect(() => {
        let results = repositories.filter(r => {
            return r.toLowerCase().includes(search.toLowerCase());
        });
        setFilteredRepositories(results);

    }, [repositories, search])

    function handleChange(event) {
        setSearch(event.target.value);
    }

    return (
        <Container>
            <Row className="my-2">
                <Col>
                    <h1>Repositories</h1>
                </Col>
                <Col>
                    <Form>
                        <Form.Text muted>Search for any repository</Form.Text>
                        <Form.Control type="text" name="search" onChange={handleChange}/>
                    </Form>
                </Col>
            </Row>
            <Row className="my-2">
                <Col>
                    <ListGroup>
                        {filteredRepositories.map((repository) => <RepositoryListItem key={repository} repository={repository}/>)}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    )
}