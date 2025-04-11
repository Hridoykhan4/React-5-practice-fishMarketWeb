import PropTypes from "prop-types";

import { useEffect, useState } from "react";
import SingleFish from "../SingleFish/SingleFish";
import { getStoredItems } from "../Utils/localStorage";

const AvailableFish = ({ handleAddToCart, setNewFish, setPrice }) => {
  const [fishes, setFishes] = useState([]);
  const [tempFish, setTempFish] = useState([]);
  useEffect(() => {
    document.getElementById("spinner-control").classList.remove("hidden");
    fetch("fish.json")
      .then((res) => res.json())
      .then((data) => {
        setFishes(data);
        setTempFish(data);
      });
  }, []);

  useEffect(() => {
    if (tempFish.length) {
      const storedItems = getStoredItems();
      console.log(storedItems)
      const savedItems = [];
      let price = 0;
      for (const element of storedItems) {
        const fish = fishes.find((fish) => fish.ID === element);
        price += fish.price;
        savedItems.push(fish);
      }
      setNewFish(savedItems);
      setPrice(price);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tempFish]);

  const handleSearch = (e) => {
    const targetValue = e.target.value;
    if (targetValue) {
      let filtered = [];
      for (const e of tempFish) {
        if (e.name.toLowerCase().includes(targetValue.toLowerCase())) {
          filtered.push(e);
        }
      }
      if (filtered) {
        setFishes(filtered);
      }
    } else {
      setFishes(tempFish);
    }
  };

  return (
    <>
      <input
        type="text"
        onKeyUp={(e) => handleSearch(e)}
        placeholder="Search Fish"
        className="input input-bordered mt-5"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-5">
        {fishes.map((fish) => (
          <SingleFish
            handleAddToCart={handleAddToCart}
            key={fish.ID}
            fish={fish}
          ></SingleFish>
        ))}
      </div>
    </>
  );
};

AvailableFish.propTypes = {
  handleAddToCart: PropTypes.func,
  setNewFish: PropTypes.func,
  setPrice: PropTypes.func,
};

export default AvailableFish;
