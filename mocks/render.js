'use strict';

let hooks = require('boar-server').middlewares.hook;

let context;
let renderArguments;
let originalRender;

module.exports =  {

  lastCalledArgs: function() {
    return renderArguments;
  },


  attach: function() {
    renderArguments = {};

    hooks.add(function() {
      if (this && this.render) {
        originalRender = this.render;
        context = this;
        this.render = function(path, data) {
          return new Promise(resolve => {
            renderArguments = {path: path, data: data};
            context.body = "RENDER STUB";
            context.type = "html";
            resolve(context);
          });
        };
      }
    });
  },


  restore: function() {
    hooks.reset();
    if (context) context.render = originalRender;
  }

};
