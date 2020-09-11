import dotenv from 'dotenv';

dotenv.config();

import express from 'express';
import app from './app';
import './db';

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log('✅ Its connected successfully'))
