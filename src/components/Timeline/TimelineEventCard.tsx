import { Button, Card } from "react-bootstrap";
import { TimelineEvent } from "./TimelineEvent";

interface TimelineEventCardProps {
    event: TimelineEvent,
    setShowModal: (show: boolean) => void
};

const TimelineEventCard = (props: TimelineEventCardProps) => {
    const {event, setShowModal} = props;

    const eventDuration = TimelineEvent.durationInMonths(event.startDate, event.endDate);
    const cardHeight = `${eventDuration * 3}em`;
    const showLocation = event.organization != "";
    const locationText = event.organization + " - " + event.location;
    const dateFormat: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    };
    const startDateText = event.startDate.toLocaleDateString('en-US', dateFormat);
    const endDateText = event.endDate.toLocaleDateString('en-US', dateFormat);
    const dateRangeText = `${startDateText} - ${endDateText}`;

    return (
        <Card className="p-3" style={{height: cardHeight}}>
            <Card.Title>{event.title}</Card.Title>
            { showLocation ? <Card.Subtitle>{locationText}</Card.Subtitle> : <></> }
            <Card.Text>
                <p>{dateRangeText}</p>
                <Button onClick={() => setShowModal(true)}>See more</Button>
            </Card.Text>
        </Card>
    );
}

export default TimelineEventCard;