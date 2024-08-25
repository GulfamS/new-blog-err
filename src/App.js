import {BrowserRouter, Routes, Route} from "react-router-dom"
import BlogsList from "./components/BlogsList";
import Header from "./components/Header";
import BlogItemDetails from "./components/BlogItemDetails";
const App = () =>(
  <BrowserRouter>
  <Header/>
  <Routes>
  <Route exact path="/" component={BlogsList} />
  <Route path="/blogs/:id" component={BlogItemDetails} />
  </Routes>
  </BrowserRouter>
)

export default App;
