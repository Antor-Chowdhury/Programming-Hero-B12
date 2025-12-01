import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useParams } from "react-router";
import axios from "axios";

const UpdatePlants = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [plant, setPlant] = useState();
  const [category, setCategory] = useState(plant?.category);
  const [careLevel, setCareLevel] = useState(plant?.careLevel);

  useEffect(() => {
    axios.get(`http://localhost:3000/plants/${id}`).then((res) => {
      setPlant(res.data);
      setCategory(res.data.category);
      setCareLevel(res.data.careLevel);
    });
  }, [id]);

  console.log(plant);

  const handleUpdate = () => {};

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-md my-10">
      <h2 className="text-2xl font-bold mb-6 text-green-700">Update Plant</h2>
      <form onSubmit={handleUpdate} className="space-y-4">
        {/* Plant ID */}
        <div>
          <label className="block mb-1 font-semibold">Plant ID</label>
          <input
            defaultValue={plant?.plantId}
            type="number"
            name="plantId"
            className="w-full border rounded-md p-2"
            placeholder="Enter plant ID"
          />
        </div>

        {/* Plant Name */}
        <div>
          <label className="block mb-1 font-semibold">Plant Name</label>
          <input
            defaultValue={plant?.plantName}
            type="text"
            name="plantName"
            className="w-full border rounded-md p-2"
            placeholder="Enter plant name"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block mb-1 font-semibold">Category</label>
          <select
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            name="category"
            className="w-full border rounded-md p-2"
          >
            <option value="">Select category</option>
            <option value="Air Purifier">Air Purifier</option>
            <option value="Medicinal">Medicinal</option>
            <option value="Decorative">Decorative</option>
            <option value="Flowering">Flowering</option>
            <option value="Succulent">Succulent</option>
            <option value="Hanging Plant">Hanging Plant</option>
            <option value="Indoor Palm">Indoor Palm</option>
            <option value="Low Light">Low Light</option>
            <option value="Premium Decorative">Premium Decorative</option>
          </select>
        </div>

        {/* Price */}
        <div>
          <label className="block mb-1 font-semibold">Price ($)</label>
          <input
            defaultValue={plant?.price}
            type="number"
            step="0.01"
            name="price"
            className="w-full border rounded-md p-2"
            placeholder="Enter price"
          />
        </div>

        {/* Rating */}
        <div>
          <label className="block mb-1 font-semibold">Rating</label>
          <input
            defaultValue={plant?.rating}
            type="number"
            step="0.1"
            name="rating"
            className="w-full border rounded-md p-2"
            placeholder="Enter rating"
          />
        </div>

        {/* Available Stock */}
        <div>
          <label className="block mb-1 font-semibold">Available Stock</label>
          <input
            defaultValue={plant?.availableStock}
            type="number"
            name="availableStock"
            className="w-full border rounded-md p-2"
            placeholder="Enter stock quantity"
          />
        </div>

        {/* Care Level */}
        <div>
          <label className="block mb-1 font-semibold">Care Level</label>
          <select
            onChange={(e) => setCareLevel(e.target.value)}
            value={careLevel}
            name="careLevel"
            className="w-full border rounded-md p-2"
          >
            <option value="">Select care level</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 font-semibold">Description</label>
          <textarea
            defaultValue={plant?.description}
            name="description"
            className="w-full border rounded-md p-2"
            rows="3"
            placeholder="Enter description"
          />
        </div>

        {/* Image URL */}
        <div>
          <label className="block mb-1 font-semibold">Image URL</label>
          <input
            defaultValue={plant?.image}
            type="text"
            name="image"
            className="w-full border rounded-md p-2"
            placeholder="Enter image URL"
          />
        </div>

        {/* Provider Email */}
        <div>
          <label className="block mb-1 font-semibold">Provider Email</label>
          <input
            value={user?.email}
            type="email"
            name="email"
            readOnly
            className="w-full border rounded-md p-2"
            placeholder="Enter provider email"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-green-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdatePlants;
