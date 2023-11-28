import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { FaSearch } from "react-icons/fa";

const Header = () => {
  const [searchTerm, setSerchTerm] = useState("");
  const navigate = useNavigate("/");
  const { currentUser } = useSelector((state) => state.users);

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSerchTerm(searchTermFromUrl);
    }
  }, [location.search]);
  return (
    <div className="bg-slate-300 shadow-md ">
      <div className="flex justify-between items-center max-w-6xl mx-auto  p-3">
        <h1 className=" font-bold text-sm sm:text-xl flex flex-wrap">
          <span className="text-blue-700">REal</span>
          <span className="text-blue-700">Estate</span>
        </h1>
        <form
          onSubmit={handleSubmit}
          className="bg-slate-100 flex items-center p-3 rounded-lg"
        >
          <input
            type=" text"
            placeholder="search..."
            className="bg-transparent focus:outline-none  sm:w-64"
            value={searchTerm}
            onChange={(e) => setSerchTerm(e.target.value)}
          ></input>
          <button>
            <FaSearch className="text-slate-600" />
          </button>
        </form>
        <ul className="flex gap-5">
          <Link to="/">
            <li className="">Home</li>{" "}
          </Link>
          <Link to="/about">
            <li className="">About</li>{" "}
          </Link>

          {currentUser ? (
            <Link to="/profile">
              <img
                src={currentUser.photo || currentUser?.avator}
                alt="profile"
                className="rounded-full w-10 h-9 object-cover"
              />
            </Link>
          ) : (
            <>
              <Link to="/login">
                <li className="">Login</li>{" "}
              </Link>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
