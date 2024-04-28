export default function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <a href="" className="navbar navbar-brand">Rodrigo Santos</a>
                <div className="navbar-collapse" id="menu">
                    <ul className="navbar-nav ml-auto">
                        <li className="navbar-item">
                            <a href="#home" className="navbar-link">Home</a>
                        </li>
                        <li className="navbar-item">
                            <a href="#sobre" className="navbar-link">Sobre</a>
                        </li>
                        <li className="navbar-item">
                            <a href="#servicos" className="navbar-link">Serviços</a>
                        </li>
                        <li className="navbar-item">
                            <a href="#contato" className="navbar-link">Contato</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}