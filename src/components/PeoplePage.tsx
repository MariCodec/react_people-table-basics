import React, { FC, useContext } from 'react';
import { Loader } from './Loader';
import { PeoplesContext } from '../store/PeopleProvider';

import { PeopleTable } from './PeopleTable';

export const PeoplePage: FC = () => {
  const { persons, isLoading, errorMessage } = useContext(PeoplesContext);
  const noPeopleMessage = !persons.length && !errorMessage && !isLoading;

  return (
    <>
      <h1 className="title">People Page</h1>
      <div className="block">
        <div className="box table-container">
          {isLoading && <Loader />}

          {errorMessage && (
            <p data-cy="peopleLoadingError" className="has-text-danger">
              Something went wrong
            </p>
          )}

          {noPeopleMessage && (
            <p data-cy="noPeopleMessage">There are no people on the server</p>
          )}

          {!isLoading && <PeopleTable persons={persons} />}
        </div>
      </div>
    </>
  );
};
