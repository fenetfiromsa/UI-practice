import Button from "./components/buttons/Button";
import Card from "./components/cards/Card";
import Input from "./components/inputs/Input";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Home />
      <Button>Click Me</Button>
      <Card />
      <Input label="your name" />
    </div>
  );
}

export default App;
