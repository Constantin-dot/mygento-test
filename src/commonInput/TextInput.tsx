import React, { InputHTMLAttributes } from "react";
import classes from "./TextInput.module.scss";

interface PropsType extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    errorText?: string;
    errorCondition?: boolean;
}

export const TextInput = React.memo(
    ({ label, errorCondition, errorText, ...rest }: PropsType) => {
        return (
            <div className={classes.input}>
                <p className={classes.input__label}>{label}</p>
                <input
                    className={`${classes.input__elem} ${
                        errorCondition ? classes.input__error : ""
                    }`}
                    {...rest}
                />
                {errorCondition ? (
                    <div className={classes.inputs__error_text}>
                        {errorText}
                    </div>
                ) : null}
            </div>
        );
    }
);
