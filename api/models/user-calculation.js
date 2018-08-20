const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let UserCalculation = new Schema({
    userId: {
        type: String
    },
    calculations: [
        {
            superAnnuation: {
                type: Number
            },
            gross: {
                type: Number
            },
            tax: {
                type: Number
            },
            net: {
                type: Number
            },
            netSuperannuation: {
                type: Number
            },
            created: {
                type: Date,
                default: Date.now()
            }
        }
    ]
});

module.exports = mongoose.model('UserCalculation', UserCalculation);