import React from "react";
import { Button, Modal } from "react-bootstrap";

type SuccessModalType = {
    name: string;
    show: boolean;
    onHide: () => void;
};

export const SuccessModal: React.FC<SuccessModalType> = ({
    name,
    show,
    onHide,
}) => {
    return (
        <Modal size="lg" centered show={show} onHide={onHide}>
            <Modal.Body className="d-flex flex-column justify-content-center align-items-center">
                <Modal.Title
                    id="contained-modal-title-vcenter"
                    className="mb-3"
                >
                    {`Спасибо ${name}!`}
                </Modal.Title>
                Мы скоро свяжемся с Вами
                <Button
                    onClick={onHide}
                    style={{ width: "80%" }}
                    className="mt-5"
                >
                    Понятно
                </Button>
            </Modal.Body>
        </Modal>
    );
};
