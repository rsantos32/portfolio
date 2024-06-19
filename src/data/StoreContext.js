import { createContext } from "react"
import ImgDesgin from './../static/img/design.png'
import ImgTech from './../static/img/tech.png'
import ImgSeo from './../static/img/seo.png'
import ImgConsul from './../static/img/consulting.png'

export const stateInitial = {
    servicos: [
        {
            id: 'design',
            titulo: 'Design Responsivo e Intuitivo',
            descricao: 'Garanto que a experiência do usuário seja consistente e perfeita, independentemente do dispositivo que estão utilizando.',
            thumb: ImgDesgin
        },
        {
            id: 'desenvolvimento',
            titulo: 'Tecnologia de Ponta',
            descricao: 'Mantenho-me atualizado com as tecnologias mais seguras e robustas do mercado de desenvolvimento web.',
            thumb: ImgTech
        },
        {
            id: 'performance',
            titulo: 'Performance Otimizada',
            descricao: 'Utilizo práticas de otimização de desempenho para garantir que cada site carregue rapidamente e ofereça uma experiência fluida de navegação.',
            thumb: ImgSeo
        },
        /*{
            id: 'consultoria',
            titulo: 'Consultoria',
            descricao: 'Implemento soluções customizadas e estratégias de negócios junto a sua equipe de desenvolvimento.',
            thumb: ImgConsul
        },*/
    ],
    contato: {
        nome: '',
        email: '',
        telefone: '',
        assunto: '',
        mensagem: ''
    }
}

export const StoreContext = createContext(stateInitial);