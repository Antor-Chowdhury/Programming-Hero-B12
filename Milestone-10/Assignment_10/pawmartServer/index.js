const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const express = require("express");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());

const uri = process.env.MONGO_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // await client.connect();

    // creating collection for Listings Data
    const database = client.db("PawMart");
    const petListings = database.collection("listings");
    const orderCollections = database.collection("orders");

    // saving the listing data to db using POST
    app.post("/listings", async (req, res) => {
      const data = req.body;
      // console.log(data);

      const result = await petListings.insertOne(data);
      res.send(result); // sending the result to frontend also.
    });

    // Get Listings from Database
    app.get("/listings", async (req, res) => {
      const result = await petListings.find().toArray();
      res.send(result);
    });

    // finding a single data to show it's details
    app.get("/listings/:id", async (req, res) => {
      const { id } = req.params;
      // console.log(id);

      const query = { _id: new ObjectId(id) };
      const result = await petListings.findOne(query);
      res.send(result);
    });

    // finding recent-listing
    app.get("/recent-listings", async (req, res) => {
      const result = await petListings
        .find()
        .sort({ _id: -1 })
        .limit(6)
        .toArray();

      res.send(result);
    });

    // For my-listing
    app.get("/my-listings", async (req, res) => {
      const { clientEmail } = req.query; // getting the logged in user email from frontend
      console.log(clientEmail);

      const query = { email: clientEmail };
      const result = await petListings.find(query).toArray();
      res.send(result);
    });

    // updating the List using PUT
    app.put("/update/:id", async (req, res) => {
      const data = req.body;
      const { id } = req.params;
      const query = { _id: new ObjectId(id) };

      const updatedList = {
        $set: data,
      };
      const result = await petListings.updateOne(query, updatedList);
      res.send(result);
    });

    // deleting a data from the db using DELETE
    app.delete("/delete/:id", async (req, res) => {
      const { id } = req.params;
      const query = { _id: new ObjectId(id) };

      const result = await petListings.deleteOne(query);
      res.send(result);
    });

    // order with POST
    app.post("/orders", async (req, res) => {
      const data = req.body;
      // console.log(data);
      const result = await orderCollections.insertOne(data);
      res.status(201).send(result);
    });

    app.get("/orders", async (req, res) => {
      const email = req.query.email;
      let query = {};
      if (email) {
        query = { email };
      }

      const result = await orderCollections.find(query).toArray();
      res.status(200).send(result);
    });

    // await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello from backend");
});

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
