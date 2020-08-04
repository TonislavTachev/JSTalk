import React from 'react'
import { Table } from 'reactstrap';
const TableRoll = ({obj}) => {
    return (
        <tbody>
          <tr>
             <td>{obj.room}</td>
             <td>{obj.numberOfUsers}</td>
         </tr>
        </tbody>
    )
}

export default TableRoll;
