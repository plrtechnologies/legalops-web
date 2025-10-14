

// import React, { useState, useEffect } from "react";
// import Table from "react-bootstrap/Table";
// import { jsPDF } from "jspdf";

// const FinishedDocuments = () => {
//   const [users, setUsers] = useState([]);
//   const [searchInput, setSearchInput] = useState("");
//   const [filterType, setFilterType] = useState("name");

//   // ✅ Fetch all users from mockapi.io
//   useEffect(() => {
//     fetch("")
//       .then((res) => res.json())
//       .then((data) => setUsers(data))
//       .catch((err) => console.error("Error fetching users:", err));
//   }, []);

//   // ✅ Download PDF using localhost backend API
//   const handleDownload = async (user) => {
//     try {
//       const response = await fetch(`http://localhost:3000/api/generate-word/${user.id}`);
//       const data = await response.json();

//       const doc = new jsPDF();
//       const today = new Date().toLocaleDateString();

//       doc.text(`Name: ${data.name}`, 10, 10);
//       doc.text(`Phone: ${data.phone}`, 10, 20);
//       doc.text(`Address: ${data.address}`, 10, 30);
//       doc.text(`Date: ${today}`, 10, 40);

//       doc.save(`${data.name}.pdf`);
//     } catch (error) {
//       console.error("Error generating PDF:", error);
//       alert("Failed to generate PDF for this user.");
//     }
//   };

//   // 🔍 Filter logic
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
//     <div className="container p-4">
//       <h2 className="mb-4 text-center p-4">Finished Documents</h2>

//       {/* 🔍 Search Filters */}
//       <div className="row mb-4">
//         <div className="col-md-4 mb-3">
//           <label className="form-label fw-bold">Search Filter Type</label>
//           <select
//             className="form-select"
//             value={filterType}
//             onChange={(e) => {
//               setFilterType(e.target.value);
//               setSearchInput("");
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


// import React, { useState, useEffect } from "react";
// import Table from "react-bootstrap/Table";
// import { jsPDF } from "jspdf";

// const FinishedDocuments = () => {
//   const [users, setUsers] = useState([]);
//   const [searchInput, setSearchInput] = useState("");
//   const [filterType, setFilterType] = useState("name");

//   // ✅ Fetch all users from mockapi.io
//   useEffect(() => {
//     fetch("http://localhost:3000/api/finaldoc") // put your mockapi.io endpoint here
//       .then((res) => res.json())
//       .then((data) => setUsers(data))
//       .catch((err) => console.error("Error fetching users:", err));
//   }, []);

//   // ✅ Download PDF using localhost backend API
//   const handleDownload = async (user) => {
//     try {
//       const response = await fetch(
//         `http://localhost:3000/api/generate-word/${user.id}`
//       );
//       const data = await response.json();

//       const doc = new jsPDF();
//       const today = new Date().toLocaleDateString();

//       doc.text(`Name: ${data.name}`, 10, 10);
//       doc.text(`Date: ${today}`, 10, 20);

//       doc.save(`${data.name}.pdf`);
//     } catch (error) {
//       console.error("Error generating PDF:", error);
//       alert("Failed to generate PDF for this user.");
//     }
//   };

//   // 🔍 Filter logic
//   const filteredUsers = users.filter((user) => {
//     const input = searchInput.toLowerCase();
//     const userCreatedDate = new Date(user.createdAt);
//     const today = new Date();

//     switch (filterType) {
//       case "name":
//         return user.name?.toLowerCase().includes(input);
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
//     <div className="container p-4">
//       <h2 className="mb-4 text-center p-4">Finished Documents</h2>

//       {/* 🔍 Single Search Box + Filter Dropdown */}
//       <div className="row mb-4 justify-content-center">
//         <div className="col-md-3 mb-3">
//           <label className="form-label fw-bold">Filter Type</label>
//           <select
//             className="form-select"
//             value={filterType}
//             onChange={(e) => {
//               setFilterType(e.target.value);
//               setSearchInput("");
//             }}
//           >
//             <option value="name">Search by Name</option>
//             <option value="date">Search by Date</option>
//             <option value="lastWeek">Last Week</option>
//             <option value="last3Months">Last 3 Months</option>
//           </select>
//         </div>

