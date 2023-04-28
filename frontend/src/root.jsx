import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Root() {
  return (
    <div>
      <header className="sticky top-0 z-10">
        <Navbar />
      </header>
      <section>
        <Outlet />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
