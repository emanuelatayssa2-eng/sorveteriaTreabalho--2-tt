import { Fornecedor } from "../../../database/tables";
import { redirect } from 'next/navigation';
import "../../css/cadastro.css";

async function insereFornecedor(formData) {
    'use server';
    const dados = {
        email: formData.get('email'),
        nome: formData.get('nome'),
        senha: formData.get('senha'),
        razao_social: formData.get('razao_social')
    };
    await Fornecedor.create(dados);
    redirect ('/fornecedor');
}

function TelaNovoFornecedor(){
    return(
        <div>
        <form action = {insereFornecedor}>
            <label htmlFor = "email">Email</label> <br/>
            <input type = "text" name = "email"/><br/>

            <label htmlFor = "nome">Nome</label><br/>
            <input type = "text" name = "nome"/><br/>

            <label htmlFor = "senha">Senha</label><br/>
            <input type = "password" name = "senha"/><br/>

            <label htmlFor = "razao_social">Tipo</label><br/>
            <input type = "text" name = "razao_social"/><br/>

            <button>Cadastrar</button>
        </form>
        </div>
    )
}

export default TelaNovoFornecedor;