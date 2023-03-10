import React from 'react';
import QualityItem from './QualityItem';

const TableRowComponent = (props) => {
  return (
    <tr>
      <td>{props.name}</td>
      <td>
        {props.qualities.map((quality) => {
          return (
            <QualityItem color={quality.color} key={quality._id}>
              {quality.name}
            </QualityItem>
          );
        })}
      </td>
      <td>{props.profession}</td>
      <td>{props.completedMeetings}</td>
      <td>{props.rate}</td>
      <td>
        <button className='btn btn-danger' onClick={props.deleteUserRow}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TableRowComponent;