//         <div className="col-md-4 mb-3 text-center">
//           <label className="form-label fw-bold">
//             {filterType === "date"
//               ? "Select Date"
//               : filterType === "name"
//               ? "Enter Name"
//               : "Search"}
//           </label>
//           <input
//             type={filterType === "date" ? "date" : "text"}
//             className="form-control text-center"
//             value={searchInput}
//             onChange={(e) => setSearchInput(e.target.value)}
//             disabled={filterType === "lastWeek" || filterType === "last3Months"}
//             placeholder={
//               filterType === "name"
//                 ? "Enter name..."
//                 : filterType === "date"
//                 ? "Select date..."
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
//   const [users, setUsers] = useState([]);
//   const [searchInput, setSearchInput] = useState("");
//   const [filterType, setFilterType] = useState("name");

//   // ✅ Fetch all finished documents from backend
//   useEffect(() => {
//     fetch("http://localhost:3000/api/finaldoc") // 🔹 GET API from backend
//       .then((res) => res.json())
//       .then((data) => setUsers(data))
//       .catch((err) => console.error("Error fetching documents:", err));
//   }, []);

//   // ✅ Download PDF
//   const handleDownload = async (user) => {
//     try {
//       const response = await fetch(
//         `http://localhost:3000/api/finaldoc/${user.id}`
//       );
//       const data = await response.json();

//       const doc = new jsPDF();
//       const today = new Date().toLocaleDateString();

//       doc.text(`Name: ${data.name}`, 10, 10);
//       doc.text(`Date: ${today}`, 10, 20);

//       doc.save(`${data.name}.pdf`);
//     } catch (error) {
//       console.error("Error generating PDF:", error);
//       alert("Failed to generate PDF for this user.");
//     }
//   };

//   // 🔍 Filter logic
//   const filteredUsers = users.filter((user) => {
//     const input = searchInput.toLowerCase();
//     const userCreatedDate = new Date(user.createdAt);
//     const today = new Date();

//     switch (filterType) {
//       case "name":
//         return user.name?.toLowerCase().includes(input);
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
//     <div className="container p-4">
//       <h2 className="mb-4 text-center p-4">Finished Documents</h2>

//       {/* 🔍 Search + Filter */}
//       <div className="row mb-4 justify-content-center">
//         <div className="col-md-3 mb-3">
//           <label className="form-label fw-bold">Filter Type</label>
//           <select
//             className="form-select"
//             value={filterType}
//             onChange={(e) => {
//               setFilterType(e.target.value);
//               setSearchInput("");
//             }}
//           >
//             <option value="name">Search by Name</option>
//             <option value="date">Search by Date</option>
//             <option value="lastWeek">Last Week</option>
//             <option value="last3Months">Last 3 Months</option>
//           </select>
//         </div>

//         <div className="col-md-4 mb-3 text-center">
//           <label className="form-label fw-bold">
//             {filterType === "date"
//               ? "Select Date"
//               : filterType === "name"
//               ? "Enter Name"
//               : "Search"}
//           </label>
//           <input
//             type={filterType === "date" ? "date" : "text"}
//             className="form-control text-center"
//             value={searchInput}
//             onChange={(e) => setSearchInput(e.target.value)}
//             disabled={filterType === "lastWeek" || filterType === "last3Months"}
//             placeholder={
//               filterType === "name"
//                 ? "Enter name..."
//                 : filterType === "date"
//                 ? "Select date..."
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
//   const [users, setUsers] = useState([]); // users array
//   const [searchInput, setSearchInput] = useState("");

//   const token = localStorage.getItem("token"); // assume token saved after login

//   // ✅ Fetch all users from backend
//   useEffect(() => {
//     if (!token) return; // skip if no token

//     fetch("http://localhost:3000/api/finaldoc", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         // safe check: ensure array
//         if (Array.isArray(data)) setUsers(data);
//         else if (Array.isArray(data.data)) setUsers(data.data);
//         else setUsers([]);
//       })
//       .catch((err) => console.error("Error fetching users:", err));
//   }, [token]);

//   // ✅ Download PDF using backend API
//   const handleDownload = async (user) => {
//     try {
//       const response = await fetch(
//         `http://localhost:3000/api/generate-word/${user.id}`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       const data = await response.json();

//       const doc = new jsPDF();
//       const today = new Date().toLocaleDateString();

//       doc.text(`Name: ${data.name}`, 10, 10);
//       doc.text(`Date: ${today}`, 10, 20);

//       doc.save(`${data.name}.pdf`);
//     } catch (error) {
//       console.error("Error generating PDF:", error);
//       alert("Failed to generate PDF for this user.");
//     }
//   };

//   // 🔍 Filter users by name
//   const filteredUsers = Array.isArray(users)
//     ? users.filter((user) =>
//         user.name?.toLowerCase().includes(searchInput.toLowerCase())
//       )
//     : [];

//   return (
//     <div className="container p-4">
//       <h2 className="mb-4 text-center p-4">Finished Documents</h2>

