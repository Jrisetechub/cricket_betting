const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let MatchSchema = new Schema({

    matchId: {
        type: String,
        required: true,
        unque: true
    },
    matchTitle: {
        type: String,
        required: true,
    },
    matchResult: {
        type: String,
        required: true,
        unque: true
    },
    matchStatus: {
        type: String,
        required: true,
        unque: true
    },
    matchStartTime: {
        type: String,
        required: true,
        unque: true
    },

    tossStatus: {
        type: String,
        required: true,
        unque: true
    },

     tossWinner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'teamId',
        required: true
    },

 
    createdAt: {
        type: Number,
        default: () => Date.now()
    }
});
MatchSchema.options.toJSON = {
    transform: function (doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        return ret;
    }
};
module.exports = mongoose.model("Match", MatchSchema, "Match");
