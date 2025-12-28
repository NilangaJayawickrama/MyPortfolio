import './App.css';
import Navigation from "presentation/components/Navigation";
import Home from "presentation/pages/home/Home";
import Footer from "presentation/components/Footer";

function App() {
  return (
    <div>
      <Navigation />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
