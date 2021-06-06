import React from "react";
import classes from "./PrivacyPolicyModal.module.scss";
import { Button } from "react-bootstrap";
import { TEXT_OF_POLICY } from "../../utils/consts";
import { PrivacyPolicyModalType } from "../../utils/types";

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalType> = ({
    show,
    onHide,
    onAgree,
}) => {
    return (
        <div
            className={
                show ? `${classes.ppModal} ${classes.active}` : classes.ppModal
            }
        >
            <div
                className={
                    show
                        ? `${classes.ppModalContent} ${classes.ppModalContentActive}`
                        : classes.ppModalContent
                }
            >
                <div>
                    <div className={classes.ppModalContentHeader}>
                        Политика конфиденциальности
                    </div>
                    <button
                        onClick={onHide}
                        className={classes.ppModalHideButton}
                    >
                        &#215;
                    </button>
                </div>
                <div className={classes.ppModalText}>{TEXT_OF_POLICY}</div>
                <Button
                    onClick={onAgree}
                    className={`mt-5 ${classes.ppModalContentAgreeButton}`}
                >
                    Я согласен
                </Button>
            </div>
        </div>
    );
};
