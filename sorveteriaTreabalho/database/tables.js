import { DataTypes } from "sequelize";
import mysql from "./mysql.js";

const Clientes = mysql.define('Clientes', {
    email: DataTypes.STRING,
    nome: DataTypes.STRING,
    senha: DataTypes.STRING,
    cpf: DataTypes.STRING
});

const Funcionario = mysql.define('Funcionario', {
    email: DataTypes.STRING,
    nome: DataTypes.STRING,
    senha: DataTypes.STRING,
    formacao: DataTypes.STRING
});

const Produto = mysql.define('Produto', {
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    preco: DataTypes.STRING,
    data_validade: DataTypes.DATEONLY
});

const Categoria = mysql.define('Categoria', {
    descricao: DataTypes.STRING
});

const Fornecedor = mysql.define('Fornecedor', {
    email: DataTypes.STRING,
    nome: DataTypes.STRING,
    senha: DataTypes.STRING,
    razao_social: DataTypes.STRING
    
});

const Empresas = mysql.define('Empresas', {
    email: DataTypes.STRING,
    nome: DataTypes.STRING,
    senha: DataTypes.STRING,
    ramo_atividade: DataTypes.STRING
});

const Compra = mysql.define('Compra', {
    produtos: DataTypes.STRING,
    quantidade: DataTypes.STRING,
    total: DataTypes.STRING,
    pagamento: DataTypes.STRING
});

Funcionario.belongsTo(Clientes);
Clientes.hasMany(Funcionario);

Fornecedor.belongsTo(Clientes);
Clientes.hasMany(Fornecedor);

Empresas.belongsTo(Clientes);
Clientes.hasMany(Empresas);

Produto.belongsTo(Categoria);
Categoria.hasMany(Produto);

Produto.belongsTo(Fornecedor);
Fornecedor.hasMany(Produto);

Compra.belongsTo(Clientes);
Clientes.hasMany(Compra);

mysql.sync({force: true});

export { Clientes, Funcionario, Produto, Categoria, Fornecedor, Empresas, Compra };
