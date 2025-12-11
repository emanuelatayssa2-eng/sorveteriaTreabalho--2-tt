import {Produto} from '../../../database/tables';
import {redirect} from 'next/navigation';


async function editaProduto(formData) {

    'use server';

    const id = formData.get('id');
    const nome = formData.get('nome');
    const descricao = formData.get('descricao');
    const preco = formData.get('preco');
    const data_validade = formData.get('data_validade');

    const produto = await Produto.findByPk(id);
    produto.nome = nome;
    produto.descricao = descricao;
    produto.preco = preco;
    produto.data_validade = data_validade;

    await produto.save();

    redirect('/produto')

}

async function TelaEditaProduto({searchParams}) {
    const id = searchParams.id;
    const produto = await Produto.findByPk(id)
    return(
        <>
            <h1> Editando o Produto</h1>

            <form action = {editaProduto}>
                <input type="hidden" name = "id" defaultValue = {produto.id}></input>
            <label htmlFor = "nome">Nome</label> <br/>
            <input type = "text" name = "nome" defaultValue = {produto.nome} /><br/>

            <label htmlFor = "descricao">Descrição do produto</label><br/>
            <input type = "text" name = "descricao" defaultValue = {produto.descricao} /><br/>

            <label htmlFor = "preco">Preço</label><br/>
            <input type = "text" name = "preco" defaultValue = {produto.preco} /><br/>

            <label htmlFor = "data_validade">Data de validade</label><br/>
            <input type = "date" name = "data_validade" defaultValue = {produto.data_validade} /><br/>

            <button>Salvar</button>
        </form>
        </>
    );
}
export default TelaEditaProduto;