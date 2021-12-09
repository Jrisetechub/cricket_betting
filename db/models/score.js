const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let ScoreSchema = new Schema({

    playedId :{type: mongoose.Schema.Types.ObjectId,
  
    ref: 'Player',
    required: true
    },
    
    teamId : {type: mongoose.Schema.Types.ObjectId,
    ref: 'Team',
    required: true,
    },

    MatchID: {type: String},
    Name: String,
    Runs: {type: Number,default : 0},
    Balls: {type: Number,default : 0},
    '4s': {type: Number,default : 0},
    '6s': {type: Number,default : 0},
    Strike_Rate: {type: Number,default : 0},
    Catches: {type: Number,default : 0},
    Run_Out: {type: Number,default : 0},
    over: {type: Number,default : 0},
    total_runs:{type: Number,default : 0},
    wicket: {type: Number,default : 0},
    economy:{type: Number,default : 0},
    wide_runs: {type: Number,default : 0},
    bye_runs: {type: Number,default : 0},
    legbye_runs: {type: Number,default : 0},
    noball_runs: {type: Number,default : 0},
    penalty_runs: {type: Number,default : 0},
    extra_runs: {type: Number,default : 0},
    asBataman: {type: Number,default : 0},
    asBowler: {type: Number,default : 0},
    asFielder: {type: Number,default : 0},
    Dream11Score : {type: Number,default : 0},
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
module.exports = mongoose.model("Score", ScoreSchema, "Score");


