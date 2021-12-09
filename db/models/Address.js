const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let AddressSchema = new Schema({
    address1: {
        type: String,
        required: true
    },
    address2: {
        type: String
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Number,
        default: () => Date.now()
    }
});
AddressSchema.options.toJSON = {
    transform: function (doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        return ret;
    }
};
module.exports = mongoose.model("Address", AddressSchema, "Address");
