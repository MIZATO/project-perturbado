import React, { Component} from "react";
import Main from "../template/Main";

const headerProps = {
    icon: 'calculator',
    title: 'Fechamento de caixa',
    subtitle: 'Fechamento de caixa: Incluir, Listar, Alterar e  Excluir'
}

export default class BoxClosingCrud extends Component {
    render(){
        return (
            <Main {...headerProps}>
                Fechamento do Caixa
            </Main>
        )
    }
}