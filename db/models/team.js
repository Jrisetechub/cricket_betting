const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let TeamSchema = new Schema({
    teamId: {
        type: String,
        required: true,
        unque: true
    },

    teamName: {
        type: String
    },

    teamlogo: {
        type: String
    },

    teamR : {
        type: String
    },

    createdAt: {
        type: Number,
        default: () => Date.now()
    }
});
TeamSchema.options.toJSON = {
    transform: function (doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        return ret;
    }
};
module.exports = mongoose.model("Team", TeamSchema, "Team");
