import pets from "./data.json";
import PetCard from "./PetCard";

function AdoptionList() {
  return (
    <div className="row">
      {pets.map((currentPetObj) => (
        <div className="col-md-4">
          <PetCard
            name={currentPetObj.name}
            picture={currentPetObj.picture}
            species={currentPetObj.species}
            breed={currentPetObj.breed}
            age={currentPetObj.age}
            available={currentPetObj.available}
            description={currentPetObj.description}
          />
        </div>
      ))}
    </div>
  );
}

export default AdoptionList;
