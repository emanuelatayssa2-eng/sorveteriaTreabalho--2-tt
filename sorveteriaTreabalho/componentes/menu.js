import "../app/css/menu.css";

function Menu() {
    return (
        <nav>
            <div>
                <h1> Sorveteria</h1>
            </div>
                <div> 
    
            <a href = "/">Home</a>&nbsp;
            <a href = "/clientes">Clientes</a>&nbsp;
            <a href = "/funcionario">Funcionários</a>&nbsp;
            <a href = "/fornecedor">Fornecedores</a>&nbsp;
            <a href = "/empresas">Empresas</a>&nbsp;
            <a href = "/produto">Produtos</a>
            <a href = "/compra">Compra</a>
                </div>
            </nav>
  
    );
}
export default Menu;