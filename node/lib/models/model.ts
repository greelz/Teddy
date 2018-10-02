import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ParkSchema = new Schema ({
    name: {
        type: String,
        required: "Every park needs a name."
    },

    date_of_creation: {
        type: Date,
        default: Date.now
    }

});
