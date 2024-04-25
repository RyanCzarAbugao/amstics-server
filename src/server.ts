import express from 'express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import colors from 'colors';
import 'dotenv/config';
import connectDB from './db/dbConfig';
import cors from 'cors';
import errorHandler from './middleware/errorMiddleware';
import studentRoutes from './routes/studentRoutes';
import routineRoutes from './routes/routineRoutes';
import attendanceRoutes from './routes/attendanceRoutes';

connectDB();

const app = express();

// const corsOptions = {
//   origin: [
//     '*',
//     'http://localhost:5000',
//     'http://localhost:4200',
//     'http://localhost:55089',
//     'https://amstics-server.onrender.com',
//     'http://amstics-server.onrender.com',
//     'https://iridescent-truffle-570beb.netlify.app',
//     'http://iridescent-truffle-570beb.netlify.app'
//   ],
//   credentials: true, // Allow sending cookies and authentication headers
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'UPDATE'] // Allow specified HTTP methods
// };

// app.options('*', cors(corsOptions)); // Enable preflight requests for all routes

// app.use(cors(corsOptions));
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
app.use('/api/students', studentRoutes);
app.use('/api/routines', routineRoutes);
app.use('/api/attendances', attendanceRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});