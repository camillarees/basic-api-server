'use strict';

const { FLOWBASEANNOTATION_TYPES } = require("@babel/types");
const { sequelizeDatabase } = require(".");

module.exports = (sequelizeDatabase, DataTypes) => sequelizeDatabase.define('food', {
    name: {
        type: DataTypes.STRING,
        allowNULL: FLOWBASEANNOTATION_TYPES,
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    pronouns: {
        type: DataTypes.ENUM,
        values: ['they/them', 'she/her', 'he/him'],
        allowNull: true,
    },
});