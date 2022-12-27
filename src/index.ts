import express from 'express';
import mongoose,  {ConnectOptions} from 'mongoose';

import { json } from 'body-parser';
import { todoRouter } from './routes/todo';

const app = express();
app.use(json());
app.use(todoRouter);

mongoose.connect('mongodb://localhost:27017/todo', {
    useNewUrlParser: true,
    useUnifiedTopology: true
    } as ConnectOptions)
    .then((db) => {
    console.log("Database Connected Successfuly.");
    })
    .catch((err) => {
    console.log("Error Connectiong to the Database");
});


app.listen(3000, () => {
    console.log('Server runing on port 3000');
})