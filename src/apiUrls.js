const BASE = process.env.REACT_APP_API_BASE_URL; // dynamic base from .env

export const Login_api = `${BASE}${process.env.REACT_APP_API_LOGIN}`;
export const Signup_api = `${BASE}${process.env.REACT_APP_API_SIGNUP}`;

export const LoanProposerDetails_api = `${BASE}${process.env.REACT_APP_API_SESSION}`;
export const TitleHolderDetails_api = `${BASE}${process.env.REACT_APP_API_SESSION}`;
export const MostRecentDocuments_api = `${BASE}${process.env.REACT_APP_API_SESSION}`;
export const PropertyBoundaries_api = `${BASE}${process.env.REACT_APP_API_SESSION}`;
export const PropertyDetails_api = `${BASE}${process.env.REACT_APP_API_SESSION}`;

export const LoanProposerAndTitleHolders_api = `${BASE}${process.env.REACT_APP_API_SESSION}`;

// link document apis 
export const LinkDoc_api = `${BASE}${process.env.REACT_APP_API_LINKDOC}`;

// const BASE = process.env.REACT_APP_API_BASE;

// export const Login_api             = `${BASE}/api/auth/login`;
// export const signup_api            = `${BASE}/api/auth/signup`;
// export const Login_api ="http://localhost:3000/api/auth/login"
// export const signup_api ="http://localhost:3000/api/auth/signup"
// export const LoanProposerDetails_api = "http://localhost:3000/api/session/create-session"
// export const Mostrecentdocuments_api = `${BASE}/api/submit-boundaries`;
// export const Propertyboundaries_api  = `${BASE}/api/submit-boundaries`;
// export const Propertydetails_api     = `${BASE}/api/submit-boundaries`;
// export const LoanProposerAndTitleHolders_api = "http://localhost:3000/api/session/create-session"

// console.log("API BASE =>", process.env.REACT_APP_API_BASE);



