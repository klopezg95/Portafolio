import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="bg-[#1C1C22] text-white min-h-screen">
      <Navbar />
      <main className="pt-20">
        <Home />
      </main>
    </div>
  );
}

export default App;
