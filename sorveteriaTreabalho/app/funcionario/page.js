import { Funcionario } from "../../database/tables";
import { redirect } from 'next/navigation';
import "../css/listagem.css";


async function deletaFuncionario(formData) {
    'use server';
    const id = formData.get('id');
    const funcionario = await Funcionario.findByPk(id);
    await funcionario.destroy();
    redirect('/funcionario')

}

async function TelaFuncionario() {
    const funcionario = await Funcionario.findAll();
    console.log(funcionario);
    return (
        <div>
            <h1>Lista de Funcionario:</h1>
            <a href="/funcionario/novo">Cadastrar Funcionario</a>
            <table border = "1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>EMAIL</th>
                        <th>NOME</th>
                        <th>FORMAÇÃO</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        funcionario.map(function(f){
                            return(
                                <tr key = {f.id}>
                                    <td>{f.id}</td>
                                    <td>{f.email}</td>
                                    <td>{f.nome}</td>
                                    <td>{f.formacao}</td>

                                    <td className="ceculaBotao">

                                        <form action={'/funcionario/edita'}>
                                            <input type="hidden" name="id" defaultValue={f.id} />
                                            <button>Editar</button>
                                        </form>
                                    </td>
                                    <td className="ceculaBotao">
                                        <form action={deletaFuncionario}>
                                            <input type="hidden" name="id" defaultValue={f.id} />
                                            <button>Excluír</button>
                                        </form>
                                    </td>

                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}
export default TelaFuncionario;