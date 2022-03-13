import {Nav, Navbar} from "react-bootstrap";

export default function Header() {
    return(
        <Navbar variant="dark">
            <Navbar.Brand href="/" className="m-2">Docker Registry GUI</Navbar.Brand>
            <Nav className="m-2">
                <Nav.Link href="/repositories">Repositories</Nav.Link>
            </Nav>
        </Navbar>
    )
}