import {useEffect, useState} from "react";
import {Col, ListGroup} from "react-bootstrap";

export default function FsLayer(props) {
    return (
        <ListGroup.Item>
            {props.fsLayer.blobSum}
        </ListGroup.Item>
    )
}