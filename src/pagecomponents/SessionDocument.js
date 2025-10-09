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

// import React, { useEffect, useState } from "react";

// const SessionDocument = () => {
//   const [sessions, setSessions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchSessions = async () => {
//       try {
//         // const response = await fetch("https://run.mocky.io/v3/779d95b9-da44-4f96-a213-38576e536643"); // Replace with your actual API endpoint
//  const response = await fetch("https://run.mocky.io/v3/7c156b11-0f22-492c-9244-c5690f9b81e4"); // Replace with your actual API endpoint

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
//             <div key={index} className="border rounded p-3 mb-3 shadow-sm">
//               <p><strong>Name:</strong> {session.name}</p>
//               <p><strong>Session ID:</strong> {session.sessionId}</p>
//               <p><strong>Created At:</strong> {new Date(session.createdAt).toLocaleString()}</p>
//               <p>
//                 <strong>Resume Link:</strong>{" "}
//                  <a href={`/resume/${session.sessionId}`}>Open</a> 
//               </p>
//             </div>
//           ))}
//         </div>
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

// export default SessionDocument;          111111111

//----------use this -----------------
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


// testing purpose only usinggg------


import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";  

   //import LoanProposerDetails from "./LoanProposerDetails";

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
        const response = await fetch("https://687129ef7ca4d06b34b991a7.mockapi.io/sessions");
        if (!response.ok) throw new Error("Failed to fetch sessions");
        const data = await response.json();
        console.log("Fetched sessions:", data);
        setSessions(data);
      } catch (err) {
        console.error("Error:", err);
        setError("Could not load session documents.");
      } finally {
        setLoading(false);
      }
    };

    fetchSessions();
  }, []);

  const filteredSessions = sessions.filter((session) => {
    const search = searchTerm.toLowerCase();
    const nameMatch = session.loanProposerName?.toLowerCase().includes(search);
    const emailMatch = session.sessionId?.toLowerCase().includes(search);
    const sessionDate = new Date(session.createdAt);
    const start = startDate ? new Date(startDate) : null;
    const end = endDate ? new Date(endDate) : null;

    const dateMatch =
      (!start || sessionDate >= start) &&
      (!end || sessionDate <= end);

    return (nameMatch || emailMatch) && dateMatch;
  });

  return (
    <div style={{ padding: "20px", fontFamily: "Arial", minHeight: "83vh" }}>
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Session Document</h2>

      {/* Search Filters */}
      <div style={{ display: "flex", justifyContent: "center", gap: "15px", flexWrap: "wrap", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search by name or session ID"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: "10px", width: "300px", borderRadius: "5px", border: "1px solid #ccc" }}
        />
        <label style={{ paddingTop: "10px", marginLeft: "20px" }}>Start Date</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          style={{ padding: "10px", width: "180px", borderRadius: "5px", border: "1px solid #ccc" }}
        />
        <label style={{ paddingTop: "10px" }}>End Date</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          style={{ padding: "10px", width: "180px", borderRadius: "5px", border: "1px solid #ccc" }}
        />
      </div>

      {/* Loading / Error / Results */}
      {loading ? (
        <p style={{ textAlign: "center" }}>Loading sessions...</p>
      ) : error ? (
        <p style={{ textAlign: "center", color: "red" }}>{error}</p>
      ) : filteredSessions.length === 0 ? (
        <p style={{ textAlign: "center" }}>No sessions found matching your filters.</p>
      ) : (
        <div style={{ maxHeight: "60vh", overflowY: "auto" }}>
          <ol style={{ paddingLeft: "20px", marginTop: 0 }}>
            <li style={{ fontWeight: "bold", listStyle: "none", marginBottom: "10px" }}>
              <div style={{
                display: "grid",
                gridTemplateColumns: "60px 200px 300px 200px 200px",
                gap: "10px",
                alignItems: "center"
              }}>
                <span>S.No</span>
                <span>Name</span>
                <span>Session ID</span>
                <span>Created Date</span>
              </div>
            </li>

            {filteredSessions.map((session, index) => (
              <li key={index} style={{ listStyle: "none", marginBottom: "10px" }}>
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "60px 200px 300px 200px 200px",
                  gap: "10px",
                  alignItems: "center"
                }}>
                  <span>{index + 1}</span>
                  <span>
                    {/* <Link
                      href={`/${session.lastPage || 'LoanProposerDetails'}?sessionid=${session.sessionId}`}
                      style={{ color: "#007bff", fontWeight: "bold", textDecoration: "none" }}
                    >
                      {session.loanProposerName || "Unnamed"}
                    </Link> */}
                    {/* <Link
                    to={`/${session.lastPage || 'LoanProposerDetails'}?sessionid=${session.sessionId}`}
                    style={{ color: "#007bff", fontWeight: "bold", textDecoration: "none" }}>
                   {session.loanProposerName || "Unnamed"}
                     </Link> */}

                    <Link
                      to={`/CreateDocument/${session.lastPage || 'LoanProposerDetails'}?sessionid=${session.sessionId}`}
                      style={{ color: "#007bff", fontWeight: "bold", textDecoration: "none" }}
                        >
                       {session.loanProposerName || "Unnamed"}
                      </Link>
                  </span>
                  <span>{session.sessionId}</span>
                  <span>{new Date(session.createdAt).toLocaleString()}</span>
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



 