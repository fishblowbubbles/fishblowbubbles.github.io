import React from "react";
import { BrowserRouter } from "react-router-dom";

import { useToggle } from "./hooks";

const App: React.FC = () => {
  const [isMenuOpen, toggleMenu] = useToggle(false);

  return (
    <div className="App">
      <BrowserRouter>
        <button onClick={() => toggleMenu()} />
        {isMenuOpen && <div>This is the side menu</div>}
      </BrowserRouter>
    </div>
  );
};

export default App;
