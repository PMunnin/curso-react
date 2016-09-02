import React, { PropTypes } from 'react';

const ResultsItem = ({ item }) => (
  <tr>
    <td>{ item.name }</td>
    <td>{ item.actor }</td>
    <td className="center">{ item.seasons.join(', ') }</td>
    <td className="center">{ item.alive ? 'Sí' : 'No' }</td>
  </tr>
);

export default ResultsItem;
