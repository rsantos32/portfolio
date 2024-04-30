export default function Navbar() {
    return (
        <nav id="navbar-menu" className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <a href="" className="navbar-brand">Rodrigo Santos</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="menu">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a href="#home" className="nav-link">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#sobre" className="nav-link">Sobre</a>
                        </li>
                        <li className="nav-item">
                            <a href="#servicos" className="nav-link">Serviços</a>
                        </li>
                        <li className="nav-item">
                            <a href="#contato" className="nav-link">Contato</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}