import { createContext } from "react"

export const stateInitial = {
    servicos: [
        {
            id: 'design',
            titulo: 'Design Responsivo e Intuitivo',
            descricao: 'Garanto que a experiência do usuário seja consistente e perfeita, independentemente do dispositivo que estão utilizando.',
            thumb: 'https://placehold.co/100x80'
        },
        {
            id: 'desenvolvimento',
            titulo: 'Tecnologia de Ponta',
            descricao: 'Mantenho-me atualizado com as tecnologias mais seguras e robustas do mercado de desenvolvimento web.',
            thumb: 'https://placehold.co/100x80'
        },
        {
            id: 'performance',
            titulo: 'Performance Otimizada',
            descricao: 'Utilizo práticas de otimização de desempenho para garantir que cada site carregue rapidamente e ofereça uma experiência fluida de navegação.',
            thumb: 'https://placehold.co/100x80'
        },
        {
            id: 'consultoria',
            titulo: 'Consultoria',
            descricao: 'Implemento soluções customizadas e estratégias de negócios junto a sua equipe de desenvolvimento.',
            thumb: 'https://placehold.co/100x80'
        },
    ]
}

export const StoreContext = createContext(stateInitial);