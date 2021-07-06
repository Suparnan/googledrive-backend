import express from "express";
import mongoose from "mongoose";
import { User } from "./modules/Users.js"

const app = express();
const PORT = process.env.PORT || 4080;

const url = "mongodb+srv://Suparnan:Guvi@123@cluster0.clkv3.mongodb.net/backend";
mongoose.connect(url, {useNewUrlParser: true});
const con = mongoose.connection;
con.on('open',() => console.log("Database Connected"));

app.use(express.json());

app.get('/', (request, response) => {
    response.send('Hello Guvi')
});

app.get('/users', async (request, response) => {
    const stu = await User.find({});
    console.log(stu);
    response.send(stu);

});

app.post('/users/', async (request,response) => {
    const addUser = request.body;
    console.log(addUser);

    // USERS.push(addUser);
    // console.log(USERS);
    //  The below code is validation

    const user =new User({
        id: addUser.id,
        username: addUser.username,
        firstname: addUser.firstname,
        lastname: addUser.lastname,
        password: addUser.password,
    });

    try{
    const newUser = await user.save()
    response.send(addUser);
    } catch (err){
        response.status(500);
        response.send(err);
    }
});


    app.listen(PORT,() => {
        console.log("The Express Server started Successfully",+PORT);
    });