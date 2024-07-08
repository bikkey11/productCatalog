import About from "./about";
import Contact from "./contact";
import ProductCard from "./productCard";
import Footer from "./footer";
import Navbar from "./navbar";

function HomePage() {
  return (
   <div>
    <Navbar/>
    <ProductCard/>
    <About/>
    <Contact/>
    <Footer/>
   </div>
  );
}

export default HomePage;
