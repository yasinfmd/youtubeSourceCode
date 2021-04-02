const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'users'
})
const createDbSql = 'CREATE DATABASE IF NOT EXISTS users'
const createTableSql = 'CREATE TABLE IF NOT EXISTS personels (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(50), surname VARCHAR(50))'
const value = [
    ['Yasin', 'Dalkılıç']
]
const createInsertSql = 'INSERT INTO personels (name,surname) VALUES ?'

const selectSql = 'SELECT * FROM personels'
const id = 1;
const whereSql = 'SELECT * FROM personels where id= ?'
const deleteSql = 'DELETE FROM personels where id= ?'

const updateSql = 'UPDATE  personels SET name= ? where id= ?'
connection.connect((err) => {
    if (err) {
        console.log('hata var', err)
    }
    connection.query(createDbSql, (err, result) => {
        if (err) {
            console.log('hata var', err)
        } else {

            connection.query(createTableSql, (err, result) => {
                if (err) {
                    console.log('hata var', err)
                } else {
                    // read
                    // connection.query(selectSql, (err, result, fields) => {
                    //     if (err) {
                    //         console.log('hata var', err)
                    //     }
                    //     console.log('result', result)
                    //     console.log('fields', fields)
                    // })

                    //where
                    // connection.query(whereSql, [id], (err, result) => {
                    //     if (err) {
                    //         console.log('hata var', err)
                    //     }
                    //     console.log('result', result)
                    // })

                    //delete

                    // connection.query(deleteSql, [id], (err, result) => {
                    //     if (err) {
                    //         console.log('hata var', err)
                    //     }
                    //     console.log('result', result)
                    // })

                    //update
                    connection.query(updateSql, ['Yasin', id], (err, result) => {
                        if (err) {
                            console.log('hata var', err)
                        }
                        console.log('result', result)
                    })


                    //insert
                    // connection.query(createInsertSql, [value], (err, result) => {
                    //     if (err) {
                    //         console.log('hata var', err)
                    //     }
                    //     console.log('result', result)
                    // })

                    //console.log('result', result)
                }
            })
            //console.log('result', result)
        }
    })
    console.log('Connect')
})