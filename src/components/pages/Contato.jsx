import { useRef } from "react";
import useAnimation from "../../hooks/useAnimation";
import Form from "../ui/Form/Form";

export default function Conato() {

    const contatoRef = useRef()

    const contatoAnime = useAnimation(contatoRef, { type: 'fadeIn', velocity: 'slow', loop: 'repeat-1' })

    return (
        <section className={`section `} id="contato">
            <div className="row d-flex">
                <div className="col-md-12">
                    <h3 ref={contatoRef} className="py-3 text-right">Contato</h3>
                    <p ref={contatoRef}>Estou ansioso para discutir suas necessidades e poder ajudar a alcançar seus objetivos.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 text-center">
                    <div className="btn-group">
                        <a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send?phone=5571997230468&text=Ol%C3%A1!%20Poderia%20me%20ajudar%20com%20uma%20d%C3%BAvida%3F" className="btn btn-success mx-3"><i className="bi bi-whatsapp"></i> Whatsapp</a>
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/rodrigo-santos-385463297/" className="btn btn-info mx-3"><i className="bi bi-linkedin"></i> LinkedIn</a>
                        <a target="_blank" rel="noreferrer" href="https://github.com/rsantos32" className="btn btn-secondary mx-3"><i className="bi bi-github"></i> Github</a>
                    </div>
                </div>
            </div>
        </section>
    )
}