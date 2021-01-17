let db = require('../database/models');
module.exports = {
detail: function(req, res) {
    
    db.Nota.findByPk(req.params.id, {
        include: {
            all:true,
            nested: true
        }
    })
    .then(function(unaNota) {
        res.render('detail', {
            unaNota: unaNota
        })
    })
},

edicion: function(req, res) {
    db.Nota.findByPk(req.params.id)
    .then(function(laNota) {
        res.render('detail', {
            laNota: laNota
        })
    })
},
editado: function(req, res) {
    db.Nota.update({
        titulo: req.body.titulo,
       descripcion:req.body.descripcion
    }, {
        where: {
            id_notas: req.params.id
        }
    })
    .then(function(notaEditada) {
        res.redirect("/")
    })
}

}