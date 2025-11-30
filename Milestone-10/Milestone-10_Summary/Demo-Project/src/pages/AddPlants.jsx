import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";

const AddPlants = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const plantId = parseInt(form.plantId.value);
    const plantName = form.plantName.value;
    const category = form.category.value;
    const price = parseInt(form.price.value);
    const rating = parseInt(form.rating.value);
    const availableStock = parseInt(form.availableStock.value);
    const careLevel = form.careLevel.value;
    const description = form.description.value;
    const image = form.image.value;
    const email = form.email.value;

    const formData = {
      plantId,
      plantName,
      category,
      price,
      rating,
      availableStock,
      careLevel,
      description,
      image,
      email,
    };

    console.log(formData);

    // axios
    axios.post("http://localhost:3000/plants", formData).then((res) => {
      console.log(res);
    });

    // e.target.reset();
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-md my-10">
      <h2 className="text-2xl font-bold mb-6 text-green-700">
        Add / Edit Plant
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Plant ID */}
        <div>
          <label className="block mb-1 font-semibold">Plant ID</label>
          <input
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
            type="text"
            name="plantName"
            className="w-full border rounded-md p-2"
            placeholder="Enter plant name"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block mb-1 font-semibold">Category</label>
          <select name="category" className="w-full border rounded-md p-2">
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
            type="number"
            name="availableStock"
            className="w-full border rounded-md p-2"
            placeholder="Enter stock quantity"
          />
        </div>

        {/* Care Level */}
        <div>
          <label className="block mb-1 font-semibold">Care Level</label>
          <select name="careLevel" className="w-full border rounded-md p-2">
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

export default AddPlants;
