import { NavLink } from "react-router-dom";
import { IoBarChartSharp } from "react-icons/io5";
import { MdQueryStats } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
// import links from "../utils/links";

const NavLinks = ({ toggleSidebar }) => {
  return (
    <div className="nav-links">
      {/* {links.map(({ text, path, id, icon }) => {
              return (
                <NavLink
                  to={path}
                  className={({ isActive }) => {
                    return isActive ? "nav-link active" : "nav-link";
                  }}
                  key={id}
                  onClick={toggleSidebar}
                >
                  <span className="icon">{icon}</span>
                  {text}
                </NavLink>
              );
            })} */}

      <NavLink
        to="/"
        end
        className={({ isActive }) => {
          return isActive ? "nav-link active" : "nav-link";
        }}
        onClick={toggleSidebar}
      >
        <span className="icon">
          <IoBarChartSharp />
        </span>
        stats
      </NavLink>
      <NavLink
        to="all-jobs"
        end
        className={({ isActive }) => {
          return isActive ? "nav-link active" : "nav-link";
        }}
        onClick={toggleSidebar}
      >
        <span className="icon">
          <MdQueryStats />
        </span>
        all-jobs
      </NavLink>
      <NavLink
        to="add-job"
        end
        className={({ isActive }) => {
          return isActive ? "nav-link active" : "nav-link";
        }}
        onClick={toggleSidebar}
      >
        <span className="icon">
          <FaWpforms />
        </span>
        add-job
      </NavLink>
      <NavLink
        to="profile"
        end
        className={({ isActive }) => {
          return isActive ? "nav-link active" : "nav-link";
        }}
        onClick={toggleSidebar}
      >
        <span className="icon">
          <ImProfile />
        </span>
        profile
      </NavLink>
    </div>
  );
};
export default NavLinks;
