'use strict';
const path = require('path');
var Spawn = require('child_process').spawn;

module.exports = app => {
    class HomeController extends app.Controller {
        * index() {
            this.ctx.body = 'hi, egg';
        }

        * vkitty() {
            var gitDir = this.config.vkittyDir;
            var mySpawn = Spawn('git', ['pull'], {cwd: gitDir});
            mySpawn.stderr.on('data',function(data){
                console.log(data.toString());
            });
            mySpawn.on('close',function(){
                mySpawn = Spawn('gitbook', ['build'], {cwd: gitDir});
            });
            this.ctx.body = gitDir;
        }

        * adbaitai() {
            var gitDir = this.config.adbaitaiDir;
            var mySpawn = Spawn('git', ['pull'], {cwd: gitDir});
            mySpawn.stderr.on('data',function(data){
                console.log(data.toString());
            });
            mySpawn.on('close',function(){
                mySpawn = Spawn('gitbook', ['build'], {cwd: gitDir});
            });
            this.ctx.body = gitDir;
        }


        * frontdocs_adbaitai_com() {
            var gitDir = this.config.frontdocs_adbaitai_com;
            var mySpawn = Spawn('git', ['pull'], {cwd: gitDir});
            mySpawn.stderr.on('data',function(data){
                console.log(data.toString());
            });
            mySpawn.on('close',function(){
                mySpawn = Spawn('gitbook', ['build'], {cwd: gitDir});
            });
            this.ctx.body = gitDir;
        }
    }
    return HomeController;
};
