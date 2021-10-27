const express = require("express");

let app = express();

app.all("/profile/:username", async (req, res, err) => 
{
	const request = require("request");
	request(`https://api.skyblockisles.com/player/${req.params.username}`, (error, response, body) => 
	{
		let json = JSON.parse(body);
		let buf = Buffer.from(json["skin"][0], "base64");
		console.log(json["skin"]);
		let linkJson = JSON.parse(buf.toString());
		res.send("username: " + json["username"] + "<br>UUID: " + json["uuid"] + "<br>Link to skin: " + linkJson["textures"]["SKIN"]["url"]);
	});
});

app.listen(8888);
