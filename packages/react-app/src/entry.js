import React,{Component} from 'react'
import ReactDOM from 'react-dom/client'

import 'babel-polyfill';
import '@/styles/global.less'

import Router from '@/routes';

class App extends Component {
  
  componentDidCatch (err, info) {
    console.error('DIDCATCH_ERROR:',err, info);
  }
  
  render(){
    return (
      <div>
        <Router />
      </div>
    )
  }
}


ReactDOM.createRoot(document.getElementById('app')).render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
)
