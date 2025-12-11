import { Produto } from "../../../database/tables";
import { redirect } from 'next/navigation';
import "../../css/cadastro.css";

async function insereProduto(formData) {
    'use server';
    const dados = {
        nome: formData.get('nome'),
        descricao: formData.get('descricao'),
        preco: formData.get('preco'),
        data_validade: formData.get('data_validade')
    };

    await Produto.create(dados);
    redirect ('/produto');
}

function TelaNovaProduto(){
    return(
        <div>
        <form action = {insereProduto}>
            <label htmlFor = "nome">Nome</label> <br/>
            <input type = "text" name = "nome"/><br/>

            <label htmlFor = "descricao">Descrição do produto</label><br/>
            <input type = "text" name = "descricao"/><br/>

            <label htmlFor = "preco">Preço</label><br/>
            <input type = "text" name = "preco"/><br/>

            <label htmlFor = "data_validade">Data de validade</label><br/>
            <input type = "date" name = "data_validade"/><br/>

            <button>Cadastrar</button>
        </form>
        </div>
    )
}

export default TelaNovaProduto;