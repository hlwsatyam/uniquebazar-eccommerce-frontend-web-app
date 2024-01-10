// Admin.js

import React, { useState, useEffect } from "react";
import axios from "axios";

const Admin = () => {
  const [formData, setFormData] = useState({
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzA0Nzg0MjY4LCJleHAiOjE3MTMzMzc4Njh9.7gYxQQpfGEFimZtdOhPfS0eJduGGjaHN460AWlA3jUc",
    product_brand: "",
    product_title: "",
    discount: "",
    real_price: "",
    discount_price: "",
    sold_by: "",
    feature_details: "",
    category: "dry_fruits",
    description: "",
    product_information: "",
    return_time: "",
    client_id: "",
    images: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleImageChange = (e) => {
    const newImages = Array.from(e.target.files);
    setFormData((prevFormData) => ({
      ...prevFormData,
      images: [...prevFormData.images, ...newImages],
    }));
  };

  const removeImage = (index) => {
    const updatedImages = formData.images.filter((_, i) => i !== index);
    setFormData((prevFormData) => ({ ...prevFormData, images: updatedImages }));
  };

  const uploadProduct = async () => {
    const { images, ...restFormData } = formData;
    const formDataToSend = new FormData();

    Object.entries(restFormData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    images.forEach((image, index) => {
      formDataToSend.append(`images`, image);
    });
    console.log(...formDataToSend);
    try {
      const response = await axios.post(
        `http://localhost:8800/api/uploadProduct`,
        formDataToSend
      );

      console.log(response.data);
      alert("Product uploaded successfully!");

      // Clear form data after successful upload
      setFormData({
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzA0NzgxNjQwLCJleHAiOjE3MTMzMzUyNDB9.70hDzVEaE4RP_5mVe-O4SKhpTF9tDx0s-IF2bnHaAdE",
        product_brand: "",
        product_title: "",
        discount: "",
        category: "dry_fruits",
        real_price: "",
        discount_price: "",
        sold_by: "",
        feature_details: "",
        description: "",
        product_information: "",
        return_time: "",
        client_id: "",
        images: [],
      });
    } catch (error) {
      console.error("Error uploading product:", error.message);
      alert("Error uploading product. Please check the console for details.");
    }
  };

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Product Upload</h1>
      <form className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
        {Object.entries(formData).map(([key, value]) => (
          <div key={key} className="mb-4">
            <label
              htmlFor={key}
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              {key.replace(/_/g, " ").toUpperCase()}:
            </label>
            {key === "images" ? (
              <div>
                <input
                  type="file"
                  id={key}
                  name="productpic"
                  accept="image/*"
                  onChange={handleImageChange}
                  required
                  className="border border-gray-300 p-2 w-full"
                  multiple
                />
                {formData.images.map((image, index) => (
                  <div key={index} className="mb-2 flex items-center">
                    <img
                      src={URL.createObjectURL(image)}
                      alt={`Image ${index + 1}`}
                      className="mr-2 max-w-16 h-auto"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <input
                type={typeof value === "number" ? "number" : "text"}
                id={key}
                name={key}
                value={value}
                onChange={handleInputChange}
                required
                className="border border-gray-300 p-2 w-full focus:outline-none focus:ring focus:border-blue-300"
              />
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={uploadProduct}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300"
        >
          Upload Product
        </button>
      </form>
    </div>
  );
};

export default Admin;
