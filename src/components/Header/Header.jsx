// import PropTypes from 'prop-types'

const Header = () => {
  return (
    <div>
        <div className="navbar sticky top-0 bg-white shadow-lg backdrop-blur-lg p-3">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Katla</a></li>
      
        <li><a>Rui</a></li>
        <li><a>Kachki</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl"><img className="w-10 object-cover shrink-0 rounded-full" src={'./logo.webp'} alt="" /> FishPalace Enterprice</a>
  </div>
  <div className="navbar-center btn hidden lg:flex">
        Buy Now
  </div>
  <div className="navbar-end">
  <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div>
  </div>
</div>
    </div>
  )
}

Header.propTypes = {}

export default Header