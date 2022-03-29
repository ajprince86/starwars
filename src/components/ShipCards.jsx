import "./shipCards.css";

const ShipCards = (props) => {
  return (
    <div className="contain">
      {props.ships.map((ship, key) => {
        return <div className="ship">{ship.name}</div>;
      })}
    </div>
  );
};

export default ShipCards;
