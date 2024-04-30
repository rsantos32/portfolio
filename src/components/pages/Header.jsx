import { useEffect, useState } from "react"

export default function Header() {

    const [h1Anime, seth1Anime] = useState('animate__animated animate__fadeInDown animate__slow')
    const [h2Anime, seth2Anime] = useState('animate__animated animate__fadeInUp animate__slow')

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY === 0 || window.scrollY < 700) {
                seth1Anime('animate__animated animate__fadeInDown animate__slow')
                seth2Anime('animate__animated animate__fadeInUp animate__slow')
            } else {
                seth1Anime('')
                seth2Anime('')
            }
        })
    }, [])

    return (
        <header className="header" id="home">
            <div className="container">
                <h1 className={`text-right mb-5 ${h1Anime}`}>Bem-vindo(a) ao meu universo digital!</h1>
                <br />
                <h2 className={h2Anime}>Com um foco na estética, usabilidade e funcionalidade, mergulho de cabeça em cada projeto para trazer à vida ideias inovadoras e soluções sob medida.</h2>
            </div>
        </header>
    )
}