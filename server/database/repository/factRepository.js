const {FactModel} = require("../model/fact");

// find facts by landmarkId
async function fetchByLandmarkId(landmarkId){
    const facts = await FactModel.find({landmarkId: landmarkId});

    return facts;
}

// create a new fact which doesn't exist yet
async function findOrCreate(landmarkId, description, audio){
    const fact = await FactModel.findOneAndUpdate(
        { landmarkId: landmarkId, description: description, audio: audio },
        { $setOnInsert: { landmarkId: landmarkId, description: description, audio: audio } },
        { new: true, upsert: true }
    );

    return fact;
}

module.exports = {fetchByLandmarkId, findOrCreate};