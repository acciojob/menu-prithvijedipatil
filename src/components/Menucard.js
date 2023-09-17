import React, { useState } from "react";


const Menucard = ({ db }) => {
  return (
    <>
    {console.log(db)}
      {db.map((item, i) => {
       return( <div className="card">
          <div className="image">
            <img src={item.img} alt="image" />
          </div>
          <div className="name">
            <h4 className="title">{item.title}</h4>
            <h3 className="price">{item.price}</h3>
          </div>
          <div className="desc">{item.desc}</div>
        </div>
       );
      })}
    </>
  );
};

export default Menucard;
