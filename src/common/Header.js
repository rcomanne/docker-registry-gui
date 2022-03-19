import {Nav, Navbar} from "react-bootstrap";
import {isLoggedIn} from "../authentication/AuthHelper";

export default function Header() {

    let logLink;
    if (isLoggedIn()) {
        logLink = <Nav.Link href="/logout" className="ml-auto">Logout</Nav.Link>
    } else {
        logLink = <Nav.Link href="/login" className="ml-auto">Login</Nav.Link>
    }

    return (
        <Navbar variant="dark">
            <Navbar.Brand href="/" className="m-2">Docker Registry GUI</Navbar.Brand>
            <Nav className="m-2 container-fluid">
                <Nav.Link href="/repositories">Repositories</Nav.Link>
                {logLink}
            </Nav>
        </Navbar>
    )
}