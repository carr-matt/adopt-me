import { createRoot } from "react-dom";
import Pet from "./Pet";


const App = () => {
  <div>
    <h1>Adopt Me!</h1>
    <Pet name="Maddy" animal="dog" breed="Lab/Pit/Good Girl mix" />
    <Pet name="Socks" animal="cat" breed="Mix" />
    <Pet name="Cooper" animal="dog" breed="Dachshund/Chihuahua mix" />
  </div>
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
