export default function Conato() {
    return (
        <section className="section">
            <div className="row d-flex">
                <div className="col-md-12">
                    <h3 className="py-3 text-right">Contato</h3>
                    <p>Estou ansioso para discutir suas necessidades de desenvolvimento web e como posso ajudar a alcançar seus objetivos online. Entre em contato comigo hoje mesmo para iniciar essa jornada emocionante!</p>
                </div>
            </div>
            <div className="row d-flex">
                <div className="col-sm-12 col-md-6">
                    <div className="alert alert-info">
                        <strong>Os campos com * são obrigatórios</strong>
                    </div>
                    <form action="" noValidate>
                        <div className="form-group">
                            <label htmlFor="nome">Nome*</label>
                            <input type="text" className="form-control" name="nome" id="nome" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email*</label>
                            <input type="text" className="form-control" name="email" id="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="telefone">Telefone*</label>
                            <input type="text" className="form-control" name="telefone" id="telefone" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="assunto">Assunto*</label>
                            <select className="form-control" name="assunto" id="assunto" required>
                                <option value="">Selecione</option>                                
                                <option value="">Orçamento</option>
                                <option value="">Parceria</option>
                                <option value="">Consultoria</option>
                                <option value="">Serviços</option>
                                <option value="">Outros</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="msg">Mensagem*</label>
                            <textarea rows={3} className="form-control" name="msg" id="msg" />
                        </div>
                        <div className="form-group float-right">
                            <button disabled={true} type="button" className="btn btn-lg btn-success"><i className="bi bi-send"></i> Enviar</button>
                        </div>
                    </form>
                </div>
                <div className="col-sm-12 col-md-6">
                    <div className="btn-group">
                        <a href="" className="btn btn-success mx-3"><i className="bi bi-whatsapp"></i> Whatsapp</a>
                        <a href="" className="btn btn-info mx-3"><i className="bi bi-linkedin"></i> LinkedIn</a>
                        <a href="" className="btn btn-secondary mx-3"><i className="bi bi-github"></i> Github</a>
                    </div>
                </div>
            </div>
        </section>
    )
}