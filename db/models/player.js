const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let PlayerSchema = new Schema({
    PlayerId: {
        type: String,
        required: true,
        unque: true
    },

     FirstName: {
        type: String
    },

    LastName: {
        type: String
    },

    ProfilePick: {
        type: String
    },

    createdAt: {
        type: Number,
        default: () => Date.now()
    }
});
PlayerSchema.options.toJSON = {
    transform: function (doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        return ret;
    }
};
module.exports = mongoose.model("Player", PlayerSchema, "Player");
