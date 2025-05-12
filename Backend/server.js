import app from './src/app.js'; // include .js extension
import dotenv from 'dotenv';

// server start
app.listen(3000,()=>
{
    console.log('Server is running on http://localhost:3000')
})