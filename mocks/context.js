'use strict';

let sinon = require('sinon');


let FakeContext = function() {
  this._renderArgs = [];
  this.status = 200;
  this.id = 'some-request-id';
  this.request = {
    ip: '127.0.0.1',
    body: {},
    headers: {
      'x-forwarded-for': ''
    }
  };
  this.params = {};
  this.cookies = {
    set: sinon.stub()
  };
  this.body = {};
  this.query = {};

  this.validatedData = {};
};


FakeContext.prototype = {

  render: function() {
    return new Promise(resolve => {
      this._renderArgs.push(arguments);
      resolve(this._renderArgs);
    });
  },


  getLastRenderArgs: function() {
    return this._renderArgs[this._renderArgs.length - 1];
  },


  getLastRenderData: function() {
    return this.getLastRenderArgs()[1];
  },


  getLastRenderPath: function() {
    return this.getLastRenderArgs()[0];
  },


  setValidatedData: function(validatedData) {
    this.request.validatedData = validatedData;
  },


  setRequestBody: function(requestBody) {
    this.request.body = requestBody;
  },


  setParamsBody: function(paramsBody) {
    this.params = paramsBody;
  }

};

FakeContext.create = function() {
  return new FakeContext(arguments);
};

module.exports = FakeContext;
