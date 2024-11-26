import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { TimelineEvent } from './TimelineEvent';
import TimelineRow from './TimelineRow';
import { TimelineGap } from './TimlineGap';

export interface TimelineProps {
  events: (TimelineEvent | TimelineGap)[];
}

const Timeline = (props: TimelineProps) => {
  const {events} = props;
  const [allModalState, setAllModalState] = useState(new Array(events.length).fill(false));

  function setModalState(index: number, show: boolean) {
    const newState = [...allModalState];
    newState[index] = show;
    setAllModalState(newState);
  }

  function setModalStateWithIndex(index: number) {
    return (show: boolean) => setModalState(index, show);
  } 

  return (
    <section id="timeline" className="py-5">
      <Container>
        {events.map((item, index) => (
          <TimelineRow event={item} showModal={allModalState[index]} setShowModal={setModalStateWithIndex(index)} />
        ))}
      </Container>
    </section>
  );
};

export default Timeline;
