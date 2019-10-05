import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import 'dotenv/config';
const app = express();
import userRoutes from './userRouter';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

mongoose.connect(`mongodb://mongo:27017/multistage`,{ useNewUrlParser : true ,useUnifiedTopology : true}).then((res) =>{

     console.log("MongoDB Connected Successfully");

     app.get('/',(req,res) => {
        res.send("Home Route");
     })

     app.use('/user',userRoutes);

    const PORT = process.env.PORT;

    app.listen(PORT,() => {
        console.log(`server is running in port ${PORT}`)
    })

})
.catch((err) => {
    console.error(err);
})
