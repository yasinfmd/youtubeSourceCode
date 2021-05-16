let db = window.openDatabase("myDb", "1.0", "testDb", 2 * 1024 * 1024)

function createTable() {
    try {
        db.transaction(function (tx) {
            tx.executeSql("CREATE TABLE IF NOT EXISTS test (id,name,date)")
        })
    } catch (error) {
        console.log(`error`, error)
    }

}

function createRecord() {
    try {
        db.transaction(function (tx) {
            const date = Date.now();
            tx.executeSql("INSERT INTO test (id,name,date) VALUES (1,'Yasin','10.10.2010')")
            tx.executeSql("INSERT INTO test (id,name,date) VALUES (?,?,?)", [2, 'Ali', date])
        })
    } catch (error) {
        console.log(`error`, error)
    }
}

function readRecords() {
    try {
        db.transaction(function (tx) {
            tx.executeSql("SELECT * FROM test", [], (tx, result) => {
                for (let index = 0; index < result.rows.length; index++) {
                    console.log(`item`, result.rows.item(index))

                }
            })
        })
    } catch (error) {
        console.log(`error`, error)
    }
}
function readRecordsById(id) {
    try {
        db.transaction(function (tx) {
            tx.executeSql("SELECT * FROM test where id=?", [id], (tx, result) => {
                for (let index = 0; index < result.rows.length; index++) {
                    console.log(`item`, result.rows.item(index))

                }
            })
        })
    } catch (error) {
        console.log(`error`, error)
    }
}
function deleteRecordById(id) {
    try {
        db.transaction(function (tx) {
            tx.executeSql("DELETE FROM test where id=?", [id], (tx, result) => {
                console.log(`result`, result.rowsAffected)
            })
        })
    } catch (error) {
        console.log(`error`, error)
    }
}

function updateRecordById(id) {
    try {
        db.transaction(function (tx) {
            tx.executeSql("UPDATE  test SET id=?,name=?,date=? where id=?", [30, "Test", Date.now(), id], (tx, result) => {
                console.log(`result`, result.rowsAffected)
            })
        })
    } catch (error) {
        console.log(`error`, error)
    }
}