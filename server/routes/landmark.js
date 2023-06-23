const express = require("express");
const asyncHandler = require("../helpers/asyncHandler");
const LandmarkRepository = require("../database/repository/landmarkRepository");

const router = express.Router();

router.get(
    "/landmarks/:city",
    asyncHandler(async (req, res) => {
        const city = req.params.city;

        const landmarks = await LandmarkRepository.fetchByCityName(city);

        res.status(200).send({landmarks: landmarks});
    })
)

router.post(
    "/landmarks",
    asyncHandler(async (req, res) => {
        const _id = req.body._id;
        const city = req.body.city;
        const name = req.body.name;
        const image = req.body.image;
        const location = req.body.location;
        const coordinates = req.body.coordinates;

        await LandmarkRepository.findOrCreate(_id, city, name, image, location, coordinates);

        res.status(200).send({code: "OK", status: 200})
    })
)

module.exports = router;