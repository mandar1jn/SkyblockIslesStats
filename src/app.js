const express = require("express");

let app = express();

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
			res.render("profile", {name: json["username"], skills: json["skills"]});
		}
	});
});

app.listen(8888);
