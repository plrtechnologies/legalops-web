// import React, { useEffect, useState } from "react";

// const SessionDocument = () => {
//   const [sessions, setSessions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   const [searchTerm, setSearchTerm] = useState("");
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");

//   useEffect(() => {
//     const fetchSessions = async () => {
//       try {
//         // const response = await fetch("https://687129ef7ca4d06b34b991a7.mockapi.io/sessions");
//         const response = await fetch("https://687129ef7ca4d06b34b991a7.mockapi.io/sessions");
//         if (!response.ok) throw new Error("Failed to fetch sessions");
//         const data = await response.json();
//         console.log("Fetched sessions:", data);
//         setSessions(data);
//       } catch (err) {
//         console.error("Error:", err);
//         setError("Could not load session documents.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSessions();
//   }, []);

//   const filteredSessions = sessions.filter((session) => {
//     const search = searchTerm.toLowerCase();
//     const nameMatch = session.loanProposerName?.toLowerCase().includes(search);
//     //const emailMatch = session.userid?.toLowerCase().includes(search);
//     const emailMatch = session.sessionId?.toLowerCase().includes(search);
//     const sessionDate = new Date(session.createdAt);
//     const start = startDate ? new Date(startDate) : null;
//     const end = endDate ? new Date(endDate) : null;

//     const dateMatch =
//       (!start || sessionDate >= start) &&
//       (!end || sessionDate <= end);

//     return (nameMatch || emailMatch) && dateMatch;
//   });

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial", minHeight: "83vh" }}>
//       <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Session Document</h2>

//       {/* Search Filters */}
//       <div style={{ display: "flex", justifyContent: "center", gap: "15px", flexWrap: "wrap", marginBottom: "20px"  }}>
//         <input
//           type="text"
//           placeholder="Search by name or user ID"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           style={{ padding: "10px", width: "300px", borderRadius: "5px", border: "1px solid #ccc" }}
//         />
//         <label style={{ paddingTop: "10px", marginLeft:"20px"}} htmlFor="end-date">Start Date</label>
//         <input
//           type="date"
//           placeholder=" user ID"
//           value={startDate}
//           onChange={(e) => setStartDate(e.target.value)}
//           style={{ padding: "10px", width: "180px", borderRadius: "5px", border: "1px solid #ccc" }}
//         />
//         <label style={{ paddingTop: "10px"}} htmlFor="end-date">End Date</label>
//         <input
//           placeholder="select date"
//           type="date"
//           value={endDate}
//           onChange={(e) => setEndDate(e.target.value)}
//           style={{ padding: "10px", width: "180px", borderRadius: "5px", border: "1px solid #ccc" }}
//         />
//       </div>

//       {/* Loading / Error / Results */}
//       {loading ? (
//         <p style={{ textAlign: "center" }}>Loading sessions...</p>
//       ) : error ? (
//         <p style={{ textAlign: "center", color: "red" }}>{error}</p>
//       ) : filteredSessions.length === 0 ? (
//         <p style={{ textAlign: "center" }}>No sessions found matching your filters.</p>
//       ) : (
//         <div style={{ maxHeight: "60vh", overflowY: "auto" }}>
//           <ol style={{ paddingLeft: "20px", marginTop: 0 }}>
//             {/* Table Header with S.No */}
//             <li style={{ fontWeight: "bold", listStyle: "none", marginBottom: "10px" }}>
//               <div style={{
//                 display: "grid",
//                 gridTemplateColumns: "60px 200px 300px 200px 200px",
//                 gap: "10px",
//                 alignItems: "center"
//               }}>
//                 <span>S.No</span>
//                 <span>Name</span>
//                 <span>User ID</span>
//                 <span>Date</span>
//               </div>
//             </li>

//             {/* Data Rows with S.No */}
//             {filteredSessions.map((session, index) => (
//               <li key={index} style={{ listStyle: "none", marginBottom: "10px" }}>
//                 <div style={{
//                   display: "grid",
//                   gridTemplateColumns: "60px 200px 300px 200px 200px",
//                   gap: "10px",
//                   alignItems: "center"
//                 }}>
//                   <span>{index + 1}</span>
//                   <span>
//                     <a
//                       href={`/${session.lastPage}?sessionid=${session.sessionid}`}
//                       style={{ color: "#007bff", fontWeight: "bold", textDecoration: "none" }}
//                     >
//                       {session.loanProposerName}
//                     </a>
//                   </span>
                  
//                   <span>{session.sessionId}</span>
//                   <span>{session.sessionid}</span>
//                   <span>{new Date(session.createdAt).toLocaleString()}</span>
//                 </div>
//               </li>
//             ))}
//           </ol>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SessionDocument;


//above code is working with mock api ''''''''''''

















// import React from "react";


// const SessionDocument =()  =>{
//      return(
//         <div style={{ height: "100vh" }}>
//             <div>
//                   <h2 className="text-center">Session Document</h2>

                  
//             </div>
//         </div>
//      )

// }
//export default SessionDocument;
//---------------------------------------------------------

//
 
// import React, { useEffect, useState } from "react";

// const SessionDocument = () => {
//   const [sessions, setSessions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchSessions = async () => {
//       try {
//         const response = await fetch("https://run.mocky.io/v3/a370c51c-8f0f-4fc7-9e9a-b36d25d4038e");

//         if (!response.ok) {
//           throw new Error("Failed to fetch sessions");
//         }

//         const data = await response.json();
//         setSessions(data.sessions || []);
//       } catch (err) {
//         console.error("Error:", err);
//         setError("Could not load session documents.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSessions();
//   }, []);

//   return (
//     <div style={{ height: "100vh", padding: "20px" }}>
//       <h2 className="text-center mb-4">Session Document</h2>

//       {loading ? (
//         <p className="text-center">Loading sessions...</p>
//       ) : error ? (
//         <p className="text-center text-danger">{error}</p>
//       ) : sessions.length === 0 ? (
//         <p className="text-center">No incomplete sessions found.</p>
//       ) : (
//         <div className="container">
//           {sessions.map((session, index) => (
//             <a
//               key={index}
//               href={`/resume/${session.MostRecentDocument}`}
//               style={{ textDecoration: "none", color: "inherit" }}
//             >
//               <div
//                 className="border rounded p-3 mb-3 shadow-sm"
//                 style={{
//                   transition: "0.2s ease-in-out",
//                   cursor: "pointer"
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.backgroundColor ="#A4EAFA"; //"#f0f8ff";
//                   e.currentTarget.style.boxShadow = "0 0 10px rgba(26, 78, 167, 0.3)";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.backgroundColor = "white";
//                   e.currentTarget.style.boxShadow = "none";
//                 }}
//               >
//                 <p style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "10px" }}>
//                   <span><strong>Name:</strong> {session.name}</span>
//                   <span><strong>Session ID:</strong> {session.sessionId}</span>
//                   <span><strong>Created At:</strong> {new Date(session.createdAt).toLocaleString()}</span>
//                 </p>
//               </div>
//             </a>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SessionDocument;





//----------------
//---------------------
//-----------------------------


// import React, { useEffect, useState } from "react";

// const SessionDocument = () => {
//   const [sessions, setSessions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchSessions = async () => {
//       try {
//         // dummy api used 
//         const response = await fetch("https://run.mocky.io/v3/a370c51c-8f0f-4fc7-9e9a-b36d25d4038e");

//         if (!response.ok) {
//           throw new Error("Failed to fetch sessions");
//         }

//         const data = await response.json();
//         setSessions(data.sessions || []);
//       } catch (err) {
//         console.error("Error:", err);
//         setError("Could not load session documents.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSessions();
//   }, []);

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", height:"83vh" }}>
//       <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Session Document</h2>

//       {loading ? (
//         <p style={{ textAlign: "center" }}>Loading sessions...</p>
//       ) : error ? (
//         <p style={{ textAlign: "center", color: "red" }}>{error}</p>
//       ) : sessions.length === 0 ? (
//         <p style={{ textAlign: "center" }}>No incomplete sessions found.</p>
//       ) : (
//         <ol style={{ paddingLeft: "20px" }}>
//           {sessions.map((session, index) => (
//             <li key={index} style={{ marginBottom: "15px" }}>
//               <div
//                 style={{
//                   display: "grid",
//                   gridTemplateColumns: "300px 250px 250px",
//                   columnGap: "20px",
//                   alignItems: "center"
//                 }}
//               >
//                 <span>
//                   <a
//                     href={`/resume/${session.MostRecentDocument}`}
//                     style={{ color: "#007bff", textDecoration: "none", fontWeight: "bold" }}
//                   >
//                     Name: {session.name}
//                   </a>
//                 </span>
//                 <span><strong>Session ID:</strong> {session.sessionId}</span>
//                 <span><strong>Date:</strong> {new Date(session.createdAt).toLocaleString()}</span>
//               </div>
//             </li>
//           ))}
//         </ol>
//       )}
//     </div>
//   );
// };

// export default SessionDocument;


//------------------------------------------------------------


// import React, { useEffect, useState } from "react";

// const SessionDocument = () => {
//   const [sessions, setSessions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   const [searchName, setSearchName] = useState("");
//   const [searchDate, setSearchDate] = useState("");

//   useEffect(() => {
//     const fetchSessions = async () => {
//       try {
//         const response = await fetch("https://687129ef7ca4d06b34b991a7.mockapi.io/sessions");//"https://run.mocky.io/v3/a370c51c-8f0f-4fc7-9e9a-b36d25d4038e"
//         if (!response.ok) throw new Error("Failed to fetch sessions");
//         const data = await response.json();
//         setSessions(data);
//       } catch (err) {
//         console.error("Error:", err);
//         setError("Could not load session documents.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSessions();
//   }, []);

//   // Filter sessions by name and date
//   const filteredSessions = sessions.filter((session) => {
//     const nameMatch = session.name.toLowerCase().includes(searchName.toLowerCase());

//     const sessionDate = new Date(session.createdAt).toISOString().slice(0, 100); // "YYYY-MM-DD"
//     const dateMatch = searchDate ? sessionDate === searchDate : true;

//     return nameMatch && dateMatch;
//   });

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", height: "83vh" }}>
//       <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Session Document</h2>

//       {/* Search Filters */}
//       <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginBottom: "20px" }}>
//         <input
//           type="text"
//           placeholder="Search by name"
//           value={searchName}
//           onChange={(e) => setSearchName(e.target.value)}
//           style={{ padding: "10px", width: "400px", borderRadius: "5px", border: "1px solid #ccc" }}
//         />
//         <input
//           type="date"
//           value={searchDate}
//           onChange={(e) => setSearchDate(e.target.value)}
//           style={{ padding: "10px", width: "200px", borderRadius: "5px", border: "1px solid #ccc" }}
//         />
//       </div>

//       {/* Loading / Error / Results */}
//       {loading ? (
//         <p style={{ textAlign: "center" }}>Loading sessions...</p>
//       ) : error ? (
//         <p style={{ textAlign: "center", color: "red" }}>{error}</p>
//       ) : filteredSessions.length === 0 ? (
//         <p style={{ textAlign: "center" }}>No sessions found matching your filters.</p>
//       ) : (
//         <ol style={{ paddingLeft: "20px" }}>
//           {filteredSessions.map((session, index) => (
//             <li key={index} style={{ marginBottom: "15px" }}>
//               <div
//                 style={{
//                   display: "grid",
//                   gridTemplateColumns: "200px 300px 200px 200px",
//                   columnGap: "10px",
//                   alignItems: "center"
//                 }}
//               >
//                 <span>
//                   <a
//                     // href={`/resume/${session.MostRecentDocument}`}
//                     href={`/${session.lastPage}?sessionid=${session.sessionid}`}

//                     style={{
//                       color: "#007bff",
//                       textDecoration: "none",
//                       fontWeight: "bold"
//                     }}
//                   >
//                     Name: {session.name}
//                   </a>
//                 </span>
//                 <span><strong>User ID:</strong> {session.userid}</span>
//                  <span><strong>Session ID:</strong> {session.sessionid}</span>
//                 <span><strong>Date:</strong> {new Date(session.createdAt).toLocaleString()}</span>
//               </div>
//             </li>
//           ))}
//         </ol>
//       )}
//     </div>
//   );
// };

// export default SessionDocument;









// import React, { useEffect, useState } from "react";

// const SessionDocument = () => {
//   const [sessions, setSessions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   const [searchName, setSearchName] = useState("");
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");

//   useEffect(() => {
//     const fetchSessions = async () => {
//       try {
//         const response = await fetch("https://687129ef7ca4d06b34b991a7.mockapi.io/sessions");
//         if (!response.ok) throw new Error("Failed to fetch sessions");
//         const data = await response.json();
//         setSessions(data);
//       } catch (err) {
//         console.error("Error:", err);
//         setError("Could not load session documents.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSessions();
//   }, []);

//   // Filter sessions by name and date range
//   const filteredSessions = sessions.filter((session) => {
//     const nameMatch =
//       typeof session.name === "string" &&
//       session.name.toLowerCase().includes(searchName.toLowerCase());

//     const sessionDate = session.createdAt ? new Date(session.createdAt) : null;
//     const start = startDate ? new Date(startDate) : null;
//     const end = endDate ? new Date(endDate) : null;

//     const dateMatch =
//       (!start || (sessionDate && sessionDate >= start)) &&
//       (!end || (sessionDate && sessionDate <= end));

//     return nameMatch && dateMatch;
//   });

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", minheight: "83vh" }}>
//       <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Session Document</h2>

//       {/* Search Filters */}
//       <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginBottom: "20px" }}>
//         <input
//           type="text"
//           placeholder="Search by name"
//           value={searchName}
//           onChange={(e) => setSearchName(e.target.value)}
//           style={{ padding: "10px", width: "300px", borderRadius: "5px", border: "1px solid #ccc" }}
//         />
          
//         <input
//           type="date"
//           value={startDate}
//           onChange={(e) => setStartDate(e.target.value)}
//           style={{ padding: "10px", width: "180px", borderRadius: "5px", border: "1px solid #ccc" }}
//         />
//         <input
//           type="date"
           
//           value={endDate}
//           onChange={(e) => setEndDate(e.target.value)}
//           style={{ padding: "10px", width: "180px", borderRadius: "5px", border: "1px solid #ccc" }}
//         />
//       </div>

//       {/* Loading / Error / Results */}
//       {loading ? (
//         <p style={{ textAlign: "center" }}>Loading sessions...</p>
//       ) : error ? (
//         <p style={{ textAlign: "center", color: "red" }}>{error}</p>
//       ) : filteredSessions.length === 0 ? (
//         <p style={{ textAlign: "center" }}>No sessions found matching your filters.</p>
//       ) : (
//         <ol style={{ paddingLeft: "20px" }}>
//           {/* Table header */}
//           <li style={{ fontWeight: "bold", marginBottom: "10px" }}>
//             <div
//               style={{
//                 display: "grid",
//                 gridTemplateColumns: "200px 300px 200px 200px",
//                 columnGap: "10px",
//                 alignItems: "center",
//               }}
//             >
//               <span>Name</span>
//               <span>User ID</span>
//               <span>Session ID</span>
//               <span>Date</span>
//             </div>
//           </li>

//           {/* Data rows */}
//           {filteredSessions.map((session, index) => (
//             <li key={index} style={{ marginBottom: "15px" }}>
//               <div
//                 style={{
//                   display: "grid",
//                   gridTemplateColumns: "200px 300px 200px 200px",
//                   columnGap: "10px",
//                   alignItems: "center",
//                 }}
//               >
//                 <span>
//                   <a
//                     href={`/${session.lastPage}?sessionid=${session.sessionid}`}
//                     style={{
//                       color: "#007bff",
//                       textDecoration: "none",
//                       fontWeight: "bold",
//                     }}
//                   >
//                     {session.name}
//                   </a>
//                 </span>
//                 <span>{session.userid}</span>
//                 <span>{session.sessionid}</span>
//                 <span>{new Date(session.createdAt).toLocaleString()}</span>
//               </div>
//             </li>
//           ))}
//         </ol>
//       )}
//     </div>
//   );
// };

// export default SessionDocument;


//======================================
 







// import React, { useEffect, useState } from "react";

// const SessionDocument = () => {
//   const [sessions, setSessions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   // Search and date filter inputs
//   const [searchTerm, setSearchTerm] = useState("");
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");

//   // 🟡 Load session data from API when component loads
//   useEffect(() => {
//     const fetchSessions = async () => {
//       try {
//         const response = await fetch("https://687129ef7ca4d06b34b991a7.mockapi.io/sessions");
//         if (!response.ok) throw new Error("Failed to fetch sessions");
//         const data = await response.json();
//         setSessions(data);
//       } catch (err) {
//         console.error("Error:", err);
//         setError("Could not load session documents.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSessions();
//   }, []);

//   // 🔎 Filter logic for name/email and date range
//   const filteredSessions = sessions.filter((session) => {
//     // Match by name or email
//     const search = searchTerm.toLowerCase();
//     const nameMatch = session.name?.toLowerCase().includes(search);
//     const emailMatch = session.userid?.toLowerCase().includes(search);

//     // Match by date range
//     const sessionDate = new Date(session.createdAt);
//     const start = startDate ? new Date(startDate) : null;
//     const end = endDate ? new Date(endDate) : null;

//     const dateMatch =
//       (!start || sessionDate >= start) &&
//       (!end || sessionDate <= end);

//     return (nameMatch || emailMatch) && dateMatch;
//   });

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial", minHeight: "83vh" }}>
//       <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Session Document</h2>

//       {/* 🔍 Search and Filter Inputs */}
//       <div style={{ display: "flex", justifyContent: "center", gap: "15px", flexWrap: "wrap", marginBottom: "20px"  }}>
//         <input
//           type="text"
//           placeholder="Search by name or user ID"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           style={{ padding: "10px", width: "300px", borderRadius: "5px", border: "1px solid #ccc" }}
//         />
//         <input
//           type="date"
//           value={startDate}
//           onChange={(e) => setStartDate(e.target.value)}
//           style={{ padding: "10px", width: "180px", borderRadius: "5px", border: "1px solid #ccc" }}
//         />
//         <input
//           type="date"
//           value={endDate}
//           onChange={(e) => setEndDate(e.target.value)}
//           style={{ padding: "10px", width: "180px", borderRadius: "5px", border: "1px solid #ccc" }}
//         />
//       </div>

//       {/* 🔄 Show status or results */}
//       {loading ? (
//         <p style={{ textAlign: "center" }}>Loading sessions...</p>
//       ) : error ? (
//         <p style={{ textAlign: "center", color: "red" }}>{error}</p>
//       ) : filteredSessions.length === 0 ? (
//         <p style={{ textAlign: "center" }}>No sessions found matching your filters.</p>
//       ) : (
//         <div style={{ maxHeight: "60vh", overflowY: "auto" }}>
//           <ol style={{ paddingLeft: "20px", marginTop: 0 }}>
//             {/* Table Header */}
//             <li style={{ fontWeight: "bold", listStyle: "none", marginBottom: "10px" }}>
//               <div style={{
//                 display: "grid",
//                 gridTemplateColumns: "200px 300px 200px 200px",
//                 gap: "10px",
//                 alignItems: "center"
//               }}>
//                 <span>Name</span>
//                 <span>User ID</span>
//                 <span>Session ID</span>
//                 <span>Date</span>
//               </div>
//             </li>

//             {/* Data Rows */}
//             {filteredSessions.map((session, index) => (
//               <li key={index} style={{ listStyle: "none", marginBottom: "10px" }}>
//                 <div style={{
//                   display: "grid",
//                   gridTemplateColumns: "200px 300px 200px 200px",
//                   gap: "10px",
//                   alignItems: "center"
//                 }}>
//                   <span>
//                     <a
//                       href={`/${session.lastPage}?sessionid=${session.sessionid}`}
//                       style={{ color: "#007bff", fontWeight: "bold", textDecoration: "none" }}
//                     >
//                       {session.name}
//                     </a>
//                   </span>
//                   <span>{session.userid}</span>
//                   <span>{session.sessionid}</span>
//                   <span>{new Date(session.createdAt).toLocaleString()}</span>
//                 </div>
//               </li>
//             ))}
//           </ol>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SessionDocument;          //111111111

//----------use this -----------------


 








// testing purpose only usinggg------


// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";  

//    //import LoanProposerDetails from "./LoanProposerDetails";

// const SessionDocument = () => {
//   const [sessions, setSessions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");

//   useEffect(() => {
//     const fetchSessions = async () => {
//       try {
//          const response = await fetch("https://687129ef7ca4d06b34b991a7.mockapi.io/sessions");
//         //const response = await fetch("");
//         if (!response.ok) throw new Error("Failed to fetch sessions");
//         const data = await response.json();
//         console.log("Fetched sessions:", data);
//         setSessions(data);
//       } catch (err) {
//         console.error("Error:", err);
//         setError("Could not load session documents.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSessions();
//   }, []);

//   const filteredSessions = sessions.filter((session) => {
//     const search = searchTerm.toLowerCase();
//     const nameMatch = session.loanProposerName?.toLowerCase().includes(search);
//     const emailMatch = session.sessionId?.toLowerCase().includes(search);
//     const sessionDate = new Date(session.createdAt);
//     const start = startDate ? new Date(startDate) : null;
//     const end = endDate ? new Date(endDate) : null;

//     const dateMatch =
//       (!start || sessionDate >= start) &&
//       (!end || sessionDate <= end);

//     return (nameMatch || emailMatch) && dateMatch;
//   });

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial", minHeight: "83vh" }}>
//       <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Session Document</h2>

//       {/* Search Filters */}
//       <div style={{ display: "flex", justifyContent: "center", gap: "15px", flexWrap: "wrap", marginBottom: "20px" }}>
//         <input
//           type="text"
//           placeholder="Search by name or session ID"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           style={{ padding: "10px", width: "300px", borderRadius: "5px", border: "1px solid #ccc" }}
//         />
//         <label style={{ paddingTop: "10px", marginLeft: "20px" }}>Start Date</label>
//         <input
//           type="date"
//           value={startDate}
//           onChange={(e) => setStartDate(e.target.value)}
//           style={{ padding: "10px", width: "180px", borderRadius: "5px", border: "1px solid #ccc" }}
//         />
//         <label style={{ paddingTop: "10px" }}>End Date</label>
//         <input
//           type="date"
//           value={endDate}
//           onChange={(e) => setEndDate(e.target.value)}
//           style={{ padding: "10px", width: "180px", borderRadius: "5px", border: "1px solid #ccc" }}
//         />
//       </div>

//       {/* Loading / Error / Results */}
//       {loading ? (
//         <p style={{ textAlign: "center" }}>Loading sessions...</p>
//       ) : error ? (
//         <p style={{ textAlign: "center", color: "red" }}>{error}</p>
//       ) : filteredSessions.length === 0 ? (
//         <p style={{ textAlign: "center" }}>No sessions found matching your filters.</p>
//       ) : (
//         <div style={{ maxHeight: "60vh", overflowY: "auto" }}>
//           <ol style={{ paddingLeft: "20px", marginTop: 0 }}>
//             <li style={{ fontWeight: "bold", listStyle: "none", marginBottom: "10px" }}>
//               <div style={{
//                 display: "grid",
//                 gridTemplateColumns: "60px 200px 300px 200px 200px",
//                 gap: "10px",
//                 alignItems: "center"
//               }}>
//                 <span>S.No</span>
//                 <span>Name</span>
//                 <span>Session ID</span>
//                 <span>Created Date</span>
//               </div>
//             </li>

