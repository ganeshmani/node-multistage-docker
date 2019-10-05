import { Router } from 'express';
import UserModel from './Model';

const router = Router();

router.get('/',(req,res) => {
    res.send("Working");
})

router.post('/',async(req,res) => {
    const userName = req.body.userName;
    const email = req.body.email;

    try {

        const userCollection = await UserModel.insertUser(userName,email);

        res.send({
            status : 200,
            message : 'User Created'
        })

    }
    catch(e) {
        console.error(e);
        res.send({
            status : 500,
            message : e
        });
    }
})

router.get('/all',async(req,res) => {

    try {

        const userCollection = await UserModel.getAllUsers();

        res.send({
            status : 200,
            data : userCollection,
            message : 'Success'
        })

    }
    catch(e){
        console.error(e);

        res.send({
            status : 500,
            message : e
        })
    }
})

    export default router