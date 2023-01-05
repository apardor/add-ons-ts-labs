import express, { Application } from 'express';
import router from './router';
import morgan from 'morgan';
import { protect } from './modules/auth';
import { createNewUser, signin } from './handlers/user';

const app: Application = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', protect, router);
app.post('/user', createNewUser);
app.post('/signin', signin)

export default app;