 
// importation du module express, framework de node.js. en l'assignant à la variable express, nous pouvons utiliser ses fonctionnalités 
// pour créer un serveur HTTP
const express = require("express");
// importation du module CORS qui permet de gérer les requetes dans une application web
const cors = require("cors");
//importation du module sql qui permet de se connecter à une base de données MySQL à partir d'une application Node.js
// il fournit des fonctionnalités pour exécuter des requetes SQL et interagir avec la base de données.
const mysql = require("mysql");

const path = require("path");

const multer = require("multer"); 




// creation d'une instance de l'application Express. cette instance représente notre application web et nous permet d'utiliser les fonctionnalités
// d'express pour configurer le serveur et gérer les requetes.
const app = express();
/**
 * configure l'utilisation du middleware CORS dans notre application Express. un middleware est une fonction qui s'exécute avant que la requête atteigne sa destination.
 * app.use(cors()) indique à Express d'utiliser le middleware CORS pour toutes les requetes entrantes
 */
app.use(cors());

app.use(express.json());

//rendre une image accessible
// dossier ou se trouve les images

app.use(express.static("public")) 

// creation d'une connexion sql
const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "shop_db1"
})

app.listen(8082, () =>{
    console.log("listening on port 8082");
})

const storage = multer.diskStorage({
  destination : (req, file, cb) => {
      cb(null, 'public/images')
  },
  filename : (req, file, cb) => {
      cb(null, file.fieldname + "_" +Date.now()+path.extname(file.originalname));
  }
})

const upload = multer({
  storage : storage
}) 




// requete d'insertion 
app.post('/register',(req, res) =>{
    const insertUser = "INSERT INTO `user` (name, email, password, user_type) values (?, ?, ?, ?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password,
        req.body.user_type
    ]
    db.query(insertUser, values, (err, data) =>{
        if(err) return res.json("error")
        return res.json(data)
    })
})



// app.post("/AddProduct", upload.single("image"), (req, res) =>{ 
//     const image = req.file.filename;
//     const updateProduct = "UPDATE products SET image = ?";
//     db.query(updateProduct, [image], (err, data) =>{
//         if(err) return res.json({Message : "Server Message : Error"});
//         return res.json({Status : "Success"})
//     })
// })

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySql Connected...');
});

// select product request from data base

app.get("/AddProduct", (req, res) => {
    const selectUser = "SELECT * FROM products"
    db.query(selectUser, (err, data) => {
      if (err) {
        console.log(err);
        return res.json("Error");
      }
      return res.json(data);
    });
  });
 

  // request that check the users exist on data base

  app.post("/", (req, res) => {
    const selectUser = "SELECT * FROM users WHERE email = ? AND password = ?";
    const values = [req.body.email, req.body.password];
    // console.log("email : ", req.body.email);
    // console.log("password : ", req.body.password);
    db.query(selectUser, values, (err, data) => {
      if (err) {
        console.log(err);
        return res.json("Error");
      }
      return res.json(data);
    });
  });


  // select all products added on database using get method

app.get("/AddProduct", (req, res) =>{
    const selectProduct = "SELECT * FROM products"
    db.query(selectProduct, (err, data) =>{
        if(err) return res.json("Error")
        return res.json(data);
    })
})

// insert product data on database using post

app.post("/AddProduct", upload.single("image"), (req, res) => {
    const insertProduct = "INSERT INTO products (`name`, `price`, `image`) VALUES (?, ?, ?)";
    const values = [req.body.productName, req.body.productPrice, req.file.filename];
   
    db.query(insertProduct, values, (err, data) => {
      if (err) {
        console.log(err);
        return res.json({ Status: "Error" });
      }
      console.log("Product inserted into database successfully.");
      return res.json({ Status: "Success" });
    });
  });

  // insert users data on database before login
  app.post("/RegisterPage",(req, res) => {
    
    const insertProduct = "INSERT INTO users (name, email, password, user_type) VALUES (?, ?, ?, ?)";
    const values = [req.body.userName, req.body.userEmail,
        req.body.userPassword, req.body.userType
    ];
  
    console.log("Name:", req.body.userName);
    console.log("Email:", req.body.userEmail);
    console.log("Password:", req.body.userPassword);
    console.log("userType", req.body.userType )
  
    db.query(insertProduct, values, (err, data) => {
      if (err) {
        console.log(err);
        return res.json("Error");
      }
      console.log("User inserted into database successfully.");
      return res.json(data);
    });
  });

  // mise à jour des données
app.put('/AddProduct/:id',  upload.single("image"), (req, res) => {
  const sql = "UPDATE products set `name` = ?,  `price` = ?, image = ? WHERE id = ?";
  console.log("productupdatename : " + req.body.productName)
  console.log("productupdateprice : " + req.body.productPrice)
  console.log("productupdatename : " + req.file.filename)
  console.log("productupdatebyid : " + req.params.id)
  const values = [req.body.productName, req.body.productPrice, req.file.filename, req.params.id];
   
  db.query(sql, values , (err, data)=>{
      if(err) return res.json("Error");
      return res.json(data);
  })
})

app.put('/ImageContact/:id',  upload.single("image"), (req, res) => {
  const sql = "UPDATE products set `name` = ?,  `price` = ?, image = ? WHERE id = ?";
  console.log("productupdatename : " + req.body.productName)
  console.log("productupdateprice : " + req.body.productPrice)
  console.log("productupdatename : " + req.file.filename)
  console.log("productupdatebyid : " + req.params.id)
  const values = [req.body.productName, req.body.productPrice, req.file.fileProduct, req.params.id];
   
  db.query(sql, values , (err, data)=>{
      if(err) return res.json("Error");
      return res.json(data);
  })
})

app.post("/AddProduct/:id", (req, res) => {
  const selectImageId = "SELECT * FROM users WHERE id = ?";
  const values = [req.body.id];
  console.log("id image : ", req.body.id);
   
  db.query(selectImageId, values, (err, data) => {
    if (err) {
      console.log(err);
      return res.json("Error");
    }
    return res.json(data);
  });
});

// get messages

app.get("/Messages", (req, res)=>{
  const select_message = "SELECT * FROM message"
  db.query(select_message, (err, data)=>{
    if(err) return res.json("Error to get data")
    return res.json(data)
  })
})

// get users

app.get("/Users", (req, res)=>{
  const select_message = "SELECT * FROM users"
  db.query(select_message, (err, data)=>{
    if(err) return res.json("Error to get data")
    return res.json(data)
  })
})

 
app.delete('/addProducts/:id', (req, res) => {
  console.log("id : ", req.params.id);
  const sql = "DELETE FROM products WHERE id = ?";
  const values = [req.params.id];
  
  db.query(sql, values, (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});