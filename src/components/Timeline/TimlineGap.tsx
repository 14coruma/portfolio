import { TimelineEvent } from "./TimelineEvent";

export class TimelineGap {
    public constructor(
        public readonly startDate: Date,
        public readonly endDate: Date,
    ) { }
    
    public durationInMonths(): number {
        const yearDiff = this.endDate.getFullYear() - this.startDate.getFullYear();
        const monthDiff = this.endDate.getMonth() - this.startDate.getMonth();
        return yearDiff * 12 + monthDiff;
    }
}

export interface TimelineGapComponentProps {
    event: TimelineEvent | TimelineGap
}

const TimelineGapComponent = (props: TimelineGapComponentProps) => {
    const {event} = props;
    const eventDuration = event.durationInMonths();
    const height = `${Math.max(eventDuration, 10)}em`;

    return (
        <div className="vr" style={{height: height}}/>
    );
}

export default TimelineGapComponent;