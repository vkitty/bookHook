'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      this.ctx.body = 'hi, egg';
    }

    * commit(){
      console.log(this.ctx);
    }
  }
  return HomeController;
};
