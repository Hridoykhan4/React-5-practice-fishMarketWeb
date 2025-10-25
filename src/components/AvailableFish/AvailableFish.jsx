import PropTypes from "prop-types";

import { useEffect, useState } from "react";
import SingleFish from "../SingleFish/SingleFish";
import { getStoredItems } from "../Utils/localStorage";

const AvailableFish = ({ handleAddToCart, setNewFish, setPrice }) => {
  const [fishes, setFishes] = useState([]);
  const [loadSpinner, setLoadSpinner] = useState(false);
  const [tempFish, setTempFish] = useState([]);
  useEffect(() => {
    setLoadSpinner(true);
    fetch("fish.json")
      .then((res) => res.json())
      .then((data) => {
        setFishes(data);
        setTempFish(data);
        setLoadSpinner(false);
      });
  }, []);

  useEffect(() => {
    if (tempFish.length) {
      const storedItems = getStoredItems();

      const matchedFishes = tempFish.filter((fish) =>
        storedItems.includes(fish.ID)
      );

      if (matchedFishes.length) {
        const totalPrice = matchedFishes.reduce(
          (sum, fish) => sum + fish.price,
          0
        );
        setNewFish(matchedFishes);
        setPrice(totalPrice);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tempFish]);

  const handleSearch = (e) => {
    const target = e.target.value;
    let filtered = [];
    if (target) {
      for (const e of tempFish) {
        if (e.name.toLowerCase().includes(target.toLowerCase())) {
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
      {loadSpinner && (
        <div className="text-center">
          <span className="loading w-20 loading-spinner"></span>
        </div>
      )}

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