//             {filteredSessions.map((session, index) => (
//               <li key={index} style={{ listStyle: "none", marginBottom: "10px" }}>
//                 <div style={{
//                   display: "grid",
//                   gridTemplateColumns: "60px 200px 300px 200px 200px",
//                   gap: "10px",
//                   alignItems: "center"
//                 }}>
//                   <span>{index + 1}</span>
//                   <span>
//                     {/* <Link
//                       href={`/${session.lastPage || 'LoanProposerDetails'}?sessionid=${session.sessionId}`}
//                       style={{ color: "#007bff", fontWeight: "bold", textDecoration: "none" }}
//                     >
//                       {session.loanProposerName || "Unnamed"}
//                     </Link> */}
//                     {/* <Link
//                     to={`/${session.lastPage || 'LoanProposerDetails'}?sessionid=${session.sessionId}`}
//                     style={{ color: "#007bff", fontWeight: "bold", textDecoration: "none" }}>
//                    {session.loanProposerName || "Unnamed"}
//                      </Link> */}

//                     <Link
//                       to={`/CreateDocument/${session.lastPage || 'LoanProposerDetails'}?sessionid=${session.sessionId}`}
//                       style={{ color: "#007bff", fontWeight: "bold", textDecoration: "none" }}
//                         >
//                        {session.loanProposerName || "Unnamed"}
//                       </Link>
//                   </span>
//                   <span>{session.sessionId}</span>
//                   <span>{new Date(session.createdAt).toLocaleString()}</span>
//                 </div>
//               </li>
//             ))}
//           </ol>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SessionDocument;




// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { getToken } from "../auth"; // if you already use token helper

// const SessionDocument = () => {
//   const [sessions, setSessions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");

//   useEffect(() => {
//     const fetchSessions = async () => {
//       try {
//         const token = getToken(); // if auth is required
//         const user_id = sessionStorage.getItem("user_id") || localStorage.getItem("user_id");

//         if (!user_id) {
//           throw new Error("User ID not found in storage");
//         }

//         // ✅ Replace mock URL with your actual API endpoint
//         const response = await fetch(
//           `http://localhost:3000/api/combined/resumesession`,
//           {
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: `Bearer ${token}`, // only if your API needs auth
//             },
//           }
//         );

//         if (!response.ok) throw new Error("Failed to fetch sessions");

//         const data = await response.json();
//         console.log("Fetched sessions:", data);

//         // ✅ Normalize and handle missing/invalid date values
//         const formattedSessions = data
//           .map((item) => ({
//             loanProposerName: item.loanProposerName || "Unnamed",
//             sessionId: item.sessionId || "N/A",
//             createdAt: item.createdAt ? new Date(item.createdAt) : null,
//             lastPage: item.lastPage || "",
//           }))
//           .filter((item) => item.sessionId && item.createdAt); // skip invalid data

//         setSessions(formattedSessions);
//       } catch (err) {
//         console.error("Error:", err);
//         setError("Could not load session documents.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSessions();
//   }, []);

//   // ✅ Filtering logic
//   const filteredSessions = sessions.filter((session) => {
//     const search = searchTerm.toLowerCase();
//     const nameMatch = session.loanProposerName?.toLowerCase().includes(search);
//     const idMatch = session.sessionId?.toLowerCase().includes(search);

//     const sessionDate = session.createdAt ? new Date(session.createdAt) : null;
//     const start = startDate ? new Date(startDate) : null;
//     const end = endDate ? new Date(endDate) : null;

//     const dateMatch =
//       (!start || (sessionDate && sessionDate >= start)) &&
//       (!end || (sessionDate && sessionDate <= end));

//     return (nameMatch || idMatch) && dateMatch;
//   });

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial", minHeight: "83vh" }}>
//       <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
//         Session Document
//       </h2>

//       {/* 🔍 Search + Filter */}
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           gap: "15px",
//           flexWrap: "wrap",
//           marginBottom: "20px",
//         }}
//       >
//         <input
//           type="text"
//           placeholder="Search by name or session ID"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           style={{
//             padding: "10px",
//             width: "300px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//           }}
//         />
//         <label style={{ paddingTop: "10px", marginLeft: "20px" }}>Start Date</label>
//         <input
//           type="date"
//           value={startDate}
//           onChange={(e) => setStartDate(e.target.value)}
//           style={{
//             padding: "10px",
//             width: "180px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//           }}
//         />
//         <label style={{ paddingTop: "10px" }}>End Date</label>
//         <input
//           type="date"
//           value={endDate}
//           onChange={(e) => setEndDate(e.target.value)}
//           style={{
//             padding: "10px",
//             width: "180px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//           }}
//         />
//       </div>

//       {/* 📋 Session List */}
//       {loading ? (
//         <p style={{ textAlign: "center" }}>Loading sessions...</p>
//       ) : error ? (
//         <p style={{ textAlign: "center", color: "red" }}>{error}</p>
//       ) : filteredSessions.length === 0 ? (
//         <p style={{ textAlign: "center" }}>
//           No sessions found matching your filters.
//         </p>
//       ) : (
//         <div style={{ maxHeight: "60vh", overflowY: "auto" }}>
//           <ol style={{ paddingLeft: "20px", marginTop: 0 }}>
//             <li
//               style={{
//                 fontWeight: "bold",
//                 listStyle: "none",
//                 marginBottom: "10px",
//               }}
//             >
//               <div
//                 style={{
//                   display: "grid",
//                   gridTemplateColumns: "60px 200px 300px 200px 200px",
//                   gap: "10px",
//                   alignItems: "center",
//                 }}
//               >
//                 <span>S.No</span>
//                 <span>Name</span>
//                 <span>Session ID</span>
//                 <span>Created Date</span>
//               </div>
//             </li>

//             {filteredSessions.map((session, index) => (
//               <li key={index} style={{ listStyle: "none", marginBottom: "10px" }}>
//                 <div
//                   style={{
//                     display: "grid",
//                     gridTemplateColumns: "60px 200px 300px 200px 200px",
//                     gap: "10px",
//                     alignItems: "center",
//                   }}
//                 >
//                   <span>{index + 1}</span>
//                   <span>
//                     <Link
//                       to={`/CreateDocument/${
//                         session.lastPage || "LoanProposerDetails"
//                       }?sessionid=${session.sessionId}`}
//                       style={{
//                         color: "#007bff",
//                         fontWeight: "bold",
//                         textDecoration: "none",
//                       }}
//                     >
//                       {session.loanProposerName}
//                     </Link>
//                   </span>
//                   <span>{session.sessionId}</span>
//                   <span>
//                     {session.createdAt
//                       ? new Date(session.createdAt).toLocaleString("en-IN", {
//                           dateStyle: "medium",
//                           timeStyle: "short",
//                         })
//                       : "N/A"}
//                   </span>
//                 </div>
//               </li>
//             ))}
//           </ol>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SessionDocument;
////
////////
//////////////// below code is working good 


// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { getToken } from "../auth"; // Helper to get auth token if needed

// const SessionDocument = () => {
//   const [sessions, setSessions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");

//   useEffect(() => {
//     const fetchSessions = async () => {
//       try {
//         const token = getToken(); // optional if backend requires token
//         const user_id =
//           sessionStorage.getItem("user_id") || localStorage.getItem("user_id");

//         if (!user_id) {
//           throw new Error("User ID not found in storage");
//         }

//         // ✅ Correct API URL — using user_id in endpoint
//         const response = await fetch(
//           `http://localhost:3000/api/combined/resumesession/${user_id}`,
//           {
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: token ? `Bearer ${token}` : "",
//             },
//           }
//         );

//         if (!response.ok) {
//           throw new Error("Failed to fetch sessions");
//         }

//         const data = await response.json();
//         console.log("Fetched sessions:", data);

//         // ✅ Safely normalize session data
//         const formattedSessions = Array.isArray(data)
//           ? data
//               .map((item) => ({
//                 loanProposerName: item.loanProposerName || "Unnamed",
//                 sessionId: item.sessionId || "N/A",
//                 createdAt: item.createdAt ? new Date(item.createdAt) : null,
//                 lastPage: item.lastPage || "",
//               }))
//               .filter((item) => item.sessionId)
//           : [];

//         setSessions(formattedSessions);
//       } catch (err) {
//         console.error("Error fetching sessions:", err);
//         setError("Could not load session documents.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSessions();
//   }, []);

//   // ✅ Search + Date filtering
//   const filteredSessions = sessions.filter((session) => {
//     const search = searchTerm.toLowerCase();
//     const nameMatch = session.loanProposerName?.toLowerCase().includes(search);
//     const idMatch = session.sessionId?.toLowerCase().includes(search);

//     const sessionDate = session.createdAt ? new Date(session.createdAt) : null;
//     const start = startDate ? new Date(startDate) : null;
//     const end = endDate ? new Date(endDate) : null;

//     const dateMatch =
//       (!start || (sessionDate && sessionDate >= start)) &&
//       (!end || (sessionDate && sessionDate <= end));

//     return (nameMatch || idMatch) && dateMatch;
//   });

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial", minHeight: "83vh" }}>
//       <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
//         Session Document
//       </h2>

//       {/* 🔍 Search & Filter Controls */}
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           gap: "15px",
//           flexWrap: "wrap",
//           marginBottom: "20px",
//         }}
//       >
//         <input
//           type="text"
//           placeholder="Search by name or session ID"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           style={{
//             padding: "10px",
//             width: "300px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//           }}
//         />
//         <label style={{ paddingTop: "10px", marginLeft: "20px" }}>
//           Start Date
//         </label>
//         <input
//           type="date"
//           value={startDate}
//           onChange={(e) => setStartDate(e.target.value)}
//           style={{
//             padding: "10px",
//             width: "180px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//           }}
//         />
//         <label style={{ paddingTop: "10px" }}>End Date</label>
//         <input
//           type="date"
//           value={endDate}
//           onChange={(e) => setEndDate(e.target.value)}
//           style={{
//             padding: "10px",
//             width: "180px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//           }}
//         />
//       </div>

//       {/* 📋 Session List Display */}
//       {loading ? (
//         <p style={{ textAlign: "center" }}>Loading sessions...</p>
//       ) : error ? (
//         <p style={{ textAlign: "center", color: "red" }}>{error}</p>
//       ) : filteredSessions.length === 0 ? (
//         <p style={{ textAlign: "center" }}>
//           No sessions found matching your filters.
//         </p>
//       ) : (
//         <div style={{ maxHeight: "60vh", overflowY: "auto" }}>
//           <ol style={{ paddingLeft: "20px", marginTop: 0 }}>
//             <li
//               style={{
//                 fontWeight: "bold",
//                 listStyle: "none",
//                 marginBottom: "10px",
//               }}
//             >
//               <div
//                 style={{
//                   display: "grid",
//                   gridTemplateColumns: "60px 200px 300px 200px 200px",
//                   gap: "10px",
//                   alignItems: "center",
//                 }}
//               >
//                 <span>S.No</span>
//                 <span>Name</span>
//                 <span>Session ID</span>
//                 <span>Created Date</span>
//               </div>
//             </li>

//             {filteredSessions.map((session, index) => (
//               <li
//                 key={index}
//                 style={{ listStyle: "none", marginBottom: "10px" }}
//               >
//                 <div
//                   style={{
//                     display: "grid",
//                     gridTemplateColumns: "60px 200px 300px 200px 200px",
//                     gap: "10px",
//                     alignItems: "center",
//                   }}
//                 >
//                   <span>{index + 1}</span>
//                   <span>
//                     <Link
//                       to={`/CreateDocument/${
//                         session.lastPage || "LoanProposerDetails"
//                       }?sessionid=${session.sessionId}`}
//                       style={{
//                         color: "#007bff",
//                         fontWeight: "bold",
//                         textDecoration: "none",
//                       }}
//                     >
//                       {session.loanProposerName}
//                     </Link>
//                   </span>
//                   <span>{session.sessionId}</span>
//                   <span>
//                     {session.createdAt
//                       ? session.createdAt.toLocaleString("en-IN", {
//                           dateStyle: "medium",
//                           timeStyle: "short",
//                         })
//                       : "N/A"}
//                   </span>
//                 </div>
//               </li>
//             ))}
//           </ol>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SessionDocument;




















//
//
// with mockapi is working  below code .............


// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { getToken } from "../auth"; // if your API needs auth

// const SessionDocument = () => {
//   const [sessions, setSessions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");

//   useEffect(() => {
//     const fetchSessions = async () => {
//       try {
//         const token = getToken(); // if API needs authorization

//         // Replace with your actual endpoint returning all sessions
//        // const response = await fetch("https://687129ef7ca4d06b34b991a7.mockapi.io/sessions");
       
//       // const response = await fetch("http://localhost:3000/api/session/all",
//          const response = await fetch("https://687129ef7ca4d06b34b991a7.mockapi.io/sessions",
//          {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`, // remove if not required
//           },
//         });

//         if (!response.ok) throw new Error("Failed to fetch sessions");

//         const result = await response.json();

//         const formattedSessions = (result.sessions || []).map((session) => ({
//           loanProposerName: session.loanProposerName || "Unnamed",
//           sessionId: session.session_id || "N/A",
//           lastPage: session.current_page || "LoanProposerDetails",
//           createdAt: session.link_documents?.[0]?.fromDate
//             ? new Date(session.link_documents[0].fromDate)
//             : null,
//         }));

//         setSessions(formattedSessions);
//       } catch (err) {
//         console.error("Error:", err);
//         setError("Could not load session documents.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSessions();
//   }, []);

//   // Filter sessions by search term and dates
//   const filteredSessions = sessions.filter((session) => {
//     const search = searchTerm.toLowerCase();
//     const nameMatch = session.loanProposerName?.toLowerCase().includes(search);
//     const idMatch = session.sessionId?.toLowerCase().includes(search);

//     const sessionDate = session.createdAt;
//     const start = startDate ? new Date(startDate) : null;
//     const end = endDate ? new Date(endDate) : null;

//     const dateMatch =
//       (!start || (sessionDate && sessionDate >= start)) &&
//       (!end || (sessionDate && sessionDate <= end));

//     return (nameMatch || idMatch) && dateMatch;
//   });

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial", minHeight: "83vh" }}>
//       <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Session Document</h2>

//       {/* Search + Date Filter */}
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           gap: "15px",
//           flexWrap: "wrap",
//           marginBottom: "20px",
//         }}
//       >
//         <input
//           type="text"
//           placeholder="Search by name or session ID"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           style={{ padding: "10px", width: "300px", borderRadius: "5px", border: "1px solid #ccc" }}
//         />
//         <label style={{ paddingTop: "10px", marginLeft: "20px" }}>Start Date</label>
//         <input
//           type="date"
//           value={startDate}
//           onChange={(e) => setStartDate(e.target.value)}
//           style={{ padding: "10px", width: "180px", borderRadius: "5px", border: "1px solid #ccc" }}
//         />
//         <label style={{ paddingTop: "10px" }}>End Date</label>
//         <input
//           type="date"
//           value={endDate}
//           onChange={(e) => setEndDate(e.target.value)}
//           style={{ padding: "10px", width: "180px", borderRadius: "5px", border: "1px solid #ccc" }}
//         />
//       </div>

//       {/* Session List */}
//       {loading ? (
//         <p style={{ textAlign: "center" }}>Loading sessions...</p>
//       ) : error ? (
//         <p style={{ textAlign: "center", color: "red" }}>{error}</p>
//       ) : filteredSessions.length === 0 ? (
//         <p style={{ textAlign: "center" }}>No sessions found matching your filters.</p>
//       ) : (
//         <div style={{ maxHeight: "60vh", overflowY: "auto" }}>
//           <ol style={{ paddingLeft: "20px", marginTop: 0 }}>
//             <li style={{ fontWeight: "bold", listStyle: "none", marginBottom: "10px" }}>
//               <div
//                 style={{
//                   display: "grid",
//                   gridTemplateColumns: "60px 200px 300px 200px 200px",
//                   gap: "10px",
//                   alignItems: "center",
//                 }}
//               >
//                 <span>S.No</span>
//                 <span>Name</span>
//                 <span>Session ID</span>
//                 <span>Created Date</span>
//               </div>
//             </li>

//             {filteredSessions.map((session, index) => (
//               <li key={index} style={{ listStyle: "none", marginBottom: "10px" }}>
//                 <div
//                   style={{
//                     display: "grid",
//                     gridTemplateColumns: "60px 200px 300px 200px 200px",
//                     gap: "10px",
//                     alignItems: "center",
//                   }}
//                 >
//                   <span>{index + 1}</span>
//                   <span>
//                     <Link
//                       to={`/CreateDocument/${session.lastPage}?sessionid=${session.sessionId}`}
//                       style={{ color: "#007bff", fontWeight: "bold", textDecoration: "none" }}
//                     >
//                       {session.loanProposerName}
//                     </Link>
//                   </span>
//                   <span>{session.sessionId}</span>
//                   <span>
//                     {session.createdAt
//                       ? session.createdAt.toLocaleString("en-IN", {
//                           dateStyle: "medium",
//                           timeStyle: "short",
//                         })
//                       : "N/A"}
//                   </span>
//                 </div>
//               </li>
//             ))}
//           </ol>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SessionDocument;


//   import React, { useState, useEffect } from "react";
// import { Table, Button, Spinner, Alert } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import { getToken } from "../auth"; // only token helper is available

// const SessionDocument = () => {
//   const [sessions, setSessions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const fetchSessions = async () => {
//     try {
//       setLoading(true);
//       setError("");

//       const token = getToken();
//       const user_id = localStorage.getItem("user_id"); // ✅ direct fetch from localStorage

//       if (!token || !user_id) {
//         setError("User not authenticated. Please log in again.");
//         setLoading(false);
//         return;
//       }

//       const response = await fetch(
//         `http://localhost:3000/api/combined/resumesession/${user_id}`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       if (!response.ok) {
//         if (response.status === 401) {
//           setError("Unauthorized. Please log in again.");
//         } else {
//           setError(`Error ${response.status}: Failed to fetch sessions`);
//         }
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const data = await response.json();

//       if (Array.isArray(data)) {
//         setSessions(data);
//       } else {
//         console.error("Invalid session data format:", data);
//         setError("Unexpected response format from server.");
//       }
//     } catch (err) {
//       console.error("Error fetching sessions:", err);
//       setError("Failed to fetch sessions");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchSessions();
//   }, []);

//   const handleResume = (session) => {
//     if (session.lastPage) {
//       navigate(`/${session.lastPage}?sessionId=${session.sessionId}`);
//     } else {
//       alert("No last page info found for this session.");
//     }
//   };

//   if (loading)
//     return (
//       <div className="text-center mt-5">
//         <Spinner animation="border" /> Loading sessions...
//       </div>
//     );

//   if (error)
//     return (
//       <Alert variant="danger" className="mt-4 text-center">
//         {error}
//       </Alert>
//     );

//   return (
//     <div className="container mt-5">
//       <h4 className="mb-4 text-center">Resume Your Previous Sessions</h4>

//       {sessions.length === 0 ? (
//         <Alert variant="info" className="text-center">
//           No sessions found.
//         </Alert>
//       ) : (
//         <Table striped bordered hover responsive>
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>Session ID</th>
//               <th>Document Name</th>
//               <th>Last Page</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {sessions.map((session, index) => (
//               <tr key={index}>
//                 <td>{index + 1}</td>
//                 <td>{session.sessionId}</td>
//                 <td>{session.documentName || "N/A"}</td>
//                 <td>{session.lastPage || "N/A"}</td>
//                 <td>
//                   <Button
//                     variant="primary"
//                     onClick={() => handleResume(session)}
//                   >
//                     Resume
//                   </Button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       )}
//     </div>
//   );
// };

// export default SessionDocument;















// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { getToken } from "../auth"; // Helper to get auth token if needed

// const SessionDocument = () => {
//   const [sessions, setSessions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");

//   useEffect(() => {
//     const fetchSessions = async () => {
//       try {
//         const token = getToken();
//         const user_id =
//           sessionStorage.getItem("user_id") || localStorage.getItem("user_id");

//         if (!user_id) {
//           throw new Error("User ID not found in storage");
//         }

//         const response = await fetch(
//           `http://localhost:3000/api/combined/resumesession/${user_id}`,
//           {
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: token ? `Bearer ${token}` : "",
//             },
//           }
//         );

//         if (!response.ok) throw new Error("Failed to fetch sessions");

//         const result = await response.json();
//         console.log("Fetched sessions:", result);

//         // Map API data to our UI structure
//         const formattedSessions = Array.isArray(result.sessions)
//           ? result.sessions.map((item) => ({
//               loanProposerName: item.loanProposerName || "Srikanth", // fallback for testing
//               sessionId: item.session_id || "N/A",
//               lastPage: item.current_page || "LoanProposerDetails",
//               createdAt: item.dateOfRegistration
//                 ? new Date(item.dateOfRegistration)
//                 : new Date(),
//             }))
//           : [];

//         setSessions(formattedSessions);
//       } catch (err) {
//         console.error("Error fetching sessions:", err);
//         setError("Could not load session documents.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSessions();
//   }, []);

//   // Filter sessions by search term and date
//   const filteredSessions = sessions.filter((session) => {
//     const search = searchTerm.toLowerCase();
//     const nameMatch = session.loanProposerName.toLowerCase().includes(search);
//     const idMatch = session.sessionId.toLowerCase().includes(search);

//     const sessionDate = session.createdAt ? new Date(session.createdAt) : null;
//     const start = startDate ? new Date(startDate) : null;
//     const end = endDate ? new Date(endDate) : null;

//     const dateMatch =
//       (!start || (sessionDate && sessionDate >= start)) &&
//       (!end || (sessionDate && sessionDate <= end));

//     return (nameMatch || idMatch) && dateMatch;
//   });

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial", minHeight: "83vh" }}>
//       <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
//         Session Document
//       </h2>

//       {/* Search & Filter Controls */}
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           gap: "15px",
//           flexWrap: "wrap",
//           marginBottom: "20px",
//         }}
//       >
//         <input
//           type="text"
//           placeholder="Search by name or session ID"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           style={{
//             padding: "10px",
//             width: "300px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//           }}
//         />
//         <label style={{ paddingTop: "10px", marginLeft: "20px" }}>Start Date</label>
//         <input
//           type="date"
//           value={startDate}
//           onChange={(e) => setStartDate(e.target.value)}
//           style={{
//             padding: "10px",
//             width: "180px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//           }}
//         />
//         <label style={{ paddingTop: "10px" }}>End Date</label>
//         <input
//           type="date"
//           value={endDate}
//           onChange={(e) => setEndDate(e.target.value)}
//           style={{
//             padding: "10px",
//             width: "180px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//           }}
//         />
//       </div>

//       {/* Loading / Error / Session List */}
//       {loading ? (
//         <p style={{ textAlign: "center" }}>Loading sessions...</p>
//       ) : error ? (
//         <p style={{ textAlign: "center", color: "red" }}>{error}</p>
//       ) : filteredSessions.length === 0 ? (
//         <p style={{ textAlign: "center" }}>
//           No sessions found matching your filters.
//         </p>
//       ) : (
//         <div style={{ maxHeight: "60vh", overflowY: "auto" }}>
//           <ol style={{ paddingLeft: "20px", marginTop: 0 }}>
//             {/* Table Header */}
//             <li
//               style={{
//                 fontWeight: "bold",
//                 listStyle: "none",
//                 marginBottom: "10px",
//               }}
//             >
//               <div
//                 style={{
//                   display: "grid",
//                   gridTemplateColumns: "60px 200px 300px 200px 200px",
//                   gap: "10px",
//                   alignItems: "center",
//                 }}
//               >
//                 <span>S.No</span>
//                 <span>Name</span>
//                 <span>Session ID</span>
//                 <span>Created Date</span>
//               </div>
//             </li>

