const express = require("express");

let app = express();

app.set('view engine', "ejs");

app.all("/profile/:username", async (req, res, err) => 
{
	const request = require("request");
	request(`https://api.skyblockisles.com/player/${req.params.username}`, (error, response, body) => 
	{
		res.render("profile", {name: "hello"});
	});
});

app.listen(8888);
