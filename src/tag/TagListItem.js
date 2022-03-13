import {ListGroup} from "react-bootstrap";

export default function TagListItem(props) {

    return(
        <ListGroup.Item action href={`/repositories/${props.repository}/manifests/${props.tag}`} className="my-1" variant="dark">
            {props.tag}
        </ListGroup.Item>
    )
}