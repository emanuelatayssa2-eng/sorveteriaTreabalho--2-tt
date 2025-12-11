import { Clientes } from "../../../database/tables";
import { redirect } from 'next/navigation';
import "../../css/cadastro.css";

async function insereClientes(formData) {
    'use server';
    const dados = {
        email: formData.get('email'),
        nome: formData.get('nome'),
        senha: formData.get('senha'),
        cpf: formData.get('cpf')
    };
    await Clientes.create(dados);
    redirect ('/clientes');
}

function TelaNovoClientes(){
    return(
        <div>
        <h1> Editando o Cliente</h1>

        <form action = {insereClientes}>
            {/* <input type="hidden" name = "id" defaultValue = {clientes.id}></input> */}
            <label htmlFor = "email">Email</label> <br/>
        <input type = "text" name = "email"/><br/>

        <label htmlFor = "nome">Nome</label><br/>
        <input type = "text" name = "nome"/><br/>

        <label htmlFor = "senha">Senha</label><br/>
        <input type = "password" name = "senha"/><br/>

        <label htmlFor = "cpf">Cpf</label><br/>
        <input type = "text" name = "cpf"/><br/>


        <button className ='bt-classico'>Salvar</button>
    </form>
    </div>
    )
}

export default TelaNovoClientes;