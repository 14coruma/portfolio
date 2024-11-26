import { Modal } from "react-bootstrap";
import { TimelineEvent } from "./TimelineEvent";

export interface TimelineEventModalProps {
    event: TimelineEvent,
    showModal: boolean,
    setShowModal: (show: boolean) => void
}

const TimelineEventModal = (props: TimelineEventModalProps) => {
    const { event, showModal, setShowModal } = props;

    return (
        <Modal show={showModal} onHide={() => setShowModal(false)} centered>
            <Modal.Header closeButton>
                <Modal.Title>{event.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{event.description}</Modal.Body>
        </Modal>
    );
}

export default TimelineEventModal;