//             {/* Session Rows */}
//             {filteredSessions.map((session, index) => (
//               <li key={index} style={{ listStyle: "none", marginBottom: "10px" }}>
//                 <div
//                   style={{
//                     display: "grid",
//                     gridTemplateColumns: "60px 200px 300px 200px 200px",
//                     gap: "10px",
//                     alignItems: "center",
//                   }}
//                 >
//                   <span>{index + 1}</span>
//                   <span>
//                     <Link
//                       to={`/CreateDocument/${session.lastPage}?sessionid=${session.sessionId}`}
//                       style={{
//                         color: "#007bff",
//                         fontWeight: "bold",
//                         textDecoration: "none",
//                       }}
//                     >
//                       {session.loanProposerName}
//                     </Link>
//                   </span>
//                   <span>{session.sessionId}</span>
//                   <span>
//                     {session.createdAt.toLocaleString("en-IN", {
//                       dateStyle: "medium",
//                       timeStyle: "short",
//                     })}
//                   </span>
//                 </div>
//               </li>
//             ))}
//           </ol>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SessionDocument;








// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { getToken } from "../auth"; // Helper to get auth token if needed

// const SessionDocument = () => {
//   const [sessions, setSessions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   const [searchTerm, setSearchTerm] = useState("");
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");

//   useEffect(() => {
//     const fetchSessions = async () => {
//       try {
//         const token = getToken();
//         const user_id = sessionStorage.getItem("user_id") || localStorage.getItem("user_id");

//         if (!user_id) {
//           throw new Error("User ID not found in storage");
//         }

//         const response = await fetch(
//           `http://localhost:3000/api/combined/resumesession/${user_id}`,
//           {
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: token ? `Bearer ${token}` : "",
//             },
//           }
//         );

//         if (!response.ok) {
//           throw new Error("Failed to fetch sessions");
//         }

//         const data = await response.json();
//         console.log("Fetched sessions:", data);

//         // Normalize sessions: ensure loanProposerName is always from session, never fallback to lawyer
//         const formattedSessions = Array.isArray(data.sessions)
//           ? data.sessions.map((item) => ({
//               loanProposerName: item.loanProposerName || "Unnamed", // will be updated from first page input
//               sessionId: item.session_id,
//               lastPage: item.current_page || "LoanProposerDetails",
//               createdAt: item.dateOfRegistration ? new Date(item.dateOfRegistration) : new Date(),
//             }))
//           : [];

//         setSessions(formattedSessions);
//       } catch (err) {
//         console.error("Error fetching sessions:", err);
//         setError("Could not load session documents.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSessions();
//   }, []);

//   // Filter sessions by name, session ID, and date range
//   const filteredSessions = sessions.filter((session) => {
//     const search = searchTerm.toLowerCase();
//     const nameMatch = session.loanProposerName?.toLowerCase().includes(search);
//     const idMatch = session.sessionId?.toLowerCase().includes(search);

//     const sessionDate = session.createdAt ? new Date(session.createdAt) : null;
//     const start = startDate ? new Date(startDate) : null;
//     const end = endDate ? new Date(endDate) : null;

//     const dateMatch =
//       (!start || (sessionDate && sessionDate >= start)) &&
//       (!end || (sessionDate && sessionDate <= end));

//     return (nameMatch || idMatch) && dateMatch;
//   });

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial", minHeight: "83vh" }}>
//       <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Session Document</h2>

//       {/* Search & Filter Controls */}
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           gap: "15px",
//           flexWrap: "wrap",
//           marginBottom: "20px",
//         }}
//       >
//         <input
//           type="text"
//           placeholder="Search by name or session ID"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           style={{ padding: "10px", width: "300px", borderRadius: "5px", border: "1px solid #ccc" }}
//         />
//         <label style={{ paddingTop: "10px", marginLeft: "20px" }}>Start Date</label>
//         <input
//           type="date"
//           value={startDate}
//           onChange={(e) => setStartDate(e.target.value)}
//           style={{ padding: "10px", width: "180px", borderRadius: "5px", border: "1px solid #ccc" }}
//         />
//         <label style={{ paddingTop: "10px" }}>End Date</label>
//         <input
//           type="date"
//           value={endDate}
//           onChange={(e) => setEndDate(e.target.value)}
//           style={{ padding: "10px", width: "180px", borderRadius: "5px", border: "1px solid #ccc" }}
//         />
//       </div>

//       {/* Session List */}
//       {loading ? (
//         <p style={{ textAlign: "center" }}>Loading sessions...</p>
//       ) : error ? (
//         <p style={{ textAlign: "center", color: "red" }}>{error}</p>
//       ) : filteredSessions.length === 0 ? (
//         <p style={{ textAlign: "center" }}>No sessions found matching your filters.</p>
//       ) : (
//         <div style={{ maxHeight: "60vh", overflowY: "auto" }}>
//           <ol style={{ paddingLeft: "20px", marginTop: 0 }}>
//             {/* Header */}
//             <li style={{ fontWeight: "bold", listStyle: "none", marginBottom: "10px" }}>
//               <div
//                 style={{
//                   display: "grid",
//                   gridTemplateColumns: "60px 200px 300px 200px",
//                   gap: "10px",
//                   alignItems: "center",
//                 }}
//               >
//                 <span>S.No</span>
//                 <span>Name</span>
//                 <span>Session ID</span>
//                 <span>Created Date</span>
//               </div>
//             </li>

//             {/* Data Rows */}
//             {filteredSessions.map((session, index) => (
//               <li key={index} style={{ listStyle: "none", marginBottom: "10px" }}>
//                 <div
//                   style={{
//                     display: "grid",
//                     gridTemplateColumns: "60px 200px 300px 200px",
//                     gap: "10px",
//                     alignItems: "center",
//                   }}
//                 >
//                   <span>{index + 1}</span>
//                   <span>
//                     <Link
//                       to={`/CreateDocument/${session.lastPage}?sessionid=${session.sessionId}`}
//                       style={{
//                         color: "#007bff",
//                         fontWeight: "bold",
//                         textDecoration: "none",
//                       }}
//                     >
//                       {session.loanProposerName}
//                     </Link>
//                   </span>
//                   <span>{session.sessionId}</span>
//                   <span>
//                     {session.createdAt.toLocaleString("en-IN", {
//                       dateStyle: "medium",
//                       timeStyle: "short",
//                     })}
//                   </span>
//                 </div>
//               </li>
//             ))}
//           </ol>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SessionDocument;



//  import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { getToken } from "../auth"; // Helper to get auth token

// const SessionDocument = () => {
//   const [sessions, setSessions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   const [searchTerm, setSearchTerm] = useState("");
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");

//   useEffect(() => {
//     const fetchSessions = async () => {
//       try {
//         const token = getToken();
//         const user_id = sessionStorage.getItem("user_id") || localStorage.getItem("user_id");

//         if (!user_id) throw new Error("User ID not found in storage");

//         const response = await fetch(
//           `http://localhost:3000/api/combined/resumesession/${user_id}`,
//           {
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: token ? `Bearer ${token}` : "",
//             },
//           }
//         );

//         if (!response.ok) throw new Error("Failed to fetch sessions");

//         const data = await response.json();
//         console.log("Fetched sessions:", data);

//         const formattedSessions = Array.isArray(data.sessions)
//           ? data.sessions.map((item) => {
//               // Always take loanProposerName from first page
//               const name =
//                 item.loanProposerName && item.loanProposerName.trim() !== ""
//                   ? item.loanProposerName
//                   : "(No Name)";

//               const createdAt = item.dateOfRegistration
//                 ? new Date(item.dateOfRegistration)
//                 : item.createdAt
//                 ? new Date(item.createdAt)
//                 : new Date();

//               const lastPage = item.current_page || "LoanProposerDetails";

//               return {
//                 sessionId: item.session_id,
//                 loanProposerName: name,
//                 lastPage,
//                 createdAt,
//               };
//             })
//           : [];

//         setSessions(formattedSessions);
//       } catch (err) {
//         console.error("Error fetching sessions:", err);
//         setError("Could not load session documents.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSessions();
//   }, []);

//   // Filter sessions by search term and date
//   const filteredSessions = sessions.filter((session) => {
//     const search = searchTerm.toLowerCase();
//     const nameMatch = session.loanProposerName.toLowerCase().includes(search);
//     const idMatch = session.sessionId.toLowerCase().includes(search);

//     const sessionDate = session.createdAt ? new Date(session.createdAt) : null;
//     const start = startDate ? new Date(startDate) : null;
//     const end = endDate ? new Date(endDate) : null;

//     const dateMatch =
//       (!start || (sessionDate && sessionDate >= start)) &&
//       (!end || (sessionDate && sessionDate <= end));

//     return (nameMatch || idMatch) && dateMatch;
//   });

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial", minHeight: "83vh" }}>
//       <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Session Document</h2>

//       {/* Search & Filter Controls */}
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           gap: "15px",
//           flexWrap: "wrap",
//           marginBottom: "20px",
//         }}
//       >
//         <input
//           type="text"
//           placeholder="Search by name or session ID"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           style={{ padding: "10px", width: "300px", borderRadius: "5px", border: "1px solid #ccc" }}
//         />
//         <label style={{ paddingTop: "10px", marginLeft: "20px" }}>Start Date</label>
//         <input
//           type="date"
//           value={startDate}
//           onChange={(e) => setStartDate(e.target.value)}
//           style={{ padding: "10px", width: "180px", borderRadius: "5px", border: "1px solid #ccc" }}
//         />
//         <label style={{ paddingTop: "10px" }}>End Date</label>
//         <input
//           type="date"
//           value={endDate}
//           onChange={(e) => setEndDate(e.target.value)}
//           style={{ padding: "10px", width: "180px", borderRadius: "5px", border: "1px solid #ccc" }}
//         />
//       </div>

//       {/* Session List */}
//       {loading ? (
//         <p style={{ textAlign: "center" }}>Loading sessions...</p>
//       ) : error ? (
//         <p style={{ textAlign: "center", color: "red" }}>{error}</p>
//       ) : filteredSessions.length === 0 ? (
//         <p style={{ textAlign: "center" }}>No sessions found matching your filters.</p>
//       ) : (
//         <div style={{ maxHeight: "60vh", overflowY: "auto" }}>
//           <ol style={{ paddingLeft: "20px", marginTop: 0 }}>
//             {/* Table Header */}
//             <li style={{ fontWeight: "bold", listStyle: "none", marginBottom: "10px" }}>
//               <div
//                 style={{
//                   display: "grid",
//                   gridTemplateColumns: "60px 200px 300px 200px",
//                   gap: "10px",
//                   alignItems: "center",
//                 }}
//               >
//                 <span>S.No</span>
//                 <span>Name</span>
//                 <span>Session ID</span>
//                 <span>Created Date</span>
//               </div>
//             </li>

//             {/* Session Rows */}
//             {filteredSessions.map((session, index) => (
//               <li key={index} style={{ listStyle: "none", marginBottom: "10px" }}>
//                 <div
//                   style={{
//                     display: "grid",
//                     gridTemplateColumns: "60px 200px 300px 200px",
//                     gap: "10px",
//                     alignItems: "center",
//                   }}
//                 >
//                   <span>{index + 1}</span>
//                   <span>
//                     <Link
//                       to={`/CreateDocument/${session.lastPage}?sessionid=${session.sessionId}`}
//                       style={{
//                         color: "#007bff",
//                         fontWeight: "bold",
//                         textDecoration: "none",
//                       }}
//                     >
//                       {session.loanProposerName}
//                     </Link>
//                   </span>
//                   <span>{session.sessionId}</span>
//                   <span>
//                     {session.createdAt.toLocaleString("en-IN", {
//                       dateStyle: "medium",
//                       timeStyle: "short",
//                     })}
//                   </span>
//                 </div>
//               </li>
//             ))}
//           </ol>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SessionDocument;


// woeking good but need to mofdify 

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { getToken } from "../auth"; // Helper to get auth token

// const SessionDocument = () => {
//   const [sessions, setSessions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");

//   useEffect(() => {
//     const fetchSessions = async () => {
//       try {
//         const token = getToken();
//         const user_id = sessionStorage.getItem("user_id") || localStorage.getItem("user_id");

//         if (!user_id) throw new Error("User ID not found in storage");

//         const response = await fetch(
//           `http://localhost:3000/api/combined/resumesession/${user_id}`,
//           {
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: token ? `Bearer ${token}` : "",
//             },
//           }
//         );

//         if (!response.ok) throw new Error("Failed to fetch sessions");

//         const data = await response.json();
//         console.log("Fetched sessions:", data);

//         // Map API data to UI structure
//         const formattedSessions = Array.isArray(data.sessions)
//           ? data.sessions.map((item) => {
//               // Use loanProposerName, fallback to first link_document if missing
//               const loanProposerName =
//                 item.loanProposerName ||
//                 (item.link_documents && item.link_documents[0]?.loanProposerName) ||
//                 "(No Name)";

//               // Use dateOfRegistration or fallback to first document date
//               const createdAt = item.dateOfRegistration
//                 ? new Date(item.dateOfRegistration)
//                 : item.link_documents && item.link_documents[0]?.fromDate
//                 ? new Date(item.link_documents[0].fromDate)
//                 : new Date();

//               return {
//                 loanProposerName,
//                 sessionId: item.session_id,
//                 lastPage: item.current_page || "LoanProposerDetails",
//                 createdAt,
//               };
//             })
//           : [];

//         setSessions(formattedSessions);
//       } catch (err) {
//         console.error("Error fetching sessions:", err);
//         setError("Could not load session documents.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSessions();
//   }, []);

//   // Filter sessions by search term and date
//   const filteredSessions = sessions.filter((session) => {
//     const search = searchTerm.toLowerCase();
//     const nameMatch = session.loanProposerName.toLowerCase().includes(search);
//     const idMatch = session.sessionId.toLowerCase().includes(search);

//     const sessionDate = session.createdAt ? new Date(session.createdAt) : null;
//     const start = startDate ? new Date(startDate) : null;
//     const end = endDate ? new Date(endDate) : null;

//     const dateMatch =
//       (!start || (sessionDate && sessionDate >= start)) &&
//       (!end || (sessionDate && sessionDate <= end));

//     return (nameMatch || idMatch) && dateMatch;
//   });

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial", minHeight: "83vh" }}>
//       <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Session Document</h2>

//       {/* Search & Filter Controls */}
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           gap: "15px",
//           flexWrap: "wrap",
//           marginBottom: "20px",
//         }}
//       >
//         <input
//           type="text"
//           placeholder="Search by name or session ID"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           style={{ padding: "10px", width: "300px", borderRadius: "5px", border: "1px solid #ccc" }}
//         />
//         <label style={{ paddingTop: "10px", marginLeft: "20px" }}>Start Date</label>
//         <input
//           type="date"
//           value={startDate}
//           onChange={(e) => setStartDate(e.target.value)}
//           style={{ padding: "10px", width: "180px", borderRadius: "5px", border: "1px solid #ccc" }}
//         />
//         <label style={{ paddingTop: "10px" }}>End Date</label>
//         <input
//           type="date"
//           value={endDate}
//           onChange={(e) => setEndDate(e.target.value)}
//           style={{ padding: "10px", width: "180px", borderRadius: "5px", border: "1px solid #ccc" }}
//         />
//       </div>

//       {/* Session List */}
//       {loading ? (
//         <p style={{ textAlign: "center" }}>Loading sessions...</p>
//       ) : error ? (
//         <p style={{ textAlign: "center", color: "red" }}>{error}</p>
//       ) : filteredSessions.length === 0 ? (
//         <p style={{ textAlign: "center" }}>No sessions found matching your filters.</p>
//       ) : (
//         <div style={{ maxHeight: "60vh", overflowY: "auto" }}>
//           <ol style={{ paddingLeft: "20px", marginTop: 0 }}>
//             {/* Header */}
//             <li style={{ fontWeight: "bold", listStyle: "none", marginBottom: "10px" }}>
//               <div
//                 style={{
//                   display: "grid",
//                   gridTemplateColumns: "60px 200px 300px 200px",
//                   gap: "10px",
//                   alignItems: "center",
//                 }}
//               >
//                 <span>S.No</span>
//                 <span>Name</span>
//                 <span>Session ID</span>
//                 <span>Created Date</span>
//               </div>
//             </li>

//             {/* Data Rows */}
//             {filteredSessions.map((session, index) => (
//               <li key={index} style={{ listStyle: "none", marginBottom: "10px" }}>
//                 <div
//                   style={{
//                     display: "grid",
//                     gridTemplateColumns: "60px 200px 300px 200px",
//                     gap: "10px",
//                     alignItems: "center",
//                   }}
//                 >
//                   <span>{index + 1}</span>
//                   <span>
//                     <Link
//                       to={`/CreateDocument/${session.lastPage}?sessionid=${session.sessionId}`}
//                       style={{
//                         color: "#007bff",
//                         fontWeight: "bold",
//                         textDecoration: "none",
//                       }}
//                     >
//                       {session.loanProposerName}
//                     </Link>
//                   </span>
//                   <span>{session.sessionId}</span>
//                   <span>
//                     {session.createdAt.toLocaleString("en-IN", {
//                       dateStyle: "medium",
//                       timeStyle: "short",
//                     })}
//                   </span>
//                 </div>
//               </li>
//             ))}
//           </ol>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SessionDocument;




//  import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { getToken } from "../auth"; // your auth helper

// const SessionDocument = () => {
//   const [sessions, setSessions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   const [searchTerm, setSearchTerm] = useState("");
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");

//   useEffect(() => {
//     const fetchSessions = async () => {
//       try {
//         const token = getToken();
//         const user_id = sessionStorage.getItem("user_id") || localStorage.getItem("user_id");

//         if (!user_id) throw new Error("User ID not found");

//         const response = await fetch(
//           `http://localhost:3000/api/combined/resumesession/${user_id}`,
//           {
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: token ? `Bearer ${token}` : "",
//             },
//           }
//         );

//         if (!response.ok) throw new Error("Failed to fetch sessions");

//         const data = await response.json();
//         console.log("Fetched sessions:", data);

//         // Map sessions: show only incomplete documents and preserve loanProposerName & createdAt
//         const formatted = Array.isArray(data.sessions)
//           ? data.sessions
//               .filter((s) => !s.isCompleted) // show incomplete sessions only
//               .map((item) => ({
//                 loanProposerName: item.loanProposerName || "No Name",
//                 sessionId: item.session_id,
//                 lastPage: item.current_page || "LoanProposerDetails",
//                 createdAt: item.dateOfRegistration ? new Date(item.dateOfRegistration) : new Date(),
//               }))
//           : [];

//         setSessions(formatted);
//       } catch (err) {
//         console.error("Error fetching sessions:", err);
//         setError("Could not load session documents.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSessions();
//   }, []);

//   // Filter by search term and date
//   const filteredSessions = sessions.filter((session) => {
//     const search = searchTerm.toLowerCase();
//     const nameMatch = session.loanProposerName.toLowerCase().includes(search);
//     const idMatch = session.sessionId.toLowerCase().includes(search);

//     const sessionDate = session.createdAt;
//     const start = startDate ? new Date(startDate) : null;
//     const end = endDate ? new Date(endDate) : null;

//     const dateMatch =
//       (!start || (sessionDate && sessionDate >= start)) &&
//       (!end || (sessionDate && sessionDate <= end));

//     return (nameMatch || idMatch) && dateMatch;
//   });

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial", minHeight: "83vh" }}>
//       <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Session Document</h2>

//       {/* Search and Filter */}
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           gap: "15px",
//           flexWrap: "wrap",
//           marginBottom: "20px",
//         }}
//       >
//         <input
//           type="text"
//           placeholder="Search by name or session ID"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           style={{ padding: "10px", width: "300px", borderRadius: "5px", border: "1px solid #ccc" }}
//         />
//         <label style={{ paddingTop: "10px" }}>Start Date</label>
//         <input
//           type="date"
//           value={startDate}
//           onChange={(e) => setStartDate(e.target.value)}
//           style={{ padding: "10px", width: "180px", borderRadius: "5px", border: "1px solid #ccc" }}
//         />
//         <label style={{ paddingTop: "10px" }}>End Date</label>
//         <input
//           type="date"
//           value={endDate}
//           onChange={(e) => setEndDate(e.target.value)}
//           style={{ padding: "10px", width: "180px", borderRadius: "5px", border: "1px solid #ccc" }}
//         />
//       </div>

//       {/* Session List */}
//       {loading ? (
//         <p style={{ textAlign: "center" }}>Loading sessions...</p>
//       ) : error ? (
//         <p style={{ textAlign: "center", color: "red" }}>{error}</p>
//       ) : filteredSessions.length === 0 ? (
//         <p style={{ textAlign: "center" }}>No sessions found matching your filters.</p>
//       ) : (
//         <div style={{ maxHeight: "60vh", overflowY: "auto" }}>
//           <ol style={{ paddingLeft: "20px", marginTop: 0 }}>
//             {/* Header */}
//             <li style={{ fontWeight: "bold", listStyle: "none", marginBottom: "10px" }}>
//               <div
//                 style={{
//                   display: "grid",
//                   gridTemplateColumns: "60px 200px 300px 200px",
//                   gap: "10px",
//                   alignItems: "center",
//                 }}
//               >
//                 <span>S.No</span>
//                 <span>Name</span>
//                 <span>Session ID</span>
//                 <span>Created Date</span>
//               </div>
//             </li>

//             {/* Rows */}
//             {filteredSessions.map((session, index) => (
//               <li key={index} style={{ listStyle: "none", marginBottom: "10px" }}>
//                 <div
//                   style={{
//                     display: "grid",
//                     gridTemplateColumns: "60px 200px 300px 200px",
//                     gap: "10px",
//                     alignItems: "center",
//                   }}
//                 >
//                   <span>{index + 1}</span>
//                   <span>
//                     <Link
//                       to={`/CreateDocument/${session.lastPage}?sessionid=${session.sessionId}`}
//                       style={{ color: "#007bff", fontWeight: "bold", textDecoration: "none" }}
//                     >
//                       {session.loanProposerName}
//                     </Link>
//                   </span>
//                   <span>{session.sessionId}</span>
//                   <span>
//                     {session.createdAt.toLocaleString("en-IN", {
//                       dateStyle: "medium",
//                       timeStyle: "short",
//                     })}
//                   </span>
//                 </div>
//               </li>
//             ))}
//           </ol>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SessionDocument;

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { getToken } from "../auth";

// const SessionDocument = () => {
//   const [sessions, setSessions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");

//   useEffect(() => {
//     const fetchSessions = async () => {
//       try {
//         const token = getToken();
//         const user_id =
//           sessionStorage.getItem("user_id") || localStorage.getItem("user_id");

//         if (!user_id) throw new Error("User ID not found");

//         const response = await fetch(
//           `http://localhost:3000/api/combined/resumesession/${user_id}`,
//           {
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: token ? `Bearer ${token}` : "",
//             },
//           }
//         );

//         if (!response.ok) throw new Error("Failed to fetch sessions");

//         const data = await response.json();

