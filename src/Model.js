import Mongoose from 'mongoose';

const userSchema = new Mongoose.Schema({
    userName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    }
});

class User {
    static getUserById(userId) {

        return this.findOne({
            _id : Mongoose.mongo.ObjectID(userId)
        }).exec();

    }

    static getAllUsers(){

        return this.find({}).exec();
    }

    static insertUser(userName,email) {

        const user= this({
            userName,
            email
        })

        return user.save();
    }
}

userSchema.loadClass(User);

export default Mongoose.model('User',userSchema);