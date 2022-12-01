'use strict';

const { FLOWBASEANNOTATION_TYPES } = require("@babel/types");
const { sequelizeDatabase } = require(".");

module.exports = (sequelizeDatabase, DataTypes) => sequelizeDatabase.define('food', {
    name: {
        type: DataTypes.STRING,
        allowNULL: FLOWBASEANNOTATION_TYPES,
    },
    group: {
        type: DataTypes.STRING,
        allowNull: true,
    },

});