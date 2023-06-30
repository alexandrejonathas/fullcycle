const express = require('express');

const mysql = require('mysql');

const app = express();

const port = 3000;

const config = {
    host: 'db',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

app.get('/', (req, res) => {
    const conn = mysql.createConnection(config);
    conn.query(`insert into people(nome) values ('Jonathas Lima')`);
    //conn.commit();

    
    let html = '<h1>Full Cycle Rocks!!</h1>';

    conn.query('select * from people', (error, result, fields) => {
        if (error) throw error;
        console.log(result);
        result.forEach( person => {
            console.log(person);
            html += `<br /> ID: ${person.id} - Nome: ${person.nome}`
        });
        conn.end();
    
        res.send(html);
    });
})

app.listen(port, () => {
    console.log(`Server is running port ${port}`);
})