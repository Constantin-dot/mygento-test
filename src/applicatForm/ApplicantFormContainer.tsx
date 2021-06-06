import React, { useState } from "react";
import { successModalVisibleType } from "../utils/types";
import { ApplicantForm } from "./ApplicantForm";

export const ApplicantFormContainer = () => {
    const [successModalVisible, setSuccessModalVisible] =
        useState<successModalVisibleType>({ isVisible: false, name: "" });
    const [privacyPolicyModalVisible, setPrivacyPolicyModalVisible] =
        useState<boolean>(false);

    return (
        <ApplicantForm
            successModalVisible={successModalVisible}
            setSuccessModalVisible={setSuccessModalVisible}
            privacyPolicyModalVisible={privacyPolicyModalVisible}
            setPrivacyPolicyModalVisible={setPrivacyPolicyModalVisible}
        />
    );
};
