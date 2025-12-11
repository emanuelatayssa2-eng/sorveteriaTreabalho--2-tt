import {Compra} from '../../../database/tables';
import {redirect} from 'next/navigation';
import "../../css/cadastro.css";


async function editaCompra(formData) {

    'use server';

    const id = formData.get('id');
    const produtos = formData.get('produto');
    const quantidade = formData.get('quantidade');
    const total = formData.get('total');
    const pagamento = formData.get('pagamento');

    const compra = await Compra.findByPk(id);
    compra.produtos = produtos;
    compra.quantidade = quantidade;
    compra.total = total;
    compra.pagamento = pagamento;

    await compra.save();

    redirect('/compra')

}

async function TelaEditaCompra({searchParams}) {
    const id = searchParams.id;
    const compra = await Compra.findByPk(id)
    return(
        <div>
            <h1> Editando a compra</h1>

            <form action = {editaCompra}>
                <input type="hidden" name = "id" defaultValue = {compra.id}></input>

            <label htmlFor = "produtos">Produtos</label> <br/>
            <input type = "text" name = "produtos" defaultValue = {compra.email} /><br/>

            <label htmlFor = "quantidade">Quantidade</label><br/>
            <input type = "text" name = "quantidade" defaultValue = {compra.nome} /><br/>

            <label htmlFor = "total">Total</label><br/>
            <input type = "text" name = "total" defaultValue = {compra.senha} /><br/>

            <label htmlFor = "pagamento">Pagamento</label><br/>
            <input type = "text" name = "pagamento" defaultValue = {compra.cpf} /><br/>

            <button>Salvar</button>
        </form>
        </div>
    );
}
export default TelaEditaCompra;