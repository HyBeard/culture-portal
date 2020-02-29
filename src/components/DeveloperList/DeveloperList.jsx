import React from 'react';
import DeveloperCard from '../DeveloperCard';

const DeveloperList = ({ data }) => {
  return (
    <section className="developer-list">
      {data.map(({ nick, name, linkToGitHub, srcImg }, i) => {
        const key = `card: ${i}`;
        return (
          <DeveloperCard
            nick={nick}
            name={name}
            linkToGitHub={linkToGitHub}
            srcImg={srcImg}
            key={key}
          />
        );
      })}
    </section>
  );
};
export default DeveloperList;
