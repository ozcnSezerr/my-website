import { useState } from "react";
import "./App.css";
import HeaderSection from "./components/HeaderSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <HeaderSection />
    </div>
  );
}

export default App;
