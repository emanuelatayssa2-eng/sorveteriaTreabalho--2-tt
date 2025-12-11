
import { Funcionario } from "../../../database/tables";
import { redirect } from 'next/navigation';
import "../../css/cadastro.css";


async function insereFuncionario(formData) {
    'use server';
    const dados = {
        email: formData.get('email'),
        nome: formData.get('nome'),
        senha: formData.get('senha'),
        formacao: formData.get('formacao')
    };
    await Funcionario.create(dados);
    redirect ('/funcionario');
}

function TelaNovoFuncionario(){
    return(

        <div>
        <form action = {insereFuncionario}>
            <label htmlFor = "email">Email</label> <br/>
            <input type = "text" name = "email"/><br/>

            <label htmlFor = "nome">Nome</label><br/>
            <input type = "text" name = "nome"/><br/>

            <label htmlFor = "senha">Senha</label><br/>
            <input type = "password" name = "senha"/><br/>

            <label htmlFor = "formacao">Formação</label><br/>
            <input type = "text" name = "formacao"/><br/>

            <button>Cadastrar</button>
        </form>
        
        </div>
    )
}

export default TelaNovoFuncionario;