import { useContext, useRef } from "react"
import { StoreContext } from "../../data/StoreContext"
import useAnimation from "../../hooks/useAnimation";

export default function Servico() {

    const [store] = useContext(StoreContext);

    const servicoRef = useRef()

    const servicoAnime = useAnimation(servicoRef, {type: 'fadeIn', velocity: 'slow', loop: 'repeat-1'})
    
    return (
        <section className={`section `} id="servicos">
            <div className="row d-flex mb-5">
                <div className="col-sm-12">
                    <h3 className="py-3" ref={servicoRef}>Serviços</h3>
                    <p ref={servicoRef}>Estou aqui para transformar suas ideias em realidade digital. Se você está procurando criar um novo produto, redesenhar uma experiência existente ou precisa de suporte contínuo, estou pronto para colaborar e trazer sua visão à vida.</p>
                </div>
            </div>
            <div className="row d-flex">
                {store.servicos.map((s) => {
                    return <div key={s.id} className="col-sm-12 col-md-6 mb-3">
                        <div className="card" style={{ border: 'none', textAlign: 'center' }}>
                            <center>
                                <img style={{ width: '128px' }} className="card-img-top animate__animated animate__pulse animate__infinite" src={s.thumb} alt={s.id} />
                            </center>
                            <div className="card-body">
                                <h5>{s.titulo}</h5>
                                <p className="card-text">{s.descricao}</p>
                            </div>
                        </div>
                    </div>

                })}
            </div>
        </section>
    )
}