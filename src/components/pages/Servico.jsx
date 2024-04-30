import { useContext } from "react"
import { StoreContext } from "../../data/StoreContext"

export default function Servico() {

    const [store] = useContext(StoreContext);

    return (
        <section className="section" id="servicos">
            <div className="row d-flex mb-5">
                <div className="col-sm-12">
                    <h3 className="py-3">Serviços</h3>
                    <p>Estou aqui para transformar suas ideias em realidade digital. Se você está procurando criar um novo site, redesenhar uma experiência existente ou precisa de suporte contínuo de desenvolvimento web, estou pronto para colaborar e trazer sua visão à vida.</p>
                </div>
            </div>
            <div className="row d-flex">
                {store.servicos.map((s) => {
                    return <div key={s.id} className="col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-3">
                        <div className="card" style={{ border: 'none', textAlign: 'center' }}>
                            <center>
                                <img style={{ width: '128px' }} className="card-img-top" src={s.thumb} alt={s.id} />
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