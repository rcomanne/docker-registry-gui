import {ListGroup} from "react-bootstrap";

export default function RepositoryListItem(props) {

    return(
        <ListGroup.Item action href={`/repositories/${props.repository}`} className="my-1" variant="dark">
            {props.repository}
        </ListGroup.Item>
    )
}