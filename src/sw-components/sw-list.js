import React from 'react';
import ItemList from '../components/item-list/item-list';
import withData from '../HOC/with-data/with-data';
import withApiService from '../HOC/with-api-service/with-api-service'
import compose from '../HOC/compose';
import withChild from '../HOC/with-child/with-child';

export const PersoneList = compose(
  withApiService(({ getPeople }) => ({ getData: getPeople })),
  withData,
  withChild(({ name, birthYear }) => <span>{`${name} (${birthYear})`} </span>)
)(ItemList)

export const PlanetList = compose(
  withApiService(({ getPlanets }) => ({ getData: getPlanets })),
  withData,
  withChild(({ name }) => <span>{name}</span>)
)(ItemList);

export const ShipsList = compose(
  withApiService(({ getAllStarships }) => ({ getData: getAllStarships })),
  withData,
  withChild(({ name, model }) => <span>{`${name} (${model})`}</span>)
)(ItemList);