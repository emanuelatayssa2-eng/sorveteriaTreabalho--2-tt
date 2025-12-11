import {Fornecedor} from '../../../database/tables';
import {redirect} from 'next/navigation';



async function editaFornecedor(formData) {

    'use server';

    const id = formData.get('id');
    const email = formData.get('email');
    const nome = formData.get('nome');
    const senha = formData.get('senha');
    const razao_social = formData.get('razao_social');

    const fornecedor = await Fornecedor.findByPk(id);
    fornecedor.email = email;
    fornecedor.nome = nome;
    fornecedor.senha = senha;
    fornecedor.razao_social = razao_social;

    await fornecedor.save();

    redirect('/fornecedor')

}

async function TelaEditaFornecedor({searchParams}) {
    const id = searchParams.id;
    const fornecedor = await Fornecedor.findByPk(id)
    return(
        <div>
            <h1> Editando o fornecedor</h1>

            <form action = {editaFornecedor}>
                <input type="hidden" name = "id" defaultValue = {fornecedor.id}></input>

            <label htmlFor = "email">Email</label> <br/>
            <input type = "text" name = "email" defaultValue = {fornecedor.email} /><br/>

            <label htmlFor = "nome">Nome</label><br/>
            <input type = "text" name = "nome" defaultValue = {fornecedor.nome} /><br/>

            <label htmlFor = "senha">Senha</label><br/>
            <input type = "text" name = "senha" defaultValue = {fornecedor.senha} /><br/>

            <label htmlFor = "razao_social">Razão social</label><br/>
            <input type = "text" name = "razao_social" defaultValue = {fornecedor.razao_social} /><br/>

            <button>Salvar</button>
        </form>
        </div>
    );
}
export default TelaEditaFornecedor;