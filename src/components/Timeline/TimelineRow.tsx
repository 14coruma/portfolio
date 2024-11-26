
import { Col, Row } from "react-bootstrap";
import { TimelineEvent } from "./TimelineEvent";
import TimelineGapComponent, { TimelineGap } from "./TimlineGap";
import TimelineEventCard from "./TimelineEventCard";
import TimelineEventModal from "./TimelineEventModal";

export interface TimelineRowProps {
    event: TimelineEvent | TimelineGap;
    showModal: boolean,
    setShowModal: (show: boolean) => void;
}

const TimelineRow = (props: TimelineRowProps) => {
    const {event, showModal, setShowModal} = props;
    const hasEventCard = event instanceof TimelineEvent;
    const drawEventOnLeft = hasEventCard && event.drawEventOnLeft;

    return (
        <Row className="justify-content-center">
          <Col>
            {hasEventCard && drawEventOnLeft ?
                <>
                    <TimelineEventCard event={event} setShowModal={setShowModal} />
                    <TimelineEventModal event={event} showModal={showModal} setShowModal={setShowModal} />
                </>
                : <></>
            }
          </Col>
          <Col xs={1}>
            <TimelineGapComponent event={event} />
          </Col>
          <Col>
            {hasEventCard && !drawEventOnLeft ?
                <>
                    <TimelineEventCard event={event} setShowModal={setShowModal} />
                    <TimelineEventModal event={event} showModal={showModal} setShowModal={setShowModal} />
                </>
                : <></>
            }
          </Col>
        </Row>
    );
}

export default TimelineRow;