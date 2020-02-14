import React from 'react';
import TimeLine from './view/Timeline' ;
import 'react-vertical-timeline-component/style.min.css';
import 'bootstrap/scss/bootstrap.scss'
//import { connect } from 'react-redux';

class App extends React.Component {
    render() {
  return (
      <div className="App">
        <TimeLine/>
      </div>
  );
}
}

// const mapStateToProps = store => {
//     return {
//         user: store.user,
//     }
// }
//
// const connectedApp = connect(mapStateToProps)(App);
export default App;