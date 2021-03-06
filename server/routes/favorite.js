const express = require('express');
const router = express.Router();
const { Fovorite } = require('../models/Favorite');

router.porst('/favoriteNumber', (req,res)=>{
    

    //mongoDB에서 favorite 숫자 가져오기
    Fovorite.find({"movieId":req.body.movieId})
    .exec((err, info)=>{
        if(err) return res.status(400).send(err)
        res.status(200).json({ success:true, favoriteNumber: info.length })
    })

    // 프론트에 다시 숫자정보 보내주기

})


module.exports = router;
