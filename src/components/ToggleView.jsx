import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';


const ToggleView = ({tableView, setTableView}) => {

  return (
    <>
      <div onClick={() => setTableView( (tableView) => !tableView) } style={{ cursor: 'pointer' }}>
        {console.log(tableView)}
      {tableView ? (
        <h1>  Table View ONNN </h1>// <FontAwesomeIcon icon={faToggleOn} size="2x" /> 
      ) : (
        <h1>  Table View OFFF </h1>// <FontAwesomeIcon icon={faToggleOff} size="2x" />
      )}
    </div>
    </>
  )
}

export default ToggleView