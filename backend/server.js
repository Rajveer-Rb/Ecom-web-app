// const express = require('express')
// const dontenv = require('dotenv')
// const { MongoClient } = require('mongodb');
// const bodyParser = require('body-parser')
// const cors = require('cors')

// dontenv.config()


// // Connection URL
// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);

// // Database Name
// const dbName = 'Ecommerce';
// const app = express()
// // console.log(process.env.MONGO_URI) 
// const port = 3000
// app.use(bodyParser.json())
// app.use(cors())

// client.connect(); // await

// // Get the products
// app.get('/', async (req, res) => {
//     const db = client.db(dbName);
//     const collection = db.collection('products');
//     const findResult = await collection.find({}).toArray();
//     res.json(findResult)
// })

// // save the products
// app.post('/', async (req, res) => {
//     const product = req.body
//     const db = client.db(dbName);
//     const collection = db.collection('products');
//     const findResult = await collection.insertOne(product);
//     res.send({success: true, result: findResult})
// })

// // remove a product by id
// app.delete('/', async (req, res) => {
//     const product = req.body
//     const db = client.db(dbName);
//     const collection = db.collection('products');
//     const findResult = await collection.deleteOne(product);
//     res.send({success: true, result: findResult})
// })


// app.listen(port, () => {
//     console.log(`Example app listening on http://localhost:${port}`)
// })

const express = require('express');
const dotenv = require('dotenv');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');
const cors = require('cors');

// Load environment variables
dotenv.config();

// Connection URL and Database Name
const url = process.env.MONGO_URI || 'mongodb://localhost:27017';
const dbName = 'Ecommerce';

// Initialize Express app
const app = express();
const port = process.env.PORT || 3000;

// middlewares
app.use(bodyParser.json());
app.use(cors());

let db;
let client;

// Function to connect to MongoDB
const connectToMongoDB = async () => {
    try {
        client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        db = client.db(dbName);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
        process.exit(1); // Exit the process with a failure code
    }
};

// Call the function to connect to MongoDB
connectToMongoDB();

// Fetch the products
app.get('/', async (req, res) => {
    try {
        const collection = db.collection('products');
        const products = await collection.find({}).toArray();
        res.json(products);
    } catch (error) {
        console.error("Failed to fetch products:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Save a product
app.post('/', async (req, res) => {
    try {
        const product = req.body;
        const collection = db.collection('products');
        const result = await collection.insertOne(product);
        res.json({ success: true, result });
    } catch (error) {
        console.error("Failed to save product:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Remove a product by id
app.delete('/', async (req, res) => {
    try {
        const product = req.body;
        const collection = db.collection('products');
        const result = await collection.deleteOne({ id: product.id });
        res.json({ success: true, result });
    } catch (error) {
        console.error("Failed to delete product:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Fetch the cart
app.get('/cart', async (req, res) => {
    try {
        const collection = db.collection('carts');
        const cart = await collection.findOne({ userId: "default" });
        res.json(cart ? cart.items : {});
    } catch (error) {
        console.error("Failed to fetch cart:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Save the cart
app.post('/cart', async (req, res) => {
    try {
        const cartItems = req.body;
        const collection = db.collection('carts');
        const result = await collection.updateOne(
            { userId: "default" },
            { $set: { items: cartItems } },
            { upsert: true }
        );
        res.json({ success: true, result });
    } catch (error) {
        console.error("Failed to save cart:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
