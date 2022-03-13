import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Container, ListGroup} from "react-bootstrap";
import {listTags} from "../DockerClient";

export default function ListTags() {
    let params = useParams();
    const [tags, setTags] = useState([]);

    useEffect(() => {
        listTags(params.name).then(response => {
            console.log(response);
            setTags(response.tags)
        })
    }, [params.name]);

    return(
        <Container>
            <ListGroup variant="flush">
                {tags.map((tag) => console.log(tag))}
            </ListGroup>

        </Container>
    )
}