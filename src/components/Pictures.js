import React from 'react'
// import downloadimg from '../images/downloadimg.jpg'

function Pictures() {
  return (
    <>
    {/* <img  src={downloadimg.jpg} height='300px' width='500px'/> */}
    <img src={require('../images/downloadimg.jpg')} height='300px' width='500px'/>
    </>
  )
}

export default Pictures;
