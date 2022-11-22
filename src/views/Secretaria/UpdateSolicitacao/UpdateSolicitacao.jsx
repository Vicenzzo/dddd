import Container from "../../../components/Container/Container"
import Header from "../../../components/Header/Header"

import "../../../styles/global.css"

export default function UpdateSolicitacao() {
    return (
        <div className="global">
            <Header type="secretaria" />
            <main>
                <Container title="Editar Solicitação" type="update-solicitacao" section="formulario" />
            </main>
        </div>
    )
}