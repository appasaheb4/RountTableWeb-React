//Message
var errorMessage = {
    cancel: "CANCEL",
    ok: "OK",
    thanks: "Thanks!!",
    logout_Title: "Logout",
    logout_message: "Are you sure you want to logout?",
    aLERT_Title: "Message",
    aPI_FAILED: "Server not responding, please try after some time.",
    internet_ErrorTitle: "No Internet",
    fAILED_INTERNET: "No internet connection available."
};

//Colors
var colors = {
    appColor: "#2595D6",
    black: "#000000",
    white: "#ffffff",
    Saving: "#E6A620",
    Secure: "#30A2F3",
    placeholder: "#5F5F5F"
};


//Rest Full Api
const domain = process.env.REACT_APP_API_DOMIN_PROD_ROUND_CMSHUAWEI;
var apiary = {
    domain: domain,
    getAllTableInfo: domain + process.env.REACT_APP_API_GETALLTABLEINFO,
    insertTableInfo: domain + process.env.REACT_APP_API_INSERTTABLEINFO,
    deleteTableInfo: domain + process.env.REACT_APP_API_DELETE_TABLEINFO,
    getAllDeviceUserInfo: domain + process.env.REACT_APP_API_GETALLDEVICEUSERINFO,
    deleteDeviceUserInfo: domain + process.env.REACT_APP_API_DELETEDEVICEUSERINFO,
};


export { errorMessage, apiary, colors };
