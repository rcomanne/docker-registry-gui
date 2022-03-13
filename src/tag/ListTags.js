import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Container, ListGroup, Row} from "react-bootstrap";
import {listTags} from "../client/DockerClient";
import TagListItem from "./TagListItem";

export default function ListTags() {
    let params = useParams();
    const [tags, setTags] = useState([]);

    useEffect(() => {
        listTags(params.repository).then(response => {
            setTags(response.tags.sort())
        })
    }, [params.repository]);

    return (
        <Container>
            <Row className="my-2">
                <h1>{params.repository}</h1>
            </Row>
            <Row  className="my-2">
                <ListGroup>
                    {tags.map((tag) => <TagListItem key={tag} repository={params.repository} tag={tag}/>)}
                </ListGroup>
            </Row>
        </Container>
    )
}