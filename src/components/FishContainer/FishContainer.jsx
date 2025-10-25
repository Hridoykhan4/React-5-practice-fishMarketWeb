import PropTypes from "prop-types";
import Cart from "../Cart/Cart";
import AvailableFish from "../AvailableFish/AvailableFish";

const FishContainer = ({
  isActive,
  handleActiveState,
  handleAddToCart,
  newFish,
  handleDelete,
  setNewFish,
  setPrice,
}) => {
  return (
    <div className="w-11/12 mb-5 mx-auto">
      <div className=" flex justify-between items-center">
        <h3 id="all-fish" className="font-bold text-xl md:text-3xl text-black ">
          All Fishes
        </h3>
        <div className="flex gap-5">
          <button
            onClick={() => handleActiveState("available")}
            className={`${
              isActive ? "btn-primary btn" : "btn"
            } duration-700 transition-all`}
          >
            Available
          </button>
          <button
            onClick={() => handleActiveState("false")}
            className={`${isActive ? "btn" : "btn btn-primary"} duration-500`}
          >
            Cart List ({newFish.length})
          </button>
        </div>
      </div>

      {isActive ? (
        <AvailableFish
          setPrice={setPrice}
          setNewFish={setNewFish}
          handleAddToCart={handleAddToCart}
        ></AvailableFish>
      ) : (
        <Cart
          isActive={isActive}
          handleDelete={handleDelete}
          handleActiveState={handleActiveState}
          newFish={newFish}
        ></Cart>
      )}
    </div>
  );
};

FishContainer.propTypes = {
  isActive: PropTypes.bool,
  handleActiveState: PropTypes.func,
  handleAddToCart: PropTypes.func,
  newFish: PropTypes.array,
  handleDelete: PropTypes.func,
  setNewFish: PropTypes.func,
  setPrice: PropTypes.func,
};

export default FishContainer;
