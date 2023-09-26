import Canvas from "./canvas";
import Customizer from "./pages/Customizer";
import Home from "./pages/Home";

function App() {
  return (
    <main className="app transition-all ease-in bg-white">
      <Home />
      <Canvas />
      <Customizer />
      <div className="absolute bottom-0 w-full text-center text-white mb-3">
        Copyright © 2023{" "}
        <a href="https://www.nurinfazil.com" target="_blank">
          <u>Nurin Fazil</u>
        </a>
      </div>
    </main>
  );
}

export default App;
