const express = require("express");

let app = express();

const expReqs = [0, 90, 108, 129, 154, 183, 218];

app.set('view engine', "ejs");

app.all("/profile/:username", async (req, res, err) => 
{
    const request = require("request");
    request(`https://api.skyblockisles.com/player/${req.params.username}`, (error, response, body) => 
    {
        let json = JSON.parse(body);
        if(body === "{}")
        {
            res.send("This user has not played on Skyblock Isles");
        }
        else
        {
            res.render("profile", {username: json.username, skills: json.skills, xpReqs: expReqs});
        }
    });
});

app.listen(8888);
