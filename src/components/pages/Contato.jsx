import Form from "../ui/Form/Form";

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
                    <Form />
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