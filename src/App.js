import MyWorld from "./components/World";
import Navbar from "./components/Navbar";
import React from "react";
import MyCanvas from "./components/MyCanvas";
function App() {
  return (
    <div>
      <div style={{backgroundColor:"#171720"}} className="flex flex-col h-screen w-full relative">
        <div className="p-2">
          <Navbar />
        </div>

        <div className="flex flex-1 h-full">
          <MyCanvas />
        </div>
      </div>
    </div>
  );
}

export default App;
