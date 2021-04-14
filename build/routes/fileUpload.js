"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
var HomePageRequest = require("./controllers/fileUpload").HomePageRequest;
router.get("/", HomePageRequest);
module.exports = router;
