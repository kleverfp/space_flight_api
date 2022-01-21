const express = require('express');
const { body, validationResult } = require('express-validator');
const Article = require('../models/Article');
const router = express.Router();


router.get('/',(req,res)=>{
    res.status(200).json({msg:"Back-end Challenge 2021 🏅 - Space Flight News"})
});

router.get('/articles',async(req,res)=>{
    const articles = await Article.find();

    res.status(200).json(articles);
});

router.get('/articles/:id',async(req,res)=>{
    try{
        const article = await Article.findById(req.params.id);

        if(!article)
            return  res.status(404).json({errors:[{msg:'not found'}]});

        res.status(200).json(article);

    }catch(err){
        res.status(500).json({errors:[{msg:'server error'}]});
    }
    
});

router.post('/articles',[
    body('title','title is required').trim().not().isEmpty(),
    body('url','url is required').trim().not().isEmpty(),
],async (req,res)=>{
    const errors = validationResult(req);

    if(!errors.isEmpty())
        return res.status(400).json({errors:errors.array()});

    const article = await Article.create(req.body);
    res.status(200).json(article);

});

router.put('/articles/:id',[
    body('title','title is required').trim().not().isEmpty(),
    body('url','title is required').trim().not().isEmpty()],
    async(req,res)=>{
    try {
        const article = await Article.findByIdAndUpdate(req.params.id,req.body);

        if(!article)
            return res.status(404).json({errors:[{msg:'not found'}]});
        
        const newArticle = await Article.findById(req.params.id);

        res.status(200).json(newArticle);
    } catch (err) {
        res.status(500).json({errors:[{msg:'server error'}]});
    }
});

router.delete('/articles/:id',async(req,res)=>{
    try {
        const article = await Article.findByIdAndRemove(req.params.id);
        
        if(!article)
            return res.status(404).json({errors:[{msg:'not found'}]});
        
        res.status(200).json(article);

    } catch (error) {
        res.status(500).json({errors:[{msg:'server error'}]});
    }
});




module.exports = router;