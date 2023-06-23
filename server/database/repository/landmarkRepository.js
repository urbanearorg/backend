const {LandmarkModel} = require("../model/landmark");

// find landmarks by city name
async function fetchByCityName(city){
    const landmarks = await LandmarkModel.find({city: city});

    return landmarks;
}

// create new landmarks (save them to db)
async function findOrCreate(_id, city, name, image, location, coordinates){
    const landmark = await LandmarkModel.findOneAndUpdate(
        { _id: _id, city: city, name: name, image: image, location: location, coordinates: coordinates },
        { $setOnInsert: { _id: _id, city: city, name: name, image: image, location: location, coordinates: coordinates } },
        { new: true, upsert: true }
    );

    return landmark;
}

module.exports = {fetchByCityName, findOrCreate};

