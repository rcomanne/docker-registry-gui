import {useEffect, useState} from "react";
import {Col, ListGroup} from "react-bootstrap";

export default function FsLayerItem(props) {
    return (
        <ListGroup.Item variant="dark">
            {props.fsLayer.blobSum}
        </ListGroup.Item>
    )
}