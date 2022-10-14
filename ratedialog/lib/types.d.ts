export declare type DialogRateBDD = {
    options: DialogRateOption;
    nbUseApp: number;
    userRatedOrRefused: boolean;
};
export declare type DialogRateLanguagesAccepted = 'en' | 'fr';
export declare type DialogRateOption = {
    appName: string;
    locale: DialogRateLanguagesAccepted;
    usesUntilPrompt: number;
    storeAppURL: {
        ios: string;
        android: string;
    };
    forceText?: {
        rate_dialog_modal_title: string;
        rate_dialog_content: string;
        rate_dialog_modal_btn_ratenow: string;
        rate_dialog_modal_btn_no: string;
        rate_dialog_modal_btn_maybe_later: string;
    };
};
export declare const dialogRateTableName = "ratedialog";
