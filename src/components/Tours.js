import Card from "./Card";
function Tours({ tours, removeTour }) {
  return (
    <div className="container">
      <div>
        <h2 className="title"> Plan With Love</h2>
      </div>
      <div className="cards">
        {tours.map((tour) => {
          return (
            <Card
              key={tour.id}
              {...tour} //spread operator to pass all tour properties "cloning"
              removeTour={removeTour} //passing removeTour function as prop which will be called in Card component
            ></Card>
          );
        })}
      </div>
    </div>
  );
}

export default Tours;
