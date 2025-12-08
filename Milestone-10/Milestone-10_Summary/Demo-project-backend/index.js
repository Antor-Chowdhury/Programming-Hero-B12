const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const port = 3000;

const app = express();
app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://missionscic12:OqRhTQwCvUGe3aJt@cluster0.enqqoua.mongodb.net/?appName=Cluster0";

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
    await client.connect();

    // database connection
    const database = client.db("addPlant");
    const addPlants = database.collection("plants");

    // post or save plants to DB
    app.post("/plants", async (req, res) => {
      const data = req.body;
      const date = new Date();
      data.createdAt = date;
      console.log(data);
      const result = await addPlants.insertOne(data);
      res.send(result);
    });

    // Get plants from DB
    app.get("/plants", async (req, res) => {
      const result = await addPlants.find().toArray();
      res.send(result);
    });

    app.get("/plants/:id", async (req, res) => {
      const plantId = req.params;
      console.log(plantId);

      const query = { _id: new ObjectId(plantId) };
      const result = await addPlants.findOne(query);
      res.send(result);
    });

    // My Plants section using Query

    app.get("/my-plants", async (req, res) => {
      const { email } = req.query;

      const query = { email: email };
      const result = await addPlants.find(query).toArray();
      res.send(result);
    });

    // updating the plants
    app.put("/update/:id", async (req, res) => {
      const data = req.body;
      const id = req.params;
      const query = { _id: new ObjectId(id) };

      const updatePlants = {
        $set: data,
      };

      const result = await addPlants.updateOne(query, updatePlants);
      res.send(result);
    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello, Developers");
});

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
