// export const LoanProposerDetails_api ="https://example.com/api/submit-boundaries"

// //export const Login_api ="https://example.com/api/submit-boundaries"
// export const Login_api ="http://localhost:3000/api/auth/login"
// export const signup_api ="http://localhost:3000/api/auth/signup"

// export const Mostrecentdocuments_api ="https://example.com/api/submit-boundaries"
// export const Propertyboundaries_api ="https://example.com/api/submit-boundaries"
// export const Propertydetails_api ="https://example.com/api/submit-boundaries"
// //export const signup_api ="https://example.com/api/submit-boundaries"
// export const TitleHolderDetails_api ="https://example.com/api/submit-boundaries"

// src/apiUrls.js
// All endpoints are built from the base URL in .env
const BASE = process.env.REACT_APP_API_BASE;

export const Login_api             = `${BASE}/api/auth/login`;
export const signup_api            = `${BASE}/api/auth/signup`;
export const LoanProposerDetails_api = `${BASE}/api/session/create-session`;
export const Mostrecentdocuments_api = `${BASE}/api/submit-boundaries`;
export const Propertyboundaries_api  = `${BASE}/api/submit-boundaries`;
export const Propertydetails_api     = `${BASE}/api/submit-boundaries`;
export const TitleHolderDetails_api  = `${BASE}/api/submit-boundaries`;

console.log("API BASE =>", process.env.REACT_APP_API_BASE);
