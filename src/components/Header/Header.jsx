import PropTypes from 'prop-types'
import { search } from '../Utils/search';
const Header = ({newfish, price}) => {
  return (
    <div className=" sticky top-0 z-20">
      <div className=" navbar shadow-lg backdrop-blur-lg p-3">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Katla</a>
              </li>

              <li>
                <a>Rui</a>
              </li>
              <li>
                <a>Kachki</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <img
              className="w-10 object-cover shrink-0 rounded-full"
              src={"./logo.webp"}
              alt=""
            />{" "}
            3 Star Fish Traders
          </a>
        </div>
        <div style={{boxShadow: '10px 10px 10px rgba(0,0,0,0.5)'}} className="navbar-center btn bg-black text-white ring shadow-lg px-10 hidden lg:flex font-bold text-xl">Cart : {newfish.length}</div>
        <div className="navbar-end">
          {/* <div className="form-control hidden md:flex" >
            <input id="search-box" onClick={() => search()}
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div> */}

          <button className='btn px-10 btn-error text-white'>Total: {price}</button>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
    newfish: PropTypes.array
};

export default Header;
