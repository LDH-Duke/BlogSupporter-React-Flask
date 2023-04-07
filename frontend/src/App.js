import React from 'react'
import ImgUpload from './components/ImgUpload'
import ImgPreview from './components/ImgPreview'
import Result from './components/Result'
import './App.css'

function App() {
  return (
    <div>
      <p>Blog Supporter</p>
      <hr/>
      <div className='show'>
        <div id='preview'>
        <ImgUpload/>  
        </div>
        <div id='result'>
        <Result/>
        </div>
      </div>
      
    </div>
  )
}

export default App