import React, { useState } from "react";
import "./ViewStudent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Table } from "reactstrap";

export default function ViewStudent() {
  let data = [
    {
      id: 1,
      name: "Rohit Kumar",
      age: 23,
      school: "Modern Public School",
      class: 12,
      division: "A",
      status: "Active",
    },
    {
      id: 2,
      name: "Mohit Kumar",
      age: 23,
      school: "Modern Public School",
      class: 11,
      division: "A",
      status: "Active",
    },
    {
      id: 3,
      name: "Udit Khan",
      age: 12,
      school: "Delhi Public School",
      class: 2,
      division: "A",
      status: "Active",
    },
    {
      id: 4,
      name: "Shivam Rohela",
      age: 21,
      school: "Vinod Public School",
      class: 10,
      division: "B",
      status: "Active",
    },
    {
      id: 5,
      name: "Rohit Kumar",
      age: 23,
      school: "Modern Public School",
      class: 12,
      division: "A",
      status: "Active",
    },
    {
      id: 6,
      name: "Mohit Kumar",
      age: 23,
      school: "Modern Public School",
      class: 11,
      division: "A",
      status: "Active",
    },
    {
      id: 7,
      name: "Udit Khan",
      age: 12,
      school: "Delhi Public School",
      class: 2,
      division: "A",
      status: "Active",
    },
    {
      id: 8,
      name: "Shivam Rohela",
      age: 21,
      school: "Vinod Public School",
      class: 10,
      division: "B",
      status: "Active",
    },
  ];

  const chevronIcon = <FontAwesomeIcon icon={faChevronDown} />;
  const downloadIcon = <FontAwesomeIcon icon={faArrowDown} />;
  return (
    <div className="col-sm-10">
      <div className="row">
        <div className="col-12">
          <p className="view-student-heading mt-2">View Student</p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 input-div">
          <input type="text" placeholder="Name"></input>
          <input type="text" placeholder="Age" />
          <button className="ms-1">
            Class<span style={{ float: "right" }}>{chevronIcon}</span>
          </button>
          <button className="ms-2">
            School <span style={{ float: "right" }}>{chevronIcon}</span>
          </button>
          <button className="ms-2">
            Division <span style={{ float: "right" }}>{chevronIcon}</span>
          </button>
          <button
            className="search-btn ms-4"
            style={{ color: "whitesmoke", width: "9rem", textAlign: "center" }}>
            Search
          </button>
        </div>
      </div>
      <div className="pt-0 mt-3  mb-0 row" style={{ height: "65%" }}>
        <div className="col-12">
          <Table>
            <thead>
              <tr width={100} className="table-row">
                {" "}
                <th>ID'V</th>
                <th className="">Name</th>
                <th className="">Age</th>
                <th className="">School</th>
                <th className="">Class </th>
                <th className="">Division</th>
                <th className="">Status</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody width={100}>
              {data.map((item, i) => (
                <tr key={i}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.school}</td>
                  <td>{item.class}</td>
                  <td>{item.division}</td>
                  <td>{item.status}</td>
                  <td>
                    <a href="#">Edit</a>
                  </td>
                  <td>
                    <a href="#">Delete</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
      <div className="row">
        <button className="download-btn mt-5">
          Download Excel &emsp;&nbsp;{downloadIcon}
        </button>
      </div>
    </div>
  );
}
