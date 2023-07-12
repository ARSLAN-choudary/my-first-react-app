import React from 'react'

function Card2() {
  return (
    <>
     <div class="card" >
  <img src={ require('../images/appdev.jpg')} width='15px' height='auto' class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">App Development</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">buy course</a>
  </div>
</div>
    </>
  )
}

export default Card2
