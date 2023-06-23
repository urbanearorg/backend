const {model, Schema, Types} = require("mongoose");

const DOCUMENT_NAME = "Landmark";
const COLLECTION_NAME = "landmark";

const schema = new Schema(
    {
        _id: {type: Schema.Types.String, required: true},
        city: {type: Schema.Types.String, required: true},
        name: {type: Schema.Types.String, required: true},
        image: {type: Schema.Types.String, required: true},
        location: {type: Schema.Types.String, require: true},
        coordinates: {type: Schema.Types.String, required: true}
    }
)

const LandmarkModel = model(DOCUMENT_NAME, schema, COLLECTION_NAME);

module.exports = {LandmarkModel};