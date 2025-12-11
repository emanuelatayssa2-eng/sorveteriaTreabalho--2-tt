import {Empresas} from '../../../database/tables';
import {redirect} from 'next/navigation';
import "../../css/cadastro.css";


async function editaEmpresas(formData) {

    'use server';

    const id = formData.get('id');
    const email = formData.get('email');
    const nome = formData.get('nome');
    const senha = formData.get('senha');
    const ramo_atividade = formData.get('ramo_atividade');

    const empresas = await Empresas.findByPk(id);
    empresas.email = email;
    empresas.nome = nome;
    empresas.senha = senha;
    empresas.cpf = ramo_atividade;

    await empresas.save();

    redirect('/empresas')

}

async function TelaEditaEmpresas({searchParams}) {
    const id = searchParams.id;
    const empresas = await Empresas.findByPk(id)
    return(
        <div>
            <h1> Editando a Empresa</h1>

            <form action = {editaEmpresas}>
                <input type="hidden" name = "id" defaultValue = {empresas.id}></input>

            <label htmlFor = "email">Email</label> <br/>
            <input type = "text" name = "email" defaultValue = {empresas.email} /><br/>

            <label htmlFor = "nome">Nome</label><br/>
            <input type = "text" name = "nome" defaultValue = {empresas.nome} /><br/>

            <label htmlFor = "senha">Senha</label><br/>
            <input type = "text" name = "senha" defaultValue = {empresas.senha} /><br/>

            <label htmlFor = "ramo_atividade">Ramo Atividade</label><br/>
            <input type = "text" name = "ramo_atividade" defaultValue = {empresas.ramo_atividade} /><br/>

            <button>Salvar</button>
        </form>
        </div>
    );
}
export default TelaEditaEmpresas;