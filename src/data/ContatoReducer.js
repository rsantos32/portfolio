export function ContatoReducer(state, action) {
    switch (action.type) {
        case 'CHANGE_FORM':{
            return {
                ...state,
                contato: {
                    ...state.contato,
                    ...action.value
                }
            }
        }
        default:
            return state
    }
}