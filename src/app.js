const express = require("express");

let app = express();

const expReqs = [0, 90, 108, 129, 154, 183, 218, 259, 307, 363, 429, 506, 596, 701, 824, 967, 1133, 1325, 1548, 1806, 2103, 2446, 2840, 3293, 3812, 4408, 5088, 5865, 6750, 7757, 8901, 10198, 11667, 13327, 15200, 17311, 19685, 22350, 25338, 28681, 32416, 36581, 41219, 46373, 52092, 58426, 65430, 73161, 81679, 91048];

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

app.listen(process.env.PORT || 8888);
