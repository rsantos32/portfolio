
import { useEffect, useState } from "react";
import ProgressBar from "../ui/progressBar/ProgressBar";
import foto from './../../static/img/foto.jpg';

export default function Sobre() {

    const [imgAnime, setimgAnime] = useState('animate__animated animate__fadeInLeft')
    const [sobreAnime, setsobreAnime] = useState('animate__animated animate__fadeInRight')
    const [skillAnime, setskillAnime] = useState('animate__animated animate__fadeInUp')
    const [sobreDisplay, setsobreDisplay] = useState('')
    const [skillDisplay, setskillDisplay] = useState('')

    useEffect(() => {
        const doc = document.documentElement
        window.addEventListener('scroll', () => {
            let calc = parseInt(100 * doc.scrollTop /(doc.scrollHeight - doc.clientHeight))
            console.log(calc)
            if(calc > 5) {
                setimgAnime('animate__animated animate__fadeInLeft')
                setsobreAnime('animate__animated animate__fadeInRight')
                setsobreDisplay('block')
            } else {
                setsobreDisplay('none')
            }

            if(calc >= 30) {
                setskillAnime('animate__animated animate__fadeInUp animate__slower')
                setskillDisplay('block')
            } else {
                setskillDisplay('none')
            }
        })
    }, [])

    return (
        <section className="section" id="sobre">
            <div className="row d-flex mb-3">
                <div className="col-sm-12 col-md-6">
                    <img src={foto} alt="foto" className={`w-100 img-fluid img-thumbnail ${imgAnime}`} style={{display:sobreDisplay}} />
                </div>
                <div className={`col-sm-12 col-md-6 ${sobreAnime}`} style={{display:sobreDisplay}}>
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
            <div className={`row d-flex ${skillAnime} mt-5`} style={{display:skillDisplay}}>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <h6 className="mt-4">Linguagens de Programação</h6>
                    <ProgressBar itemName="CSS" perc="90" cor="bg-info" />
                    <ProgressBar itemName="JavaScript" perc="75" cor="bg-success" />
                    <ProgressBar itemName="PHP" perc="90" cor="bg-primary" />
                    <ProgressBar itemName="JAVA Web" perc="50" cor="bg-danger" />
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
                    <ProgressBar itemName="SQL Server" perc="60" cor="bg-warning" />
                    <ProgressBar itemName="MondoDB" perc="45" cor="bg-success" />
                    <ProgressBar itemName="MySQL" perc="75" cor="bg-primary" />
                    <ProgressBar itemName="PostgreSQL" perc="75" cor="bg-danger" />
                </div>
            </div>
        </section>
    )
}