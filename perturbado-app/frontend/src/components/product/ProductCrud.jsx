import React, { Component } from "react";
import Main from "../template/Main";
import axios from 'axios'

const headerProps = {
    icon: 'truck',
    title: 'Produtos',
    subtitle: 'Cadastro de Produtos: Incluir, Listar, Alterar e  Excluir'
}

const baseUrl = 'http://localhost:3001/products'
const initialState = {
    product: { name: '', amount: '', price: '', chargedPrice: '' },
    list: []
}

export default class ProductCrud extends Component {

    state = { ...initialState }

    componentWillMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    clear() {
        this.setState({ product: initialState.product })
    }

    save() {
        const product = this.state.product;
        const method = product.id ? 'put' : 'post';
        const url = product.id ? `${baseUrl}/${product.id}` : baseUrl;
        axios[method](url, product)
            .then(resp => {
                const list = this.getUpdatelist(resp.data)
                this.setState({ product: initialState.product, list })
            })
    }

    getUpdatelist(product, add = true) {
        const list = this.state.list.filter(p => p.id !== product.id)
        if (add) list.unshift(product)
        return list
    }

    updateField(event) {
        const product = { ...this.state.product }
        product[event.target.name] = event.target.value
        this.setState({ product })
    }
    renderForm() {
        return (
            <><><><div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className='form-control'
                                name="name"
                                value={this.state.product.name}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o nome do Produto" />
                        </div>
                    </div>
                </div>
            </div><div className="form">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="form-group">
                                <label>Quantidade</label>
                                <input type="number" className='form-control'
                                    name="amount"
                                    value={this.state.product.amount}
                                    onChange={e => this.updateField(e)}
                                    placeholder="Digite a Quantidade do Produto" />
                            </div>
                        </div>
                    </div>
                </div></><div className="form">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="form-group">
                                <label>Preço</label>
                                <input type="number" className='form-control'
                                    name="price"
                                    value={this.state.product.price}
                                    onChange={e => this.updateField(e)}
                                    placeholder="Digite o preço do Produto" />
                            </div>
                        </div>
                    </div>
                </div></><hr /><div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary"
                            onClick={e => this.save(e)}>
                            Salvar
                        </button>

                        <button className="btn btn-secondary ml-2"
                            onClick={e => this.clear(e)}>
                            Cancelar
                        </button>
                    </div>

                </div></>
        )
    }

    load(product) {
        this.setState({ product })
    }

    remove(product) {
        axios.delete(`${baseUrl}/${product.id}`).then(resp => {
            const list = this.getUpdatelist(product, false)
            this.setState({ list })
        })
    }
    renderTable() {
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Nome</th>
                        <th>Quantidade</th>
                        <th>Preco</th>
                        <th>Cobrar</th>
                        <th>Acoes</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRowns()}
                </tbody>
            </table>
        )
    }

    renderRowns() {
        return this.state.list.map(product => {
            return (
                <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.amount}</td>
                    <td>{product.price}</td>
                    <td>{product.chargedPrice = parseFloat(product.price)  + parseFloat(product.price*0.3)}</td>
                    <td>
                        <button className="btn btn-warning"
                            onClick={(e) => this.load(product)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-2"
                            onClick={(e) => this.remove(product)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <Main {...headerProps}>
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        )
    }
}