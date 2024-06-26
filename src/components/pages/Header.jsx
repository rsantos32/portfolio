import { useRef } from 'react'
import Bg from './../../static/img/bg.jpg'
import useAnimation from '../../hooks/useAnimation'

export default function Header() {

    const h1Ref = useRef()
    const h2Ref = useRef()

    const h1Anime = useAnimation(h1Ref, {type: 'fadeInDown', velocity: 'fast', loop: 'repeat-1'})
    const h2Anime = useAnimation(h2Ref, {type: 'fadeInUp', velocity: 'fast', loop: 'repeat-1'})


    return (
        <header className="header" id="home" style={{backgroundImage: `url(${Bg})`}}>
            <div className="container container-header">
                <h1 ref={h1Ref} className={`mb-5`}>Bem-vindo(a) ao meu universo digital!</h1>
                <br />
                <h2 ref={h2Ref} className=''>Com um foco na estética, usabilidade e funcionalidade, mergulho de cabeça em cada projeto para trazer à vida ideias inovadoras e soluções sob medida.</h2>
            </div>
        </header>
    )
}