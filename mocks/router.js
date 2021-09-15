'use strict';

let sinon = require('sinon');

let RouterMock = function() {
  this.get = sinon.stub();
  this.post = sinon.stub();
  this.put = sinon.stub();
  this.patch = sinon.stub();
  this.delete = sinon.stub();
};

RouterMock.create = function() {
  return new RouterMock;
};

module.exports = RouterMock;
