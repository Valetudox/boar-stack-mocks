'use strict';

let sinon = require('sinon');

let AppMock = function() {
  this.use = sinon.stub();
};

AppMock.create = function() {
  return new AppMock;
};

module.exports = AppMock;
