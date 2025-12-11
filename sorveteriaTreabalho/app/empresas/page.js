import { Empresas } from "../../database/tables";
import {redirect} from 'next/navigation';
import "../css/listagem.css";

async function deletaEmpresas(formData) {
    'use server';
    const id = formData.get('id');
    const empresas = await Empresas.findByPk(id);
    await empresas.destroy();
    redirect ('/empresas')
    
}

async function TelaEmpresas() {
    const empresas = await Empresas.findAll();
    console.log(empresas);
    return (
        <div>
            <h1>Lista de Empresas Filiadas:</h1>
            <a href="/empresas/novo">Cadastrar Empresa</a>
            <table border = "2">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>EMAIL</th>
                        <th>NOME</th>
                        <th>RAMO DE ATIVIDADE</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        empresas.map(function(e){
                            return(
                                <tr key = {e.id}>
                                    <td>{e.id}</td>
                                    <td>{e.email}</td>
                                    <td>{e.nome}</td>
                                    <td>{e.ramo_atividade}</td>

                                    <td className="ceculaBotao">

                                        <form action={'/empresas/edita'}>
                                            <input type="hidden" name="id" defaultValue={e.id} />
                                            <button>Editar</button>
                                        </form>
                                    </td>
                                    <td className="ceculaBotao">
                                        <form action={deletaEmpresas}>
                                            <input type="hidden" name="id" defaultValue={e.id} />
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
export default TelaEmpresas;