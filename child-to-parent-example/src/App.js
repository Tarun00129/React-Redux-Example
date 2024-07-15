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

import React from 'react';
import { Provider } from 'react-redux';
import ParentComponent from '../src/dataFlowUsingRedux/ParentComponent';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ParentComponent />
      </div>
    </Provider>
  );
}

export default App;
