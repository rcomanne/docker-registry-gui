import {useState} from "react";
import {Button, Form} from "react-bootstrap";
import {login} from "../client/DockerClient";

export default function LoginView() {

    const [loginForm, setLoginForm] = useState({
        address: '',
        username: '',
        password: ''
    })

    function handleChange(event) {
        setLoginForm((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    function handleSubmit(event) {
        event.preventDefault();

        login(loginForm.address, loginForm.username, loginForm.password)
            .then(() => window.location.href = "/repositories")
            .catch()
    }

    return (
        <Form>
            <Form.Group className="my-2" onChange={handleChange}>
                <Form.Label>Registry address</Form.Label>
                <Form.Control type="text" name="address" placeholder="Registry URL ..."/>
            </Form.Group>
            <Form.Group className="my-2" onChange={handleChange}>
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" name="username" placeholder="Username ..."/>
            </Form.Group>
            <Form.Group className="my-2" onChange={handleChange}>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password ..."/>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleSubmit}>Login</Button>
        </Form>
    )

}