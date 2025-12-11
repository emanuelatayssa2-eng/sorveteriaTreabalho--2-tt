import { Compra } from "../../database/tables";
import {redirect} from 'next/navigation';
import "../css/listagem.css";

async function deletaCompra(formData) {
    'use server';
    const id = formData.get('id');
    const compra = await Compra.findByPk(id);
    await compra.destroy();
    redirect ('/compra')
    
}
async function TelaCompra() {
    const compra = await Compra.findAll();
    console.log(compra);
    return (
        <div>
            <h1>Lista de Compras:</h1>
            <a href="/compra/novo">Cadastrar Compra</a>
            <table border = "2">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Produtos</th>
                        <th>Quantidade de produtos</th>
                        <th>Valor Total</th>
                        <th>Método de pagamento</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        compra.map(function(c){
                            return(
                                <tr key = {c.id}>
                                    <td>{c.id}</td>
                                    <td>{c.produtos}</td>
                                    <td>{c.quantidade}</td>
                                    <td>{c.total}</td>
                                    <td>{c.pagamento}</td>
                                    <td>

                                    <form action={'/compra/edita'}>
                                    <input type="hidden" name= "id" defaultValue={c.id}/>
                                    <button>Editar</button>
                                    </form>
                                    </td>
                                    <td>
                                    <form action={deletaCompra}>
                                        <input type= "hidden" name= "id" defaultValue={c.id}/>
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
export default TelaCompra;