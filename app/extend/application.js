module.exports={
    * spawnExec(spawn){
        yield new Promise(function(resolve,reject){
            spawn.stderr.on('data',function(data){
                console.log(data.toString());
                reject(data);
            });
            spawn.on('close',function(data){
                resolve();
            });
        });
    }
}