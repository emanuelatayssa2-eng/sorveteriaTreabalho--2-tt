import "../css/listagem.css";
import { Fornecedor } from "../../database/tables";
import { redirect } from 'next/navigation';


async function deletaFornecedor(formData) {
    'use server';
    const id = formData.get('id');
    const fornecedor = await Fornecedor.findByPk(id);
    await fornecedor.destroy();
    redirect('/fornecedor')

}

async function TelaFornecedor() {
    const fornecedor = await Fornecedor.findAll();
    console.log(fornecedor);
    return (
        <div>
            <h1>Lista de Fornecedor:</h1>
            <a href="/fornecedor/novo">Cadastrar Fornecedor</a>
            <table border = "2">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>EMAIL</th>
                        <th>NOME</th>
                        <th>RAZAO_SOCIAL</th>
                    </tr>

                </thead>
                <tbody>
                    {
                        fornecedor.map(function(f){
                            return(
                                <tr key = {f.id}>
                                    <td>{f.id}</td>
                                    <td>{f.email}</td>
                                    <td>{f.nome}</td>
                                    <td>{f.razao_social}</td>
                                    <td className="ceculaBotao">

                                        <form action={'/fornecedor/edita'}>
                                            <input type="hidden" name="id" defaultValue={f.id} />
                                            <button>Editar</button>
                                        </form>
                                    </td>
                                    <td className="ceculaBotao">
                                        <form action={deletaFornecedor}>
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
export default TelaFornecedor;