import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Appbar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" data-bs-theme="light" fixed="top">
            <Container>
                <Navbar.Brand href="#home">Rodrigo Santos</Navbar.Brand>
                <Navbar.Toggle aria-controls="app-menu" />
                <Navbar.Collapse id="app-menu">
                    <Nav className="ml-auto" navbarScroll>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#sobre">Sobre</Nav.Link>
                        <Nav.Link href="#servicos">Serviços</Nav.Link>
                        <Nav.Link href="#contato">Contato</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}