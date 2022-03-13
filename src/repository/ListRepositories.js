import {useEffect, useState} from "react";
import {Col, Container, ListGroup, Row} from "react-bootstrap";
import RepositoryListItem from "./RepositoryListItem";
import {listRepositories} from "../client/DockerClient";


export default function ListRepositories() {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        listRepositories().then(response => {
            setRepositories(response.repositories.sort());
        })
    }, []);

    return (
        <Container>
            <Row className="my-2">
                <Col>
                    <h1>Repositories</h1>
                </Col>
            </Row>
            <Row className="my-2">
                <Col>
                    <ListGroup>
                        {repositories.map((repository) => <RepositoryListItem key={repository} repository={repository}/>)}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    )
}