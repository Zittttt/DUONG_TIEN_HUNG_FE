import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loading from "./components/loading/Loading";
import HomeLayout from "./layouts/headerlayout/HomeLayout";
import Home from "./pages/Home/Home";
import PostDetail from "./pages/PostDetail/PostDetail";

function App() {
  return (
    <BrowserRouter>
      <Loading />
      <Routes>
        <Route
          exact
          path="/page/:page"
          element={
            <HomeLayout>
              <Home />
            </HomeLayout>
          }
        />
        <Route
          exact
          path="/"
          element={
            <HomeLayout>
              <Home />
            </HomeLayout>
          }
        />
        <Route
          exact
          path="/postdetail/:postId"
          element={
            <HomeLayout>
              <PostDetail />
            </HomeLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
