import React, { useEffect } from "react";
import { getToken } from "../auth";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

// Function to initialize a session with no expiry
const initializeSession = () => {
  const sessionId = uuidv4(); // Generate a unique session ID
  sessionStorage.setItem("sessionId", sessionId); // Store the session ID in sessionStorage
  console.log(`Session ID: ${sessionId}`);
};

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Initialize session if not already set
    if (!sessionStorage.getItem("sessionId")) {
      initializeSession();
    }
    // Print token in console when Home loads
    const token = getToken();
    console.log("JWT/Bearer Token:", token);
  }, []); // This runs only once, when the component mounts



  const createDocument = () => {
    console.log("Create Document triggered");
    // Preserve user_id before clearing sessionStorage
    const userId = sessionStorage.getItem("user_id");
    sessionStorage.clear();
    if (userId) {
      sessionStorage.setItem("user_id", userId);
    }
    initializeSession(); // Generate a new session ID
    navigate("CreateDocument"); // Navigate to the next page
  };

  const goToSessionDocument = () => {
    navigate("/SessionDocument"); // Navigate to the SessionDocument page
  };
  return (
    <div
      style={{
        height:"82vh",
        
        backgroundImage: `url('/frontendimg2.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
      className="d-flex justify-content-center align-items-center text-center w-100"
    >
      <div className="d-flex flex-column flex-lg-column align-items-center gap-4 ">
        <Button
          variant="outline-danger px-4 mb-3 mb-lg-3"
          size="lg"
          className="fs-4"
          style={{
            borderWidth: "3px",
            width: "auto",
            color: "white",
            fontWeight: "bold",
          }}
          onClick={goToSessionDocument}
        >
          Session Document
        </Button>

        <Button
          variant="outline-success px-5 mb-lg-3"
          size="lg"
          className="fs-4"
          style={{
            borderWidth: "3px",
            width: "auto",
            color: "white",
            fontWeight: "bold",
          }}
          onClick={createDocument}
        >
          Create Document
        </Button>
         

        <Button
          variant="outline-primary px-5"
          size="lg"
          className="fs-4"
          style={{
            borderWidth: "3px",
            width: "auto",
            color: "white",
            fontWeight: "bold",
          }}
            onClick={() => navigate("/FinishedDocuments")}

        >
          Finished Document
        </Button>
         
      </div>
    </div>
  );
};

export default Home;


// import React, { useEffect } from "react";
// import Button from "react-bootstrap/Button";
// import { useNavigate } from "react-router-dom";
// import { v4 as uuidv4 } from "uuid";

// // Function to initialize a session with no expiry
// const initializeSession = () => {
//   const sessionId = uuidv4(); // Generate a unique session ID
//   sessionStorage.setItem("sessionId", sessionId); // Store the session ID in sessionStorage
//   console.log(`Session ID: ${sessionId}`);
// };

// const Home = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Initialize session if not already set
//     if (!sessionStorage.getItem("sessionId")) {
//       initializeSession(); // Only set the session if it does not exist
//     }
//   }, []); // This runs only once, when the component mounts

//   const createDocument = () => {
//     console.log("Create Document triggered");

//     // Clear all session storage data when "Create Document" is clicked
//     sessionStorage.clear(); // This will clear everything in sessionStorage

//     // Generate a new session ID (for a fresh start)
//     initializeSession();

//     // Navigate to the "SessionDocument" page
//     navigate("/SessionDocument"); 
//   };

//   const goToSessionDocument = () => {
//     navigate("/SessionDocument"); // Navigate to the SessionDocument page without clearing session storage
//   };

//   return (
//     <div
//       style={{
//         height: "80vh",
//         backgroundImage: `url('/frontendimg2.jpg')`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         position: "relative",
//       }}
//       className="d-flex justify-content-center align-items-center text-center w-100"
//     >
//       <div className="d-flex flex-column flex-lg-column align-items-center gap-4">
//         <Button
//           variant="outline-danger px-4 mb-3 mb-lg-3"
//           size="lg"
//           className="fs-4"
//           style={{
//             borderWidth: "3px",
//             width: "auto",
//             color: "white",
//             fontWeight: "bold",
//           }}
//           onClick={goToSessionDocument} // This will navigate to SessionDocument without clearing session
//         >
//           Session Document
//         </Button>

//         <Button
//           variant="outline-success px-5 mb-lg-3"
//           size="lg"
//           className="fs-4"
//           style={{
//             borderWidth: "3px",
//             width: "auto",
//             color: "white",
//             fontWeight: "bold",
//           }}
//           onClick={createDocument} // This will clear session and navigate to CreateDocument page
//         >
//           Create Document
//         </Button>

//         <Button
//           variant="outline-primary px-5"
//           size="lg"
//           className="fs-4"
//           style={{
//             borderWidth: "3px",
//             width: "auto",
//             color: "white",
//             fontWeight: "bold",
//           }}
//         >
//           Finished Document
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default Home;
