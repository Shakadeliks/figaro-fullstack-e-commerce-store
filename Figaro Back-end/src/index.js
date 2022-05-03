const express = require('express');
const app = express();
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
// ROUTES
const userRoute = require('./routes/user');
const authRoute = require('./Routes/auth');
const productRoute = require('./Routes/product');
const cartRoute = require('./Routes/cart');
const orderRoute = require('./Routes/order');
const stripeRoute = require('./Routes/stripe');
const cors = require('cors');

//MIDDLEWARE


// environment variable 
dotenv.config();
//MONGODB CONNECTION 
// mongodb+srv://olwethumatiwana:<password>@figaro.nekq8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

const DbUrl = `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@figaro.nekq8.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`

mongoose.connect(DbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(process.env.PORT))
    .catch((error) => console.log(error));    


app.use(cors({
    origin: "*",
}));
app.use(bodyParser());
app.use('/api/auth', authRoute);
app.use("/api/checkout", stripeRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/cart", cartRoute);
app.use("/api/order", orderRoute);

