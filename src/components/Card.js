import { useState } from "react";

function Card({ id, image, info, price, name, removeTour }) {
  //starting me read more false hoga means short description dikhayega
  const [readmore, setReadmore] = useState(false);

  const description = readmore ? info : `${info.substring(0, 200)}....`; //description logic aagar readmore true h to pura info dikhayega nhi to substring 0 se 200 tak dikhayega

  function readmoreHandler() {
    setReadmore(!readmore); //toggle the readmore state
  }

  return (
    //single card component
    <div className="card">
      {/*image is coming as prop */}
      <img src={image} alt="city" className="image"></img>

      <div className="tour-info">
        <div className="tour-details">
          <h4 className="tour-price">₹ {price}</h4>
          <h4 className="tour-name">{name}</h4>
        </div>

        <div className="description">
          {description}

          <span className="read-more" onClick={readmoreHandler}>
            {readmore ? `Show Less` : `Read More`}
          </span>
        </div>
      </div>

      <button className="btn-red" onClick={() => removeTour(id)}>
        Not Interested
      </button>
    </div> ////removeTour ke liye tours ka data chaiye isse liye App.js me hi removeTour function banaya hai aur Tours component me prop ke through bheja hai
  );
}

export default Card;
