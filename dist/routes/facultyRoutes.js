"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const professorController_1 = __importDefault(require("../controllers/professorController"));
const router = (0, express_1.Router)();
router.get('/', professorController_1.default.getFaculties);
router.post('/', professorController_1.default.setFaculties);
router.put('/:id', professorController_1.default.updateFaculties);
router.delete('/:id', professorController_1.default.deleteFaculties);
exports.default = router;
