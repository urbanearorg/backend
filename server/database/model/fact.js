const {model, Schema, Types} = require('mongoose');

const DOCUMENT_NAME = "Fact";
const COLLECTION_NAME = "fact";

const factSchema = new Schema(
    {
        landmarkId: {type: Schema.Types.String, required: true},
        description: {type: Schema.Types.String, required: true},
        audio: {type: Schema.Types.String, required: true} 
    }
)

const FactModel = model(DOCUMENT_NAME, factSchema, COLLECTION_NAME);

module.exports = {FactModel};