import dotenv from 'dotenv';
dotenv.config();

import app from './app';
import './db';

import "./models/Video";
import "./models/User";

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log('✅ Its connected successfully'))
