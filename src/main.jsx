import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './i18n';
import { Routes, Route, useLocation, BrowserRouter } from 'react-router-dom'
import ExpatService from './components/ExpatService'
import StudentCorner from './components/StudentCorner'
import Bierens from './components/Bierens'
import NotFound from './components/NotFound.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
  <Routes>
      <Route path='/studentcorner' element={<StudentCorner/>}/>
      <Route path='/expatservice' element={<ExpatService/>}/>
      <Route path='/bierens' element={<Bierens/>}/>
      <Route path="/" element={ <App /> }/>
      <Route path="*" element={ <NotFound /> }>
    </Route>
  </Routes>
</BrowserRouter>

)
