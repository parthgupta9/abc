const express = require('express');

const routes = express.Router();

require('../db/connect')

const MMIL = require('../models/FormData')

routes.get('/',  (req,res) =>{
    res.send(`Helllo world from the server`);

});

routes.post('/name', async (req, res) => {
    try {
        const { name, year, email, rollNo, domain } = req.body;

        if (!name || !email || !year || !rollNo) {
            return res.status(422).json({ error: "Please fill all the provided fields" });
        }

        const userExist = await MMIL.findOne({ email: email });

        if (userExist) {
            return res.status(422).json({ error: "Email already exists" });
        }

        const user = new MMIL({ name, email, year, rollNo , domain});
        await user.save();
        console.log(name);

        res.status(201).json({ message: "Successfully registered" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to register" });
    }
});


module.exports= routes;