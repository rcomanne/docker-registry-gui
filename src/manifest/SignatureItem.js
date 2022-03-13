import {ListGroup} from "react-bootstrap";

export default function SignatureItem(props) {
    return (
        <ListGroup.Item variant="dark">
            {props.signature.signature}<br/>
        </ListGroup.Item>
    )
}