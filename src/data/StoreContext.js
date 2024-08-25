import { createContext } from "react"
import ImgDesgin from './../static/img/design.png'
import ImgTech from './../static/img/tech.png'
import ImgSeo from './../static/img/seo.png'
import ImgConsul from './../static/img/consulting.png'

export const stateInitial = {
    servicos: [
        {
            id: 'design',
            titulo: 'Desenvolvimento',
            descricao: 'Experiência e Usabilidade consistente. Tecnologias mais seguras e robustas do mercado. Utilizo práticas de otimização de desempenho. Implemento soluções customizadas.',
            thumb: ImgDesgin
        },
        {
            id: 'consultoria',
            titulo: 'Consultoria',
            descricao: 'Suporte aos usuários. Instalação e configuração de softwares equipamentos de Informatica. Administração de sistemas. Atendimento por demanda.',
            thumb: ImgConsul
        },
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