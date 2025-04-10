
const express = require('express')
const router = express.Router()
const userservices = require("./userservice")


router.get('/:id', (req, res) => {
    try {
        const id = req.params.id
        const result = userservices.getUser(id)

        if (result) {
            res.status(200).json(result)
        }
        else {
            res.status(404).send("User not found")
        }

    }
    catch (err) {
        res.status(500).send("Internal Error")
    }

})

module.exports = router
