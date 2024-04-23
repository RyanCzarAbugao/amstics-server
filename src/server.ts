import express from 'express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import colors from 'colors';
import 'dotenv/config';
import connectDB from './db/dbConfig';
import errorHandler from './middleware/errorMiddleware';
import subjectRoutes from './routes/subjectRoutes';
import studentRoutes from './routes/studentRoutes';
import scheduleRoutes from './routes/scheduleRoutes';
import facultyRoutes from './routes/facultyRoutes';
import attendanceRoutes from './routes/attendanceRoutes';

connectDB();

const app = express();
const port = process.env.PORT || 5000;
const host = process.env.HOST || 'http://localhost';

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

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

const openapiSpecification = swaggerJSDoc(options);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification));
app.use('/api/subjects', subjectRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/schedules', scheduleRoutes);
app.use('/api/faculties', facultyRoutes);
app.use('/api/attendances', attendanceRoutes);

app.use(errorHandler);

app.listen(port, () => {
  console.log(colors.cyan.underline(`Server running on: ${host}:${port}`));
});