//         const formatted =
//           Array.isArray(data.sessions) && data.sessions.length > 0
//             ? data.sessions
//                 .filter((s) => s.current_page !== "complete") // incomplete only
//                 .map((item) => ({
//                   loanProposerName: item.loanProposerName || "No Name",
//                   sessionId: item.session_id,
//                   lastPage: item.current_page || "LoanProposerDetails",
//                   createdAt: item.dateOfRegistration
//                     ? new Date(item.dateOfRegistration)
//                     : new Date(),
//                 }))
//             : [];

//         setSessions(formatted);
//       } catch (err) {
//         console.error("Error fetching sessions:", err);
//         setError("Could not load session documents.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSessions();
//   }, []);

//   const filteredSessions = sessions.filter((session) => {
//     const search = searchTerm.toLowerCase();
//     const nameMatch = session.loanProposerName.toLowerCase().includes(search);
//     const idMatch = session.sessionId.toLowerCase().includes(search);
//     const sessionDate = session.createdAt;
//     const start = startDate ? new Date(startDate) : null;
//     const end = endDate ? new Date(endDate) : null;
//     const dateMatch =
//       (!start || (sessionDate && sessionDate >= start)) &&
//       (!end || (sessionDate && sessionDate <= end));
//     return (nameMatch || idMatch) && dateMatch;
//   });

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial", minHeight: "83vh" }}>
//       <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
//         Session Document
//       </h2>

//       {/* Search & Filter */}
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           gap: "15px",
//           flexWrap: "wrap",
//           marginBottom: "20px",
//         }}
//       >
//         <input
//           type="text"
//           placeholder="Search by name or session ID"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           style={{
//             padding: "10px",
//             width: "300px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//           }}
//         />
//         <label style={{ paddingTop: "10px" }}>Start Date</label>
//         <input
//           type="date"
//           value={startDate}
//           onChange={(e) => setStartDate(e.target.value)}
//           style={{
//             padding: "10px",
//             width: "180px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//           }}
//         />
//         <label style={{ paddingTop: "10px" }}>End Date</label>
//         <input
//           type="date"
//           value={endDate}
//           onChange={(e) => setEndDate(e.target.value)}
//           style={{
//             padding: "10px",
//             width: "180px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//           }}
//         />
//       </div>

//       {/* Session List */}
//       {loading ? (
//         <p style={{ textAlign: "center" }}>Loading sessions...</p>
//       ) : error ? (
//         <p style={{ textAlign: "center", color: "red" }}>{error}</p>
//       ) : filteredSessions.length === 0 ? (
//         <p style={{ textAlign: "center" }}>
//           No sessions found matching your filters.
//         </p>
//       ) : (
//         <div style={{ maxHeight: "60vh", overflowY: "auto" }}>
//           <ol style={{ paddingLeft: "20px", marginTop: 0 }}>
//             {/* Header */}
//             <li
//               style={{
//                 fontWeight: "bold",
//                 listStyle: "none",
//                 marginBottom: "10px",
//               }}
//             >
//               <div
//                 style={{
//                   display: "grid",
//                   gridTemplateColumns: "60px 200px 300px 200px",
//                   gap: "10px",
//                   alignItems: "center",
//                 }}
//               >
//                 <span>S.No</span>
//                 <span>Name</span>
//                 <span>Session ID</span>
//                 <span>Created Date</span>
//               </div>
//             </li>

//             {/* Rows */}
//             {filteredSessions.map((session, index) => (
//               <li
//                 key={index}
//                 style={{ listStyle: "none", marginBottom: "10px" }}
//               >
//                 <div
//                   style={{
//                     display: "grid",
//                     gridTemplateColumns: "60px 200px 300px 200px",
//                     gap: "10px",
//                     alignItems: "center",
//                   }}
//                 >
//                   <span>{index + 1}</span>
//                   <span>
//                     <Link
//                       to={`/CreateDocument/${session.lastPage}?sessionid=${session.sessionId}`}
//                       style={{
//                         color: "#007bff",
//                         fontWeight: "bold",
//                         textDecoration: "none",
//                       }}
//                     >
//                       {session.loanProposerName}
//                     </Link>
//                   </span>
//                   <span>{session.sessionId}</span>
//                   <span>
//                     {session.createdAt.toLocaleString("en-IN", {
//                       dateStyle: "medium",
//                       timeStyle: "short",
//                     })}
//                   </span>
//                 </div>
//               </li>
//             ))}
//           </ol>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SessionDocument;

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { getToken } from "../auth";

// const SessionDocument = () => {
//   const [sessions, setSessions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");

//   useEffect(() => {
//     const fetchSessions = async () => {
//       try {
//         const token = getToken();
//         const user_id =
//           sessionStorage.getItem("user_id") || localStorage.getItem("user_id");
//         if (!user_id) throw new Error("User ID not found");

//         const response = await fetch(
//           `http://localhost:3000/api/combined/resumesession/${user_id}`,
//           {
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: token ? `Bearer ${token}` : "",
//             },
//           }
//         );

//         if (!response.ok) throw new Error("Failed to fetch sessions");

//         const data = await response.json();

//         // Show incomplete sessions only and ensure name exists
//         const formatted = Array.isArray(data.sessions)
//           ? data.sessions
//               .filter((s) => s.current_page !== "complete")
//               .map((item) => ({
//                 loanProposerName: item.loanProposerName || "No Name",
//                 sessionId: item.session_id,
//                 lastPage: item.current_page || "LoanProposerDetails",
//                 createdAt: item.dateOfRegistration
//                   ? new Date(item.dateOfRegistration)
//                   : new Date(),
//               }))
//           : [];

//         setSessions(formatted);
//       } catch (err) {
//         console.error("Error fetching sessions:", err);
//         setError("Could not load session documents.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSessions();
//   }, []);

//   // Filter sessions by search and date
//   const filteredSessions = sessions.filter((session) => {
//     const search = searchTerm.toLowerCase();
//     const nameMatch = session.loanProposerName.toLowerCase().includes(search);
//     const idMatch = session.sessionId.toLowerCase().includes(search);
//     const sessionDate = session.createdAt;
//     const start = startDate ? new Date(startDate) : null;
//     const end = endDate ? new Date(endDate) : null;
//     const dateMatch =
//       (!start || (sessionDate && sessionDate >= start)) &&
//       (!end || (sessionDate && sessionDate <= end));
//     return (nameMatch || idMatch) && dateMatch;
//   });

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial", minHeight: "83vh" }}>
//       <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Session Document</h2>

//       {/* Search & Filters */}
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           gap: "15px",
//           flexWrap: "wrap",
//           marginBottom: "20px",
//         }}
//       >
//         <input
//           type="text"
//           placeholder="Search by name or session ID"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           style={{ padding: "10px", width: "300px", borderRadius: "5px", border: "1px solid #ccc" }}
//         />
//         <label style={{ paddingTop: "10px" }}>Start Date</label>
//         <input
//           type="date"
//           value={startDate}
//           onChange={(e) => setStartDate(e.target.value)}
//           style={{ padding: "10px", width: "180px", borderRadius: "5px", border: "1px solid #ccc" }}
//         />
//         <label style={{ paddingTop: "10px" }}>End Date</label>
//         <input
//           type="date"
//           value={endDate}
//           onChange={(e) => setEndDate(e.target.value)}
//           style={{ padding: "10px", width: "180px", borderRadius: "5px", border: "1px solid #ccc" }}
//         />
//       </div>

//       {/* Session List */}
//       {loading ? (
//         <p style={{ textAlign: "center" }}>Loading sessions...</p>
//       ) : error ? (
//         <p style={{ textAlign: "center", color: "red" }}>{error}</p>
//       ) : filteredSessions.length === 0 ? (
//         <p style={{ textAlign: "center" }}>No sessions found matching your filters.</p>
//       ) : (
//         <div style={{ maxHeight: "60vh", overflowY: "auto" }}>
//           <ol style={{ paddingLeft: "20px", marginTop: 0 }}>
//             {/* Header */}
//             <li style={{ fontWeight: "bold", listStyle: "none", marginBottom: "10px" }}>
//               <div
//                 style={{
//                   display: "grid",
//                   gridTemplateColumns: "60px 200px 300px 200px",
//                   gap: "10px",
//                   alignItems: "center",
//                 }}
//               >
//                 <span>S.No</span>
//                 <span>Name</span>
//                 <span>Session ID</span>
//                 <span>Created Date</span>
//               </div>
//             </li>

//             {/* Rows */}
//             {filteredSessions.map((session, index) => (
//               <li key={index} style={{ listStyle: "none", marginBottom: "10px" }}>
//                 <div
//                   style={{
//                     display: "grid",
//                     gridTemplateColumns: "60px 200px 300px 200px",
//                     gap: "10px",
//                     alignItems: "center",
//                   }}
//                 >
//                   <span>{index + 1}</span>
//                   <span>
//                     <Link
//                       to={`/CreateDocument/${session.lastPage}?sessionid=${session.sessionId}&name=${encodeURIComponent(session.loanProposerName)}`}
//                       style={{ color: "#007bff", fontWeight: "bold", textDecoration: "none" }}
//                     >
//                       {session.loanProposerName}
//                     </Link>
//                   </span>
//                   <span>{session.sessionId}</span>
//                   <span>
//                     {session.createdAt.toLocaleString("en-IN", {
//                       dateStyle: "medium",
//                       timeStyle: "short",
//                     })}
//                   </span>
//                 </div>
//               </li>
//             ))}
//           </ol>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SessionDocument;


// SessionDocument.jsx
 
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { getToken } from "../auth";

// const SessionDocument = () => {
//   const [sessions, setSessions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");

//   useEffect(() => {
//     // Load from cache first (in case user returns)
//     const cached = sessionStorage.getItem("cachedSessions");
//     if (cached) {
//       setSessions(JSON.parse(cached));
//       setLoading(false);
//     }

//     const fetchSessions = async () => {
//       try {
//         const token = getToken();
//         const user_id =
//           sessionStorage.getItem("user_id") || localStorage.getItem("user_id");

//         if (!user_id) throw new Error("User ID not found");

//         const response = await fetch(
//           `http://localhost:3000/api/combined/resumesession/${user_id}`,
//           {
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: token ? `Bearer ${token}` : "",
//             },
//           }
//         );

//         if (!response.ok) throw new Error("Failed to fetch sessions");

//         const data = await response.json();

//         const formatted =
//           Array.isArray(data.sessions) && data.sessions.length > 0
//             ? data.sessions
//                 .filter((s) => s.current_page !== "complete") // only incomplete ones
//                 .map((item) => {
//                   // handle name properly with multiple fallbacks
//                   const proposerName =
//                     item.loanProposerName ||
//                     item.proposerName ||
//                     item.formData?.loanProposerDetails?.name ||
//                     item.formData?.LoanProposerDetails?.loanProposerName ||
//                     "No Name";

//                   return {
//                     loanProposerName: proposerName,
//                     sessionId: item.session_id,
//                     lastPage: item.current_page || "LoanProposerDetails",
//                     createdAt: item.dateOfRegistration
//                       ? new Date(item.dateOfRegistration)
//                       : new Date(),
//                   };
//                 })
//             : [];

//         setSessions(formatted);
//         sessionStorage.setItem("cachedSessions", JSON.stringify(formatted));
//       } catch (err) {
//         console.error("Error fetching sessions:", err);
//         setError("Could not load session documents.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSessions();
//   }, []);

//   // filtering logic for search + date
//   const filteredSessions = sessions.filter((session) => {
//     const search = searchTerm.toLowerCase();
//     const nameMatch = session.loanProposerName.toLowerCase().includes(search);
//     const idMatch = session.sessionId.toLowerCase().includes(search);
//     const sessionDate = session.createdAt;
//     const start = startDate ? new Date(startDate) : null;
//     const end = endDate ? new Date(endDate) : null;
//     const dateMatch =
//       (!start || (sessionDate && sessionDate >= start)) &&
//       (!end || (sessionDate && sessionDate <= end));
//     return (nameMatch || idMatch) && dateMatch;
//   });

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial", minHeight: "83vh" }}>
//       <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
//         Session Document
//       </h2>

//       {/* Search & Filter */}
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           gap: "15px",
//           flexWrap: "wrap",
//           marginBottom: "20px",
//         }}
//       >
//         <input
//           type="text"
//           placeholder="Search by name or session ID"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           style={{
//             padding: "10px",
//             width: "300px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//           }}
//         />
//         <label style={{ paddingTop: "10px" }}>Start Date</label>
//         <input
//           type="date"
//           value={startDate}
//           onChange={(e) => setStartDate(e.target.value)}
//           style={{
//             padding: "10px",
//             width: "180px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//           }}
//         />
//         <label style={{ paddingTop: "10px" }}>End Date</label>
//         <input
//           type="date"
//           value={endDate}
//           onChange={(e) => setEndDate(e.target.value)}
//           style={{
//             padding: "10px",
//             width: "180px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//           }}
//         />
//       </div>

//       {/* Session List */}
//       {loading ? (
//         <p style={{ textAlign: "center" }}>Loading sessions...</p>
//       ) : error ? (
//         <p style={{ textAlign: "center", color: "red" }}>{error}</p>
//       ) : filteredSessions.length === 0 ? (
//         <p style={{ textAlign: "center" }}>
//           No sessions found matching your filters.
//         </p>
//       ) : (
//         <div style={{ maxHeight: "60vh", overflowY: "auto" }}>
//           <ol style={{ paddingLeft: "20px", marginTop: 0 }}>
//             {/* Header */}
//             <li
//               style={{
//                 fontWeight: "bold",
//                 listStyle: "none",
//                 marginBottom: "10px",
//               }}
//             >
//               <div
//                 style={{
//                   display: "grid",
//                   gridTemplateColumns: "60px 200px 300px 200px",
//                   gap: "10px",
//                   alignItems: "center",
//                 }}
//               >
//                 <span>S.No</span>
//                 <span>Name</span>
//                 <span>Session ID</span>
//                 <span>Created Date</span>
//               </div>
//             </li>

//             {/* Rows */}
//             {filteredSessions.map((session, index) => (
//               <li
//                 key={index}
//                 style={{ listStyle: "none", marginBottom: "10px" }}
//               >
//                 <div
//                   style={{
//                     display: "grid",
//                     gridTemplateColumns: "60px 200px 300px 200px",
//                     gap: "10px",
//                     alignItems: "center",
//                   }}
//                 >
//                   <span>{index + 1}</span>
//                   <span>
//                     <Link
//                       to={`/CreateDocument/${session.lastPage}?sessionid=${session.sessionId}`}
//                       style={{
//                         color: "#007bff",
//                         fontWeight: "bold",
//                         textDecoration: "none",
//                       }}
//                     >
//                       {session.loanProposerName}
//                     </Link>
//                   </span>
//                   <span>{session.sessionId}</span>
//                   <span>
//                     {session.createdAt.toLocaleString("en-IN", {
//                       dateStyle: "medium",
//                       timeStyle: "short",
//                     })}
//                   </span>
//                 </div>
//               </li>
//             ))}
//           </ol>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SessionDocument;

 ////======================
 ////================/


//  import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { getToken } from "../auth";

// const SessionDocument = () => {
//   const [sessions, setSessions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");

//   useEffect(() => {
//     const fetchSessions = async () => {
//       try {
//         const token = getToken();
//         const user_id =
//           sessionStorage.getItem("user_id") || localStorage.getItem("user_id");

//         if (!user_id) throw new Error("User ID not found");

//         const response = await fetch(
//           `http://localhost:3000/api/combined/resumesession/${user_id}`,
//           {
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: token ? `Bearer ${token}` : "",
//             },
//           }
//         );

//         if (!response.ok) throw new Error("Failed to fetch sessions");

//         const data = await response.json();

//         // Filter only incomplete sessions (current_page !== "complete")
//         const formatted =
//           Array.isArray(data.sessions) && data.sessions.length > 0
//             ? data.sessions
//                 .filter((s) => s.current_page !== "complete") // show only incomplete
//                 .map((item) => {
//                   const proposerName =
//                     item.user_name || item.loanProposerName || "Unnamed";

//                   return {
//                     loanProposerName: proposerName,
//                     sessionId: item.session_id,
//                     lastPage: item.current_page || "LoanProposerDetails",
//                     createdAt: item.dateOfRegistration
//                       ? new Date(item.dateOfRegistration)
//                       : new Date(),
//                   };
//                 })
//             : [];

//         setSessions(formatted);
//         sessionStorage.setItem("cachedSessions", JSON.stringify(formatted));
//       } catch (err) {
//         console.error("Error fetching sessions:", err);
//         setError("Could not load session documents.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSessions();
//   }, []);

//   // Filter for search and date
//   const filteredSessions = sessions.filter((session) => {
//     const search = searchTerm.toLowerCase();
//     const nameMatch = session.loanProposerName.toLowerCase().includes(search);
//     const idMatch = session.sessionId.toLowerCase().includes(search);
//     const sessionDate = session.createdAt;
//     const start = startDate ? new Date(startDate) : null;
//     const end = endDate ? new Date(endDate) : null;
//     const dateMatch =
//       (!start || (sessionDate && sessionDate >= start)) &&
//       (!end || (sessionDate && sessionDate <= end));
//     return (nameMatch || idMatch) && dateMatch;
//   });

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial", minHeight: "83vh" }}>
//       <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
//         Session Document
//       </h2>

//       {/* Search & Filter */}
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           gap: "15px",
//           flexWrap: "wrap",
//           marginBottom: "20px",
//         }}
//       >
//         <input
//           type="text"
//           placeholder="Search by name or session ID"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           style={{
//             padding: "10px",
//             width: "300px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//           }}
//         />
//         <label style={{ paddingTop: "10px" }}>Start Date</label>
//         <input
//           type="date"
//           value={startDate}
//           onChange={(e) => setStartDate(e.target.value)}
//           style={{
//             padding: "10px",
//             width: "180px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//           }}
//         />
//         <label style={{ paddingTop: "10px" }}>End Date</label>
//         <input
//           type="date"
//           value={endDate}
//           onChange={(e) => setEndDate(e.target.value)}
//           style={{
//             padding: "10px",
//             width: "180px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//           }}
//         />
//       </div>

//       {/* Session List */}
//       {loading ? (
//         <p style={{ textAlign: "center" }}>Loading sessions...</p>
//       ) : error ? (
//         <p style={{ textAlign: "center", color: "red" }}>{error}</p>
//       ) : filteredSessions.length === 0 ? (
//         <p style={{ textAlign: "center" }}>
//           No incomplete sessions found.
//         </p>
//       ) : (
//         <div style={{ maxHeight: "60vh", overflowY: "auto" }}>
//           <ol style={{ paddingLeft: "20px", marginTop: 0 }}>
//             {/* Header */}
//             <li
//               style={{
//                 fontWeight: "bold",
//                 listStyle: "none",
//                 marginBottom: "10px",
//               }}
//             >
//               <div
//                 style={{
//                   display: "grid",
//                   gridTemplateColumns: "60px 200px 300px 200px",
//                   gap: "10px",
//                   alignItems: "center",
//                 }}
//               >
//                 <span>S.No</span>
//                 <span>Name</span>
//                 <span>Session ID</span>
//                 <span>Created Date</span>
//               </div>
//             </li>

//             {/* Rows */}
//             {filteredSessions.map((session, index) => (
//               <li key={index} style={{ listStyle: "none", marginBottom: "10px" }}>
//                 <div
//                   style={{
//                     display: "grid",
//                     gridTemplateColumns: "60px 200px 300px 200px",
//                     gap: "10px",
//                     alignItems: "center",
//                   }}
//                 >
//                   <span>{index + 1}</span>
//                   <span>
//                     <Link
//                       to={`/CreateDocument/${session.lastPage}?sessionid=${session.sessionId}`}
//                       style={{
//                         color: "#007bff",
//                         fontWeight: "bold",
//                         textDecoration: "none",
//                       }}
//                     >
//                       {session.loanProposerName}
//                     </Link>
//                   </span>
//                   <span>{session.sessionId}</span>
//                   <span>
//                     {session.createdAt.toLocaleString("en-IN", {
//                       dateStyle: "medium",
//                       timeStyle: "short",
//                     })}
//                   </span>
//                 </div>
//               </li>
//             ))}
//           </ol>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SessionDocument;


//  import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { getToken } from "../auth";

// const SessionDocument = () => {
//   const [sessions, setSessions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");

//   useEffect(() => {
//     const fetchSessions = async () => {
//       try {
//         const token = getToken();
//         const user_id =
//           sessionStorage.getItem("user_id") || localStorage.getItem("user_id");

//         if (!user_id) throw new Error("User ID not found");

//         const response = await fetch(
//           `http://localhost:3000/api/combined/resumesession/${user_id}`,
//           {
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: token ? `Bearer ${token}` : "",
//             },
//           }
//         );

//         if (!response.ok) throw new Error("Failed to fetch sessions");

//         const data = await response.json();

//         // --- Fixed logic: ensure unique, correct mapping per session_id ---
//         const formatted =
//           Array.isArray(data.sessions) && data.sessions.length > 0
//             ? data.sessions
//                 .filter((s) => s.current_page !== "complete")
//                 .map((item) => {
//                   const proposerName =
//                     item.loanProposerName?.trim() ||
//                     item.user_name?.trim() ||
//                     "Unnamed";

//                   return {
//                     loanProposerName: proposerName,
//                     sessionId: item.session_id,
//                     lastPage: item.current_page || "LoanProposerDetails",
//                     createdAt: item.dateOfRegistration
//                       ? new Date(item.dateOfRegistration)
//                       : new Date(),
//                   };
//                 })
//                 // remove duplicates (if same session_id repeated)
//                 .filter(
//                   (v, i, a) =>
//                     a.findIndex((t) => t.sessionId === v.sessionId) === i
//                 )
//             : [];

//         setSessions(formatted);
//         sessionStorage.setItem("cachedSessions", JSON.stringify(formatted));
//       } catch (err) {
//         console.error("Error fetching sessions:", err);
//         setError("Could not load session documents.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSessions();
//   }, []);

//   // 🔍 Filter by name, ID, and date
//   const filteredSessions = sessions.filter((session) => {
//     const search = searchTerm.toLowerCase();
//     const nameMatch = session.loanProposerName.toLowerCase().includes(search);
//     const idMatch = session.sessionId.toLowerCase().includes(search);

//     const sessionDate = session.createdAt;
//     const start = startDate ? new Date(startDate) : null;
//     const end = endDate ? new Date(endDate) : null;

//     const dateMatch =
//       (!start || (sessionDate && sessionDate >= start)) &&
//       (!end || (sessionDate && sessionDate <= end));

//     return (nameMatch || idMatch) && dateMatch;
//   });

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial", minHeight: "83vh" }}>
//       <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
//         Session Document
//       </h2>

//       {/* 🔍 Search & Filter */}
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           gap: "15px",
//           flexWrap: "wrap",
//           marginBottom: "20px",
//         }}
//       >
//         <input
//           type="text"
//           placeholder="Search by name or session ID"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           style={{
//             padding: "10px",
//             width: "300px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//           }}
//         />

//         <label style={{ paddingTop: "10px" }}>Start Date</label>
//         <input
//           type="date"
//           value={startDate}
//           onChange={(e) => setStartDate(e.target.value)}
//           style={{
//             padding: "10px",
//             width: "180px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//           }}
//         />

//         <label style={{ paddingTop: "10px" }}>End Date</label>
//         <input
//           type="date"
//           value={endDate}
//           onChange={(e) => setEndDate(e.target.value)}
//           style={{
//             padding: "10px",
//             width: "180px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//           }}
//         />
//       </div>

