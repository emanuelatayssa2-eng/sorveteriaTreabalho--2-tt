import { Sequelize } from "sequelize";
import mysql2 from "mysql2";
import pg from 'pg';
/*
const mysql = new Sequelize({
    dialect: 'mysql',
    dialectModule: mysql2,
    host: 'localhost',
    port: '3306',
    database: 'sorveteriaTayssa',
    username: 'root',
    password: 'root'
});
*/

const mysql = new Sequelize({
    dialect: 'postgres',
    dialectModule: pg,
    host: 'dpg-d4tamteuk2gs73emo8f0-a',
    port: '5432',
    database: 'sorveteria',
    username: 'tayssa',
    password: 'woBXcoNkz9En09Mt06NShzyeRWeTuelK'
});
export default mysql;