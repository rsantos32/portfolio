
import ProgressBar from "../ui/progressBar/ProgressBar";

export default function Sobre() {
    return (
        <section className="section">
            <div className="row d-flex mb-3">
                <div className="col-sm-12 col-md-6">
                    <img src="https://placehold.co/320x300" alt="foto" className="w-100 img-fluid img-thumbnail rounded-circle" />
                </div>
                <div className="col-sm-12 col-md-6">
                    <h3 className="my-3">Sobre mim</h3>

                    <p>Olá! seja bem-vindo(a) ao meu portfolio.</p>
                    <p>Sou apaixonado por criar experiências online que cativam, envolvem e inspiram. Com um foco na estética, usabilidade e funcionalidade, mergulho de cabeça em cada projeto para trazer à vida ideias inovadoras e soluções sob medida.</p>
                    <p>Formado em Análise e Desenvolvimento de Sistemas.</p>
                    <p>Atuo desde 2010 na aréa de Tecnologia da Informação</p>
                    <p>Tenho experiências com desenvolvimento de sistemas de pequeno a grande porte.</p>
                    <br />
                    <strong>Minhas principais skills são:</strong>
                </div>
            </div>
            <div className="row d-flex">
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <h6 className="mt-4">Linguagens de Programação</h6>
                    <ProgressBar itemName="CSS" perc="90" cor="bg-info" />
                    <ProgressBar itemName="JavaScript" perc="75" cor="bg-success" />
                    <ProgressBar itemName="PHP" perc="90" cor="bg-primary" />
                    <ProgressBar itemName="JAVA" perc="50" cor="bg-danger" />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <h6 className="mt-4">Frameworks</h6>
                    <ProgressBar itemName="Bootstrap" perc="90" cor="bg-info" />
                    <ProgressBar itemName="ReactJS" perc="90" cor="bg-success" />
                    <ProgressBar itemName="Laravel" perc="75" cor="bg-primary" />
                    <ProgressBar itemName="SpringBoot" perc="50" cor="bg-danger" />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <h6 className="mt-4">Banco de Dados</h6>
                    <ProgressBar itemName="" perc="0" cor="" />
                    <ProgressBar itemName="MondoDB" perc="45" cor="bg-success" />
                    <ProgressBar itemName="MySQL" perc="75" cor="bg-primary" />
                    <ProgressBar itemName="PostgreSQL" perc="75" cor="bg-danger" />
                </div>
            </div>
        </section>
    )
}