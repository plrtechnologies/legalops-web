// import React from 'react'


// const FinishedDocuments = ()=>{
//   return (
//     <div>
//         <h1>helloooo</h1>
//     </div>
//   )
// }

// export default FinishedDocuments


// import React from "react";
// import Table from "react-bootstrap/Table";
// import { jsPDF } from "jspdf";

// const FinishedDocuments = () => {
//   const data = [
//     { id: 1, name: "naidu" },
//     { id: 2, name: "srikanth" },
//     { id: 3, name: "praveen" },
//   ];

//   const handleDownload = (person) => {
//     const doc = new jsPDF();
//     doc.text(`Person Name: ${person.name}`, 10, 10); // ✅ Use backticks
//     doc.text(`ID: ${person.id}`, 10, 20);             // ✅ Use backticks
//     doc.save(`${person.name}.pdf`);                   // ✅ Use backticks
//   };

//   return (
//     <div style={{ height: "75vh" }} className="container mt-5 p-5">
//       <h2 className="mb-4">Finished Documents</h2>
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>S.No</th>
//             <th>Person Name</th>
//             <th>Download PDF</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((person, index) => (
//             <tr key={person.id}>
//               <td>{index + 1}</td>
//               <td>{person.name}</td>
//               <td>
//                 <button
//                   className="btn btn-primary"
//                   onClick={() => handleDownload(person)}
//                 >
//                   Download PDF
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </div>
//   );
// };

// export default FinishedDocuments;


// import React from "react";
// import Table from "react-bootstrap/Table";
// import { jsPDF } from "jspdf";

// const FinishedDocuments = () => {
//   const data = [
//     { id: 1, name: "naidu" },
//     { id: 2, name: "srikanth" },
//     { id: 3, name: "praveen" },
//   ];

//   const handleDownload = async (person) => {
//     if (person.name === "srikanth") {
//       try {
//         const res = await fetch(`https://686aad60e559eba90870a2a2.mockapi.io/users2`);
//         const userData = await res.json();

