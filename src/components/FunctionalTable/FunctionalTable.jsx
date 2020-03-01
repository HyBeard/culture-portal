import React from 'react';
import Table from 'react-bootstrap/Table';

const FunctionalTable = () => {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>time spent</th>
          <th>feature</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default FunctionalTable;
