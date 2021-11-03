import React from "react";
import imagen1 from '../../Images/article1.png'


const Article1inicio = () =>{
  return(
    <div className="container">
      <div id="demo" class="carousel slide" data-ride="carousel">
        <ul className="carousel-indicators">
          <li data-target="#demo" data-slide-to="0" class="active"></li>
        </ul>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={imagen1} alt="Los Angeles" width="1100" height="500"></img>
          <div className="carousel-caption">
          <h3>Nuestra Propuesta</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo odio totam nihil tempora sint nobis ullam aliquam officiis, ipsam, tempore voluptatem nulla ducimus ea aperiam hic reprehenderit earum aspernatur quos. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt suscipit vel libero a necessitatibus laborum molestiae excepturi dolores dignissimos nulla! Nostrum beatae veniam laboriosam dolorem nemo mollitia pariatur distinctio perferendis.</p>
          <br></br>
          <br></br>
          <br></br>
          </div>   
        </div>
      </div>
    </div>
  </div>
  )}
export default Article1inicio;
