import Form from "../ui/Form/Form";

export default function Conato() {
    return (
        <section className="section" id="contato">
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
                        <a target="_blank" href="https://api.whatsapp.com/send?phone=5571997230468&text=Ol%C3%A1!%20Poderia%20me%20ajudar%20com%20uma%20d%C3%BAvida%3F" className="btn btn-success mx-3"><i className="bi bi-whatsapp"></i> Whatsapp</a>
                        <a target="_blank" href="https://www.linkedin.com/in/rodrigo-santos-385463297/" className="btn btn-info mx-3"><i className="bi bi-linkedin"></i> LinkedIn</a>
                        <a target="_blank" href="https://github.com/rsantos32" className="btn btn-secondary mx-3"><i className="bi bi-github"></i> Github</a>
                    </div>
                </div>
            </div>
        </section>
    )
}