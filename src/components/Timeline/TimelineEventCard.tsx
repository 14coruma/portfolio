import { Card } from "react-bootstrap";
import { TimelineEvent } from "./TimelineEvent";

export interface TimelineEventCardProps {
    event: TimelineEvent,
    setShowModal: (show: boolean) => void
}

const TimelineEventCard = (props: TimelineEventCardProps) => {
    const {event, setShowModal} = props;

    const eventDuration = event.durationInMonths();
    const cardHeight = `${Math.max(eventDuration, 8)}em`;
    const showLocation = event.organization != "";
    const locationText = event.organization;
    const dateFormat: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'short'
    };
    const showStartDate = event.drawEventOnLeft;
    const startDateText = showStartDate ? event.startDate.toLocaleDateString('en-US', dateFormat) + " - " : "";
    const endDateText = event.endDate.toLocaleDateString('en-US', dateFormat);
    const dateRangeText = `${startDateText}${endDateText}`;

    return (
        <Card className="p-3" style={{height: cardHeight}} bg={event.cardColor} text={event.cardColor === "light" ? "dark" : "white"}>
            <Card.Title>
                {event.icon} &nbsp;
                {event.title}
                </Card.Title>
            { showLocation ? <Card.Subtitle>{locationText}</Card.Subtitle> : <></> }
            <Card.Text>
                <p className="mb-0">{dateRangeText}</p>
                <p className={"text-primary h6"} role="button" onClick={() => setShowModal(true)}>See more</p>
            </Card.Text>
        </Card>
    );
}

export default TimelineEventCard;