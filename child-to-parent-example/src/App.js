/*  Data Flow Using Props */

// import React from 'react';
// import ParentComponent from './dataFlowUsingProps/ParentComponent';  
// function App() {
//   return (
//     <div className="App">
//       <ParentComponent />                 
//     </div>
//   );
// }

// export default App;

/*  Data Flow Using Redux */

// import React from 'react';
// import { Provider } from 'react-redux';
// import ParentComponent from '../src/dataFlowUsingRedux/ParentComponent';
// import store from './redux/store';
// import DomManipulation from './SimpleDomManipulation/DomManipulation';
// // import LifecycleDemo'./ComponentLifeCycle/LifeCycle';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import Home from './components/homePage/Home';
// import About from './components/aboutPage/About';
// import Contact from './components/contactPage/Contact';


// function App() {
//   return (
//     <>
//       <Router>
//         <div>
//           <nav>
//             <ul>
//               <li>
//                 <Link to="/">Home</Link>
//               </li>
//               <li>
//                 <Link to="/about">About</Link>
//               </li>
//               <li>
//                 <Link to="/contact">Contact</Link>
//               </li>
//             </ul>
//           </nav>

//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/contact" element={<Contact />} />
//           </Routes>
//         </div>
//       </Router>
//       <Provider store={store}>
//         <div className="App">
//           <ParentComponent />
//           <DomManipulation />
//           {/* <LifecycleDemo /> */}
//         </div>
//       </Provider>
//     </>
//   );
// }

import React from "react";
import DebouncedInput from "./debounceingComponent/DebouncingComponent";
import ThrottledInput from "./throttlingComponent/ThrottlingComponent";
import DebouncedMouseMove from "./debounceingComponent/DebouncedMouseMove";
import ThrottledMouseMove from "./throttlingComponent/ThrottledMouseMove";
function App(){
  return (
    <>
    <DebouncedInput />
    <DebouncedMouseMove />
    ---------------------------------------------
    <ThrottledInput />
    <ThrottledMouseMove />
    </>
  )
}
export default App;


