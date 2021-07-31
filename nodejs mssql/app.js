const sql = require("mssql/msnodesqlv8")
const conn = new sql.ConnectionPool({
    database: "test",
    server: "localhost",
    driver: "msnodesqlv8",
    options: {
        trustServerCertificate: true,
        trustedConnection: true
    }
})

conn.connect().then((result) => {
    if (result.connecting) {
        console.log(`connecting`)
    }
    if (result.connected) {
        result.request().query("SELECt * FROM dbo.Student", (err, result) => {
            if (err) {
                console.log("hataa", err)
            }
            console.log("result", result.recordset)
        })
        result.request().input("x", 1).query("SELECt * FROM dbo.Student  where studentId=@x", (err, res) => {
            if (err) {
                console.log(`erro`, err)
            }
            console.log("res", res.recordset)
        })
        console.log("connected")
    }
})