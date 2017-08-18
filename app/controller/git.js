'use strict';
const path = require('path');
var Spawn = require('child_process').spawn;

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      this.ctx.body = 'hi, egg';
    }
    * commit(){
      var gitDir = this.config.gitDir;
      var spawn = Spawn('git',['pull'],{cwd:gitDir});
      yield this.app.spawnExec(spawn);
      spawn('gitbook',['build'],{cwd:gitDir});
      yield this.app.spawnExec(spawn);
      this.ctx.body='sdf';
    }
  }
  return HomeController;
};