//       {/* 🧾 Session List */}
//       {loading ? (
//         <p style={{ textAlign: "center" }}>Loading sessions...</p>
//       ) : error ? (
//         <p style={{ textAlign: "center", color: "red" }}>{error}</p>
//       ) : filteredSessions.length === 0 ? (
//         <p style={{ textAlign: "center" }}>No incomplete sessions found.</p>
//       ) : (
//         <div style={{ maxHeight: "60vh", overflowY: "auto" }}>
//           <ol style={{ paddingLeft: "20px", marginTop: 0 }}>
//             {/* Header */}
//             <li
//               style={{
//                 fontWeight: "bold",
//                 listStyle: "none",
//                 marginBottom: "10px",
//               }}
//             >
//               <div
//                 style={{
//                   display: "grid",
//                   gridTemplateColumns: "60px 200px 300px 200px",
//                   gap: "10px",
//                   alignItems: "center",
//                 }}
//               >
//                 <span>S.No</span>
//                 <span>Name</span>
//                 <span>Session ID</span>
//                 <span>Created Date</span>
//               </div>
//             </li>

//             {/* Rows */}
//             {filteredSessions.map((session, index) => (
//               <li key={index} style={{ listStyle: "none", marginBottom: "10px" }}>
//                 <div
//                   style={{
//                     display: "grid",
//                     gridTemplateColumns: "60px 200px 300px 200px",
//                     gap: "10px",
//                     alignItems: "center",
//                   }}
//                 >
//                   <span>{index + 1}</span>
//                   <span>
//                     <Link
//                       to={`/CreateDocument/${session.lastPage}?sessionid=${session.sessionId}&loanProposerName=${encodeURIComponent(
//                         session.loanProposerName
//                       )}`}
//                       style={{
//                         color: "#007bff",
//                         fontWeight: "bold",
//                         textDecoration: "none",
//                       }}
//                     >
//                       {session.loanProposerName}
//                     </Link>
//                   </span>
//                   <span>{session.sessionId}</span>
//                   <span>
//                     {session.createdAt.toLocaleString("en-IN", {
//                       dateStyle: "medium",
//                       timeStyle: "short",
//                     })}
//                   </span>
//                 </div>
//               </li>
//             ))}
//           </ol>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SessionDocument;


//  import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { getToken } from "../auth";

// const SessionDocument = () => {
//   const [sessions, setSessions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");

//   useEffect(() => {
//     const fetchSessions = async () => {
//       try {
//         const token = getToken();
//         const user_id =
//           sessionStorage.getItem("user_id") || localStorage.getItem("user_id");

//         if (!user_id) throw new Error("User ID not found");

//         const response = await fetch(
//           `http://localhost:3000/api/combined/resumesession/${user_id}`,
//           {
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: token ? `Bearer ${token}` : "",
//             },
//           }
//         );

//         if (!response.ok) throw new Error("Failed to fetch sessions");
//         const data = await response.json();

//         const formatted =
//           Array.isArray(data.sessions) && data.sessions.length > 0
//             ? data.sessions
//                 .filter((s) => s.current_page !== "complete") // only incomplete
//                 .map((item) => {
//                   const proposerName =
//                     item.loanProposerName || item.user_name || "Unnamed";

//                   return {
//                     loanProposerName: proposerName,
//                     sessionId: item.session_id,
//                     lastPage: item.current_page || "LoanProposerDetails",
//                     createdAt: item.dateOfRegistration
//                       ? new Date(item.dateOfRegistration)
//                       : new Date(),
//                   };
//                 })
//             : [];

//         setSessions(formatted);
//         sessionStorage.setItem("cachedSessions", JSON.stringify(formatted));
//       } catch (err) {
//         console.error("Error fetching sessions:", err);
//         setError("Could not load session documents.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSessions();
//   }, []);

//   // Filter logic for search + date
//   const filteredSessions = sessions.filter((session) => {
//     const search = searchTerm.toLowerCase();
//     const nameMatch = session.loanProposerName.toLowerCase().includes(search);
//     const idMatch = session.sessionId.toLowerCase().includes(search);
//     const sessionDate = session.createdAt;
//     const start = startDate ? new Date(startDate) : null;
//     const end = endDate ? new Date(endDate) : null;
//     const dateMatch =
//       (!start || (sessionDate && sessionDate >= start)) &&
//       (!end || (sessionDate && sessionDate <= end));

//     return (nameMatch || idMatch) && dateMatch;
//   });

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial", minHeight: "83vh" }}>
//       <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
//         Session Document
//       </h2>

//       {/* Search + Date Filter */}
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           gap: "15px",
//           flexWrap: "wrap",
//           marginBottom: "20px",
//         }}
//       >
//         <input
//           type="text"
//           placeholder="Search by name or session ID"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           style={{
//             padding: "10px",
//             width: "300px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//           }}
//         />
//         <label style={{ paddingTop: "10px" }}>Start Date</label>
//         <input
//           type="date"
//           value={startDate}
//           onChange={(e) => setStartDate(e.target.value)}
//           style={{
//             padding: "10px",
//             width: "180px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//           }}
//         />
//         <label style={{ paddingTop: "10px" }}>End Date</label>
//         <input
//           type="date"
//           value={endDate}
//           onChange={(e) => setEndDate(e.target.value)}
//           style={{
//             padding: "10px",
//             width: "180px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//           }}
//         />
//       </div>

//       {/* Session List */}
//       {loading ? (
//         <p style={{ textAlign: "center" }}>Loading sessions...</p>
//       ) : error ? (
//         <p style={{ textAlign: "center", color: "red" }}>{error}</p>
//       ) : filteredSessions.length === 0 ? (
//         <p style={{ textAlign: "center" }}>No incomplete sessions found.</p>
//       ) : (
//         <div style={{ maxHeight: "60vh", overflowY: "auto" }}>
//           <ol style={{ paddingLeft: "20px", marginTop: 0 }}>
//             {/* Header */}
//             <li
//               style={{
//                 fontWeight: "bold",
//                 listStyle: "none",
//                 marginBottom: "10px",
//               }}
//             >
//               <div
//                 style={{
//                   display: "grid",
//                   gridTemplateColumns: "60px 200px 300px 200px",
//                   gap: "10px",
//                   alignItems: "center",
//                 }}
//               >
//                 <span>S.No</span>
//                 <span>Name</span>
//                 <span>Session ID</span>
//                 <span>Created Date</span>
//               </div>
//             </li>

//             {/* Rows */}
//             {filteredSessions.map((session, index) => (
//               <li
//                 key={index}
//                 style={{ listStyle: "none", marginBottom: "10px" }}
//               >
//                 <div
//                   style={{
//                     display: "grid",
//                     gridTemplateColumns: "60px 200px 300px 200px",
//                     gap: "10px",
//                     alignItems: "center",
//                   }}
//                 >
//                   <span>{index + 1}</span>
//                   <span>
//                     <Link
//                       to={`/CreateDocument/${session.lastPage}?sessionid=${session.sessionId}&loanProposerName=${encodeURIComponent(
//                         session.loanProposerName
//                       )}`}
//                       style={{
//                         color: "#007bff",
//                         fontWeight: "bold",
//                         textDecoration: "none",
//                       }}
//                     >
//                       {session.loanProposerName}
//                     </Link>
//                   </span>
//                   <span>{session.sessionId}</span>
//                   <span>
//                     {session.createdAt.toLocaleString("en-IN", {
//                       dateStyle: "medium",
//                       timeStyle: "short",
//                     })}
//                   </span>
//                 </div>
//               </li>
//             ))}
//           </ol>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SessionDocument;


// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { getToken } from "../auth";

// const SessionDocument = () => {
//   const [sessions, setSessions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");

//   useEffect(() => {
//     const fetchSessions = async () => {
//       try {
//         const token = getToken();
//         const user_id =
//           sessionStorage.getItem("user_id") || localStorage.getItem("user_id");

//         if (!user_id) throw new Error("User ID not found");

//         const response = await fetch(
//           `http://localhost:3000/api/combined/resumesession/${user_id}`,
//           {
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: token ? `Bearer ${token}` : "",
//             },
//           }
//         );

//         if (!response.ok) throw new Error("Failed to fetch sessions");

//         const data = await response.json();

//         const formatted =
//           Array.isArray(data.sessions) && data.sessions.length > 0
//             ? data.sessions
//                 .filter((s) => s.current_page !== "complete")
//                 .map((item) => {
//                   const proposerName =
//                     item.user_name || item.loanProposerName || "Unnamed";
//                   return {
//                     loanProposerName: proposerName,
//                     sessionId: item.session_id,
//                     lastPage: item.current_page || "LoanProposerDetails",
//                     createdAt: item.dateOfRegistration
//                       ? new Date(item.dateOfRegistration)
//                       : new Date(),
//                   };
//                 })
//             : [];

//         setSessions(formatted);
//       } catch (err) {
//         console.error("Error fetching sessions:", err);
//         setError("Could not load session documents.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSessions();
//   }, []);

//   const filteredSessions = sessions.filter((session) => {
//     const search = searchTerm.toLowerCase();
//     const nameMatch = session.loanProposerName.toLowerCase().includes(search);
//     const idMatch = session.sessionId.toLowerCase().includes(search);
//     const sessionDate = session.createdAt;
//     const start = startDate ? new Date(startDate) : null;
//     const end = endDate ? new Date(endDate) : null;
//     const dateMatch =
//       (!start || (sessionDate && sessionDate >= start)) &&
//       (!end || (sessionDate && sessionDate <= end));
//     return (nameMatch || idMatch) && dateMatch;
//   });

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial", minHeight: "83vh" }}>
//       <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
//         Session Document
//       </h2>

//       {/* Search & Filter */}
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           gap: "15px",
//           flexWrap: "wrap",
//           marginBottom: "20px",
//         }}
//       >
//         <input
//           type="text"
//           placeholder="Search by name or session ID"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           style={{
//             padding: "10px",
//             width: "300px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//           }}
//         />
//         <label style={{ paddingTop: "10px" }}>Start Date</label>
//         <input
//           type="date"
//           value={startDate}
//           onChange={(e) => setStartDate(e.target.value)}
//           style={{
//             padding: "10px",
//             width: "180px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//           }}
//         />
//         <label style={{ paddingTop: "10px" }}>End Date</label>
//         <input
//           type="date"
//           value={endDate}
//           onChange={(e) => setEndDate(e.target.value)}
//           style={{
//             padding: "10px",
//             width: "180px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//           }}
//         />
//       </div>

//       {loading ? (
//         <p style={{ textAlign: "center" }}>Loading sessions...</p>
//       ) : error ? (
//         <p style={{ textAlign: "center", color: "red" }}>{error}</p>
//       ) : filteredSessions.length === 0 ? (
//         <p style={{ textAlign: "center" }}>No incomplete sessions found.</p>
//       ) : (
//         <div style={{ maxHeight: "60vh", overflowY: "auto" }}>
//           <ol style={{ paddingLeft: "20px", marginTop: 0 }}>
//             <li
//               style={{
//                 fontWeight: "bold",
//                 listStyle: "none",
//                 marginBottom: "10px",
//               }}
//             >
//               <div
//                 style={{
//                   display: "grid",
//                   gridTemplateColumns: "60px 200px 300px 200px",
//                   gap: "10px",
//                   alignItems: "center",
//                 }}
//               >
//                 <span>S.No</span>
//                 <span>Name</span>
//                 <span>Session ID</span>
//                 <span>Created Date</span>
//               </div>
//             </li>

//             {filteredSessions.map((session, index) => (
//               <li key={index} style={{ listStyle: "none", marginBottom: "10px" }}>
//                 <div
//                   style={{
//                     display: "grid",
//                     gridTemplateColumns: "60px 200px 300px 200px",
//                     gap: "10px",
//                     alignItems: "center",
//                   }}
//                 >
//                   <span>{index + 1}</span>
//                   <span>
//                     <Link
//                       to={`/CreateDocument/${session.lastPage}?sessionid=${session.sessionId}&loanProposerName=${encodeURIComponent(
//                         session.loanProposerName
//                       )}`}
//                       style={{
//                         color: "#007bff",
//                         fontWeight: "bold",
//                         textDecoration: "none",
//                       }}
//                     >
//                       {session.loanProposerName}
//                     </Link>
//                   </span>
//                   <span>{session.sessionId}</span>
//                   <span>
//                     {session.createdAt.toLocaleString("en-IN", {
//                       dateStyle: "medium",
//                       timeStyle: "short",
//                     })}
//                   </span>
//                 </div>
//               </li>
//             ))}
//           </ol>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SessionDocument;



//-----------------------------------------

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { getToken } from "../auth";

// const SessionDocument = () => {
//   const [sessions, setSessions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");

//   useEffect(() => {
//     const fetchSessions = async () => {
//       try {
//         const token = getToken();
//         const user_id =
//           sessionStorage.getItem("user_id") || localStorage.getItem("user_id");

//         if (!user_id) throw new Error("User ID not found");

//         const response = await fetch(
//           `http://localhost:3000/api/combined/resumesession/${user_id}`,
//           {
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: token ? `Bearer ${token}` : "",
//             },
//           }
//         );

//         if (!response.ok) throw new Error("Failed to fetch sessions");

//         const data = await response.json();

//         // ✅ Normalize and clean sessions
//         const formatted =
//           Array.isArray(data.sessions) && data.sessions.length > 0
//             ? data.sessions
//                 .filter((s) => s.current_page && s.current_page !== "complete")
//                 .map((item) => {
//                   // Prefer loanProposerName if available
//                   const proposerName =
//                     item.loanProposerName ||
//                     item.user_name ||
//                     "Unnamed";

//                   return {
//                     loanProposerName: proposerName,
//                     sessionId: item.session_id,
//                     lastPage: item.current_page || "LoanProposerDetails",
//                     createdAt: item.dateOfRegistration
//                       ? new Date(item.dateOfRegistration)
//                       : new Date(),
//                   };
//                 })
//             : [];

//         setSessions(formatted);
//       } catch (err) {
//         console.error("Error fetching sessions:", err);
//         setError("Could not load session documents.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSessions();
//   }, []);

//   // ✅ Filter by search and date
//   const filteredSessions = sessions.filter((session) => {
//     const search = searchTerm.toLowerCase();
//     const nameMatch = session.loanProposerName
//       ?.toLowerCase()
//       .includes(search);
//     const idMatch = session.sessionId.toLowerCase().includes(search);

//     const sessionDate = session.createdAt;
//     const start = startDate ? new Date(startDate) : null;
//     const end = endDate ? new Date(endDate) : null;

//     const dateMatch =
//       (!start || (sessionDate && sessionDate >= start)) &&
//       (!end || (sessionDate && sessionDate <= end));

//     return (nameMatch || idMatch) && dateMatch;
//   });

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial", minHeight: "83vh" }}>
//       <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
//         Session Document
//       </h2>

//       {/* 🔍 Search & Filter */}
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           gap: "15px",
//           flexWrap: "wrap",
//           marginBottom: "20px",
//         }}
//       >
//         <input
//           type="text"
//           placeholder="Search by name or session ID"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           style={{
//             padding: "10px",
//             width: "300px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//           }}
//         />
//         <label style={{ paddingTop: "10px" }}>Start Date</label>
//         <input
//           type="date"
//           value={startDate}
//           onChange={(e) => setStartDate(e.target.value)}
//           style={{
//             padding: "10px",
//             width: "180px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//           }}
//         />
//         <label style={{ paddingTop: "10px" }}>End Date</label>
//         <input
//           type="date"
//           value={endDate}
//           onChange={(e) => setEndDate(e.target.value)}
//           style={{
//             padding: "10px",
//             width: "180px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//           }}
//         />
//       </div>

//       {loading ? (
//         <p style={{ textAlign: "center" }}>Loading sessions...</p>
//       ) : error ? (
//         <p style={{ textAlign: "center", color: "red" }}>{error}</p>
//       ) : filteredSessions.length === 0 ? (
//         <p style={{ textAlign: "center" }}>No incomplete sessions found.</p>
//       ) : (
//         <div style={{ maxHeight: "60vh", overflowY: "auto" }}>
//           <ol style={{ paddingLeft: "20px", marginTop: 0 }}>
//             <li
//               style={{
//                 fontWeight: "bold",
//                 listStyle: "none",
//                 marginBottom: "10px",
//               }}
//             >
//               <div
//                 style={{
//                   display: "grid",
//                   gridTemplateColumns: "60px 200px 300px 200px",
//                   gap: "10px",
//                   alignItems: "center",
//                 }}
//               >
//                 <span>S.No</span>
//                 <span>Name</span>
//                 <span>Session ID</span>
//                 <span>Created Date</span>
//               </div>
//             </li>

//             {filteredSessions.map((session, index) => (
//               <li key={index} style={{ listStyle: "none", marginBottom: "10px" }}>
//                 <div
//                   style={{
//                     display: "grid",
//                     gridTemplateColumns: "60px 200px 300px 200px",
//                     gap: "10px",
//                     alignItems: "center",
//                   }}
//                 >
//                   <span>{index + 1}</span>
//                   <span>
//                     <Link
//                       to={`/CreateDocument/${session.lastPage}?sessionid=${session.sessionId}`}
//                       style={{
//                         color: "#007bff",
//                         fontWeight: "bold",
//                         textDecoration: "none",
//                       }}
//                     >
//                       {session.loanProposerName || "Unnamed"}
//                     </Link>
//                   </span>
//                   <span>{session.sessionId}</span>
//                   <span>
//                     {session.createdAt.toLocaleString("en-IN", {
//                       dateStyle: "medium",
//                       timeStyle: "short",
//                     })}
//                   </span>
//                 </div>
//               </li>
//             ))}
//           </ol>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SessionDocument;


// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { getToken } from "../auth";

// const SessionDocument = () => {
//   const [sessions, setSessions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");

//   useEffect(() => {
//     const fetchSessions = async () => {
//       try {
//         const token = getToken();
//         const user_id =
//           sessionStorage.getItem("user_id") || localStorage.getItem("user_id");

//         // ✅ Safe check: if no user_id, show message instead of throwing error
//         if (!user_id) {
//           setError("User not logged in. Please log in to view sessions.");
//           setLoading(false);
//           return;
//         }

//         const response = await fetch(
//           `http://localhost:3000/api/combined/resumesession/${user_id}`,
//           {
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: token ? `Bearer ${token}` : "",
//             },
//           }
//         );

//         if (!response.ok) throw new Error("Failed to fetch sessions");

//         const data = await response.json();

//         // ✅ Normalize sessions
//         const formatted =
//           Array.isArray(data.sessions) && data.sessions.length > 0
//             ? data.sessions
//                 .filter((s) => s.current_page && s.current_page !== "complete")
//                 .map((item) => {
//                   // ✅ Always prefer loanProposerName; fallback to "Unnamed"
//                   const proposerName =
//                     item.loanProposerName ||
//                     item.user_name ||
//                     "Unnamed";

//                   return {
//                     loanProposerName: proposerName,
//                     sessionId: item.session_id,
//                     lastPage: item.current_page || "LoanProposerDetails",
//                     createdAt: item.dateOfRegistration
//                       ? new Date(item.dateOfRegistration)
//                       : new Date(),
//                   };
//                 })
//             : [];

//         setSessions(formatted);
//       } catch (err) {
//         console.error("Error fetching sessions:", err);
//         setError("Could not load session documents.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSessions();
//   }, []);

//   // ✅ Filter by search and date
//   const filteredSessions = sessions.filter((session) => {
//     const search = searchTerm.toLowerCase();
//     const nameMatch = session.loanProposerName
//       ?.toLowerCase()
//       .includes(search);
//     const idMatch = session.sessionId.toLowerCase().includes(search);

//     const sessionDate = session.createdAt;
//     const start = startDate ? new Date(startDate) : null;
//     const end = endDate ? new Date(endDate) : null;

//     const dateMatch =
//       (!start || (sessionDate && sessionDate >= start)) &&
//       (!end || (sessionDate && sessionDate <= end));

//     return (nameMatch || idMatch) && dateMatch;
//   });

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial", minHeight: "83vh" }}>
//       <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
//         Session Document
//       </h2>

//       {/* 🔍 Search & Filter */}
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           gap: "15px",
//           flexWrap: "wrap",
//           marginBottom: "20px",
//         }}
//       >
//         <input
//           type="text"
//           placeholder="Search by name or session ID"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           style={{
//             padding: "10px",
//             width: "300px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//           }}
//         />
//         <label style={{ paddingTop: "10px" }}>Start Date</label>
//         <input
//           type="date"
//           value={startDate}
//           onChange={(e) => setStartDate(e.target.value)}
//           style={{
//             padding: "10px",
//             width: "180px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//           }}
//         />
//         <label style={{ paddingTop: "10px" }}>End Date</label>
//         <input
//           type="date"
//           value={endDate}
//           onChange={(e) => setEndDate(e.target.value)}
//           style={{
//             padding: "10px",
//             width: "180px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//           }}
//         />
//       </div>

//       {loading ? (
//         <p style={{ textAlign: "center" }}>Loading sessions...</p>
//       ) : error ? (
//         <p style={{ textAlign: "center", color: "red" }}>{error}</p>
//       ) : filteredSessions.length === 0 ? (
//         <p style={{ textAlign: "center" }}>No incomplete sessions found.</p>
//       ) : (
//         <div style={{ maxHeight: "60vh", overflowY: "auto" }}>
//           <ol style={{ paddingLeft: "20px", marginTop: 0 }}>
//             <li
//               style={{
//                 fontWeight: "bold",
//                 listStyle: "none",
//                 marginBottom: "10px",
//               }}
//             >
//               <div
//                 style={{
//                   display: "grid",
//                   gridTemplateColumns: "60px 200px 300px 200px",
//                   gap: "10px",
//                   alignItems: "center",
//                 }}
//               >
//                 <span>S.No</span>
//                 <span>Name</span>
//                 <span>Session ID</span>
//                 <span>Created Date</span>
//               </div>
//             </li>

//             {filteredSessions.map((session, index) => (
//               <li key={index} style={{ listStyle: "none", marginBottom: "10px" }}>
//                 <div
//                   style={{
//                     display: "grid",
//                     gridTemplateColumns: "60px 200px 300px 200px",
//                     gap: "10px",
//                     alignItems: "center",
//                   }}
//                 >
//                   <span>{index + 1}</span>
//                   <span>
//                     <Link
//                       to={`/CreateDocument/${session.lastPage}?sessionid=${session.sessionId}`}
//                       style={{
//                         color: "#007bff",
//                         fontWeight: "bold",
//                         textDecoration: "none",
//                       }}
//                     >
//                       {session.loanProposerName || "Unnamed"}
//                     </Link>
//                   </span>
//                   <span>{session.sessionId}</span>
//                   <span>
//                     {session.createdAt.toLocaleString("en-IN", {
//                       dateStyle: "medium",
//                       timeStyle: "short",
//                     })}
//                   </span>
//                 </div>
//               </li>
//             ))}
//           </ol>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SessionDocument;



// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { getToken } from "../auth";

// const SessionDocument = () => {
//   const [sessions, setSessions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");

//   useEffect(() => {
//     const fetchSessions = async () => {
//       try {
//         const token = getToken();
//         const user_id =
//           sessionStorage.getItem("user_id") || localStorage.getItem("user_id");

//         if (!user_id) {
//           setError("User not logged in. Please log in to view sessions.");
//           setLoading(false);
//           return;
//         }

