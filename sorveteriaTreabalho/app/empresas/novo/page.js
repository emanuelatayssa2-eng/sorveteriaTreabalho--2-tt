import { Empresas } from "../../../database/tables";
import { redirect } from 'next/navigation';
import "../../css/cadastro.css";



async function insereEmpresa(formData) {
    'use server';
    const dados = {
        email: formData.get('email'),
        nome: formData.get('nome'),
        senha: formData.get('senha'),
        ramo_atividade: formData.get('ramo_atividade')
    };
    await Empresas.create(dados);
    redirect ('/empresas');
}

function TelaNovaEmpresa(){
    return(
        <div>
        <form action = {insereEmpresa}>
            <label htmlFor = "email">Email</label> <br/>
            <input type = "text" name = "email"/><br/>

            <label htmlFor = "nome">Razão Social</label><br/>
            <input type = "text" name = "nome"/><br/>

            <label htmlFor = "senha">Senha</label><br/>
            <input type = "password" name = "senha"/><br/>

            <label htmlFor = "ramo_atividade">Ramo de Atividade</label><br/>
            <input type = "text" name = "ramo_atividade"/><br/>

            <button>Cadastrar</button>
        </form>
        </div>
    )
}

export default TelaNovaEmpresa;