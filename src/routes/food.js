'use strict';

const { response } = require('express');
const express = require('express');
const { FoodModel } = require('../models');
const router = express.Router();

router.get('/food', async (req, res, next) => {
    // const users = await User.findAll();
    try {
        const food = await FoodModel.findAll();
        res.status(200).send(food);
} catch(e){
    next(e);
}
});

router.get('/food:id', async (req, res, next) => {
    try{
        const chosenFood = await FoodModel.findOne({where:{id: req.params.id}})
        res.status(200).send(chosenFood);
    } catch(e){
        next(e);
    }
});

router.post('/food', async (req, res, next) => {
    try {
const newFood = await FoodModel.create(req.body);
res.status(200).send(newFood);
    } catch(e) {
        next(e);
    }
});

router.put('/food', async (req, res, next) => {
    try {
        const foodUpdate = await FoodModel.update({ text: req.body.text}, {where: {id: req.query.id}})
        let updatedFood = await FoodModel.findOne({id: req.query.id})
        res.status(200).send(updatedFood)
    } catch(e) {
        next(e);
    }
})

router.delete('/food:id', async (req, res, next) => {
    try {
    const foodDelete = await FoodModel.destroy({ where:{ id: req.query.id}})
    res.status(200).send(foodDelete);
    } catch(e){
        next(e);
    } 
})


module.exports = router;