"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const subjectController_1 = __importDefault(require("../controllers/subjectController"));
const router = (0, express_1.Router)();
router.get('/', subjectController_1.default.getSubjects);
router.post('/', subjectController_1.default.setSubjects);
router.put('/:id', subjectController_1.default.updateSubjects);
router.delete('/:id', subjectController_1.default.deleteSubjects);
exports.default = router;
