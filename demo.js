const mongoose = require("mongoose");

const connString = 'mongodb+srv://user_pradhan:TVI1DCfplDiuBLJw@cluster0.5kgs2.mongodb.net/userDB?retryWrites=true&w=majority';

mongoose.connect(connString, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => console.log('db connected...'))
    .catch(err => console.error(err));

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    phNo: String,
    documents: {
        type : [String],
        default : []
    }
    // healthcard_url: String
});

const UserSchema = new mongoose.model("User", userSchema);


async function getData() {
    const userdetails = await UserSchema.find({email : 'pp1@g.com'});
    console.log(userdetails[0].documents)
}

getData();