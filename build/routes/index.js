'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var express_1 = require('express');
var imageprocessing_1 = __importDefault(require('./api/imageprocessing'));
var routes = (0, express_1.Router)();
routes.use('/images', imageprocessing_1.default);
routes.get('/', function (req, res) {
  res.send(
    '<h1 style="text-align:center"> Welcome to image processing APi  </h1><p style="text-align:center">Listening at <code><a href="/images" style="text-align:center">/images</a></code> Must include at least a valid filename. You can use both width and height to set the size it is optional...</p><p style="text-align:center">For Example:<ul style="text-align:center"><li><a href="/images?filename=fjord">/api/images?filename=fjord</a></li><li><a href="/images?filename=fjord&width=100&height=100">/images?filename=fjord&width=100&height=100</a></li></ul></p>'
  );
});
exports.default = routes;
