import React from 'react'
// import ReactDOM from 'react-dom'
import { render } from 'react-dom'


import Profile from './Profile/index'

const props = {
  name: 'jiajun.qin',
  age: 27
}


// class App extends React.Component{
//   render() {
//     return (
//       <div className="container">
//         <h1>Hell React!</h1>
//       </div>
//     )
//   }
// }
// function App() {
//   return (
//     <div className="container">
//       <h1>Hello React!</h1>
//     </div>
//   )
// }

const app = document.createElement('div')
document.body.appendChild(app)
// ReactDOM.render(<App />,app)
render(<Profile {...props} />, app)
