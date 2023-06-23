const express = require("express");
const asyncHandler = require("../helpers/asyncHandler.js");
const FactRepository = require("../database/repository/factRepository.js");

const router = express.Router();

router.get(
    "/facts/:landmarkId",
    asyncHandler(async (req, res) => {
        const landmarkId = req.params.landmarkId;

        const facts = await FactRepository.fetchByLandmarkId(landmarkId);

        res.status(200).send({facts: facts});
    })
)

router.post(
    "/facts",
    asyncHandler(async (req, res) => {
        const landmarkId = req.body.landmarkId;
        const description = req.body.description;
        const audio = req.body.audio;
        
        await FactRepository.findOrCreate(landmarkId, description, audio);

        res.status(200).send({code: "OK", status: 200});
    })
)

module.exports = router;