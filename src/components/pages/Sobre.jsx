
import { useRef } from "react";
import ProgressBar from "../ui/ProgressBar/ProgressBar";
import foto from './../../static/img/foto.jpg';
import useAnimation from "../../hooks/useAnimation";

export default function Sobre() {

    const imgRef = useRef()
    const sobreRef = useRef()
    const skillRef = useRef()

    const imgAnime = useAnimation(imgRef, { type: 'fadeInLeft', velocity: 'fast', loop: 'repeat-1' })
    const sobreAnime = useAnimation(sobreRef, { type: 'fadeIn', velocity: 'slow', loop: 'repeat-1' })
    const skillAnime = useAnimation(skillRef, { type: 'fadeInUp', velocity: 'fast', loop: 'repeat-1' })

    return (
        <section className="section" id="sobre">
            <div className="row d-flex mb-5">
                <div className="col-sm-12 col-md-6">
                    <img ref={imgRef} src={foto} alt="foto" className={`w-100 img-fluid img-thumbnail`} />
                </div>
                <div className={`col-sm-12 col-md-6`}>
                    <h3 className="my-3">Sobre mim</h3>
                    <p ref={sobreRef}>
                        Olá! seja bem-vindo(a) ao meu portfolio.
                        <br />
                        Sou apaixonado por criar experiências online que cativam, envolvem e inspiram. Com um foco na estética, usabilidade e funcionalidade, mergulho de cabeça em cada projeto para trazer à vida ideias inovadoras e soluções sob medida.
                        <br />
                        Formado em Análise e Desenvolvimento de Sistemas.
                        <br />
                        Atuo desde 2010 na aréa de Tecnologia da Informação
                        <br />
                        Tenho experiências com desenvolvimento de sistemas de pequeno a grande porte.
                    </p>
                    <br />
                    <strong>Minhas principais skills são:</strong>
                </div>
            </div >
            <div className={`row d-flex`}>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <h5 className="mt-4" ref={skillRef}>Linguagens de Programação</h5>
                    <ProgressBar itemName="CSS" perc="90" cor="bg-info" />
                    <ProgressBar itemName="JavaScript" perc="75" cor="bg-success" />
                    <ProgressBar itemName="PHP" perc="90" cor="bg-primary" />
                    <ProgressBar itemName="JAVA Web" perc="50" cor="bg-danger" />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <h5 className="mt-4" ref={skillRef}>Frameworks</h5>
                    <ProgressBar itemName="Bootstrap" perc="90" cor="bg-info" />
                    <ProgressBar itemName="ReactJS" perc="90" cor="bg-success" />
                    <ProgressBar itemName="Laravel" perc="75" cor="bg-primary" />
                    <ProgressBar itemName="SpringBoot" perc="50" cor="bg-danger" />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <h5 className="mt-4" ref={skillRef}>Banco de Dados</h5>
                    <ProgressBar itemName="SQL Server" perc="60" cor="bg-warning" />
                    <ProgressBar itemName="MondoDB" perc="45" cor="bg-success" />
                    <ProgressBar itemName="MySQL" perc="75" cor="bg-primary" />
                    <ProgressBar itemName="PostgreSQL" perc="75" cor="bg-danger" />
                </div>
            </div>
        </section >
    )
}