//         const doc = new jsPDF();
//         doc.text(`Name: ${userData.name}`, 10, 10);
//         doc.text(`Address: ${userData.address}`, 10, 20);
//         doc.text(`Phone: ${userData.phone}`, 10, 30);
//         doc.save(`${userData.name}.pdf`);
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     } else {
      
//       const doc = new jsPDF();
//       doc.text(`Name: ${person.name}`, 10, 10);
//       doc.text(`ID: ${person.id}`, 10, 20);
//       doc.save(`${person.name}.pdf`);
//     }
//   };

//   return (
//     <div style={{ height: "75vh" }} className="container mt-5 p-5">
//       <h2 className="mb-4">Finished Documents</h2>
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>S.No</th>
//             <th>Person Name</th>
//             <th>Download PDF</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((person, index) => (
//             <tr key={person.id}>
//               <td>{index + 1}</td>
//               <td>{person.name}</td>
//               <td>
//                 <button
//                   className="btn btn-primary"
//                   onClick={() => handleDownload(person)}
//                 >
//                   Download PDF
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </div>
//   );
// };

// export default FinishedDocuments;

// import React, { useState } from "react";
// import Table from "react-bootstrap/Table";
// import { jsPDF } from "jspdf";

// const FinishedDocuments = () => {
//   const [searchTerm, setSearchTerm] = useState("");

//   const data = [
//     { id: 1, name: "naidu" },
//     { id: 2, name: "srikanth" },
//     { id: 3, name: "praveen" },
//   ];

//   const handleDownload = async (person) => {
//     const doc = new jsPDF();
//     const today = new Date().toLocaleDateString();

//     if (person.name === "srikanth") {
//       try {
//         const res = await fetch(
//           `https://686aad60e559eba90870a2a2.mockapi.io/users/2'
// `
//         );
//         const userData = await res.json();

//         doc.text(`Name: ${userData.name}`, 10, 10);
//         doc.text(`Address: ${userData.address}`, 10, 20);
//         doc.text(`Phone: ${userData.phone}`, 10, 30);
//         doc.text(`Date: ${today}`, 10, 40); // ✅ Add date
//         doc.save(`${userData.name}.pdf`);
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     } else {
//       doc.text(`Name: ${person.name}`, 10, 10);
//       doc.text(`ID: ${person.id}`, 10, 20);
//       doc.text(`Date: ${today}`, 10, 30); // ✅ Add date
//       doc.save(`${person.name}.pdf`);
//     }
//   };

//   // 🔍 Filter logic
//   const filteredData = data.filter((person) =>
//     person.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div style={{ height: "75vh" }} className="container mt-5 p-5">
//       <h2 className="mb-4">Finished Documents</h2>

//       {/* 🔍 Search Bar */}
//       <input
//         type="text"
//         placeholder="Search by name..."
//         className="form-control mb-3"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />

//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>S.No</th>
//             <th>Person Name</th>
//             <th>Download PDF</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredData.map((person, index) => (
//             <tr key={person.id}>
//               <td>{index + 1}</td>
//               <td>{person.name}</td>
//               <td>
//                 <button
//                   className="btn btn-primary"
//                   onClick={() => handleDownload(person)}
//                 >
//                   Download PDF
//                 </button>
//               </td>
//             </tr>
//           ))}
//           {filteredData.length === 0 && (
//             <tr>
//               <td colSpan="3" className="text-center text-danger">
//                 No matching results found.
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </Table>
//     </div>
//   );
// };

// export default FinishedDocuments;


// import React, { useState } from "react";
// import Table from "react-bootstrap/Table";
// import { jsPDF } from "jspdf";

// const FinishedDocuments = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedRange, setSelectedRange] = useState("all");
//   const [selectedDate, setSelectedDate] = useState("");

//   const data = [
//     { id: 1, name: "naidu", createdAt: "2024-06-30" },
//     { id: 2, name: "srikanth", createdAt: "2024-05-15" },
//     { id: 3, name: "praveen", createdAt: "2024-04-10" },
//   ];

//   const handleDownload = async (person) => {
//     const doc = new jsPDF();
//     const today = new Date().toLocaleDateString();

//     if (person.name === "srikanth") {
//       try {
//         const res = await fetch(
//           `https://686aad60e559eba90870a2a2.mockapi.io/users/2`
//         );
//         const userData = await res.json();

//         doc.text(`Name: ${userData.name}`, 10, 10);
//         doc.text(`Address: ${userData.address}`, 10, 20);
//         doc.text(`Phone: ${userData.phone}`, 10, 30);
//         doc.text(`Date: ${today}`, 10, 40);
//         doc.save(`${userData.name}.pdf`);
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     } else {
//       doc.text(`Name: ${person.name}`, 10, 10);
//       doc.text(`ID: ${person.id}`, 10, 20);
//       doc.text(`Date: ${today}`, 10, 30);
//       doc.save(`${person.name}.pdf`);
//     }
//   };

//   // 🔍 Filter Logic
//   const filteredData = data.filter((person) => {
//     const nameMatch = person.name
//       .toLowerCase()
//       .includes(searchTerm.toLowerCase());

//     const createdAt = new Date(person.createdAt);
//     const now = new Date();

//     let rangeMatch = true;

//     if (selectedRange === "recent") {
//       const recentDays = new Date();
//       recentDays.setDate(now.getDate() - 7);
//       rangeMatch = createdAt >= recentDays;
//     } else if (selectedRange === "1-3") {
//       const threeMonthsAgo = new Date();
//       threeMonthsAgo.setMonth(now.getMonth() - 3);
//       const oneMonthAgo = new Date();
//       oneMonthAgo.setMonth(now.getMonth() - 1);
//       rangeMatch = createdAt >= threeMonthsAgo && createdAt < oneMonthAgo;
//     } else if (selectedRange === "3-6") {
//       const sixMonthsAgo = new Date();
//       sixMonthsAgo.setMonth(now.getMonth() - 6);
//       const threeMonthsAgo = new Date();
//       threeMonthsAgo.setMonth(now.getMonth() - 3);
//       rangeMatch = createdAt >= sixMonthsAgo && createdAt < threeMonthsAgo;
//     }

//     const dateMatch = selectedDate
//       ? person.createdAt === selectedDate
//       : true;

//     return nameMatch && rangeMatch && dateMatch;
//   });

//   return (
//     <div style={{ height: "75vh" }} className="container mt-5 p-4">
//       <h2 className="mb-4">Finished Documents</h2>

//       {/* 🔍 Search Inputs */}
//       <div className="row mb-4">
//         <div className="col-md-4 mb-2">
//           <input
//             type="text"
//             placeholder="Search by name..."
//             className="form-control form-control-sm"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>

//         <div className="col-md-4 mb-2">
//           <select
//             className="form-select form-select-sm"
//             value={selectedRange}
//             onChange={(e) => setSelectedRange(e.target.value)}
//           >
//             <option value="all">All Dates</option>
//             <option value="recent">Recent (last 7 days)</option>
//             <option value="1-3">1-3 Months</option>
//             <option value="3-6">3-6 Months</option>
//           </select>
//         </div>

//         <div className="col-md-4 mb-2">
//           <input
//             type="date"
//             className="form-control form-control-sm"
//             value={selectedDate}
//             onChange={(e) => setSelectedDate(e.target.value)}
//           />
//         </div>
//       </div>

//       {/* 🧾 Table */}
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>S.No</th>
//             <th>Person Name</th>
//             <th>Created At</th>
//             <th>Download PDF</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredData.map((person, index) => (
//             <tr key={person.id}>
//               <td>{index + 1}</td>
//               <td>{person.name}</td>
//               <td>{person.createdAt}</td>
//               <td>
//                 <button
//                   className="btn btn-sm btn-primary"
//                   onClick={() => handleDownload(person)}
//                 >
//                   Download PDF
//                 </button>
//               </td>
//             </tr>
//           ))}
//           {filteredData.length === 0 && (
//             <tr>
//               <td colSpan="4" className="text-center text-danger">
//                 No matching results found.
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </Table>
//     </div>
//   );
// };

// export default FinishedDocuments;


// import React, { useState } from "react";
// import Table from "react-bootstrap/Table";
// import { jsPDF } from "jspdf";

// const FinishedDocuments = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedRange, setSelectedRange] = useState("all");
//   const [selectedDate, setSelectedDate] = useState("");

//   const data = [
//     { id: 1, name: "naidu", createdAt: "2024-06-30" },
//     { id: 2, name: "srikanth", createdAt: "2024-05-15" },
//     { id: 3, name: "praveen", createdAt: "2024-04-10" },
//   ];

//   const handleDownload = async (person) => {
//     const doc = new jsPDF();
//     const today = new Date().toLocaleDateString();

//     if (person.name === "srikanth") {
//       try {
//         const res = await fetch(
//           'https://686aad60e559eba90870a2a2.mockapi.io/uesers'
//         );
//         const userData = await res.json();

//         doc.text(`Name: ${userData.name}`, 10, 10);
//         doc.text(`Address: ${userData.address}`, 10, 20);
//         doc.text(`Phone: ${userData.phone}`, 10, 30);
//         doc.text(`Date: ${today}`, 10, 40);
//         doc.save(`${userData.name}.pdf`);
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     } else {
//       doc.text(`Name: ${person.name}`, 10, 10);
//       doc.text(`ID: ${person.id}`, 10, 20);
//       doc.text(`Date: ${today}`, 10, 30);
//       doc.save(`${person.name}.pdf`);
//     }
//   };

//   // 🔍 Filter Logic
//   const filteredData = data.filter((person) => {
//     const nameMatch = person.name
//       .toLowerCase()
//       .includes(searchTerm.toLowerCase());

//     const createdAt = new Date(person.createdAt);
//     const now = new Date();

//     let rangeMatch = true;

//     if (selectedRange === "recent") {
//       const recentDays = new Date();
//       recentDays.setDate(now.getDate() - 7);
//       rangeMatch = createdAt >= recentDays;
//     } else if (selectedRange === "1-3") {
//       const threeMonthsAgo = new Date();
//       threeMonthsAgo.setMonth(now.getMonth() - 3);
//       const oneMonthAgo = new Date();
//       oneMonthAgo.setMonth(now.getMonth() - 1);
//       rangeMatch = createdAt >= threeMonthsAgo && createdAt < oneMonthAgo;
//     } else if (selectedRange === "3-6") {
//       const sixMonthsAgo = new Date();
//       sixMonthsAgo.setMonth(now.getMonth() - 6);
//       const threeMonthsAgo = new Date();
//       threeMonthsAgo.setMonth(now.getMonth() - 3);
//       rangeMatch = createdAt >= sixMonthsAgo && createdAt < threeMonthsAgo;
//     }

//     const dateMatch = selectedDate
//       ? person.createdAt === selectedDate
//       : true;

//     return nameMatch && rangeMatch && dateMatch;
//   });

//   return (
//     <div style={{ height: "75vh" }} className="container mt-5 p-4">
//       <h2 className="mb-4">Finished Documents</h2>

//       {/* 🔍 Search Inputs */}
//       <div className="row mb-4 align-items-end">
//         <div className="col-md-4 mb-3">
//           <label className="form-label fw-bold">Search by Name</label>
//           <input
//             type="text"
//             placeholder="Enter name..."
//             className="form-control"
//             style={{
//               border: "2px solid #0d6efd",
//               borderRadius: "8px",
//               padding: "10px",
//             }}
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>

//         <div className="col-md-4 mb-3">
//           <label className="form-label fw-bold">Filter by Time Range</label>
//           <select
//             className="form-select"
//             style={{
//               border: "2px solid #0d6efd",
//               borderRadius: "8px",
//               padding: "10px",
//             }}
//             value={selectedRange}
//             onChange={(e) => setSelectedRange(e.target.value)}
//           >
//             <option value="all">All Dates</option>
//             <option value="recent">Recent (last 7 days)</option>
//             <option value="1-3">1–3 Months</option>
//             <option value="3-6">3–6 Months</option>
//           </select>
//         </div>

//         <div className="col-md-4 mb-3">
//           <label className="form-label fw-bold">Search by Date</label>
//           <input
//             type="date"
//             className="form-control"
//             style={{
//               border: "2px solid #0d6efd",
//               borderRadius: "8px",
//               padding: "10px",
//             }}
//             value={selectedDate}
//             onChange={(e) => setSelectedDate(e.target.value)}
//           />
//         </div>
//       </div>

//       {/* 🧾 Table */}
//       <Table striped bordered hover responsive>
//         <thead>
//           <tr className="table-primary text-center">
//             <th>S.No</th>
//             <th>Person Name</th>
//             <th>Created At</th>
//             <th>Download PDF</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredData.map((person, index) => (
//             <tr key={person.id} className="text-center">
//               <td>{index + 1}</td>
//               <td>{person.name}</td>
//               <td>{person.createdAt}</td>
//               <td>
//                 <button
//                   className="btn btn-outline-primary"
//                   style={{
//                     padding: "6px 14px",
//                     borderRadius: "6px",
//                     fontWeight: "bold",
//                   }}
//                   onClick={() => handleDownload(person)}
//                 >
//                   Download PDF
//                 </button>
//               </td>
//             </tr>
//           ))}
//           {filteredData.length === 0 && (
//             <tr>
//               <td colSpan="4" className="text-center text-danger">
//                 No matching results found.
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </Table>
//     </div>
//   );
// };

// export default FinishedDocuments;


// import React, { useState, useEffect } from "react";
// import Table from "react-bootstrap/Table";
// import { jsPDF } from "jspdf";

// const FinishedDocuments = () => {
//   const [data, setData] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedDate, setSelectedDate] = useState("");

//   // ✅ API నుండి డేటా తీసుకోవడం
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch("https://686aad60e559eba90870a2a2.mockapi.io/uesers");
//         const json = await res.json();
//         setData(json);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };
//     fetchData();
//   }, []);

//   // ✅ PDF డౌన్లోడ్ ఫంక్షన్
//   const handleDownload = (user) => {
//     const doc = new jsPDF();
//     const today = new Date().toLocaleDateString();

//     doc.text(`Name: ${user.name}`, 10, 10);
//     doc.text(`Address: ${user.address}`, 10, 20);
//     doc.text(`Phone: ${user.phone}`, 10, 30);
//     doc.text(`Date: ${today}`, 10, 40);
//     doc.save(`${user.name}.pdf`);
//   };

//   // ✅ Filter Logic
//   const filteredData = data.filter((user) => {
//     const nameMatch = user.name?.toLowerCase().includes(searchTerm.toLowerCase());
//     const dateMatch = selectedDate ? user.createdAt?.startsWith(selectedDate) : true;
//     return nameMatch && dateMatch;
//   });

//   return (
//     <div className="container mt-5 p-4">
//       <h2 className="mb-4">Finished Documents</h2>

//       {/* 🔍 Search Inputs */}
//       <div className="row mb-4">
//         <div className="col-md-6 mb-2">
//           <input
//             type="text"
//             placeholder="Search by name"
//             className="form-control"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>

//         <div className="col-md-6 mb-2">
//           <input
//             type="date"
//             className="form-control"
//             value={selectedDate}
//             onChange={(e) => setSelectedDate(e.target.value)}
//           />
//         </div>
//       </div>

//       {/* 🧾 Table */}
//       <Table striped bordered hover responsive>
//         <thead className="table-primary text-center">
//           <tr>
//             <th>S.No</th>
//             <th>Name</th>
//             <th>Phone</th>
//             <th>Created At</th>
//             <th>Download PDF</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredData.map((user, index) => (
//             <tr key={user.id} className="text-center">
//               <td>{index + 1}</td>
//               <td>{user.name}</td>
//               <td>{user.phone}</td>
//               <td>{user.createdAt?.split("T")[0]}</td>
//               <td>
//                 <button
//                   className="btn btn-outline-primary btn-sm"
//                   onClick={() => handleDownload(user)}
//                 >
//                   Download PDF
//                 </button>
//               </td>
//             </tr>
//           ))}
//           {filteredData.length === 0 && (
//             <tr>
//               <td colSpan="5" className="text-center text-danger">
//                 No matching records found.
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </Table>
//     </div>
//   );
// };

// export default FinishedDocuments;




// import React, { useState, useEffect } from "react";
// import Table from "react-bootstrap/Table";
// import { jsPDF } from "jspdf";

// const FinishedDocuments = () => {
//   const [users, setUsers] = useState([]);
//   const [searchInput, setSearchInput] = useState("");
//   const [filterType, setFilterType] = useState("name"); // default: name

//   useEffect(() => {
//     fetch("https://686aad60e559eba90870a2a2.mockapi.io/uesers")
//       .then((res) => res.json())
//       .then((data) => setUsers(data))
//       .catch((err) => console.error("Error fetching users:", err));
//   }, []);

//   const handleDownload = (user) => {
//     const doc = new jsPDF();
//     const today = new Date().toLocaleDateString();

//     doc.text(`Name: ${user.name}`, 10, 10);
//     doc.text(`Phone: ${user.phone}`, 10, 20);
//     doc.text(`Address: ${user.address}`, 10, 30);
//     doc.text(`Date: ${today}`, 10, 40);

//     doc.save(`${user.name}.pdf`);
//   };

//   // 🔍 Filtering Logic
//   const filteredUsers = users.filter((user) => {
//     const input = searchInput.toLowerCase();
//     const userCreatedDate = new Date(user.createdAt);
//     const today = new Date();

//     switch (filterType) {
//       case "name":
//         return user.name.toLowerCase().includes(input);
//       case "phone":
//         return user.phone?.includes(searchInput);
//       case "date":
//         return user.createdAt?.split("T")[0] === searchInput;
//       case "lastWeek":
//         const oneWeekAgo = new Date();
//         oneWeekAgo.setDate(today.getDate() - 7);
//         return userCreatedDate >= oneWeekAgo;
//       case "last3Months":
//         const threeMonthsAgo = new Date();
//         threeMonthsAgo.setMonth(today.getMonth() - 3);
//         return userCreatedDate >= threeMonthsAgo;
//       default:
//         return true;
//     }
//   });

//   return (
//     <div className="container  p-4">
//       <h2 className="mb-4 text-center p-4">Finished Documents</h2>

//       {/* 🔍 Combined Search Controls */}
//       <div className="row mb-4 ">
//         <div className="col-md-4 mb-3">
//           <label className="form-label fw-bold">Search Filter Type</label>
//           <select
//             className="form-select"
//             value={filterType}
//             onChange={(e) => {
//               setFilterType(e.target.value);
//               setSearchInput(""); // clear input when filter type changes
//             }}
//           >
//             <option value="name">Search by Name</option>
//             <option value="phone">Search by Phone</option>
//             <option value="date">Search by Date</option>
//             <option value="lastWeek">Last Week</option>
//             <option value="last3Months">Last 3 Months</option>
//           </select>
//         </div>

//         <div className="col-md-4 mb-3">
//           <label className="form-label fw-bold">
//             {filterType === "date"
//               ? "Select Date"
//               : filterType === "phone"
//               ? "Enter Phone Number"
//               : "Search"}
//           </label>
//           <input
//             type={filterType === "date" ? "date" : "text"}
//             className="form-control"
//             value={searchInput}
//             onChange={(e) => setSearchInput(e.target.value)}
//             disabled={filterType === "lastWeek" || filterType === "last3Months"}
//             placeholder={
//               filterType === "phone"
//                 ? "Enter phone..."
//                 : filterType === "name"
//                 ? "Enter name..."
//                 : ""
//             }
//           />
//         </div>
//       </div>

//       {/* 📋 Table */}
//       <Table striped bordered hover responsive>
//         <thead>
//           <tr className="table-primary text-center">
//             <th>S.No</th>
//             <th>Name</th>
//             <th>Phone</th>
//             <th>Address</th>
//             <th>Created At</th>
//             <th>Download</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredUsers.length > 0 ? (
//             filteredUsers.map((user, index) => (
//               <tr key={user.id} className="text-center">
//                 <td>{index + 1}</td>
//                 <td>{user.name}</td>
//                 <td>{user.phone}</td>
//                 <td>{user.address}</td>
//                 <td>{user.createdAt?.split("T")[0]}</td>
//                 <td>
//                   <button
//                     className="btn btn-outline-primary"
//                     onClick={() => handleDownload(user)}
//                   >
//                     Download PDF
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="6" className="text-center text-danger">
//                 No matching results found.
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </Table>
//     </div>
//   );
// };

// export default FinishedDocuments;

import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { jsPDF } from "jspdf";

const FinishedDocuments = () => {
  const [users, setUsers] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filterType, setFilterType] = useState("name");

  // ✅ Fetch all users from mockapi.io
  useEffect(() => {
    fetch("")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  // ✅ Download PDF using localhost backend API
  const handleDownload = async (user) => {
    try {
      const response = await fetch(`http://localhost:3000/api/generate-word/${user.id}`);
      const data = await response.json();

      const doc = new jsPDF();
      const today = new Date().toLocaleDateString();

      doc.text(`Name: ${data.name}`, 10, 10);
      doc.text(`Phone: ${data.phone}`, 10, 20);
      doc.text(`Address: ${data.address}`, 10, 30);
      doc.text(`Date: ${today}`, 10, 40);

      doc.save(`${data.name}.pdf`);
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Failed to generate PDF for this user.");
    }
  };

  // 🔍 Filter logic
  const filteredUsers = users.filter((user) => {
    const input = searchInput.toLowerCase();
    const userCreatedDate = new Date(user.createdAt);
    const today = new Date();

    switch (filterType) {
      case "name":
        return user.name.toLowerCase().includes(input);
      case "phone":
        return user.phone?.includes(searchInput);
      case "date":
        return user.createdAt?.split("T")[0] === searchInput;
      case "lastWeek":
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(today.getDate() - 7);
        return userCreatedDate >= oneWeekAgo;
      case "last3Months":
        const threeMonthsAgo = new Date();
        threeMonthsAgo.setMonth(today.getMonth() - 3);
        return userCreatedDate >= threeMonthsAgo;
      default:
        return true;
    }
  });

  return (
    <div className="container p-4">
      <h2 className="mb-4 text-center p-4">Finished Documents</h2>

      {/* 🔍 Search Filters */}
      <div className="row mb-4">
        <div className="col-md-4 mb-3">
          <label className="form-label fw-bold">Search Filter Type</label>
          <select
            className="form-select"
            value={filterType}
            onChange={(e) => {
              setFilterType(e.target.value);
              setSearchInput("");
            }}
          >
            <option value="name">Search by Name</option>
            <option value="phone">Search by Phone</option>
            <option value="date">Search by Date</option>
            <option value="lastWeek">Last Week</option>
            <option value="last3Months">Last 3 Months</option>
          </select>
        </div>

        <div className="col-md-4 mb-3">
          <label className="form-label fw-bold">
            {filterType === "date"
              ? "Select Date"
              : filterType === "phone"
              ? "Enter Phone Number"
              : "Search"}
          </label>
          <input
            type={filterType === "date" ? "date" : "text"}
            className="form-control"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            disabled={filterType === "lastWeek" || filterType === "last3Months"}
            placeholder={
              filterType === "phone"
                ? "Enter phone..."
                : filterType === "name"
                ? "Enter name..."
                : ""
            }
          />
        </div>
      </div>

      {/* 📋 Table */}
      <Table striped bordered hover responsive>
        <thead>
          <tr className="table-primary text-center">
            <th>S.No</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Created At</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user, index) => (
              <tr key={user.id} className="text-center">
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.phone}</td>
                <td>{user.address}</td>
                <td>{user.createdAt?.split("T")[0]}</td>
                <td>
                  <button
                    className="btn btn-outline-primary"
                    onClick={() => handleDownload(user)}
                  >
                    Download PDF
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center text-danger">
                No matching results found.
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default FinishedDocuments;
