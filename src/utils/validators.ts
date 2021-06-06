import { FormikErrorType, FormikValidateValuesType } from "./types";

export const validateHandler = (values: FormikValidateValuesType) => {
    const errors: FormikErrorType = {};
    if (!values.firstName) {
        errors.firstName = "Пожалуйста, укажите Ваше имя";
    } else if (!/^[а-я]{2,15}$/i.test(values.firstName)) {
        errors.firstName = "В имени могут быть только буквы";
    }
    if (!values.lastName) {
        errors.lastName = "Пожалуйста, укажите Вашу фамилию";
    } else if (!/^[а-я]{2,15}$/i.test(values.lastName)) {
        errors.lastName = "В фамилии могут быть только буквы";
    }
    if (!values.email) {
        errors.email = "Пожалуйста, укажите Вашу электронную почту";
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
        errors.email = "Некорректный адрес электронной почты";
    }
    if (!values.radio) {
        errors.radio = "Пожалуйста, укажите пол";
    }
    if (!values.agreement) {
        errors.agreement =
            "Пожалуйста, примите условия политики конфиденциальности";
    }
    return errors;
};
