import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { listLikedAnimalsRequest } from '../../actions/animal';
import Spinner from '../Spinner';

const LikedAnimals = ({ listLikedAnimalsRequest, likedAnimals }) => {
  useEffect(() => {
    listLikedAnimalsRequest();
  }, []);

  return likedAnimals ? (
    <ul className="favanims">
      {likedAnimals.map(animal => (
        <li key={animal.id}>
          <ul>
            <li>{animal.name}</li>
            <li>{animal.type}</li>
            <li>
              <img src={`/assets/${animal.photoPath}`} alt="animal" />
            </li>
            <li>
              <button data-animalid={animal.id} className="removebtn" type="button">
                <i className="fas fa-times-circle" data-animalid={animal.id} />
              </button>
            </li>
          </ul>
        </li>
      ))}
    </ul>
  ) : (
    <Spinner />
  );
};

const mapStateToProps = store => ({
  likedAnimals: store.animals.likedAnimals,
});

const mapDispatchToProps = {
  listLikedAnimalsRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LikedAnimals);
