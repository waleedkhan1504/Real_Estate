import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Profile from "./pages/Profile";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import About from "./pages/About";
import PrivateComponent from "./components/PrivateComponent";
import CreateListing from "./pages/Listing/CreateListing";
import Listing from "./pages/Listing/Listing";
import UpdateListing from "./pages/Listing/UpdateListing";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<PrivateComponent />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/listing/:listingId" element={<Listing />} />
            <Route path="/createListing" element={<CreateListing />} />
            <Route
              path="/update-listing/:listingId"
              element={<UpdateListing />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
