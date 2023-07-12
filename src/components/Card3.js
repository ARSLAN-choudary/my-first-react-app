import React from 'react'

function Card3() {
  return (
    <>
      <div class="card" >
  <img src={ require('../images/softdev.jpg')} width='15px' height='auto' class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">software Development</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">buy course</a>
  </div>
</div>
    </>
  )
}

export default Card3
