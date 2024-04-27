import { useReducer, useState } from "react"
import { ContatoReducer } from "../../../data/ContatoReducer"
import { stateInitial } from '../../../data/StoreContext'

export default function Form() {

    const [store, dispatch] = useReducer(ContatoReducer, stateInitial)
    const [alert, setAlert] = useState('')


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

    function validate() {
        if (store.contato.nome === "" || store.contato.nome === null || store.contato.nome === undefined || store.contato.nome.length > 100) {
            setTimeout(setAlert('O campo nome não esta válido'),3000)
            return false
        } else {
            return true
        }
    }

    function onSend() {
        if (validate()) {
            fetch('http://localhost:8080/rsapi/v1/contato',
                {
                    method: 'POST',
                    data: { ...store.contato }
                })
                .then(res => res.json())
                .then(json => console.log(json))
                .catch(() => {
                    setAlert('Erro de conexão com o servidor. Tente novamente mais tarde')
                })
            setTimeout(() => setAlert(''), 6000)
        }
    }

    return (
        <>
            <form noValidate>
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
                    <label htmlFor="msg">Mensagem*</label>
                    <textarea rows={3} className="form-control" name="mensagem" id="mensagem"
                        value={store.contato.mensagem}
                        onChange={changeInput} />
                </div>
                <div className="alert alert-warning">
                    <strong>{alert ? alert : 'Os campos com * são obrigatórios'}</strong>
                </div>
                <div className="form-group float-right">
                    <button onClick={onSend} type="button" className="btn btn-success"><i className="bi bi-send"></i> Enviar</button>
                </div>
            </form>
        </>

    )
}