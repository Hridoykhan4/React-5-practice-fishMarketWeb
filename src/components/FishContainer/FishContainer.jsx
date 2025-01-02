import PropTypes from "prop-types";
import Cart from "../Cart/Cart";
import AvailableFish from "../AvailableFish/AvailableFish";

const FishContainer = ({ isActive, handleActiveState, handleAddToCart, newfish }) => {
  return (
    <div className="w-11/12 mb-5 mx-auto">
      <div className=" flex justify-between items-center">
        <h3 id="all-fish" className="font-bold text-3xl text-black ">All Fishes</h3>
        <div className="flex gap-5">
          <button
            onClick={() => handleActiveState("available")}
            className={`${isActive ? "btn-primary btn" : "btn"}`}
          >
            Available
          </button>
          <button
            onClick={() => handleActiveState("false")}
            className={`${isActive ? "btn" : "btn btn-primary"}`}
          >
            Cart List ({newfish.length})
          </button>
        </div>
      </div>

     {
        isActive ? <AvailableFish handleAddToCart={handleAddToCart}></AvailableFish> : <Cart newfish={newfish}></Cart>
     }


    </div>
  );
};

FishContainer.propTypes = {
  isActive: PropTypes.bool,
  handleActiveState: PropTypes.func,
  handleAddToCart: PropTypes.func,
  newfish: PropTypes.array
};

export default FishContainer;
