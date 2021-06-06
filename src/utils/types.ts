export type successModalVisibleType = {
    isVisible: boolean;
    name: string;
};

export type ApplicantFormPropsType = {
    successModalVisible: successModalVisibleType;
    setSuccessModalVisible: (values: successModalVisibleType) => void;
    privacyPolicyModalVisible: boolean;
    setPrivacyPolicyModalVisible: (value: boolean) => void;
};

export type FormikErrorType = {
    firstName?: string;
    lastName?: string;
    email?: string;
    radio?: string;
    agreement?: string;
};

export type FormikValidateValuesType = {
    firstName: string;
    lastName: string;
    email: string;
    cvFile: string;
    radio: string;
    githubLink: string;
    agreement: boolean;
};

export type PrivacyPolicyModalType = {
    value: boolean;
    show: boolean;
    onHide: () => void;
    onAgree: () => void;
};
