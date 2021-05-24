const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://harshad:Harshad123@cluster0.hljdy.mongodb.net/musicdb?retryWrites=true&w=majority", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected")
}).catch((e) => {
    console.log("not connected")
})
