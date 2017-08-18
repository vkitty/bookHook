'use strict';
const path = require('path');
var Spawn = require('child_process').spawn;

module.exports = app => {
    class HomeController extends app.Controller {
        * index() {
            this.ctx.body = 'hi, egg';
        }

        * commit() {
            var gitDir = this.config.gitDir;
            console.log(gitDir)
            var spawn = Spawn('git', ['pull'], {cwd: '/home/www/webserver/docs'});
            yield this.app.spawnExec(spawn);
            spawn('gitbook', ['build'], {cwd: '/home/www/webserver/docs'});
            yield this.app.spawnExec(spawn);
            this.ctx.body = gitDir;
        }
    }
    return HomeController;
};
