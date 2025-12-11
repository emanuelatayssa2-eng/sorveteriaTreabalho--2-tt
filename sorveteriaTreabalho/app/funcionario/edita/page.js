import {Funcionario} from '../../../database/tables';
import {redirect} from 'next/navigation';
import "../../css/cadastro.css";


async function editaFuncionario(formData) {

    'use server';

    const id = formData.get('id');
    const email = formData.get('email');
    const nome = formData.get('nome');
    const senha = formData.get('senha');
    const formacao = formData.get('formacao');

    const funcionario = await Funcionario.findByPk(id);
    funcionario.email = email;
    funcionario.nome = nome;
    funcionario.senha = senha;
    funcionario.formacao = formacao;

    await funcionario.save();

    redirect('/funcionario')

}

async function TelaEditaFuncionario({searchParams}) {
    const id = searchParams.id;
    const funcionario = await Funcionario.findByPk(id)
    return(
        <div>
            <h1> Editando o funcionario</h1>

            <form action = {editaFuncionario}>
                <input type="hidden" name = "id" defaultValue = {funcionario.id}></input>

            <label htmlFor = "email">Email</label> <br/>
            <input type = "text" name = "email" defaultValue = {funcionario.email} /><br/>

            <label htmlFor = "nome">Nome</label><br/>
            <input type = "text" name = "nome" defaultValue = {funcionario.nome} /><br/>

            <label htmlFor = "senha">Senha</label><br/>
            <input type = "text" name = "senha" defaultValue = {funcionario.senha} /><br/>

            <label htmlFor = "formacao">Formação</label><br/>
            <input type = "text" name = "formacao" defaultValue = {funcionario.formacao} /><br/>

            <button>Salvar</button>
        </form>
        </div>
    );
}
export default TelaEditaFuncionario;