import { useReducer, useState } from "react"
import { ContatoReducer } from "../../../data/ContatoReducer"
import { stateInitial } from '../../../data/StoreContext'

export default function Form() {

    const [store, dispatch] = useReducer(ContatoReducer, stateInitial)
    const [alertText, setAlertText] = useState('')
    const [alertType, setAlertType] = useState('info')


    function changeInput(e) {
        switch (e.target.name) {
            case 'nome':
                dispatch({ type: 'CHANGE_FORM', value: { nome: e.target.value } })
                break
            case 'email':
                dispatch({ type: 'CHANGE_FORM', value: { email: e.target.value } })
                break
            case 'telefone':
                dispatch({ type: 'CHANGE_FORM', value: { telefone: e.target.value } })
                break
            case 'assunto':
                dispatch({ type: 'CHANGE_FORM', value: { assunto: e.target.value } })
                break
            case 'mensagem':
                dispatch({ type: 'CHANGE_FORM', value: { mensagem: e.target.value } })
                break
            default:
                break
        }
    }

    function onSend() {
        fetch('http://localhost:8080',
            {
                method: 'POST',
                mode: 'cors',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({ ...store.contato })
            })
            .then(res => res.json())
            .then(json => {
                if (json.msg === 'Sucesso') {
                    setAlertText('Obrigado por entrar em contato comigo! Nos vemos em breve.');
                    setAlertType('success')
                    dispatch({
                        type: 'CHANGE_FORM',
                        value: {
                            nome: '',
                            email: '',
                            telefone: '',
                            assunto: '',
                            mensagem: ''
                        }
                    })
                } else {
                    setAlertText(json.msg === 'Falha' ? '' : json.msg );
                    setAlertType('warning')
                    dispatch({
                        type: 'CHANGE_FORM',
                        value: {
                            nome: '',
                            email: '',
                            telefone: '',
                            assunto: '',
                            mensagem: ''
                        }
                    })
                }
            })
            .catch(() => {
                setAlertText('Erro de conexão com o servidor. Tente novamente mais tarde')
                setAlertType('danger')
            })
        setTimeout(() => {
            setAlertText('')
            setAlertType('info')
        }, 6000)
    }

    return (
        <>
            <form>
                <div className="form-group">
                    <label htmlFor="nome">Nome*</label>
                    <input
                        type="text"
                        className="form-control"
                        name="nome"
                        id="nome"
                        required
                        value={store.contato.nome}
                        onChange={changeInput}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email*</label>
                    <input type="text" className="form-control" name="email" id="email" required
                        value={store.contato.email}
                        onChange={changeInput} />
                </div>
                <div className="form-group">
                    <label htmlFor="telefone">Telefone*</label>
                    <input type="text" className="form-control" name="telefone" id="telefone" required
                        value={store.contato.telefone}
                        onChange={changeInput} />
                </div>
                <div className="form-group">
                    <label htmlFor="assunto">Assunto*</label>
                    <select className="form-control" name="assunto" id="assunto" required onChange={changeInput} value={store.contato.assunto}>
                        <option value="">Selecione</option>
                        <option value="orcamento">Orçamento</option>
                        <option value="parceria">Parceria</option>
                        <option value="consultoria">Consultoria</option>
                        <option value="servicos">Serviços</option>
                        <option value="outros">Outros</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="mensagem">Mensagem*</label>
                    <textarea rows={3} className="form-control" name="mensagem" id="mensagem"
                        value={store.contato.mensagem}
                        onChange={changeInput} />
                </div>
                <div className={`alert alert-${alertType}`}>
                    <strong>{alertText ? alertText : 'Os campos com * são obrigatórios'}</strong>
                </div>
                <div className="form-group float-right">
                    <button onClick={onSend} type="button" className="btn btn-primary"><i className="bi bi-send"></i> Enviar</button>
                </div>
            </form>
        </>

    )
}