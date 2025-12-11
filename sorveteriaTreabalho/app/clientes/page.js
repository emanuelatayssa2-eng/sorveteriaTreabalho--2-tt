import { Clientes } from "../../database/tables";
import {redirect} from 'next/navigation';
import "../css/listagem.css";



async function deletaClientes(formData) {
    'use server';
    const id = formData.get('id');
    const clientes = await Clientes.findByPk(id);
    await clientes.destroy();
    redirect ('/clientes')
    
}



async function TelaClientes() {
    const clientes = await Clientes.findAll();
    console.log(clientes);
    return (
        <div>
            <h1>Lista de Clientes:</h1>
            <a href="/clientes/novo">Cadastrar Clientes</a>
            <table border = "2">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>EMAIL</th>
                        <th>NOME</th>
                        <th>CPF</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        clientes.map(function(c){
                            return(
                                <tr key = {c.id}>
                                    <td>{c.id}</td>
                                    <td>{c.email}</td>
                                    <td>{c.nome}</td>
                                    <td>{c.cpf}</td>
                                    <td>

                                    <form action={'/clientes/edita'}>
                                    <input type="hidden" name= "id" defaultValue={c.id}/>
                                    <button>Editar</button>
                                    </form>
                                    </td>
                                    <td>
                                    <form action={deletaClientes}>
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
export default TelaClientes;