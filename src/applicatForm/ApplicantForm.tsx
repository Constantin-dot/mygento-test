import React from "react";
import classes from "./ApplicantForm.module.scss";
import { useFormik } from "formik";
import { TextInput } from "../commonInput/TextInput";
import { SuccessModal } from "../modals/success/SuccessModal";
import { PrivacyPolicyModal } from "../modals/privacyPolicy/PrivacyPolicyModal";
import { ApplicantFormPropsType, FormikErrorType } from "../utils/types";
import { validateHandler } from "../utils/validators";

export const ApplicantForm: React.FC<ApplicantFormPropsType> = React.memo(
    ({
        successModalVisible,
        setSuccessModalVisible,
        privacyPolicyModalVisible,
        setPrivacyPolicyModalVisible,
    }) => {
        const formik = useFormik({
            initialValues: {
                firstName: "",
                lastName: "",
                email: "",
                cvFile: "",
                radio: "",
                githubLink: "",
                agreement: false,
            },
            validate: (values) => {
                let errors: FormikErrorType = validateHandler(values);
                return errors;
            },
            onSubmit: (values, { resetForm }) => {
                setSuccessModalVisible({
                    isVisible: true,
                    name: formik.values.firstName,
                });
                resetForm();
            },
        });

        // const cvNameHandler = () => {
        //     let cvFileName = formik.values.cvFile;
        //     // eslint-disable-next-line
        //     let strickedSvFileName = cvFileName.split(/[\\\/]/)[2];
        //     formik.setFieldValue("cvFile", strickedSvFileName);
        //     console.log(strickedSvFileName);
        // };

        const cvRemoveHandler = () => {
            formik.setFieldValue("cvFile", "");
        };

        const agreeButtonHandler = () => {
            formik.setFieldValue("agreement", true);
            setPrivacyPolicyModalVisible(false);
        };

        return (
            <div className={classes.wrapper}>
                <h1 className="mt-3">Анкета соискателя</h1>

                <form onSubmit={formik.handleSubmit}>
                    <h3 className="mt-4">Личные данные</h3>
                    <div className={classes.ownDataBlock}>
                        <TextInput
                            label={"Имя *"}
                            type={"text"}
                            placeholder={"Имя"}
                            errorText={formik.errors.firstName}
                            errorCondition={
                                !!formik.errors.firstName &&
                                formik.touched.firstName
                            }
                            {...formik.getFieldProps("firstName")}
                        />

                        <TextInput
                            label={"Фамилия *"}
                            type={"text"}
                            placeholder={"Фамилия"}
                            errorText={formik.errors.lastName}
                            errorCondition={
                                !!formik.errors.lastName &&
                                formik.touched.lastName
                            }
                            {...formik.getFieldProps("lastName")}
                        />

                        <TextInput
                            label={"Электронная почта *"}
                            type={"email"}
                            placeholder={"Электронная почта"}
                            errorText={formik.errors.email}
                            errorCondition={
                                !!formik.errors.email && formik.touched.email
                            }
                            {...formik.getFieldProps("email")}
                        />
                        {!formik.values.cvFile ? (
                            <label className={`mt-4 ${classes.cvFileLabel}`}>
                                <input
                                    type="file"
                                    className={classes.cvFileInput}
                                    {...formik.getFieldProps("cvFile")}
                                />
                                + Загрузить резюме
                            </label>
                        ) : (
                            <div className={`mt-4 ${classes.cvFileName}`}>
                                {formik.values.cvFile}
                                <button
                                    type="button"
                                    className={classes.cvFileNameButton}
                                    onClick={cvRemoveHandler}
                                >
                                    &#215;
                                </button>
                            </div>
                        )}
                    </div>

                    <div className={classes.radio}>
                        <h3 className="mt-4">Пол *</h3>
                        {formik.errors.radio && formik.touched.radio && (
                            <div className={classes.errorText}>
                                {formik.errors.radio}
                            </div>
                        )}
                    </div>
                    <div>
                        <label>
                            <input
                                type="radio"
                                value="male"
                                className="mr-2"
                                name="radio"
                                checked={formik.values.radio === "male"}
                                onChange={formik.handleChange}
                            />
                            Мужской
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="female"
                                className="ml-3 mr-2"
                                name="radio"
                                checked={formik.values.radio === "female"}
                                onChange={formik.handleChange}
                            />
                            Женский
                        </label>
                    </div>

                    <h3 className="mt-4">Github</h3>
                    <TextInput
                        label={"Вставьте ссылку на Github"}
                        type={"text"}
                        placeholder={"Вставьте ссылку на Github"}
                        errorText={formik.errors.githubLink}
                        errorCondition={
                            !!formik.errors.githubLink &&
                            formik.touched.githubLink
                        }
                        {...formik.getFieldProps("githubLink")}
                    />

                    <div className={classes.agreementText}>
                        <label className="mt-4">
                            <input
                                type="checkbox"
                                id="agreement"
                                checked={formik.values.agreement}
                                {...formik.getFieldProps("agreement")}
                            />
                            {` * Я
                            согласен с `}
                        </label>
                        <div
                            className={classes.policyText}
                            onClick={() => setPrivacyPolicyModalVisible(true)}
                        >
                            полтикой конфиденциальности
                        </div>
                        <PrivacyPolicyModal
                            show={privacyPolicyModalVisible}
                            onHide={() => setPrivacyPolicyModalVisible(false)}
                            value={formik.values.agreement}
                            onAgree={agreeButtonHandler}
                        />
                        {formik.errors.agreement &&
                            formik.touched.agreement && (
                                <div className={classes.agreementErrorText}>
                                    {formik.errors.agreement}
                                </div>
                            )}
                    </div>

                    <button
                        type="submit"
                        className={`mt-4 ${classes.submitButton}`}
                        disabled={
                            !formik.values.agreement ||
                            !formik.values.firstName ||
                            !formik.values.lastName ||
                            !formik.values.email ||
                            !formik.values.radio
                        }
                    >
                        Отправить
                    </button>
                    <SuccessModal
                        name={successModalVisible.name}
                        show={successModalVisible.isVisible}
                        onHide={() =>
                            setSuccessModalVisible({
                                isVisible: false,
                                name: "",
                            })
                        }
                    />
                </form>
            </div>
        );
    }
);
