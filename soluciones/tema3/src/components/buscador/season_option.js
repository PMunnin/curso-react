import React, { PropTypes } from 'react';

const SeasonOption = (props) => {
  const { season, isChecked, onChange } = props;
  return (
    <div className="season-option">
      { season }
      <input
        type="checkbox"
        name="s1"
        value={ season }
        checked={ isChecked }
        onChange={ onChange } />
    </div>
  );
}

SeasonOption.propTypes = {
  season: PropTypes.number,
  isChecked: PropTypes.bool,
  onChange: PropTypes.func
}

export default SeasonOption;
