function PetCard(props) {
  return (
    <div className="card mt-3" style={{ width: "18rem" }}>
      <img
        src={props.picture}
        className="card-img-top"
        alt="pet for adoption"
        style={{ height: "200px", width: "auto", objectFit: "contain" }}
      />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item ">
            <strong>Species: </strong>
            {props.species}
          </li>
          <li className="list-group-item">
            <strong>Breed: </strong>
            {props.breed}
          </li>
          <li className="list-group-item">
            <strong>Age: </strong>
            {props.age}
          </li>
          <li className="list-group-item">
            <strong>Available: </strong>
            {props.available ? "Yes" : "No"}
          </li>
          <li className="list-group-item">
            <strong>Description: </strong>
            {props.description}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PetCard;