//         const response = await fetch(
//           `http://localhost:3000/api/combined/resumesession/${user_id}`,
//           {
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: token ? `Bearer ${token}` : "",
//             },
//           }
//         );

//         if (!response.ok) throw new Error("Failed to fetch sessions");

//         const data = await response.json();

//         // ✅ Normalize and clean sessions
//         const formatted =
//           Array.isArray(data.sessions) && data.sessions.length > 0
//             ? data.sessions
//                 .filter((s) => s.current_page && s.current_page !== "complete")
//                 .map((item) => {
//                   const proposerName =
//                     item.loanProposerName ||
//                     item.loan_proposer_name ||
//                     item.user_name ||
//                     "Unnamed";

//                   // ✅ Ensure current_page is correctly mapped
//                   let pageName = item.current_page?.trim() || "LoanProposerDetails";

//                   // ✅ Handle potential path or mismatched naming issues
//                   // Example: if backend sends lowercase or just name, normalize it
//                   if (!pageName.startsWith("/")) {
//                     pageName = pageName.charAt(0).toUpperCase() + pageName.slice(1);
//                   }

//                   return {
//                     loanProposerName: proposerName,
//                     sessionId: item.session_id,
//                     lastPage: pageName,
//                     createdAt: item.dateOfRegistration
//                       ? new Date(item.dateOfRegistration)
//                       : new Date(),
//                   };
//                 })
//             : [];

//         setSessions(formatted);
//       } catch (err) {
//         console.error("Error fetching sessions:", err);
//         setError("Could not load session documents.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSessions();
//   }, []);

//   // ✅ Filter by search & date
//   const filteredSessions = sessions.filter((session) => {
//     const search = searchTerm.toLowerCase();
//     const nameMatch = session.loanProposerName
//       ?.toLowerCase()
//       .includes(search);
//     const idMatch = session.sessionId.toLowerCase().includes(search);

//     const sessionDate = session.createdAt;
//     const start = startDate ? new Date(startDate) : null;
//     const end = endDate ? new Date(endDate) : null;

//     const dateMatch =
//       (!start || (sessionDate && sessionDate >= start)) &&
//       (!end || (sessionDate && sessionDate <= end));

//     return (nameMatch || idMatch) && dateMatch;
//   });

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial", minHeight: "83vh" }}>
//       <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
//         Session Document
//       </h2>

//       {/* 🔍 Search & Filter */}
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           gap: "15px",
//           flexWrap: "wrap",
//           marginBottom: "20px",
//         }}
//       >
//         <input
//           type="text"
//           placeholder="Search by name or session ID"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           style={{
//             padding: "10px",
//             width: "300px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//           }}
//         />
//         <label style={{ paddingTop: "10px" }}>Start Date</label>
//         <input
//           type="date"
//           value={startDate}
//           onChange={(e) => setStartDate(e.target.value)}
//           style={{
//             padding: "10px",
//             width: "180px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//           }}
//         />
//         <label style={{ paddingTop: "10px" }}>End Date</label>
//         <input
//           type="date"
//           value={endDate}
//           onChange={(e) => setEndDate(e.target.value)}
//           style={{
//             padding: "10px",
//             width: "180px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//           }}
//         />
//       </div>

//       {loading ? (
//         <p style={{ textAlign: "center" }}>Loading sessions...</p>
//       ) : error ? (
//         <p style={{ textAlign: "center", color: "red" }}>{error}</p>
//       ) : filteredSessions.length === 0 ? (
//         <p style={{ textAlign: "center" }}>No incomplete sessions found.</p>
//       ) : (
//         <div style={{ maxHeight: "60vh", overflowY: "auto" }}>
//           <ol style={{ paddingLeft: "20px", marginTop: 0 }}>
//             <li
//               style={{
//                 fontWeight: "bold",
//                 listStyle: "none",
//                 marginBottom: "10px",
//               }}
//             >
//               <div
//                 style={{
//                   display: "grid",
//                   gridTemplateColumns: "60px 200px 300px 200px",
//                   gap: "10px",
//                   alignItems: "center",
//                 }}
//               >
//                 <span>S.No</span>
//                 <span>Name</span>
//                 <span>Session ID</span>
//                 <span>Created Date</span>
//               </div>
//             </li>

//             {filteredSessions.map((session, index) => (
//               <li key={index} style={{ listStyle: "none", marginBottom: "10px" }}>
//                 <div
//                   style={{
//                     display: "grid",
//                     gridTemplateColumns: "60px 200px 300px 200px",
//                     gap: "10px",
//                     alignItems: "center",
//                   }}
//                 >
//                   <span>{index + 1}</span>
//                   <span>
//                     {/* ✅ Dynamic redirect fixed here */}
//                     <Link
//                       to={`/CreateDocument/${session.lastPage}?sessionid=${session.sessionId}`}
//                       style={{
//                         color: "#007bff",
//                         fontWeight: "bold",
//                         textDecoration: "none",
//                       }}
//                     >
//                       {session.loanProposerName || "Unnamed"}
//                     </Link>
//                   </span>
//                   <span>{session.sessionId}</span>
//                   <span>
//                     {session.createdAt.toLocaleString("en-IN", {
//                       dateStyle: "medium",
//                       timeStyle: "short",
//                     })}
//                   </span>
//                 </div>
//               </li>
//             ))}
//           </ol>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SessionDocument;


// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { getToken } from "../auth";

// const SessionDocument = () => {
//   const [sessions, setSessions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");

//   useEffect(() => {
//     const fetchSessions = async () => {
//       try {
//         const token = getToken();
//         const user_id =
//           sessionStorage.getItem("user_id") || localStorage.getItem("user_id");

//         if (!user_id) {
//           setError("User not logged in. Please log in to view sessions.");
//           setLoading(false);
//           return;
//         }

//         const response = await fetch(
//           `http://localhost:3000/api/combined/resumesession/${user_id}`,
//           {
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: token ? `Bearer ${token}` : "",
//             },
//           }
//         );

//         if (!response.ok) throw new Error("Failed to fetch sessions");

//         const data = await response.json();

//         // ✅ Normalize and clean sessions
//         const formatted =
//           Array.isArray(data.sessions) && data.sessions.length > 0
//             ? data.sessions
//                 .filter((s) => s.current_page && s.current_page !== "complete")
//                 .map((item) => {
//                   const proposerName =
//                     item.loanProposerName ||
//                     item.loan_proposer_name ||
//                     item.user_name ||
//                     "Unnamed";

//                   // ✅ Ensure current_page is correctly mapped
//                   let pageName = item.current_page?.trim() || "LoanProposerDetails";

//                   // ✅ Handle potential lowercase or mismatched naming issues
//                   if (!pageName.startsWith("/")) {
//                     pageName =
//                       pageName.charAt(0).toUpperCase() + pageName.slice(1);
//                   }

//                   return {
//                     loanProposerName: proposerName,
//                     sessionId: item.session_id,
//                     lastPage: pageName,
//                     createdAt: item.dateOfRegistration
//                       ? new Date(item.dateOfRegistration)
//                       : new Date(),
//                   };
//                 })
//             : [];

//         setSessions(formatted);
//       } catch (err) {
//         console.error("Error fetching sessions:", err);
//         setError("Could not load session documents.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSessions();
//   }, []);

//   // ✅ Filter by search & date
//   const filteredSessions = sessions.filter((session) => {
//     const search = searchTerm.toLowerCase();
//     const nameMatch = session.loanProposerName
//       ?.toLowerCase()
//       .includes(search);
//     const idMatch = session.sessionId.toLowerCase().includes(search);

//     const sessionDate = session.createdAt;
//     const start = startDate ? new Date(startDate) : null;
//     const end = endDate ? new Date(endDate) : null;

//     const dateMatch =
//       (!start || (sessionDate && sessionDate >= start)) &&
//       (!end || (sessionDate && sessionDate <= end));

//     return (nameMatch || idMatch) && dateMatch;
//   });

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial", minHeight: "83vh" }}>
//       <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
//         Session Document
//       </h2>

//       {/* 🔍 Search & Filter */}
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           gap: "15px",
//           flexWrap: "wrap",
//           marginBottom: "20px",
//         }}
//       >
//         <input
//           type="text"
//           placeholder="Search by name or session ID"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           style={{
//             padding: "10px",
//             width: "300px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//           }}
//         />
//         <label style={{ paddingTop: "10px" }}>Start Date</label>
//         <input
//           type="date"
//           value={startDate}
//           onChange={(e) => setStartDate(e.target.value)}
//           style={{
//             padding: "10px",
//             width: "180px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//           }}
//         />
//         <label style={{ paddingTop: "10px" }}>End Date</label>
//         <input
//           type="date"
//           value={endDate}
//           onChange={(e) => setEndDate(e.target.value)}
//           style={{
//             padding: "10px",
//             width: "180px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//           }}
//         />
//       </div>

//       {loading ? (
//         <p style={{ textAlign: "center" }}>Loading sessions...</p>
//       ) : error ? (
//         <p style={{ textAlign: "center", color: "red" }}>{error}</p>
//       ) : filteredSessions.length === 0 ? (
//         <p style={{ textAlign: "center" }}>No incomplete sessions found.</p>
//       ) : (
//         <div style={{ maxHeight: "60vh", overflowY: "auto" }}>
//           <ol style={{ paddingLeft: "20px", marginTop: 0 }}>
//             <li
//               style={{
//                 fontWeight: "bold",
//                 listStyle: "none",
//                 marginBottom: "10px",
//               }}
//             >
//               <div
//                 style={{
//                   display: "grid",
//                   gridTemplateColumns: "60px 200px 300px 200px",
//                   gap: "10px",
//                   alignItems: "center",
//                 }}
//               >
//                 <span>S.No</span>
//                 <span>Name</span>
//                 <span>Session ID</span>
//                 <span>Created Date</span>
//               </div>
//             </li>

//             {filteredSessions.map((session, index) => (
//               <li key={index} style={{ listStyle: "none", marginBottom: "10px" }}>
//                 <div
//                   style={{
//                     display: "grid",
//                     gridTemplateColumns: "60px 200px 300px 200px",
//                     gap: "10px",
//                     alignItems: "center",
//                   }}
//                 >
//                   <span>{index + 1}</span>
//                   <span>
//                     {/* ✅ Fixed dynamic redirect logic here */}
//                     <Link
//                       to={`/${session.lastPage}?sessionid=${session.sessionId}`}
//                       style={{
//                         color: "#007bff",
//                         fontWeight: "bold",
//                         textDecoration: "none",
//                       }}
//                     >
//                       {session.loanProposerName || "Unnamed"}
//                     </Link>
//                   </span>
//                   <span>{session.sessionId}</span>
//                   <span>
//                     {session.createdAt.toLocaleString("en-IN", {
//                       dateStyle: "medium",
//                       timeStyle: "short",
//                     })}
//                   </span>
//                 </div>
//               </li>
//             ))}
//           </ol>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SessionDocument;
 
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { getToken } from "../auth";

// const SessionDocument = () => {
//   const [sessions, setSessions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");

//   useEffect(() => {
//     const fetchSessions = async () => {
//       try {
//         const token = getToken();
//         const user_id =
//           sessionStorage.getItem("user_id") || localStorage.getItem("user_id");

//         if (!user_id) {
//           setError("User not logged in. Please log in to view sessions.");
//           setLoading(false);
//           return;
//         }

//         const response = await fetch(
//           `http://localhost:3000/api/combined/resumesession/${user_id}`,
//           {
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: token ? `Bearer ${token}` : "",
//             },
//           }
//         );

//         if (!response.ok) throw new Error("Failed to fetch sessions");

//         const data = await response.json();

//         // ✅ Normalize and clean sessions
//         const formatted =
//           Array.isArray(data.sessions) && data.sessions.length > 0
//             ? data.sessions
//                 .filter((s) => s.current_page && s.current_page !== "complete")
//                 .map((item) => {
//                   const proposerName =
//                     item.loanProposerName ||
//                     item.loan_proposer_name ||
//                     item.user_name ||
//                     "Unnamed";

//                   // ✅ Clean and normalize the page path
//                   let pageName = item.current_page?.trim() || "LoanProposerDetails";

//                   // Remove unwanted prefixes or slashes (e.g., "/CreateDocument/", "CreateDocument/")
//                   pageName = pageName.replace(/^\/+|CreateDocument\//gi, "");

//                   // Ensure first letter capitalized (to match actual component path)
//                   pageName =
//                     pageName.charAt(0).toUpperCase() + pageName.slice(1);

//                   return {
//                     loanProposerName: proposerName,
//                     sessionId: item.session_id,
//                     lastPage: pageName,
//                     createdAt: item.dateOfRegistration
//                       ? new Date(item.dateOfRegistration)
//                       : new Date(),
//                   };
//                 })
//             : [];

//         setSessions(formatted);
//       } catch (err) {
//         console.error("Error fetching sessions:", err);
//         setError("Could not load session documents.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSessions();
//   }, []);

//   // ✅ Filter by search & date
//   const filteredSessions = sessions.filter((session) => {
//     const search = searchTerm.toLowerCase();
//     const nameMatch = session.loanProposerName
//       ?.toLowerCase()
//       .includes(search);
//     const idMatch = session.sessionId.toLowerCase().includes(search);

//     const sessionDate = session.createdAt;
//     const start = startDate ? new Date(startDate) : null;
//     const end = endDate ? new Date(endDate) : null;

//     const dateMatch =
//       (!start || (sessionDate && sessionDate >= start)) &&
//       (!end || (sessionDate && sessionDate <= end));

//     return (nameMatch || idMatch) && dateMatch;
//   });

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial", minHeight: "83vh" }}>
//       <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
//         Session Document
//       </h2>

//       {/* 🔍 Search & Filter */}
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           gap: "15px",
//           flexWrap: "wrap",
//           marginBottom: "20px",
//         }}
//       >
//         <input
//           type="text"
//           placeholder="Search by name or session ID"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           style={{
//             padding: "10px",
//             width: "300px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//           }}
//         />
//         <label style={{ paddingTop: "10px" }}>Start Date</label>
//         <input
//           type="date"
//           value={startDate}
//           onChange={(e) => setStartDate(e.target.value)}
//           style={{
//             padding: "10px",
//             width: "180px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//           }}
//         />
//         <label style={{ paddingTop: "10px" }}>End Date</label>
//         <input
//           type="date"
//           value={endDate}
//           onChange={(e) => setEndDate(e.target.value)}
//           style={{
//             padding: "10px",
//             width: "180px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//           }}
//         />
//       </div>

//       {loading ? (
//         <p style={{ textAlign: "center" }}>Loading sessions...</p>
//       ) : error ? (
//         <p style={{ textAlign: "center", color: "red" }}>{error}</p>
//       ) : filteredSessions.length === 0 ? (
//         <p style={{ textAlign: "center" }}>No incomplete sessions found.</p>
//       ) : (
//         <div style={{ maxHeight: "60vh", overflowY: "auto" }}>
//           <ol style={{ paddingLeft: "20px", marginTop: 0 }}>
//             <li
//               style={{
//                 fontWeight: "bold",
//                 listStyle: "none",
//                 marginBottom: "10px",
//               }}
//             >
//               <div
//                 style={{
//                   display: "grid",
//                   gridTemplateColumns: "60px 200px 300px 200px",
//                   gap: "10px",
//                   alignItems: "center",
//                 }}
//               >
//                 <span>S.No</span>
//                 <span>Name</span>
//                 <span>Session ID</span>
//                 <span>Created Date</span>
//               </div>
//             </li>

//             {filteredSessions.map((session, index) => (
//               <li key={index} style={{ listStyle: "none", marginBottom: "10px" }}>
//                 <div
//                   style={{
//                     display: "grid",
//                     gridTemplateColumns: "60px 200px 300px 200px",
//                     gap: "10px",
//                     alignItems: "center",
//                   }}
//                 >
//                   <span>{index + 1}</span>
//                   <span>
//                     {/* ✅ Dynamic redirect fixed here */}
//                     <Link
//                       to={`/CreateDocument/${session.lastPage}?sessionid=${session.sessionId}`}
//                       style={{
//                         color: "#007bff",
//                         fontWeight: "bold",
//                         textDecoration: "none",
//                       }}
//                     >
//                       {session.loanProposerName || "Unnamed"}
//                     </Link>
//                   </span>
//                   <span>{session.sessionId}</span>
//                   <span>
//                     {session.createdAt.toLocaleString("en-IN", {
//                       dateStyle: "medium",
//                       timeStyle: "short",
//                     })}
//                   </span>
//                 </div>
//               </li>
//             ))}
//           </ol>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SessionDocument;




// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { getToken } from "../auth";

// const SessionDocument = () => {
//   const [sessions, setSessions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");

//   useEffect(() => {
//     const fetchSessions = async () => {
//       try {
//         const token = getToken();
//         const user_id =
//           sessionStorage.getItem("user_id") || localStorage.getItem("user_id");

//         if (!user_id) {
//           setError("User not logged in. Please log in to view sessions.");
//           setLoading(false);
//           return;
//         }

//         const response = await fetch(
//           `http://localhost:3000/api/combined/resumesession/${user_id}`,
//           {
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: token ? `Bearer ${token}` : "",
//             },
//           }
//         );

//         if (!response.ok) throw new Error("Failed to fetch sessions");

//         const data = await response.json();

//         // ✅ Normalize and clean sessions
//         const formatted =
//           Array.isArray(data.sessions) && data.sessions.length > 0
//             ? data.sessions
//                 .filter((s) => s.current_page && s.current_page !== "complete")
//                 .map((item) => {
//                   const proposerName =
//                     item.loanProposerName ||
//                     item.loan_proposer_name ||
//                     item.user_name ||
//                     "Unnamed";

//                   let pageName = item.current_page?.trim() || "LoanProposerDetails";

//                   // ✅ Clean path and make sure it stays inside /CreateDocument/
//                   pageName = pageName.replace(/^\/+|CreateDocument\//gi, "");
//                   pageName =
//                     pageName.charAt(0).toUpperCase() + pageName.slice(1);

//                   // ✅ Ensure valid known pages only
//                   const validPages = [
//                     "LoanProposerDetails",
//                     "LoanProposerAndTitleHolder",
//                     "TitleHolderDetails",
//                     "MostRecentDocuments",
//                     "PropertyDetails",
//                     "PropertyBoundaries",
//                     "LinkDocuments",
//                     "ReviewDocument",
//                   ];
//                   if (!validPages.includes(pageName)) {
//                     pageName = "LoanProposerDetails";
//                   }

//                   return {
//                     loanProposerName: proposerName,
//                     sessionId: item.session_id,
//                     lastPage: pageName,
//                     createdAt: item.dateOfRegistration
//                       ? new Date(item.dateOfRegistration)
//                       : new Date(),
//                   };
//                 })
//             : [];

//         setSessions(formatted);
//       } catch (err) {
//         console.error("Error fetching sessions:", err);
//         setError("Could not load session documents.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSessions();
//   }, []);

//   // ✅ Filter by search & date
//   const filteredSessions = sessions.filter((session) => {
//     const search = searchTerm.toLowerCase();
//     const nameMatch = session.loanProposerName
//       ?.toLowerCase()
//       .includes(search);
//     const idMatch = session.sessionId.toLowerCase().includes(search);

//     const sessionDate = session.createdAt;
//     const start = startDate ? new Date(startDate) : null;
//     const end = endDate ? new Date(endDate) : null;

//     const dateMatch =
//       (!start || (sessionDate && sessionDate >= start)) &&
//       (!end || (sessionDate && sessionDate <= end));

//     return (nameMatch || idMatch) && dateMatch;
//   });

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial", minHeight: "83vh" }}>
//       <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
//         Session Document
//       </h2>

//       {/* 🔍 Search & Filter */}
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           gap: "15px",
//           flexWrap: "wrap",
//           marginBottom: "20px",
//         }}
//       >
//         <input
//           type="text"
//           placeholder="Search by name or session ID"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           style={{
//             padding: "10px",
//             width: "300px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//           }}
//         />
//         <label style={{ paddingTop: "10px" }}>Start Date</label>
//         <input
//           type="date"
//           value={startDate}
//           onChange={(e) => setStartDate(e.target.value)}
//           style={{
//             padding: "10px",
//             width: "180px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//           }}
//         />
//         <label style={{ paddingTop: "10px" }}>End Date</label>
//         <input
//           type="date"
//           value={endDate}
//           onChange={(e) => setEndDate(e.target.value)}
//           style={{
//             padding: "10px",
//             width: "180px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//           }}
//         />
//       </div>

//       {loading ? (
//         <p style={{ textAlign: "center" }}>Loading sessions...</p>
//       ) : error ? (
//         <p style={{ textAlign: "center", color: "red" }}>{error}</p>
//       ) : filteredSessions.length === 0 ? (
//         <p style={{ textAlign: "center" }}>No incomplete sessions found.</p>
//       ) : (
//         <div style={{ maxHeight: "60vh", overflowY: "auto" }}>
//           <ol style={{ paddingLeft: "20px", marginTop: 0 }}>
//             <li
//               style={{
//                 fontWeight: "bold",
//                 listStyle: "none",
//                 marginBottom: "10px",
//               }}
//             >
//               <div
//                 style={{
//                   display: "grid",
//                   gridTemplateColumns: "60px 200px 300px 200px",
//                   gap: "10px",
//                   alignItems: "center",
//                 }}
//               >
//                 <span>S.No</span>
//                 <span>Name</span>
//                 <span>Session ID</span>
//                 <span>Created Date</span>
//               </div>
//             </li>

//             {filteredSessions.map((session, index) => (
//               <li key={index} style={{ listStyle: "none", marginBottom: "10px" }}>
//                 <div
//                   style={{
//                     display: "grid",
//                     gridTemplateColumns: "60px 200px 300px 200px",
//                     gap: "10px",
//                     alignItems: "center",
//                   }}
//                 >
//                   <span>{index + 1}</span>
//                   <span>
//                     <Link
//                       to={`/CreateDocument/${session.lastPage}?sessionid=${session.sessionId}`}
//                       style={{
//                         color: "#007bff",
//                         fontWeight: "bold",
//                         textDecoration: "none",
//                       }}
//                     >
//                       {session.loanProposerName || "Unnamed"}
//                     </Link>
//                   </span>
//                   <span>{session.sessionId}</span>
//                   <span>
//                     {session.createdAt.toLocaleString("en-IN", {
//                       dateStyle: "medium",
//                       timeStyle: "short",
//                     })}
//                   </span>
//                 </div>
//               </li>
//             ))}
//           </ol>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SessionDocument;


// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { getToken } from "../auth";

// const SessionDocument = () => {
//   const [sessions, setSessions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");

//   useEffect(() => {
//     const fetchSessions = async () => {
//       try {
//         const token = getToken();
//         const user_id =
//           sessionStorage.getItem("user_id") || localStorage.getItem("user_id");

//         if (!user_id) {
//           setError("User not logged in. Please log in to view sessions.");
//           setLoading(false);
//           return;
//         }

//         const response = await fetch(
//           `http://localhost:3000/api/combined/resumesession/${user_id}`,
//           {
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: token ? `Bearer ${token}` : "",
//             },
//           }
//         );

//         if (!response.ok) throw new Error("Failed to fetch sessions");

//         const data = await response.json();

