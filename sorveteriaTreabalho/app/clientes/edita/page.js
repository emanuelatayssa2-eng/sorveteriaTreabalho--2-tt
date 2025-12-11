import {Clientes} from '../../../database/tables';
import {redirect} from 'next/navigation';
import "../../css/cadastro.css";


async function editaClientes(formData) {

    'use server';

    const id = formData.get('id');
    const email = formData.get('email');
    const nome = formData.get('nome');
    const senha = formData.get('senha');
    const cpf = formData.get('cpf');

    const clientes = await Clientes.findByPk(id);
    clientes.email = email;
    clientes.nome = nome;
    clientes.senha = senha;
    clientes.cpf = cpf;

    await clientes.save();

    redirect('/clientes')

}

async function TelaEditaClientes({searchParams}) {
    const id = searchParams.id;
    const clientes = await Clientes.findByPk(id)
    return(
        <div>
            <h1> Editando o Cliente</h1>

            <form action = {editaClientes}>
                <input type="hidden" name = "id" defaultValue = {clientes.id}></input>

            <label htmlFor = "email">Email</label> <br/>
            <input type = "text" name = "email" defaultValue = {clientes.email} /><br/>

            <label htmlFor = "nome">Nome</label><br/>
            <input type = "text" name = "nome" defaultValue = {clientes.nome} /><br/>

            <label htmlFor = "senha">Senha</label><br/>
            <input type = "text" name = "senha" defaultValue = {clientes.senha} /><br/>

            <label htmlFor = "cpf">CPF</label><br/>
            <input type = "text" name = "cpf" defaultValue = {clientes.cpf} /><br/>

            <button>Salvar</button>
        </form>
        </div>
    );
}
export default TelaEditaClientes;