//       {/* 🔍 Single Search Box */}
//       <div className="row mb-4 justify-content-center">
//         <div className="col-md-4 text-center">
//           <input
//             type="text"
//             className="form-control text-center"
//             placeholder="Search by name..."
//             value={searchInput}
//             onChange={(e) => setSearchInput(e.target.value)}
//           />
//         </div>
//       </div>

//       {/* 📋 Table */}
//       <Table striped bordered hover responsive>
//         <thead>
//           <tr className="table-primary text-center">
//             <th>S.No</th>
//             <th>Name</th>
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
//   const [users, setUsers] = useState([]); // store users/documents
//   const [searchInput, setSearchInput] = useState("");
//   const [loading, setLoading] = useState(false);

//   const token = localStorage.getItem("token"); // assume stored after login
//   const BASE_URL = "http://localhost:3000/api"; // change if needed

//   // ✅ Fetch data from backend (all or by name)
//   const fetchData = async () => {
//     if (!token) {
//       console.error("❌ No token found in localStorage. Please log in first.");
//       return;
//     }

//     try {
//       setLoading(true);

//       let url = `${BASE_URL}/finaldoc`;

//       // if user types name -> call API by name
//       if (searchInput.trim() !== "") {
//         url = `${BASE_URL}/finaldoc/user/${encodeURIComponent(searchInput.trim())}`;
//         console.log("🔍 Searching user:", searchInput);
//       }

//       console.log("📡 Fetching data from:", url);

//       const response = await fetch(url, {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const data = await response.json();

//       // Handle both array or object.data
//       if (Array.isArray(data)) {
//         setUsers(data);
//       } else if (Array.isArray(data.data)) {
//         setUsers(data.data);
//       } else {
//         setUsers([]);
//       }

//       console.log("✅ Data fetched successfully:", data);
//     } catch (error) {
//       console.error("🔥 Error fetching users:", error);
//       setUsers([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ✅ Fetch data whenever token or search input changes
//   useEffect(() => {
//     fetchData();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [token, searchInput]);

//   // ✅ Download PDF using backend
//   const handleDownload = async (user) => {
//     try {
//       console.log("📄 Downloading PDF for user:", user.name);

//       const response = await fetch(`${BASE_URL}/generate-word/${user.id}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (!response.ok) {
//         throw new Error(`PDF API error! status: ${response.status}`);
//       }

//       const data = await response.json();

//       const doc = new jsPDF();
//       const today = new Date().toLocaleDateString();

//       doc.text(`Name: ${data.name}`, 10, 10);
//       doc.text(`Date: ${today}`, 10, 20);
//       doc.save(`${data.name}.pdf`);

//       console.log("✅ PDF generated for:", data.name);
//     } catch (error) {
//       console.error("❌ Error generating PDF:", error);
//       alert("Failed to generate PDF for this user.");
//     }
//   };

//   // ✅ UI Rendering
//   return (
//     <div className="container p-4">
//       <h2 className="mb-4 text-center p-4">Finished Documents</h2>

//       {/* 🔍 Search Box */}
//       <div className="row mb-4 justify-content-center">
//         <div className="col-md-4 text-center">
//           <input
//             type="text"
//             className="form-control text-center"
//             placeholder="Search by name..."
//             value={searchInput}
//             onChange={(e) => setSearchInput(e.target.value)}
//           />
//         </div>
//       </div>

//       {loading ? (
//         <div className="text-center text-info">⏳ Loading documents...</div>
//       ) : (
//         <Table striped bordered hover responsive>
//           <thead>
//             <tr className="table-primary text-center">
//               <th>S.No</th>
//               <th>Name</th>
//               <th>Created At</th>
//               <th>Download</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.length > 0 ? (
//               users.map((user, index) => (
//                 <tr key={user.id} className="text-center">
//                   <td>{index + 1}</td>
//                   <td>{user.name}</td>
//                   <td>{user.createdAt?.split("T")[0] || "N/A"}</td>
//                   <td>
//                     <button
//                       className="btn btn-outline-primary"
//                       onClick={() => handleDownload(user)}
//                     >
//                       Download PDF
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="4" className="text-center text-danger">
//                   No matching records found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </Table>
//       )}
//     </div>
//   );
// };

// export default FinishedDocuments;



// import React, { useState, useEffect } from "react";
// import Table from "react-bootstrap/Table";
// import { jsPDF } from "jspdf";

// const FinishedDocuments = () => {
//   const [users, setUsers] = useState([]); // All users list
//   const [searchInput, setSearchInput] = useState("");
//   const [loading, setLoading] = useState(false);

//   // 🔐 Get token from localStorage
//   const token = localStorage.getItem("token");

