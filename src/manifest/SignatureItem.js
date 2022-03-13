import {ListGroup} from "react-bootstrap";

export default function Signature(props) {
    return (
        <ListGroup.Item>
            {props.signature.signature}<br/>
        </ListGroup.Item>
    )
}