import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Container, Row, Table} from "react-bootstrap";
import {getBlob, getDigest} from "../client/DockerClient";

export default function ManifestView() {
    let params = useParams();

    const [blob, setBlob] = useState({
        architecture: '',
        container_config: {
            Hostname: '',
            User: '',
            Env: [],
            Cmd: [],
            Image: '',
            Volumes: [],
            WorkingDir: '',
            Entrypoint: [],
            Labels: {}
        }
    })

    const regex = /^https?:\/\//;
    const registryName = window.sessionStorage.getItem('address').replace(regex, "");

    useEffect(() => {
        // Resolve the digest of the tag first
        getDigest(params.repository, params.tag)
            .then(digest => {
                getBlob(params.repository, digest)
                    .then(response => {
                        setBlob({...blob, ...response})
                    });
            });


    }, [params.repository, params.tag])


    return (
        <Container>
            <Row className="my-2">
                <h1>{params.repository}:{params.tag}</h1>
            </Row>
            <Row className="my-2">
                <code>docker
                    pull {registryName}/{params.repository}:{params.tag}</code>
                <br/>
                <code>docker
                    pull {registryName}/{params.repository}:{blob.container_config.Image}</code>
            </Row>
            <Row className="my-2">
                <p>Architecture: {blob.architecture}</p>
            </Row>
            <Row>
                <h3>Container Configuration</h3>
                <Table striped bordered variant="dark">
                    <thead>
                    <tr key="container_configuration">
                        <th>Property</th>
                        <th>Value</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr key="user">
                        <td>User</td>
                        <td>{blob.container_config.User}</td>
                    </tr>
                    <tr key="workingdir">
                        <td>WorkingDir</td>
                        <td>{blob.container_config.WorkingDir}</td>
                    </tr>
                    </tbody>
                </Table>
            </Row>

            <Row>
                <h3>Environment configuration</h3>
                <Table striped bordered variant="dark">
                    <thead>
                    <tr key="env">
                        <th>Key</th>
                        <th>Value</th>
                    </tr>
                    </thead>
                    <tbody>
                    {blob.container_config.Env.map(env => {
                        return (
                            // TODO: Separate keys and values on =
                            <tr key={env}>
                                <td>{env.split('=')[0]}</td>
                                <td>{env.split('=')[1]}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </Table>
            </Row>
            <Row>
                <Table striped bordered variant="dark">
                    <thead>
                    <tr key="cmd">
                        <th>Cmd</th>
                    </tr>
                    </thead>
                    <tbody>
                    {blob.container_config.Cmd.map(cmd => {
                        return (
                            <tr key={cmd}>
                                <td>{cmd}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </Table>
            </Row>
            <Row>
                <Table striped bordered variant="dark">
                    <thead>
                    <tr key="entrypoint">
                        <th>Entrypoint</th>
                    </tr>
                    </thead>
                    <tbody>
                    {blob.container_config.Entrypoint.map(entrypoint => {
                        return (
                            <tr key={entrypoint}>
                                <td>{entrypoint}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </Table>
            </Row>
            <Row>
                <Table striped bordered variant="dark">
                    <thead>
                    <tr>
                        <th>Labels</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/*TODO: Loop over labels as map*/}
                    </tbody>
                </Table>
            </Row>
        </Container>
    )
}