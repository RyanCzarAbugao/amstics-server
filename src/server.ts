import express from 'express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import colors from 'colors';
import 'dotenv/config';
import connectDB from './db/dbConfig';
import cors from 'cors';
import errorHandler from './middleware/errorMiddleware';
import subjectRoutes from './routes/subjectRoutes';
import studentRoutes from './routes/studentRoutes';
import scheduleRoutes from './routes/scheduleRoutes';
import facultyRoutes from './routes/facultyRoutes';
import attendanceRoutes from './routes/attendanceRoutes';

connectDB();

const app = express();
app.use(function(req, res, next) {
  const allowedOrigins = ['http://localhost:5000', 'https://amstics-server.onrender.com', 'http://amstics-server.onrender.com'];
  const origin = req.headers.origin;
  res.setHeader('Access-Control-Allow-Origin', origin!);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-credentials", 'true');
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, UPDATE");
  next();
});

app.use(cors());

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

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});