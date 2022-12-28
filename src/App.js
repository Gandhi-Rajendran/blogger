import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./component/Header";
import Main from "./component/Main";
import BlogDetails from "./component/BlogDetails";
import CreateBlog from "./component/CreateBlog";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/blogs" />} />
        <Route path="/blogs" element={<Main />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="/blogs/create" element={<CreateBlog />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
