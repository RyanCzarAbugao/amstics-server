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

const corsOptions = {
  origin: [
    'http://localhost:5000', // Allow requests from localhost during development
    'https://amstics-server.onrender.com',
    'http://amstics-server.onrender.com',
    'https://iridescent-truffle-570beb.netlify.app',
    'http://iridescent-truffle-570beb.netlify.app'
  ],
  credentials: true, // Allow sending cookies and authentication headers
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'UPDATE'] // Allow specified HTTP methods
};

app.options('*', cors(corsOptions)); // Enable preflight requests for all routes


app.use((req, res, next) => {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'https://iridescent-truffle-570beb.netlify.app');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  // Pass to next layer of middleware
  next();
});

app.use(cors(corsOptions));

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