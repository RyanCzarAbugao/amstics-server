"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const colors_1 = __importDefault(require("colors"));
require("dotenv/config");
const dbConfig_1 = __importDefault(require("./db/dbConfig"));
const errorMiddleware_1 = __importDefault(require("./middleware/errorMiddleware"));
const subjectRoutes_1 = __importDefault(require("./routes/subjectRoutes"));
const studentRoutes_1 = __importDefault(require("./routes/studentRoutes"));
const scheduleRoutes_1 = __importDefault(require("./routes/scheduleRoutes"));
const facultyRoutes_1 = __importDefault(require("./routes/facultyRoutes"));
const attendanceRoutes_1 = __importDefault(require("./routes/attendanceRoutes"));
(0, dbConfig_1.default)();
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
const host = process.env.HOST || 'http://localhost';
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'AMSTICS',
            version: '1.0.0',
        },
    },
    apis: ['./**/*.ts']
};
const openapiSpecification = (0, swagger_jsdoc_1.default)(options);
app.use('/docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(openapiSpecification));
app.use('/api/subjects', subjectRoutes_1.default);
app.use('/api/students', studentRoutes_1.default);
app.use('/api/schedules', scheduleRoutes_1.default);
app.use('/api/faculties', facultyRoutes_1.default);
app.use('/api/attendances', attendanceRoutes_1.default);
app.use(errorMiddleware_1.default);
app.listen(port, () => {
    console.log(colors_1.default.cyan.underline(`Server running on: ${host}:${port}`));
});
