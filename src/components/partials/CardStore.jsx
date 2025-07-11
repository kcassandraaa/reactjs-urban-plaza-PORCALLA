import React from "react";
import { FaStore } from "react-icons/fa";

const CardStore = ({ image, alt, icon: Icon, store, description, location }) => {
  return (
    <>
      <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
        <img
          image src={image}
          className="w-full h-48 object-cover"
          alt={alt}
        ></img>
        <div className="p-6">
          <div className="flex items-center mb-2">
            <Icon className="text-blue-600 mr-2" />
            <h3 className="text-xl font-semibold">{store}</h3>
          </div>
          <p className="text-gray-600 mb-4">{description}</p>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
      </div>
    </>
  );
};

export default CardStore;