//         // ✅ Normalize and clean sessions
//         const formatted =
//           Array.isArray(data.sessions) && data.sessions.length > 0
//             ? data.sessions
//                 .filter((s) => s.current_page && s.current_page !== "complete")
//                 .map((item) => {
//                   const proposerName =
//                     item.loanProposerName ||
//                     item.loan_proposer_name ||
//                     item.user_name ||
//                     "Unnamed";

//                   let pageName = item.current_page?.trim() || "LoanProposerDetails";

//                   // ✅ Remove unwanted prefixes like '/CreateDocument/'
//                   pageName = pageName.replace(/^\/+|CreateDocument\//gi, "");

//                   // ✅ Map backend page names safely to actual frontend route names
//                   const pageMap = {
//                     loanProposerdetails: "LoanProposerDetails",
//                     loanproposerdetails: "LoanProposerDetails",
//                     loanproposerandtitleholder: "LoanProposerAndTitleHolder",
//                     titleholderdetails: "TitleHolderDetails",
//                     mostrecentdocuments: "MostRecentDocuments",
//                     propertydetails: "PropertyDetails",
//                     propertyboundaries: "PropertyBoundaries",
//                     linkdocuments: "LinkDocuments",
//                     reviewdocument: "ReviewDocument",
//                   };

//                   const lower = pageName.toLowerCase();
//                   pageName = pageMap[lower] || "LoanProposerDetails";

//                   return {
//                     loanProposerName: proposerName,
//                     sessionId: item.session_id,
//                     lastPage: pageName,
//                     createdAt: item.dateOfRegistration
//                       ? new Date(item.dateOfRegistration)
//                       : new Date(),
//                   };
//                 })
//             : [];

//         setSessions(formatted);
//       } catch (err) {
//         console.error("Error fetching sessions:", err);
//         setError("Could not load session documents.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSessions();
//   }, []);

//   // ✅ Filter by search & date
//   const filteredSessions = sessions.filter((session) => {
//     const search = searchTerm.toLowerCase();
//     const nameMatch = session.loanProposerName?.toLowerCase().includes(search);
//     const idMatch = session.sessionId.toLowerCase().includes(search);

//     const sessionDate = session.createdAt;
//     const start = startDate ? new Date(startDate) : null;
//     const end = endDate ? new Date(endDate) : null;

//     const dateMatch =
//       (!start || (sessionDate && sessionDate >= start)) &&
//       (!end || (sessionDate && sessionDate <= end));

//     return (nameMatch || idMatch) && dateMatch;
//   });

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial", minHeight: "83vh" }}>
//       <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
//         Session Document
//       </h2>

//       {/* 🔍 Search & Filter */}
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           gap: "15px",
//           flexWrap: "wrap",
//           marginBottom: "20px",
//         }}
//       >
//         <input
//           type="text"
//           placeholder="Search by name or session ID"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           style={{
//             padding: "10px",
//             width: "300px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//           }}
//         />
//         <label style={{ paddingTop: "10px" }}>Start Date</label>
//         <input
//           type="date"
//           value={startDate}
//           onChange={(e) => setStartDate(e.target.value)}
//           style={{
//             padding: "10px",
//             width: "180px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//           }}
//         />
//         <label style={{ paddingTop: "10px" }}>End Date</label>
//         <input
//           type="date"
//           value={endDate}
//           onChange={(e) => setEndDate(e.target.value)}
//           style={{
//             padding: "10px",
//             width: "180px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//           }}
//         />
//       </div>

//       {loading ? (
//         <p style={{ textAlign: "center" }}>Loading sessions...</p>
//       ) : error ? (
//         <p style={{ textAlign: "center", color: "red" }}>{error}</p>
//       ) : filteredSessions.length === 0 ? (
//         <p style={{ textAlign: "center" }}>No incomplete sessions found.</p>
//       ) : (
//         <div style={{ maxHeight: "60vh", overflowY: "auto" }}>
//           <ol style={{ paddingLeft: "20px", marginTop: 0 }}>
//             <li
//               style={{
//                 fontWeight: "bold",
//                 listStyle: "none",
//                 marginBottom: "10px",
//               }}
//             >
//               <div
//                 style={{
//                   display: "grid",
//                   gridTemplateColumns: "60px 200px 300px 200px",
//                   gap: "10px",
//                   alignItems: "center",
//                 }}
//               >
//                 <span>S.No</span>
//                 <span>Name</span>
//                 <span>Session ID</span>
//                 <span>Created Date</span>
//               </div>
//             </li>

//             {filteredSessions.map((session, index) => (
//               <li key={index} style={{ listStyle: "none", marginBottom: "10px" }}>
//                 <div
//                   style={{
//                     display: "grid",
//                     gridTemplateColumns: "60px 200px 300px 200px",
//                     gap: "10px",
//                     alignItems: "center",
//                   }}
//                 >
//                   <span>{index + 1}</span>
//                   <span>
//                     <Link
//                       to={`/CreateDocument/${session.lastPage}?sessionid=${session.sessionId}`}
//                       style={{
//                         color: "#007bff",
//                         fontWeight: "bold",
//                         textDecoration: "none",
//                       }}
//                     >
//                       {session.loanProposerName || "Unnamed"}
//                     </Link>
//                   </span>
//                   <span>{session.sessionId}</span>
//                   <span>
//                     {session.createdAt.toLocaleString("en-IN", {
//                       dateStyle: "medium",
//                       timeStyle: "short",
//                     })}
//                   </span>
//                 </div>
//               </li>
//             ))}
//           </ol>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SessionDocument;


// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { getToken } from "../auth";

// const SessionDocument = () => {
//   const [sessions, setSessions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");

//   useEffect(() => {
//     const fetchSessions = async () => {
//       try {
//         const token = getToken();
//         const user_id =
//           sessionStorage.getItem("user_id") || localStorage.getItem("user_id");

//         if (!user_id) {
//           setError("User not logged in. Please log in to view sessions.");
//           setLoading(false);
//           return;
//         }

//         const response = await fetch(
//           `http://localhost:3000/api/combined/resumesession/${user_id}`,
//           {
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: token ? `Bearer ${token}` : "",
//             },
//           }
//         );

//         if (!response.ok) throw new Error("Failed to fetch sessions");

//         const data = await response.json();

//         // 🪵 Debug backend data
//         console.log("✅ API Response:", data);
//         if (data.sessions) {
//           console.log(
//             "✅ Raw session pages:",
//             data.sessions.map((s) => s.current_page)
//           );
//         }

//         // ✅ Normalize and clean sessions
//         const formatted =
//           Array.isArray(data.sessions) && data.sessions.length > 0
//             ? data.sessions
//                 .filter((s) => s.current_page && s.current_page !== "complete")
//                 .map((item) => {
//                   const proposerName =
//                     item.loanProposerName ||
//                     item.loan_proposer_name ||
//                     item.user_name ||
//                     "Unnamed";

//                   // 🧩 Normalize backend current_page (handle lowercase, prefixes, etc.)
//                   let pageName = (item.current_page || "").trim();

//                   // If backend includes path like 'CreateDocument/PropertyDetails', clean it
//                   pageName = pageName.replace(/^\/+|CreateDocument\//gi, "");

//                   // Normalize to PascalCase for route match
//                   pageName =
//                     pageName.charAt(0).toUpperCase() + pageName.slice(1);

//                   // ✅ Known valid pages
//                   const validPages = [
//                     "LoanProposerDetails",
//                     "LoanProposerAndTitleHolder",
//                     "TitleHolderDetails",
//                     "MostRecentDocuments",
//                     "PropertyDetails",
//                     "PropertyBoundaries",
//                     "LinkDocuments",
//                     "ReviewDocument",
//                   ];

//                   // ✅ Intelligent match (case-insensitive)
//                   const matchedPage =
//                     validPages.find(
//                       (p) => p.toLowerCase() === pageName.toLowerCase()
//                     ) || "LoanProposerDetails";

//                   return {
//                     loanProposerName: proposerName,
//                     sessionId: item.session_id,
//                     lastPage: matchedPage,
//                     createdAt: item.dateOfRegistration
//                       ? new Date(item.dateOfRegistration)
//                       : new Date(),
//                   };
//                 })
//             : [];

//         setSessions(formatted);
//       } catch (err) {
//         console.error("Error fetching sessions:", err);
//         setError("Could not load session documents.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSessions();
//   }, []);

//   // ✅ Filter by search & date
//   const filteredSessions = sessions.filter((session) => {
//     const search = searchTerm.toLowerCase();
//     const nameMatch = session.loanProposerName
//       ?.toLowerCase()
//       .includes(search);
//     const idMatch = session.sessionId.toLowerCase().includes(search);

//     const sessionDate = session.createdAt;
//     const start = startDate ? new Date(startDate) : null;
//     const end = endDate ? new Date(endDate) : null;

//     const dateMatch =
//       (!start || (sessionDate && sessionDate >= start)) &&
//       (!end || (sessionDate && sessionDate <= end));

//     return (nameMatch || idMatch) && dateMatch;
//   });

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial", minHeight: "83vh" }}>
//       <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
//         Session Document
//       </h2>

//       {/* 🔍 Search & Filter */}
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           gap: "15px",
//           flexWrap: "wrap",
//           marginBottom: "20px",
//         }}
//       >
//         <input
//           type="text"
//           placeholder="Search by name or session ID"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           style={{
//             padding: "10px",
//             width: "300px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//           }}
//         />
//         <label style={{ paddingTop: "10px" }}>Start Date</label>
//         <input
//           type="date"
//           value={startDate}
//           onChange={(e) => setStartDate(e.target.value)}
//           style={{
//             padding: "10px",
//             width: "180px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//           }}
//         />
//         <label style={{ paddingTop: "10px" }}>End Date</label>
//         <input
//           type="date"
//           value={endDate}
//           onChange={(e) => setEndDate(e.target.value)}
//           style={{
//             padding: "10px",
//             width: "180px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//           }}
//         />
//       </div>

//       {loading ? (
//         <p style={{ textAlign: "center" }}>Loading sessions...</p>
//       ) : error ? (
//         <p style={{ textAlign: "center", color: "red" }}>{error}</p>
//       ) : filteredSessions.length === 0 ? (
//         <p style={{ textAlign: "center" }}>No incomplete sessions found.</p>
//       ) : (
//         <div style={{ maxHeight: "60vh", overflowY: "auto" }}>
//           <ol style={{ paddingLeft: "20px", marginTop: 0 }}>
//             <li
//               style={{
//                 fontWeight: "bold",
//                 listStyle: "none",
//                 marginBottom: "10px",
//               }}
//             >
//               <div
//                 style={{
//                   display: "grid",
//                   gridTemplateColumns: "60px 200px 300px 200px",
//                   gap: "10px",
//                   alignItems: "center",
//                 }}
//               >
//                 <span>S.No</span>
//                 <span>Name</span>
//                 <span>Session ID</span>
//                 <span>Created Date</span>
//               </div>
//             </li>

//             {filteredSessions.map((session, index) => (
//               <li key={index} style={{ listStyle: "none", marginBottom: "10px" }}>
//                 <div
//                   style={{
//                     display: "grid",
//                     gridTemplateColumns: "60px 200px 300px 200px",
//                     gap: "10px",
//                     alignItems: "center",
//                   }}
//                 >
//                   <span>{index + 1}</span>
//                   <span>
//                     <Link
//                       to={`/CreateDocument/${session.lastPage}?sessionid=${session.sessionId}`}
//                       style={{
//                         color: "#007bff",
//                         fontWeight: "bold",
//                         textDecoration: "none",
//                       }}
//                     >
//                       {session.loanProposerName || "Unnamed"}
//                     </Link>
//                   </span>
//                   <span>{session.sessionId}</span>
//                   <span>
//                     {session.createdAt.toLocaleString("en-IN", {
//                       dateStyle: "medium",
//                       timeStyle: "short",
//                     })}
//                   </span>
//                 </div>
//               </li>
//             ))}
//           </ol>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SessionDocument;

// below code woeking f9

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { getToken } from "../auth";

// const SessionDocument = () => {
//   const [sessions, setSessions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");

//   useEffect(() => {
//     const fetchSessions = async () => {
//       try {
//         const token = getToken();
//         const user_id =
//           sessionStorage.getItem("user_id") || localStorage.getItem("user_id");

//         if (!user_id) {
//           setError("User not logged in. Please log in to view sessions.");
//           setLoading(false);
//           return;
//         }

//         const response = await fetch(
//           `http://localhost:3000/api/combined/resumesession/${user_id}`,
//           {
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: token ? `Bearer ${token}` : "",
//             },
//           }
//         );

//         if (!response.ok) throw new Error("Failed to fetch sessions");

//         const data = await response.json();

//         console.log("✅ API Response:", data);
//         if (data.sessions) {
//           console.log(
//             "✅ Raw session pages:",
//             data.sessions.map((s) => s.current_page)
//           );
//         }

//         // ✅ Normalize and clean sessions
//         const formatted =
//           Array.isArray(data.sessions) && data.sessions.length > 0
//             ? data.sessions
//                 .filter((s) => s.current_page && s.current_page !== "complete")
//                 .map((item) => {
//                   const proposerName =
//                     item.loanProposerName ||
//                     item.loan_proposer_name ||
//                     item.borrower_name ||
//                     item.customer_name ||
//                     item.user_name ||
//                     "Unnamed";

//                   // 🧩 Normalize backend current_page (handle lowercase, prefixes, etc.)
//                   let pageName = (item.current_page || "").trim();
//                   pageName = pageName.replace(/^\/+|CreateDocument\//gi, "");
//                   pageName =
//                     pageName.charAt(0).toUpperCase() + pageName.slice(1);

//                   const validPages = [
//                     "LoanProposerDetails",
//                     "LoanProposerAndTitleHolder",
//                     "TitleHolderDetails",
//                     "MostRecentDocuments",
//                     "PropertyDetails",
//                     "PropertyBoundaries",
//                     "LinkDocuments",
//                     "ReviewDocument",
//                   ];

//                   const matchedPage =
//                     validPages.find(
//                       (p) => p.toLowerCase() === pageName.toLowerCase()
//                     ) || "LoanProposerDetails";

//                   return {
//                     loanProposerName: proposerName,
//                     sessionId: item.session_id,
//                     lastPage: matchedPage,
//                     createdAt: item.dateOfRegistration
//                       ? new Date(item.dateOfRegistration)
//                       : new Date(),
//                   };
//                 })
//             : [];

//         // ✅ Remove duplicate sessions (based on session_id before timestamp)
//         const uniqueSessions = formatted.reduce((acc, curr) => {
//           const baseId = curr.sessionId.split("_")[0]; // remove _timestamp if exists
//           if (!acc.find((s) => s.sessionId.split("_")[0] === baseId)) {
//             acc.push(curr);
//           }
//           return acc;
//         }, []);

//         setSessions(uniqueSessions);
//       } catch (err) {
//         console.error("Error fetching sessions:", err);
//         setError("Could not load session documents.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSessions();
//   }, []);

//   // ✅ Filter by search & date
//   const filteredSessions = sessions.filter((session) => {
//     const search = searchTerm.toLowerCase();
//     const nameMatch = session.loanProposerName
//       ?.toLowerCase()
//       .includes(search);
//     const idMatch = session.sessionId.toLowerCase().includes(search);

//     const sessionDate = session.createdAt;
//     const start = startDate ? new Date(startDate) : null;
//     const end = endDate ? new Date(endDate) : null;

//     const dateMatch =
//       (!start || (sessionDate && sessionDate >= start)) &&
//       (!end || (sessionDate && sessionDate <= end));

//     return (nameMatch || idMatch) && dateMatch;
//   });

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial", minHeight: "83vh" }}>
//       <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
//         Session Document
//       </h2>

//       {/* 🔍 Search & Filter */}
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           gap: "15px",
//           flexWrap: "wrap",
//           marginBottom: "20px",
//         }}
//       >
//         <input
//           type="text"
//           placeholder="Search by name or session ID"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           style={{
//             padding: "10px",
//             width: "300px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//           }}
//         />
//         <label style={{ paddingTop: "10px" }}>Start Date</label>
//         <input
//           type="date"
//           value={startDate}
//           onChange={(e) => setStartDate(e.target.value)}
//           style={{
//             padding: "10px",
//             width: "180px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//           }}
//         />
//         <label style={{ paddingTop: "10px" }}>End Date</label>
//         <input
//           type="date"
//           value={endDate}
//           onChange={(e) => setEndDate(e.target.value)}
//           style={{
//             padding: "10px",
//             width: "180px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//           }}
//         />
//       </div>

//       {loading ? (
//         <p style={{ textAlign: "center" }}>Loading sessions...</p>
//       ) : error ? (
//         <p style={{ textAlign: "center", color: "red" }}>{error}</p>
//       ) : filteredSessions.length === 0 ? (
//         <p style={{ textAlign: "center" }}>No incomplete sessions found.</p>
//       ) : (
//         <div style={{ maxHeight: "60vh", overflowY: "auto" }}>
//           <ol style={{ paddingLeft: "20px", marginTop: 0 }}>
//             <li
//               style={{
//                 fontWeight: "bold",
//                 listStyle: "none",
//                 marginBottom: "10px",
//               }}
//             >
//               <div
//                 style={{
//                   display: "grid",
//                   gridTemplateColumns: "60px 200px 300px 200px",
//                   gap: "10px",
//                   alignItems: "center",
//                 }}
//               >
//                 <span>S.No</span>
//                 <span>Name</span>
//                 <span>Session ID</span>
//                 <span>Created Date</span>
//               </div>
//             </li>

//             {filteredSessions.map((session, index) => (
//               <li key={index} style={{ listStyle: "none", marginBottom: "10px" }}>
//                 <div
//                   style={{
//                     display: "grid",
//                     gridTemplateColumns: "60px 200px 300px 200px",
//                     gap: "10px",
//                     alignItems: "center",
//                   }}
//                 >
//                   <span>{index + 1}</span>
//                   <span>
//                     <Link
//                       to={`/CreateDocument/${session.lastPage}?sessionid=${session.sessionId}`}
//                       style={{
//                         color: "#007bff",
//                         fontWeight: "bold",
//                         textDecoration: "none",
//                       }}
//                     >
//                       {session.loanProposerName || "Unnamed"}
//                     </Link>
//                   </span>
//                   <span>{session.sessionId}</span>
//                   <span>
//                     {session.createdAt.toLocaleString("en-IN", {
//                       dateStyle: "medium",
//                       timeStyle: "short",
//                     })}
//                   </span>
//                 </div>
//               </li>
//             ))}
//           </ol>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SessionDocument;




// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { getToken } from "../auth";

// const SessionDocument = () => {
//   const [sessions, setSessions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");

//   useEffect(() => {
//     const fetchSessions = async () => {
//       try {
//         const token = getToken();
//         const user_id =
//           sessionStorage.getItem("user_id") || localStorage.getItem("user_id");

//         if (!user_id) {
//           setError("User not logged in. Please log in to view sessions.");
//           setLoading(false);
//           return;
//         }

//         console.log("🟡 Fetching sessions for user_id:", user_id);

//         const response = await fetch(
//           `http://localhost:3000/api/combined/resumesession/${user_id}`,
//           {
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: token ? `Bearer ${token}` : "",
//             },
//           }
//         );

//         if (!response.ok) throw new Error("Failed to fetch sessions");

//         const data = await response.json();

//         console.log("✅ API Response:", data);

//         if (data.sessions) {
//           console.log(
//             "🧩 Current Pages from backend:",
//             data.sessions.map((s) => ({
//               id: s.session_id,
//               page: s.current_page,
//             }))
//           );
//         }

//         // ✅ Normalize and clean sessions
//         const formatted =
//           Array.isArray(data.sessions) && data.sessions.length > 0
//             ? data.sessions
//                 .filter((s) => s.current_page && s.current_page !== "complete")
//                 .map((item) => {
//                   const proposerName =
//                     item.loanProposerName ||
//                     item.loan_proposer_name ||
//                     item.borrower_name ||
//                     item.customer_name ||
//                     item.user_name ||
//                     "Unnamed";

//                   let pageName = (item.current_page || "").trim();
//                   pageName = pageName.replace(/^\/+|CreateDocument\//gi, "");
//                   pageName =
//                     pageName.charAt(0).toUpperCase() + pageName.slice(1);

//                   const validPages = [
//                     "LoanProposerDetails",
//                     "LoanProposerAndTitleHolder",
//                     "TitleHolderDetails",
//                     "MostRecentDocuments",
//                     "PropertyDetails",
//                     "PropertyBoundaries",
//                     "LinkDocuments",
//                     "ReviewDocument",
//                   ];

//                   const matchedPage =
//                     validPages.find(
//                       (p) => p.toLowerCase() === pageName.toLowerCase()
//                     ) || "LoanProposerDetails";

//                   console.log(
//                     `🔹 Normalized session: ${proposerName} (${item.session_id}) -> ${matchedPage}`
//                   );

//                   return {
//                     loanProposerName: proposerName,
//                     sessionId: item.session_id,
//                     lastPage: matchedPage,
//                     createdAt: item.dateOfRegistration
//                       ? new Date(item.dateOfRegistration)
//                       : new Date(),
//                   };
//                 })
//             : [];

//         // ✅ Remove duplicates
//         const uniqueSessions = formatted.reduce((acc, curr) => {
//           const baseId = curr.sessionId.split("_")[0];
//           if (!acc.find((s) => s.sessionId.split("_")[0] === baseId)) {
//             acc.push(curr);
//           }
//           return acc;
//         }, []);

//         console.log("✅ Final sessions to render:", uniqueSessions);

//         setSessions(uniqueSessions);
//       } catch (err) {
//         console.error("❌ Error fetching sessions:", err);
//         setError("Could not load session documents.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSessions();
//   }, []);

//   // ✅ Filter by search & date
//   const filteredSessions = sessions.filter((session) => {
//     const search = searchTerm.toLowerCase();
//     const nameMatch = session.loanProposerName
//       ?.toLowerCase()
//       .includes(search);
//     const idMatch = session.sessionId.toLowerCase().includes(search);

//     const sessionDate = session.createdAt;
//     const start = startDate ? new Date(startDate) : null;
//     const end = endDate ? new Date(endDate) : null;

//     const dateMatch =
//       (!start || (sessionDate && sessionDate >= start)) &&
//       (!end || (sessionDate && sessionDate <= end));

//     return (nameMatch || idMatch) && dateMatch;
//   });

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial", minHeight: "83vh" }}>
//       <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
//         Session Document
//       </h2>

//       {/* 🔍 Search & Filter */}
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           gap: "15px",
//           flexWrap: "wrap",
//           marginBottom: "20px",
//         }}
//       >
//         <input
//           type="text"
//           placeholder="Search by name or session ID"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           style={{
//             padding: "10px",
//             width: "300px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//           }}
//         />
//         <label style={{ paddingTop: "10px" }}>Start Date</label>
//         <input
//           type="date"
//           value={startDate}
//           onChange={(e) => setStartDate(e.target.value)}
//           style={{
//             padding: "10px",
//             width: "180px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//           }}
//         />
//         <label style={{ paddingTop: "10px" }}>End Date</label>
//         <input
//           type="date"
//           value={endDate}
//           onChange={(e) => setEndDate(e.target.value)}
//           style={{
//             padding: "10px",
//             width: "180px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//           }}
//         />
//       </div>

