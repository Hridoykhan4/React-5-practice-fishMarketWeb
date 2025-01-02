import PropTypes from "prop-types";

import { useEffect, useState } from "react";
import SingleFish from "../SingleFish/SingleFish";
import { getStoredItems } from "../Utils/localStorage";

const AvailableFish = ({ handleAddToCart, setNewFish, setPrice }) => {
  const [fishes, setFishes] = useState([]);
  useEffect(() => {
    document.getElementById('spinner-control').classList.remove('hidden')
    fetch("./fish.json")
      .then((res) => res.json())
      .then((data) => setFishes(data));
  }, []);

  useEffect(() => {
    if (fishes.length) {
      const storedItems = getStoredItems();
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
}, [fishes]);






  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-5">
      {fishes.map((fish) => (
        <SingleFish
          handleAddToCart={handleAddToCart}
          key={fish.ID}
          fish={fish}
        ></SingleFish>
      ))}
    </div>
  );
};

AvailableFish.propTypes = {
  handleAddToCart: PropTypes.func,
  setNewFish: PropTypes.func,
  setPrice: PropTypes.func,
};

export default AvailableFish;
