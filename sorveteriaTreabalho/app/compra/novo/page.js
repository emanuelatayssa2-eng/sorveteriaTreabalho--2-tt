import { Compra } from "../../../database/tables";
import { redirect } from 'next/navigation';
import "../../css/cadastro.css";

async function insereCompra(formData) {
    'use server';
    const dados = {
        produtos: formData.get('produtos'),
        quantidade: formData.get('quantidade'),
        total: formData.get('total'),
        pagamento: formData.get('pagamento')
    };
    await Compra.create(dados);
    redirect ('/compra');
}

function TelaNovoCompra(){
    return(
        <div>
        <h1> Editando a compra</h1>

        <form action = {insereCompra}>
            {/* <input type="hidden" name = "id" defaultValue = {clientes.id}></input> */}
            <label htmlFor = "produtos">Produtos</label> <br/>
        <input type = "text" name = "produtos"/><br/>

        <label htmlFor = "quantidade">quantidade</label><br/>
        <input type = "text" name = "quantidade"/><br/>

        <label htmlFor = "total">total</label><br/>
        <input type = "text" name = "total"/><br/>

        <label htmlFor = "pagamento">pagamento</label><br/>
        <input type = "text" name = "pagamento"/><br/>


        <button className ='bt-classico'>Salvar</button>
    </form>
    </div>
    )
}

export default TelaNovoCompra;