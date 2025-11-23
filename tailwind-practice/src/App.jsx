import Button from "./components/buttons/Button";
import Card from "./components/cards/Card";
import Input from "./components/inputs/Input";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Forms from "./pages/Forms";
function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Home />
      <Button>Click Me</Button>
      <Card />
      <Input label="your name" />
      <Signup />
      <Login />
      <Forms />
    </div>
  );
}

export default App;
