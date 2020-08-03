import React from 'react'
import { Table } from 'reactstrap';
const Livevisitors = () => {
    return (
    <div className="container" style={{marginTop:20}}>
        <h5>Current visitors</h5>
        <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>IP</th>
          <th>City</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
      </tbody>
    </Table>
    </div>
    )
}

export default Livevisitors;
