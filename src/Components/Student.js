// import React, { Component } from "react";

// export class Student extends Component {
//   constructor() {
//     super();

//     this.state = {
//       students: [],
//       Id: "",
//       Name: "",
//       Email: "",
//       City: ""
//     };
//   }

//   componentDidMount() {
//     this.getStudents();
//   }

//   getStudents() {
//     fetch(CONFIG.NODE_API_STUDENT)
//       .then((res) => res.json())
//       .then((data) => this.setState({ students: data }));
//   }

//   clearFeilds() {
//     this.setState({
//       Name: "",
//       Email: "",
//       City: ""
//     });
//   }

//   addStudent = () => {
//     const config = {
//       headers: { "Content-Type": "application/json" },
//       method: "POST",
//       body: JSON.stringify({
//         Name: this.state.Name,
//         Email: this.state.Email,
//         City: this.state.City
//       })
//     };

//     fetch(CONFIG.NODE_API_STUDENT, config)
//       .then((res) => res.json())
//       .then((data) => {
//         this.getStudents();
//         this.clearFeilds();
//       });
//   };

//   editStudent = (studentId) => {
//     fetch(`${CONFIG.NODE_API_STUDENT}/${studentId}`)
//       .then((res) => res.json())
//       .then((data) => {
//         this.setState({
//           Id: data[0].Id,
//           Name: data[0].Name,
//           Email: data[0].Email,
//           City: data[0].City
//         });
//       });
//   };

//   updateStudent = () => {
//     const config = {
//       headers: { "Content-Type": "application/json" },
//       method: "PUT",
//       body: JSON.stringify({
//         Name: this.state.Name,
//         Email: this.state.Email,
//         City: this.state.City
//       })
//     };
//     console.log(config);
//     console.log(this.state.Id);
//     fetch(`${CONFIG.NODE_API_STUDENT}/${this.state.Id}`, config)
//       .then((res) => res.json())
//       .then((data) => {
//         this.getStudents();
//         this.clearFeilds();
//       });
//   };

//   deleteStudent = (studentId) => {
//     const config = {
//       headers: { "Content-Type": "application/json" },
//       method: "DELETE"
//     };
//     fetch(`${CONFIG.NODE_API_STUDENT}/${studentId}`, config)
//       .then((res) => res.json())
//       .then((data) => {
//         this.getStudents();
//       });
//   };

//   render() {
//     return (
//       <React.Fragment>
//         <div className="container">
//           <h1>Student Details</h1>
//           <table className="table">
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>City</th>
//                 <th>Actions</th>
//               </tr>
//               <tr>
//                 <th>
//                   <input
//                     type="text"
//                     value={this.state.Name}
//                     onChange={(data) =>
//                       this.setState({ Name: data.target.value })
//                     }
//                   />
//                 </th>
//                 <th>
//                   <input
//                     type="text"
//                     value={this.state.Email}
//                     onChange={(data) =>
//                       this.setState({ Email: data.target.value })
//                     }
//                   />
//                 </th>
//                 <th>
//                   <input
//                     type="text"
//                     value={this.state.City}
//                     onChange={(data) =>
//                       this.setState({ City: data.target.value })
//                     }
//                   />
//                 </th>
//                 <th>
//                   <button className="btn btn-primary" onClick={this.addStudent}>
//                     Add
//                   </button>{" "}
//                   &nbsp; &nbsp; &nbsp;
//                   <button
//                     className="btn btn-warning"
//                     onClick={this.updateStudent}
//                   >
//                     Update
//                   </button>
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {this.state.students.map((student) => (
//                 <tr key={student.Id}>
//                   <td>{student.Name}</td>
//                   <td>{student.Email}</td>
//                   <td>{student.City}</td>
//                   <th>
//                     <button
//                       className="btn btn-warning"
//                       onClick={() => this.editStudent(student.Id)}
//                     >
//                       Edit
//                     </button>
//                     &nbsp; &nbsp; &nbsp; &nbsp;
//                     <button
//                       className="btn btn-danger"
//                       onClick={() => this.deleteStudent(student.Id)}
//                     >
//                       Delete
//                     </button>
//                   </th>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//         {/* <UserApi /> */}
//       </React.Fragment>
//     );
//   }
// }

// export default Student;
