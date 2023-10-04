import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home/Home"
import About from "./routes/About/about";
import Blog from "./routes/Blogpost/blogpost";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <>


    <Router>
    <Header/>
      <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="/about" element={ <About/> } />
      <Route path="/blogpost" element={ <Blog/> } />

      </Routes>
      <Footer/>
    </Router>
  </>
    
      
  )
}

export default App;
