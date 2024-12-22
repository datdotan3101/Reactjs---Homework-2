import { useState } from "react";
import data from "./dataGlasses.json";

export default function Carousel() {
  const [glasses] = useState(data);

  const [selectedGlasses, setSelectedGlasses] = useState(null);

  const handleGlassesClick = (glass) => {
    setSelectedGlasses(glass);
  };

  return (
    <div className="container mx-auto">
      {/* Model Section */}
      <div className="relative flex justify-center items-center my-8">
        <div className="relative grid grid-cols-3">
          <img
            className="glass-image w-[300px]"
            src="./public/glassesImage/model.jpg"
            alt="model"
          />
          <div></div>
          <img
            className="w-[300px]"
            src="./public/glassesImage/model.jpg"
            alt=""
          />
          {/* Selected Glasses Overlay */}
          {selectedGlasses && (
            <img
              className="absolute top-[125px] left-[150px] w-[160px] opacity-50 transform -translate-x-1/2 -translate-y-1/2"
              src={selectedGlasses.url}
              alt={selectedGlasses.name}
            />
          )}
        </div>
      </div>

      {/* Glasses Selection */}
      <ul className="grid grid-cols-6 gap-4 mt-4">
        {glasses.map((glass) => (
          <li key={glass.id}>
            <button onClick={() => handleGlassesClick(glass)}>
              <img
                src={glass.url}
                alt={glass.name}
                className="w-full border rounded-md"
              />
            </button>
          </li>
        ))}
      </ul>

      {/* Glasses Info */}
      {selectedGlasses && (
        <div className="info-text-glass mt-4 text-center">
          <h3 className="text-lg font-semibold">{selectedGlasses.name}</h3>
          <p>{selectedGlasses.desc}</p>
          <p className="font-bold">${selectedGlasses.price}</p>
        </div>
      )}
    </div>
  );
}
