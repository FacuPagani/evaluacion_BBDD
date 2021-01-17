let db = require('../database/models');
const path = require('path');

module.exports = {
    
    index: function(req, res) {
        db.Nota.findAll()
        .then(function(nota) {
            return res.render('index', {
                nota: nota
            })
        })
    
    },save: function(req, res) {
        // res.send(req.body)
        db.Nota.create({
            
            titulo: req.body.title,
            descripcion: req.body.desc
        })
        .then(function(nota) {
            res.redirect("/")
        })  

    },delete: function(req, res) {
        db.Nota.destroy({
            where: {
            id_notas: req.params.id
            }
        })
        .then(function() {
            res.redirect("/")
        })
    },
    
}