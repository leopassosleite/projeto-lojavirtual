const express = require('express');
const connection = require('../connection');
const router = express.Router();
var auth = require('../services/authentication');
var checkRole = require('../services/checkRole');

router.post('/add', auth.authenticateToken, checkRole.checkRole, (req, res, next) => {
    let product = req.body;
    query = "insert into product (name,model,year,brand,description,price,statusProductId,categoryId) values(?,?,?,?,?,?,?,?)";
    connection.query(query, [product.name, product.model, product.year, product.brand, product.description, product.price, product.statusProductId, product.categoryId], (err, results) => {
        if (!err) {
            return res.status(200).json({ message: "produto inserido com sucesso" });
        }
        else {
            return res.status(500).json(err);
        }
    })
})

//p = product, sp = statusProduct ca = category
router.get('/get', auth.authenticateToken, (req, res, next) => {
    var query = "select p.id,p.name,p.model,p.year,p.brand,p.description,p.price,sp.id as statusProductId,sp.name as statusProductName, ca.id as cateogoryId, ca.name as categoryName from product as p INNER JOIN statusProduct as sp, category as ca where p.statusProductId = sp.id and p.categoryId = ca.id";
    connection.query(query, (err, results) => {
        if (!err) {
            return res.status(200).json(results)
        }
        else {
            return res.status(500).json(err);
        }
    })
})

router.get('/getByCategory/:id', auth.authenticateToken, (req, res, next) => {
    const id = req.params.id;
    var query = "select id,name from product where categoryId= ? ";
    connection.query(query, [id], (err, results) => {
        if (!err) {
            return res.status(200).json(results);
        }
        else {
            return res.status(500).json(err);
        }
    })
})

router.get('/getBystatusProduct/:id', auth.authenticateToken, (req, res, next) => {
    const id = req.params.id;
    var query = "select id,name from product where statusProductId=? ";
    connection.query(query, [id], (err, results) => {
        if (!err) {
            return res.status(200).json(results);
        }
        else {
            return res.status(500).json(err);
        }
    })
})

router.get('/getById/:id', auth.authenticateToken, (req, res, next) => {
    const id = req.params.id;
    var query = "select p.id,p.name,p.model,p.year,p.brand,p.description,p.price,sp.id as statusProductId,sp.name as statusProductName, ca.id as cateogoryId, ca.name as categoryName from product as p INNER JOIN statusProduct as sp, category as ca where p.statusProductId = sp.id and p.categoryId = ca.id";
    connection.query(query, [id], (err, results) => {
        if (!err) {
            return res.status(200).json(results[0]);
        }
        else {
            return res.status(500).json(err);
        }
    })
})

router.patch('/update', auth.authenticateToken, checkRole.checkRole, (req, res, next) => {
    let product = req.body;
    var query = "update product set name=?,model=?,year=?,brand=?,description=?,price=?,statusProductId=?,categoryId=? where id=?";
    connection.query(query, [product.name, product.model, product.year, product.brand, product.description, product.price, product.statusProductId, product.categoryId, product.id], (err, results) => {
        if (!err) {
            if (results.affectedRows == 0) {
                return res.status(404).json({ message: "Produto não existe" });
            }
            return res.status(200).json({ message: "Dados do produto atualizado com sucesso" });
        }
        else {
            return res.status(500).json(err);
        }
    })
})

router.delete('/delete/:id', auth.authenticateToken, checkRole.checkRole, (req, res, next) => {
    const id = req.params.id;
    var query = "delete from product where id=?"
    connection.query(query, [id], (err, results) => {
        if (!err) {
            if (results.affectedRows == 0) {
                return res.status(404).json({ message: "Produto não existe" });
            }
            return res.status(200).json({ message: "Produto deletado com sucesso" });
        }
        else {
            return res.status(500).json(err);
        }
    })
})


module.exports = router;