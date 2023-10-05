// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./routes/Home/Home"
// import About from "./routes/About/about";
// import Blog from "./routes/Blogpost/blogpost";
// import Header from "./components/header";
// import Footer from "./components/footer";
// import CreateBlogPost from "./routes/Blogpost/createblog";

// function App() {
//   return (
//     <>


//     <Router>
//     <Header/>
//       <Routes>
//       <Route path="/" element={ <Home/> } />
//       <Route path="/about" element={ <About/> } />
//       <Route path="/blogpost" element={ <Blog/> } />
//       <Route path="/create" element={<CreateBlogPost />} />

//       </Routes>
//       <Footer/>
//     </Router>
//   </>
    
      
//   )
// }

// export default App;


// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./routes/Home/Home";
// import About from "./routes/About/about";
// import Blog from "./routes/Blogpost/blogpost";
// import Header from "./components/header";
// import Footer from "./components/footer";
// import CreateBlogPost from "./routes/Blogpost/createblog";
// import UpdateDogAdoption from "./routes/Blogpost/UpdateDogAdoption"; // Import the UpdateDogAdoption component

// function App() {
//   return (
//     <>
//       <Router>
//         <Header />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/blogpost" element={<Blog />} />
//           <Route path="/create" element={<CreateBlogPost />} />

//           {/* Add a route for updating dog adoption entries */}
//           <Route path="/update-dog/:id" element={<UpdateDogAdoption />} />
//         </Routes>
//         <Footer />
//       </Router>
//     </>
//   );
// }

// export default App;


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home/Home";
import About from "./routes/About/about";
import Blog from "./routes/Blogpost/blogpost";
import Header from "./components/header";
import Footer from "./components/footer";
import CreateBlogPost from "./routes/Blogpost/createblog";
import UpdateDogAdoption from "./routes/Blogpost/UpdateDogAdoption"; // Import the UpdateDogAdoption component
import DogDetails from "./routes/Blogpost/DogDetails"; // Import the DogDetails component

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogpost" element={<Blog />} />
          <Route path="/create" element={<CreateBlogPost />} />

          {/* Add a route for updating dog adoption entries */}
          <Route path="/update-dog/:id" element={<UpdateDogAdoption />} />

          {/* Add a route for viewing dog details */}
          <Route path="/dog/:id" element={<DogDetails />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;


