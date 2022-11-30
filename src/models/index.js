'use strict';

require('dotenv').config();
const { Sequelize, Datatypes } = require('sequelize');
const foodSchema = require('./food.schema');

// 'postgres://localhost:5432/basic-api-server'
// will use a ternary here to set up sqlite for testing
const DATABASE_URL = process.env.NODE_ENV === 'test'
? 'sqlite::memory'
: process.env.DATABASE_URL;

// instantiate our sequelize connection to our database

const sequelizeDatabase = new Sequelize(DATABASE_URL, {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        }
    }
});

// create a food model with our schema 

const FoodModel = foodSchema(sequelizeDatabase, DataTypes);

module.exports = {
    sequelizeDatabase,
    FoodModel,
};