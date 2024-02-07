import Footer from "components/Footer";
import Navbar from "components/Navbar";
import ScrollButton from "components/ScrollButton";
import { Route, Routes } from "react-router-dom";
import privateRoutes from "routes";

function App() {
  return (
    <>
      <ScrollButton />
      <Navbar />
      <Routes>
        {privateRoutes.map(route => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
