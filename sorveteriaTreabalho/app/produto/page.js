import "../css/listagem.css";
import { Produto } from "../../database/tables";
import { redirect } from 'next/navigation';


async function deletaProduto(formData) {
    'use server';
    const id = formData.get('id');
    const produto = await Produto.findByPk(id);
    await produto.destroy();
    redirect('/produto')

}

async function TelaProduto() {
    const produto = await Produto.findAll();
    console.log(produto);
    return (
        <div>
            <h1>Lista de Produtos:</h1>
            <a href="/produto/novo">Novo Produto</a>
            <table border="2">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>TÍTULO</th>
                        <th>DESCRIÇÃO</th>
                        <th>PREÇO</th>
                        <th>DATA DE VALIDADE</th>
                        <th>EDITAR</th>
                        <th>EDITAR</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        produto.map(function (p) {
                            return (
                                <tr key={p.id}>
                                    <td>{p.id}</td>
                                    <td>{p.nome}</td>
                                    <td>{p.descricao}</td>
                                    <td>{p.preco}</td>
                                    <td>{p.data_validade}</td>
                                    <td className="ceculaBotao">

                                        <form action={'/produto/edita'}>
                                            <input type="hidden" name="id" defaultValue={p.id} />
                                            <button>Editar</button>
                                        </form>
                                    </td>
                                    <td className="ceculaBotao">
                                        <form action={deletaProduto}>
                                            <input type="hidden" name="id" defaultValue={p.id} />
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
export default TelaProduto;