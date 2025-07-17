const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();
const films = require('../data/films.json');


router.get('/films',(req,res)=>{
    const pathFilms = path.join(__dirname,'../data/films.json');
    const readFilms = JSON.parse(fs.readFileSync(pathFilms,'utf-8'));
    res.send(readFilms);
    
});

const validateId = (req, res, next) => {
    const filmId = parseInt(req.params.id);
    if (isNaN(filmId)) {
        return res.status(400).json({ message: "ID invalide, un nombre est requis." });
    }
    req.filmId = filmId;
    next();
};

router.get('/films/:id', validateId, (req, res) => {
    const film = films.find(f => f.id === req.filmId);
    if (!film) {
        return res.status(404).json({ message: "Film introuvable." });
    }
    res.json(film);
});

router.post('/register',(req,res)=>{
    const newFilm = req.body;
    films.push(newFilm);
})

module.exports = router;
