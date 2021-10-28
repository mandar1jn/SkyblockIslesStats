const cluster = require("cluster");

if(cluster.isPrimary)
{
    const os = require("os");

    var coreCount = os.cpus().length;
	
    for(let i = 0; i < coreCount; i++)
    {
        cluster.fork();
    }

    console.log("primary");
}
else
{
    console.log(`worker #${cluster.worker.id} has started`);
    require("./app.js");
}
