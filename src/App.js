import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Routes, Route } from 'react-router-dom';
import Reservation from "./pages/Reservation";
import About from "./pages/About";
import Bar from "./pages/Bar"
import Gallery from "./pages/Gallery"
import Menu from "./pages/Menu";
import Location from "./pages/Location";
import Signup from "./pages/Signup";
import Private from "./pages/Private-event";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import Home from "./pages/home/Home";
import Error from "./pages/Error";
import Beverage from "./pages/menu/Beverage";
import Dessert from "./pages/menu/Dessert";
import Dinner from "./pages/menu/Dinner";

function App() {
  return (
    <>
      <div className="text-center bg-[#030315] text-white scroll-smooth">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Reservation" element={<Reservation />} />
          <Route path="/about/" element={<About />} />
          <Route path="/bar" element={<Bar />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/location" element={<Location />} />
          <Route path="/private-event" element={<Private />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/menu" element={<Menu />}>
            <Route path="dessert" element={<Dessert />} />
            <Route path="" element={<Dinner />} />
            <Route path="beverage" element={<Beverage />} />
          </Route>
          <Route path="/*" element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
