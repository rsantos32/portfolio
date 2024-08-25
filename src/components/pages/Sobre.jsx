
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
                        Sou apaixonado por criar experiências online que cativam, envolvem e inspiram.
                        <br /><br />
                        Atuo desde 2013 na aréa de Tecnologia da Informação
                        <br /><br />
                        Formado em Análise e Desenvolvimento de Sistemas.
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
                    <ProgressBar itemName="JAVA SE" perc="50" cor="bg-danger" />
                    <ProgressBar itemName="MySQL" perc="75" cor="bg-primary" />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <h5 className="mt-4" ref={skillRef}>Frameworks</h5>
                    <ProgressBar itemName="Bootstrap" perc="90" cor="bg-info" />
                    <ProgressBar itemName="Laravel" perc="75" cor="bg-primary" />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <h5 className="mt-4" ref={skillRef}>TI - Service Desk</h5>
                    <ProgressBar itemName="Windows Server" perc="75" cor="bg-secondary" />
                    <ProgressBar itemName="Redes TCP/IP" perc="75" cor="bg-secondary" />
                    <ProgressBar itemName="Linux" perc="50" cor="bg-secondary" />
                    <ProgressBar itemName="Virtualização/Containers" perc="80" cor="bg-secondary" />
                    <ProgressBar itemName="Manutenção H/S" perc="90" cor="bg-secondary" />
                </div>
            </div>
        </section >
    )
}