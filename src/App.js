import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import BlogsList from "./components/BlogsList";
import Header from "./components/Header";
import BlogItemDetails from "./components/BlogItemDetails";
const App = () =>(
  <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<BlogsList />} />
      <Route path="/blogs/:id" element={<BlogItemDetails />} />
    </Routes>
    <BlogsList/>
  </Router>
)

export default App;

