// const HomeModel = require('../models/homeModel')
// HomeModel.create({
//     titulo: "Título 2",
//     descrição: "Descrição 2."
// })

// .then((dados)=>console.log(dados))
// .catch((error)=>console.log(error))
exports.paginaInicial = (req, res)=>{
    res.render('index')
    req.session.usuario = {nome: "Amando", logado: true}
    req.flash('info', 'olá mundão')
    req.flash('error', "frsdgdgdtghd")
    req.flash('success', "blaaaaaaaa")
    return
}



exports.trataPost = (req, res)=>{
    res.send(req.body)
}