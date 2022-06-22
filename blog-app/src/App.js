import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout/HomeLayout";
import Home from "./pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <HomeLayout>
              <Home />
            </HomeLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
