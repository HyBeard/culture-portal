import React from 'react';
import TimelineItem from '../TimelineItem';

const Timeline = ({ lines }) => {
  return (
    <section className="timeline">
      {lines.map((item, index) => {
        const { date, description } = item;
        const key = `timeline: ${index}`;
        const isRight = index % 2 !== 0;
        return (
          <TimelineItem isRight={isRight} key={key} date={date}>
            {description}
          </TimelineItem>
        );
      })}
    </section>
  );
};

export default Timeline;
