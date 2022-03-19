import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Col, Container, Form, ListGroup, Row} from "react-bootstrap";
import {listTags} from "../client/DockerClient";
import TagListItem from "./TagListItem";
import {isLoggedIn} from "../authentication/AuthHelper";

export default function ListTags() {
    let params = useParams();
    const [search, setSearch] = useState('');
    const [tags, setTags] = useState([]);
    const [filteredTags, setFilteredTags] = useState([]);

    useEffect(() => {
        if (isLoggedIn()) {
            listTags(params.repository).then(response => {
                setTags(response.tags)
                setFilteredTags(response.tags)
            })
        } else {
            window.location.href = '/login';
        }
    }, [params.repository]);

    useEffect(() => {
        let results = tags.filter(r => {
            return r.toLowerCase().includes(search.toLowerCase());
        });
        const collator = new Intl.Collator([], {numeric: true});
        setFilteredTags(results.sort((a, b) => collator.compare(a, b)));

    }, [tags, search])

    function handleChange(event) {
        setSearch(event.target.value);
    }

    return (
        <Container>
            <Row className="my-2">
                <Col>
                    <h1>{params.repository}</h1>
                </Col>
                <Col>
                    <Form>
                        <Form.Text muted>Search for any tag</Form.Text>
                        <Form.Control type="text" name="search" onChange={handleChange}/>
                    </Form>
                </Col>
            </Row>
            <Row  className="my-2">
                <ListGroup>
                    {filteredTags.map((tag) => <TagListItem key={tag} repository={params.repository} tag={tag}/>)}
                </ListGroup>
            </Row>
        </Container>
    )
}