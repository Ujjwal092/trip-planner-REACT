import React, { useState } from "react";
import data from "./data";
import Tours from "./components/Tours";

const App = () => {
  const [tours, setTours] = useState(data);

  function removeTour(id) {
    const newTours = tours.filter((tour) => tour.id !== id); //filter fnction to remove the tour with the given id means return all tours except the one with the given id
    setTours(newTours);
  }

  if (tours.length === 0) {
    return (
      <div className="refresh">
        <h2>Oops!! No Tours Left</h2>
        <button className="btn-refresh" onClick={() => setTours(data)}>
          Refresh
        </button>
        {/* //refresh button to reset the tours data for that set the tour data with the original data */}
      </div>
    );
  }

  return (
    <div className="App">
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
    //removeTour ke liye tours ka data chaiye isse liye App.js me hi removeTour function banaya hai aur Tours component me prop ke through bheja hai
  );
};

export default App;
//remove tour is passinng from App.js -> Tours.js-> Card.js as a prop