//   // ✅ Fetch all documents (users)
//   useEffect(() => {
//     if (!token) {
//       console.error("❌ No token found in localStorage. Please log in first.");
//       return; // Stop fetching if token missing
//     }

//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         console.log("📡 Fetching data from API...");
//         const res = await fetch("http://localhost:3000/api/finaldoc", {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         if (!res.ok) {
//           console.error(`🔥 Fetch error: HTTP ${res.status}`);
//           return;
//         }

//         const data = await res.json();
//         console.log("✅ API Response:", data);

//         // ✅ Ensure it's always an array
//         if (Array.isArray(data)) setUsers(data);
//         else if (Array.isArray(data.data)) setUsers(data.data);
//         else {
//           console.warn("⚠️ API response not an array:", data);
//           setUsers([]);
//         }
//       } catch (error) {
//         console.error("💥 Error fetching users:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [token]);

//   // ✅ Download PDF for user
//   const handleDownload = async (user) => {
//     if (!token) {
//       alert("No token found. Please log in again.");
//       return;
//     }

//     try {
//       console.log(`📄 Generating PDF for user ID: ${user.id}`);

//       const response = await fetch(
//         `http://localhost:3000/api/generate-word/${user.id}`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       if (!response.ok) {
//         console.error(`❌ PDF fetch failed. HTTP ${response.status}`);
//         alert("Failed to generate PDF for this user.");
//         return;
//       }

//       const data = await response.json();
//       console.log("🧾 PDF Data:", data);

//       // Generate PDF using jsPDF
//       const doc = new jsPDF();
//       const today = new Date().toLocaleDateString();

//       doc.text(`Name: ${data.name || "N/A"}`, 10, 10);
//       doc.text(`Date: ${today}`, 10, 20);
//       doc.text(`User ID: ${user.id}`, 10, 30);

//       doc.save(`${data.name || "Document"}.pdf`);
//     } catch (error) {
//       console.error("💥 Error generating PDF:", error);
//       alert("Something went wrong while generating PDF.");
//     }
//   };

//   // 🔍 Filter users by name
//   const filteredUsers = users.filter((user) =>
//     user.name?.toLowerCase().includes(searchInput.toLowerCase())
//   );

//   return (
//     <div className="container p-4">
//       <h2 className="mb-4 text-center p-4">📄 Finished Documents</h2>

//       {/* 🔍 Search Box */}
//       <div className="row mb-4 justify-content-center">
//         <div className="col-md-4 text-center">
//           <input
//             type="text"
//             className="form-control text-center"
//             placeholder="Search by name..."
//             value={searchInput}
//             onChange={(e) => setSearchInput(e.target.value)}
//           />
//         </div>
//       </div>

//       {/* 🕒 Loading State */}
//       {loading ? (
//         <div className="text-center text-primary">Loading data...</div>
//       ) : (
//         <Table striped bordered hover responsive>
//           <thead>
//             <tr className="table-primary text-center">
//               <th>S.No</th>
//               <th>Name</th>
//               <th>Created At</th>
//               <th>Download</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredUsers.length > 0 ? (
//               filteredUsers.map((user, index) => (
//                 <tr key={user.id} className="text-center">
//                   <td>{index + 1}</td>
//                   <td>{user.name}</td>
//                   <td>{user.createdAt?.split("T")[0] || "N/A"}</td>
//                   <td>
//                     <button
//                       className="btn btn-outline-primary"
//                       onClick={() => handleDownload(user)}
//                     >
//                       Download PDF
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="4" className="text-center text-danger">
//                   No matching results found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </Table>
//       )}
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
//   const [filterType, setFilterType] = useState("name");

//   // ✅ Fetch all users from backend
//   useEffect(() => {
//     const token =
//       localStorage.getItem("token") ||
//       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMzLCJpYXQiOjE3NjA0MDYwMzksImV4cCI6MTc2MDQwOTYzOX0.lXtInHptFL8HsT_wOsZx5NeiT_se18Vk0sjtz6YANAI";

//     fetch("http://localhost:3000/api/finaldoc", {
//       headers: {
//         Authorization: "Bearer " + token,
//       },
//     })
//       .then((res) => {
//         if (!res.ok) throw new Error("Failed to fetch users");
//         return res.json();
//       })
//       .then((data) => {
//         console.log("Fetched users:", data);
//         setUsers(data);
//       })
//       .catch((err) => console.error("Error fetching users:", err));
//   }, []);