//       {loading ? (
//         <p style={{ textAlign: "center" }}>Loading sessions...</p>
//       ) : error ? (
//         <p style={{ textAlign: "center", color: "red" }}>{error}</p>
//       ) : filteredSessions.length === 0 ? (
//         <p style={{ textAlign: "center" }}>No incomplete sessions found.</p>
//       ) : (
//         <div style={{ maxHeight: "60vh", overflowY: "auto" }}>
//           <ol style={{ paddingLeft: "20px", marginTop: 0 }}>
//             <li
//               style={{
//                 fontWeight: "bold",
//                 listStyle: "none",
//                 marginBottom: "10px",
//               }}
//             >
//               <div
//                 style={{
//                   display: "grid",
//                   gridTemplateColumns: "60px 200px 300px 200px",
//                   gap: "10px",
//                   alignItems: "center",
//                 }}
//               >
//                 <span>S.No</span>
//                 <span>Name</span>
//                 <span>Session ID</span>
//                 <span>Created Date</span>
//               </div>
//             </li>

//             {filteredSessions.map((session, index) => (
//               <li key={index} style={{ listStyle: "none", marginBottom: "10px" }}>
//                 <div
//                   style={{
//                     display: "grid",
//                     gridTemplateColumns: "60px 200px 300px 200px",
//                     gap: "10px",
//                     alignItems: "center",
//                   }}
//                 >
//                   <span>{index + 1}</span>
//                   <span>
//                     <Link
//                       to={`/CreateDocument/${session.lastPage}?sessionid=${session.sessionId}`}
//                       onClick={() => {
//                         console.log(
//                           `🟢 Redirecting → ${session.lastPage} (sessionId: ${session.sessionId})`
//                         );
//                       }}
//                       style={{
//                         color: "#007bff",
//                         fontWeight: "bold",
//                         textDecoration: "none",
//                       }}
//                     >
//                       {session.loanProposerName || "Unnamed"}
//                     </Link>
//                   </span>
//                   <span>{session.sessionId}</span>
//                   <span>
//                     {session.createdAt.toLocaleString("en-IN", {
//                       dateStyle: "medium",
//                       timeStyle: "short",
//                     })}
//                   </span>
//                 </div>
//               </li>
//             ))}
//           </ol>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SessionDocument;


// src/pagecomponents/SessionDocument.js
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { getToken } from "../auth";

// const SessionDocument = () => {
//   const [sessions, setSessions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");

//   useEffect(() => {
//     const fetchSessions = async () => {
//       try {
//         const token = getToken();
//         const user_id =
//           sessionStorage.getItem("user_id") || localStorage.getItem("user_id");

//         if (!user_id) {
//           setError("User not logged in. Please log in to view sessions.");
//           setLoading(false);
//           console.warn("SessionDocument: user_id not found in storage.");
//           return;
//         }

//         console.log("🟡 Fetching sessions for user_id:", user_id);

//         const response = await fetch(
//           `http://localhost:3000/api/combined/resumesession/${user_id}`,
//           {
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: token ? `Bearer ${token}` : "",
//             },
//           }
//         );

//         if (!response.ok) {
//           const text = await response.text().catch(() => null);
//           throw new Error(`Failed to fetch sessions: ${response.status} ${response.statusText} ${text || ""}`);
//         }

//         const data = await response.json();

//         console.log("✅ API Response:", data);

//         if (Array.isArray(data.sessions)) {
//           console.log(
//             "🧩 Current Pages from backend:",
//             data.sessions.map((s) => ({ id: s.session_id, page: s.current_page }))
//           );
//         }

//         // Normalize and clean sessions
//         const formatted =
//           Array.isArray(data.sessions) && data.sessions.length > 0
//             ? data.sessions
//                 .filter((s) => s.current_page && s.current_page !== "complete")
//                 .map((item) => {
//                   const proposerName =
//                     item.loanProposerName ||
//                     item.loan_proposer_name ||
//                     item.borrower_name ||
//                     item.customer_name ||
//                     item.user_name ||
//                     item.name ||
//                     "Unnamed";

//                   // Normalize current_page / page name
//                   let pageName = (item.current_page || "").trim();
//                   pageName = pageName.replace(/^\/+|CreateDocument\//gi, "");

//                   // If backend returned something like "ecDeed" or "ec", try normalize
//                   // Simple PascalCase normalization for routing matching:
//                   pageName = pageName.charAt(0).toUpperCase() + pageName.slice(1);

//                   const validPages = [
//                     "LoanProposerDetails",
//                     "LoanProposerAndTitleHolder",
//                     "TitleHolderDetails",
//                     "MostRecentDocuments",
//                     "PropertyDetails",
//                     "PropertyBoundaries",
//                     "LinkDocuments",
//                     "ReviewDocument",
//                   ];

//                   const matchedPage =
//                     validPages.find((p) => p.toLowerCase() === pageName.toLowerCase()) ||
//                     // handle known alternate names
//                     (pageName.toLowerCase().includes("loanproposer") ? "LoanProposerDetails" : null) ||
//                     "LoanProposerDetails";

//                   console.log(
//                     `🔹 Normalized session: ${proposerName} (${item.session_id}) -> ${matchedPage}`
//                   );

//                   return {
//                     loanProposerName: proposerName,
//                     sessionId: item.session_id,
//                     lastPage: matchedPage,
//                     createdAt: item.dateOfRegistration ? new Date(item.dateOfRegistration) : new Date(),
//                   };
//                 })
//             : [];

//         // Remove duplicate sessions (based on base session id before underscore timestamp)
//         const uniqueSessions = formatted.reduce((acc, curr) => {
//           const baseId = curr.sessionId ? curr.sessionId.split("_")[0] : curr.sessionId;
//           if (!acc.find((s) => (s.sessionId ? s.sessionId.split("_")[0] : s.sessionId) === baseId)) {
//             acc.push(curr);
//           } else {
//             // If duplicate found, log it (for debugging)
//             console.info(`SessionDocument: duplicate session ignored for baseId=${baseId} (id=${curr.sessionId})`);
//           }
//           return acc;
//         }, []);

//         console.log("✅ Final sessions to render:", uniqueSessions);

//         setSessions(uniqueSessions);
//       } catch (err) {
//         console.error("❌ Error fetching sessions:", err);
//         setError("Could not load session documents.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSessions();
//   }, []);

//   // Filter by search & date
//   const filteredSessions = sessions.filter((session) => {
//     const search = (searchTerm || "").toLowerCase();
//     const nameMatch = (session.loanProposerName || "").toLowerCase().includes(search);
//     const idMatch = (session.sessionId || "").toLowerCase().includes(search);

//     const sessionDate = session.createdAt;
//     const start = startDate ? new Date(startDate) : null;
//     const end = endDate ? new Date(endDate) : null;

//     const dateMatch =
//       (!start || (sessionDate && sessionDate >= start)) &&
//       (!end || (sessionDate && sessionDate <= end));

//     return (nameMatch || idMatch) && dateMatch;
//   });

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial", minHeight: "83vh" }}>
//       <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
//         Session Document
//       </h2>

//       {/* Search & Filter */}
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           gap: "15px",
//           flexWrap: "wrap",
//           marginBottom: "20px",
//         }}
//       >
//         <input
//           type="text"
//           placeholder="Search by name or session ID"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           style={{
//             padding: "10px",
//             width: "300px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//           }}
//         />
//         <label style={{ paddingTop: "10px" }}>Start Date</label>
//         <input
//           type="date"
//           value={startDate}
//           onChange={(e) => setStartDate(e.target.value)}
//           style={{
//             padding: "10px",
//             width: "180px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//           }}
//         />
//         <label style={{ paddingTop: "10px" }}>End Date</label>
//         <input
//           type="date"
//           value={endDate}
//           onChange={(e) => setEndDate(e.target.value)}
//           style={{
//             padding: "10px",
//             width: "180px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//           }}
//         />
//       </div>

//       {loading ? (
//         <p style={{ textAlign: "center" }}>Loading sessions...</p>
//       ) : error ? (
//         <p style={{ textAlign: "center", color: "red" }}>{error}</p>
//       ) : filteredSessions.length === 0 ? (
//         <p style={{ textAlign: "center" }}>No incomplete sessions found.</p>
//       ) : (
//         <div style={{ maxHeight: "60vh", overflowY: "auto" }}>
//           <ol style={{ paddingLeft: "20px", marginTop: 0 }}>
//             <li
//               style={{
//                 fontWeight: "bold",
//                 listStyle: "none",
//                 marginBottom: "10px",
//               }}
//             >
//               <div
//                 style={{
//                   display: "grid",
//                   gridTemplateColumns: "60px 200px 300px 200px",
//                   gap: "10px",
//                   alignItems: "center",
//                 }}
//               >
//                 <span>S.No</span>
//                 <span>Name</span>
//                 <span>Session ID</span>
//                 <span>Created Date</span>
//               </div>
//             </li>

//             {filteredSessions.map((session, index) => (
//               <li key={index} style={{ listStyle: "none", marginBottom: "10px" }}>
//                 <div
//                   style={{
//                     display: "grid",
//                     gridTemplateColumns: "60px 200px 300px 200px",
//                     gap: "10px",
//                     alignItems: "center",
//                   }}
//                 >
//                   <span>{index + 1}</span>
//                   <span>
//                     {/* NOTE: Use camelCase `sessionId` query param to match other pages */}
//                     <Link
//                       to={`/CreateDocument/${session.lastPage}?sessionId=${session.sessionId}`}
//                       onClick={() => {
//                         console.log(
//                           `🟢 Redirecting → ${session.lastPage} (sessionId: ${session.sessionId})`
//                         );
//                       }}
//                       style={{
//                         color: "#007bff",
//                         fontWeight: "bold",
//                         textDecoration: "none",
//                       }}
//                     >
//                       {session.loanProposerName || "Unnamed"}
//                     </Link>
//                   </span>
//                   <span>{session.sessionId}</span>
//                   <span>
//                     {session.createdAt.toLocaleString("en-IN", {
//                       dateStyle: "medium",
//                       timeStyle: "short",
//                     })}
//                   </span>
//                 </div>
//               </li>
//             ))}
//           </ol>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SessionDocument;



// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { getToken } from "../auth";

// const SessionDocument = () => {
//   const [sessions, setSessions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");

//   useEffect(() => {
//     const fetchSessions = async () => {
//       try {
//         const token = getToken();
//         const user_id =
//           sessionStorage.getItem("user_id") || localStorage.getItem("user_id");

//         if (!user_id) {
//           setError("User not logged in. Please log in to view sessions.");
//           setLoading(false);
//           console.warn("SessionDocument: user_id not found in storage.");
//           return;
//         }

//         console.log("🟡 Fetching sessions for user_id:", user_id);

//         const response = await fetch(
//           `http://localhost:3000/api/combined/resumesession/${user_id}`,
//           {
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: token ? `Bearer ${token}` : "",
//             },
//           }
//         );

//         if (!response.ok) {
//           const text = await response.text().catch(() => null);
//           throw new Error(
//             `Failed to fetch sessions: ${response.status} ${response.statusText} ${
//               text || ""
//             }`
//           );
//         }

//         const data = await response.json();
//         console.log("✅ API Response:", data);

//         // ✅ Process sessions
//         const formatted =
//           Array.isArray(data.sessions) && data.sessions.length > 0
//             ? data.sessions
//                 .filter((s) => s.current_page && s.current_page !== "complete")
//                 .map((item) => {
//                   // Pick name field safely
//                   const proposerName =
//                     item.loanProposerName ||
//                     item.loan_proposer_name ||
//                     item.borrower_name ||
//                     item.customer_name ||
//                     item.user_name ||
//                     item.name ||
//                     "Unnamed";

//                   // Normalize page name
//                   let pageName = (item.current_page || "").trim();

//                   // Handle route naming patterns
//                   pageName = pageName
//                     .replace(/^\/+|CreateDocument\//gi, "")
//                     .replace(".jsx", "")
//                     .replace(/\s+/g, "")
//                     .replace(/details$/i, "Details");

//                   // Normalize capitalization
//                   pageName =
//                     pageName.charAt(0).toUpperCase() + pageName.slice(1);

//                   // ✅ Map backend page names to actual React page routes
//                   const pageMap = {
//                     loanproposerdetails: "LoanProposerDetails",
//                     titleholderdetails: "TitleHolderDetails",
//                     propertydetails: "PropertyDetails",
//                     propertyboundaries: "PropertyBoundaries",
//                     mostrecentdocument: "MostRecentDocument",
//                     mostrecentdocuments: "MostRecentDocument",
//                     linkdocuments: "LinkDocuments",
//                     reviewdocument: "ReviewDocument",
//                     loanproposerandtitleholder: "LoanProposerAndTitleHolder",
//                   };

//                   const matchedPage =
//                     pageMap[pageName.toLowerCase()] ||
//                     "LoanProposerDetails"; // default fallback

//                   console.log(
//                     `🔹 Normalized session: ${proposerName} (${item.session_id}) → ${matchedPage}`
//                   );

//                   return {
//                     loanProposerName: proposerName,
//                     sessionId: item.session_id,
//                     lastPage: matchedPage,
//                     createdAt: item.dateOfRegistration
//                       ? new Date(item.dateOfRegistration)
//                       : new Date(),
//                   };
//                 })
//             : [];

//         // ✅ Remove duplicate base sessions
//         const uniqueSessions = formatted.reduce((acc, curr) => {
//           const baseId = curr.sessionId
//             ? curr.sessionId.split("_")[0]
//             : curr.sessionId;
//           if (
//             !acc.find(
//               (s) =>
//                 (s.sessionId ? s.sessionId.split("_")[0] : s.sessionId) ===
//                 baseId
//             )
//           ) {
//             acc.push(curr);
//           }
//           return acc;
//         }, []);

//         console.log("✅ Final sessions to render:", uniqueSessions);
//         setSessions(uniqueSessions);
//       } catch (err) {
//         console.error("❌ Error fetching sessions:", err);
//         setError("Could not load session documents.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSessions();
//   }, []);

//   // ✅ Filter by search & date range
//   const filteredSessions = sessions.filter((session) => {
//     const search = (searchTerm || "").toLowerCase();
//     const nameMatch = (session.loanProposerName || "")
//       .toLowerCase()
//       .includes(search);
//     const idMatch = (session.sessionId || "")
//       .toLowerCase()
//       .includes(search);

//     const sessionDate = session.createdAt;
//     const start = startDate ? new Date(startDate) : null;
//     const end = endDate ? new Date(endDate) : null;

//     const dateMatch =
//       (!start || (sessionDate && sessionDate >= start)) &&
//       (!end || (sessionDate && sessionDate <= end));

//     return (nameMatch || idMatch) && dateMatch;
//   });

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial", minHeight: "83vh" }}>
//       <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
//         Session Document
//       </h2>

//       {/* Search & Filter Section (No UI Change) */}
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           gap: "15px",
//           flexWrap: "wrap",
//           marginBottom: "20px",
//         }}
//       >
//         <input
//           type="text"
//           placeholder="Search by name or session ID"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           style={{
//             padding: "10px",
//             width: "300px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//           }}
//         />
//         <label style={{ paddingTop: "10px" }}>Start Date</label>
//         <input
//           type="date"
//           value={startDate}
//           onChange={(e) => setStartDate(e.target.value)}
//           style={{
//             padding: "10px",
//             width: "180px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//           }}
//         />
//         <label style={{ paddingTop: "10px" }}>End Date</label>
//         <input
//           type="date"
//           value={endDate}
//           onChange={(e) => setEndDate(e.target.value)}
//           style={{
//             padding: "10px",
//             width: "180px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//           }}
//         />
//       </div>

//       {/* Table Section (UI Unchanged) */}
//       {loading ? (
//         <p style={{ textAlign: "center" }}>Loading sessions...</p>
//       ) : error ? (
//         <p style={{ textAlign: "center", color: "red" }}>{error}</p>
//       ) : filteredSessions.length === 0 ? (
//         <p style={{ textAlign: "center" }}>No incomplete sessions found.</p>
//       ) : (
//         <div style={{ maxHeight: "60vh", overflowY: "auto" }}>
//           <ol style={{ paddingLeft: "20px", marginTop: 0 }}>
//             <li
//               style={{
//                 fontWeight: "bold",
//                 listStyle: "none",
//                 marginBottom: "10px",
//               }}
//             >
//               <div
//                 style={{
//                   display: "grid",
//                   gridTemplateColumns: "60px 200px 300px 200px",
//                   gap: "10px",
//                   alignItems: "center",
//                 }}
//               >
//                 <span>S.No</span>
//                 <span>Name</span>
//                 <span>Session ID</span>
//                 <span>Created Date</span>
//               </div>
//             </li>

//             {filteredSessions.map((session, index) => (
//               <li key={index} style={{ listStyle: "none", marginBottom: "10px" }}>
//                 <div
//                   style={{
//                     display: "grid",
//                     gridTemplateColumns: "60px 200px 300px 200px",
//                     gap: "10px",
//                     alignItems: "center",
//                   }}
//                 >
//                   <span>{index + 1}</span>
//                   <span>
//                     <Link
//                       to={`/CreateDocument/${session.lastPage}?sessionId=${session.sessionId}`}
//                       onClick={() =>
//                         console.log(
//                           `🟢 Redirecting to → ${session.lastPage}?sessionId=${session.sessionId}`
//                         )
//                       }
//                       style={{
//                         color: "#007bff",
//                         fontWeight: "bold",
//                         textDecoration: "none",
//                       }}
//                     >
//                       {session.loanProposerName || "Unnamed"}
//                     </Link>
//                   </span>
//                   <span>{session.sessionId}</span>
//                   <span>
//                     {session.createdAt.toLocaleString("en-IN", {
//                       dateStyle: "medium",
//                       timeStyle: "short",
//                     })}
//                   </span>
//                 </div>
//               </li>
//             ))}
//           </ol>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SessionDocument;





import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getToken } from "../auth";

const SessionDocument = () => {
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const token = getToken();
        const user_id =
          sessionStorage.getItem("user_id") || localStorage.getItem("user_id");

        if (!user_id) {
          setError("User not logged in. Please log in to view sessions.");
          setLoading(false);
          console.warn("SessionDocument: user_id not found in storage.");
          return;
        }

        const response = await fetch(
          `http://localhost:3000/api/combined/resumesession/${user_id}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: token ? `Bearer ${token}` : "",
            },
          }
        );

        if (!response.ok) {
          const text = await response.text().catch(() => null);
          throw new Error(
            `Failed to fetch sessions: ${response.status} ${response.statusText} ${
              text || ""
            }`
          );
        }

        const data = await response.json();

        // Process sessions
        const formatted =
          Array.isArray(data.sessions) && data.sessions.length > 0
            ? data.sessions
                .filter((s) => s.current_page && s.current_page !== "complete")
                .map((item) => {
                  const proposerName =
                    item.loanProposerName ||
                    item.loan_proposer_name ||
                    item.borrower_name ||
                    item.customer_name ||
                    item.user_name ||
                    item.name ||
                    "Unnamed";

                  // Normalize page name
                  let pageName = (item.current_page || "").trim();
                  pageName = pageName
                    .replace(/^\/+|CreateDocument\//gi, "")
                    .replace(".jsx", "")
                    .replace(/\s+/g, "")
                    .replace(/details$/i, "Details");
                  pageName =
                    pageName.charAt(0).toUpperCase() + pageName.slice(1);

                  const pageMap = {
                    loanproposerdetails: "LoanProposerDetails",
                    titleholderdetails: "TitleHolderDetails",
                    propertydetails: "PropertyDetails",
                    propertyboundaries: "PropertyBoundaries",
                    mostrecentdocument: "MostRecentDocument",
                    mostrecentdocuments: "MostRecentDocument",
                    linkdocuments: "LinkDocuments",
                    reviewdocument: "ReviewDocument",
                    loanproposerandtitleholder: "LoanProposerAndTitleHolder",
                  };

                  const matchedPage =
                    pageMap[pageName.toLowerCase()] || "LoanProposerDetails";

                  return {
                    loanProposerName: proposerName,
                    sessionId: item.session_id,
                    lastPage: matchedPage,
                    createdAt: item.dateOfRegistration
                      ? new Date(item.dateOfRegistration)
                      : new Date(),
                  };
                })
            : [];

        // Remove duplicate sessions
        const uniqueSessions = formatted.reduce((acc, curr) => {
          const baseId = curr.sessionId
            ? curr.sessionId.split("_")[0]
            : curr.sessionId;
          if (
            !acc.find(
              (s) =>
                (s.sessionId ? s.sessionId.split("_")[0] : s.sessionId) ===
                baseId
            )
          ) {
            acc.push(curr);
          }
          return acc;
        }, []);

        setSessions(uniqueSessions);
      } catch (err) {
        console.error("Error fetching sessions:", err);
        setError("Could not load session documents.");
      } finally {
        setLoading(false);
      }
    };

    fetchSessions();
  }, []);

  // Filter sessions
  const filteredSessions = sessions.filter((session) => {
    const search = (searchTerm || "").toLowerCase();
    const nameMatch = (session.loanProposerName || "")
      .toLowerCase()
      .includes(search);
    const idMatch = (session.sessionId || "")
      .toLowerCase()
      .includes(search);

    const sessionDate = session.createdAt;
    const start = startDate ? new Date(startDate) : null;
    const end = endDate ? new Date(endDate) : null;
    const dateMatch =
      (!start || (sessionDate && sessionDate >= start)) &&
      (!end || (sessionDate && sessionDate <= end));

    return (nameMatch || idMatch) && dateMatch;
  });

  return (
    <div style={{ padding: "20px", fontFamily: "Arial", minHeight: "83vh" }}>
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
        Session Document
      </h2>

      {/* Search & Filter */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          flexWrap: "wrap",
          marginBottom: "20px",
        }}
      >
        <input
          type="text"
          placeholder="Search by name or session ID"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: "10px",
            width: "300px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <label style={{ paddingTop: "10px" }}>Start Date</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          style={{
            padding: "10px",
            width: "180px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <label style={{ paddingTop: "10px" }}>End Date</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          style={{
            padding: "10px",
            width: "180px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
      </div>

      {/* Table */}
      {loading ? (
        <p style={{ textAlign: "center" }}>Loading sessions...</p>
      ) : error ? (
        <p style={{ textAlign: "center", color: "red" }}>{error}</p>
      ) : filteredSessions.length === 0 ? (
        <p style={{ textAlign: "center" }}>No incomplete sessions found.</p>
      ) : (
        <div style={{ maxHeight: "60vh", overflowY: "auto" }}>
          <ol style={{ paddingLeft: "20px", marginTop: 0 }}>
            <li
              style={{
                fontWeight: "bold",
                listStyle: "none",
                marginBottom: "10px",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "60px 200px 300px 200px",
                  gap: "10px",
                  alignItems: "center",
                }}
              >
                <span>S.No</span>
                <span>Name</span>
                <span>Session ID</span>
                <span>Created Date</span>
              </div>
            </li>

            {filteredSessions.map((session, index) => (
              <li key={index} style={{ listStyle: "none", marginBottom: "10px" }}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "60px 200px 300px 200px",
                    gap: "10px",
                    alignItems: "center",
                  }}
                >
                  <span>{index + 1}</span>
                  <span>
                    <Link
                      to={`/CreateDocument/${session.lastPage}?sessionId=${session.sessionId}`}
                      style={{
                        color: "#007bff",
                        fontWeight: "bold",
                        textDecoration: "none",
                      }}
                    >
                      {session.loanProposerName || "Unnamed"}
                    </Link>
                  </span>
                  <span>{session.sessionId}</span>
                  <span>
                    {session.createdAt.toLocaleString("en-IN", {
                      dateStyle: "medium",
                      timeStyle: "short",
                    })}
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
};

export default SessionDocument;
