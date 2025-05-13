const express = require('express');
const mysql = require('mysql');

const app = express();
const cors = require('cors');
app.use(cors());

app.use(express.json());
const connection =mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database:'login_stud'
});

connection.connect((err)=>{
    if (err) {
        console.log('Error connecting to database');
    }
    else {
        console.log("MySQL Connected");
    }
});

app.post('/register',(req,res)=>{
    const data = req.body;
     connection.query('Insert into users SET ?',data,(error,result,fields)=>{
        if(error) error;
        res.send(result)

    })
})
app.get('/register',(req,res)=>{
    
     connection.query("select * from users", (err, result) => {

        if (err) {
            res.send("err");
        }
        else {
            res.send( result);
                
        }

    })

    
});
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
    connection.query(query, [username, password], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send({ message: "Server error" });
        }

        if (results.length > 0) {
            res.send({ message: 'Login successful', user: results[0] });
        } else {
            res.status(401).send({ message: 'Invalid username or password' });
        }
    });
});


app.listen(3000);
