import PropTypes from "prop-types";

const Cart = ({ newfish, handleDelete }) => {
  return (
    <div>
      <h3 className="text-2xl my-4 font-black">Thanks For Visiting Us🥰🥰</h3>
      {newfish.map((fish) => (
        <div className="" key={fish.ID}>
          <div className="shadow-lg flex justify-between px-2 items-center py-4 my-3 space-y-4 bg-white text-black">
            <div className="flex items-center gap-3 ">
              <div>
                <img className="w-20" src={fish.image} alt="" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold">{fish.name}</h3>
                <p className="font-semibold border-dashed">
                  Price: {fish.price}
                </p>
              </div>
            </div>
            <div>
              <button onClick={() => handleDelete(fish.ID, fish.price)} className="btn btn-error px-9 text-white">Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

Cart.propTypes = {
  newfish: PropTypes.array,
  handleDelete: PropTypes.func
};

export default Cart;