//   // ✅ Download PDF for a single user
//   const handleDownload = async (user) => {
//     try {
//       const token =
//         localStorage.getItem("token") ||
//         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMzLCJpYXQiOjE3NjA0MDYwMzksImV4cCI6MTc2MDQwOTYzOX0.lXtInHptFL8HsT_wOsZx5NeiT_se18Vk0sjtz6YANAI";

//       const response = await fetch(
//         `http://localhost:3000/api/finaldoc/user/${user.name}`,
//         {
//           headers: {
//             Authorization: "Bearer " + token,
//           },
//         }
//       );

//       if (!response.ok) {
//         throw new Error(`Server returned ${response.status}`);
//       }

//       const data = await response.json();

//       // ✅ Generate PDF
//       const doc = new jsPDF();
//       const today = new Date().toLocaleDateString();

//       doc.text(`Name: ${data.name}`, 10, 10);
//       doc.text(`Phone: ${data.phone}`, 10, 20);
//       doc.text(`Address: ${data.address}`, 10, 30);
//       doc.text(`Date: ${today}`, 10, 40);

//       doc.save(`${data.name}_FinalDocument.pdf`);
//     } catch (error) {
//       console.error("Error generating PDF:", error);
//       alert("❌ Failed to generate PDF for this user. Check console for details.");
//     }
//   };

//   // 🔍 Filter logic
//   const filteredUsers = users.filter((user) => {
//     const input = searchInput.toLowerCase();
//     const userCreatedDate = new Date(user.createdAt);
//     const today = new Date();

//     switch (filterType) {
//       case "name":
//         return user.name?.toLowerCase().includes(input);
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
//     <div className="container p-4">
//       <h2 className="mb-4 text-center p-4">📄 Finished Documents</h2>

//       {/* 🔍 Search Filters */}
//       <div className="row mb-4">
//         <div className="col-md-4 mb-3">
//           <label className="form-label fw-bold">Search Filter Type</label>
//           <select
//             className="form-select"
//             value={filterType}
//             onChange={(e) => {
//               setFilterType(e.target.value);
//               setSearchInput("");
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

//       {/* 📋 Data Table */}
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

  // ✅ Fetch all users from backend
  useEffect(() => {
    const token =
      localStorage.getItem("token") ||
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMzLCJpYXQiOjE3NjA0MDYwMzksImV4cCI6MTc2MDQwOTYzOX0.lXtInHptFL8HsT_wOsZx5NeiT_se18Vk0sjtz6YANAI";

    fetch("http://localhost:3000/api/finaldoc", {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch users");
        return res.json();
      })
      .then((data) => {
        console.log("Fetched users:", data);
        setUsers(data);
      })
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  // ✅ Download PDF for a single user
  const handleDownload = async (user) => {
    try {
      const token =
        localStorage.getItem("token") ||
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMzLCJpYXQiOjE3NjA0MDYwMzksImV4cCI6MTc2MDQwOTYzOX0.lXtInHptFL8HsT_wOsZx5NeiT_se18Vk0sjtz6YANAI";

      const response = await fetch(
        `http://localhost:3000/api/finaldoc/user/${user.name}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Server returned ${response.status}`);
      }

      const data = await response.json();

      // ✅ Generate PDF
      const doc = new jsPDF();
      const today = new Date().toLocaleDateString();

      doc.text(`Name: ${data.name}`, 10, 10);
      doc.text(`Date: ${today}`, 10, 20);

      doc.save(`${data.name}_FinalDocument.pdf`);
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("❌ Failed to generate PDF for this user. Check console for details.");
    }
  };

  // 🔍 Filter logic
  const filteredUsers = users.filter((user) => {
    const input = searchInput.toLowerCase();
    const userCreatedDate = new Date(user.createdAt);
    const today = new Date();

    switch (filterType) {
      case "name":
        return user.name?.toLowerCase().includes(input);
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
      <h2 className="mb-4 text-center p-4">📄 Finished Documents</h2>

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
            <option value="date">Search by Date</option>
            <option value="lastWeek">Last Week</option>
            <option value="last3Months">Last 3 Months</option>
          </select>
        </div>

        <div className="col-md-4 mb-3">
          <label className="form-label fw-bold">
            {filterType === "date" ? "Select Date" : "Search"}
          </label>
          <input
            type={filterType === "date" ? "date" : "text"}
            className="form-control"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            disabled={filterType === "lastWeek" || filterType === "last3Months"}
            placeholder={filterType === "name" ? "Enter name..." : ""}
          />
        </div>
      </div>

      {/* 📋 Data Table */}
      <Table striped bordered hover responsive>
        <thead>
          <tr className="table-primary text-center">
            <th>S.No</th>
            <th>Name</th>
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
              <td colSpan="4" className="text-center text-danger">
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











