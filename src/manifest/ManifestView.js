import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Container, ListGroup, Row} from "react-bootstrap";
import {getManifest} from "../client/DockerClient";
import FsLayerItem from "./FsLayerItem";
import SignatureItem from "./SignatureItem";

export default function ManifestView() {
    let params = useParams();

    const [manifest, setManifest] = useState({
        name: '',
        tag: '',
        fsLayers: [],
        history: [],
        signatures: []
    });

    useEffect(() => {
        getManifest(params.repository, params.tag).then(response => {
            setManifest({...manifest, ...response});
            console.log(manifest);
        });
    }, [params.repository, params.tag]);

    return (
        <Container>
            {/*{manifest}*/}
            <Row className="my-2">
                <h1>{manifest.name}:{manifest.tag}</h1>
            </Row>
            <Row className="my-2">
                <code>docker pull {window.Configuration.REGISTRY_URL.replace("https://", "")}/{manifest.name}:{manifest.tag}</code>
            </Row>
            <Row className="my-2">
                <p>Architecture: {manifest.architecture}</p>
            </Row>
            <Row>
                <h2>FS Layers</h2>
                <ListGroup className="my-2">
                    {manifest.fsLayers.map((layer) => <FsLayerItem key={layer.blobSum} fsLayer={layer}/>)}
                </ListGroup>
            </Row>
            <Row>
                <h2>Signatures</h2>
                <ListGroup className="my-2">
                    {manifest.signatures.map((signature) => <SignatureItem key={signature.signature} signature={signature}/>)}
                </ListGroup>
                {/*{manifest.signatures.map((signature) => signature)}*/}
            </Row>
            {

            }
        </Container>
    )
}