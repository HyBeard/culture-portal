import React from 'react';
import Table from 'react-bootstrap/Table';
import styles from './Masterpieces.module.scss';

const Masterpieces = ({ children, data }) => {
  const [header, worksName, datesName] = children;
  return (
    <div className={styles.masterpieces}>
      <div className={styles.masterpiecesHeader}>{header}</div>
      <Table responsive>
        <tbody>
          <tr>
            <th className={styles.masterpiecesTHeader}>{worksName}</th>
            <th className={styles.masterpiecestHeader}>{datesName}</th>
          </tr>
          {data.map((work, index) => {
            const { title, date } = work;
            const key = `t-index${index}`;
            return (
              <tr key={key}>
                <td>{title}</td>
                <td>{date}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Masterpieces;
