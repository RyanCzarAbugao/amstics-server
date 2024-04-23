"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routineController_1 = __importDefault(require("../controllers/routineController"));
const router = (0, express_1.Router)();
router.get('/', routineController_1.default.getRoutines);
router.post('/', routineController_1.default.setRoutines);
router.put('/:id', routineController_1.default.updateRoutines);
router.delete('/:id', routineController_1.default.deleteRoutines);
exports.default = router;
