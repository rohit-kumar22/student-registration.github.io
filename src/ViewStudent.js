import React, { useEffect, useState } from "react";
import "./ViewStudent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import { Table } from "reactstrap";
import EditableRow from "./EditableRow";
import ReadRow from "./ReadRow";
import AddStudent from "./AddStudent";

export default function ViewStudent({ onEditClick }) {
  const data = JSON.parse(localStorage.getItem("data"));
  const [filteredData, setFilteredData] = useState(data);
  const [editRowId, setEditRowId] = useState(1);
  const [nameOptions, setNameOptions] = useState([]);
  const [ageoptions, setAgeOptions] = useState([]);
  const [schoolOptions, setSchoolOptions] = useState([]);
  const [divisionOptions, setDivisionOptions] = useState([]);
  const [classOptions, setClassesOptions] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [classes, setClasses] = useState("");
  const [school, setSchool] = useState("");
  const [division, setDivision] = useState("");

  const download_btn = "Download Excel &emsp;&nbsp; ${downloadIcon}";
  const chevronIcon = <FontAwesomeIcon icon={faChevronDown} />;
  const downloadIcon = <FontAwesomeIcon icon={faArrowDown} />;

  function deleteData(rowId) {
    const filterData = data.filter(({ id }) => id !== rowId);

    setFilteredData(filterData);
    localStorage.setItem("data", JSON.stringify(filterData));

    console.log(filterData);
  }

  function editData(info) {
    onEditClick(info);
  }

  useEffect(() => {
    const classesnames = data.map(({ classes }) => classes);
    setClassesOptions([...new Set(classesnames)]);
    const names = data.map(({ name }) => name);
    setNameOptions(names);
    const ages = data.map(({ age }) => age);
    setAgeOptions(ages);
    const schoolnames = data.map(({ school }) => school);
    setSchoolOptions([...new Set(schoolnames)]);
    const divisions = data.map(({ division }) => division);
    setDivisionOptions([...new Set(divisions)]);
  }, []);

  const search = () => {
    const filteredInputs = {};

    if (name) filteredInputs["name"] = name;
    if (age) filteredInputs["age"] = age;
    if (school) filteredInputs["school"] = school;
    if (classes) filteredInputs["classes"] = classes;
    if (division) filteredInputs["division"] = division;

    console.log(filteredInputs);

    const filterssss = data.filter(function (item) {
      for (var key in filteredInputs) {
        if (item[key] === undefined || item[key] != filteredInputs[key])
          return false;
      }

      return true;
    });
    console.log("filterResp", filterssss);

    setFilteredData(filterssss);
  };

  return (
    <div className="col-sm-10">
      <div className="row">
        <div className="col-12">
          <p className="view-student-heading mt-2">View Student</p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 input-div">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}></input>
          <input
            type="text"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />

          <select
            className="ms-1"
            value={classes}
            onChange={(e) => setClasses(e.target.value)}>
            {" "}
            <option value="" disabled selected hidden>
              Class
            </option>
            {classOptions
              .sort((a, b) => {
                return a - b;
              })
              .map((item) => (
                <option value={item}>{item}</option>
              ))}
          </select>

          <select
            className="ms-1"
            value={school}
            onChange={(e) => setSchool(e.target.value)}>
            <option value="" disabled selected hidden>
              School
            </option>
            {schoolOptions
              .sort((a, b) => a - b)
              .map((item) => (
                <option value={item}>{item}</option>
              ))}
          </select>
          <select
            className="ms-1"
            value={division}
            onChange={(e) => setDivision(e.target.value)}>
            {" "}
            <option value="" disabled selected hidden>
              Division
            </option>
            {divisionOptions
              .sort((a, b) => a - b)
              .map((item) => (
                <option value={item}>{item}</option>
              ))}
          </select>
          <button
            className="search-btn ms-4"
            onClick={() => search()}
            style={{ color: "whitesmoke", width: "9rem", textAlign: "center" }}>
            Search
          </button>
        </div>
      </div>
      <div className="pt-0 mt-3  mb-0 row" style={{ height: "65%" }}>
        <div className="col-12">
          <form>
            <Table id="table-to-xls">
              <thead>
                <tr width={100} className="table-row">
                  {" "}
                  <th>ID'V</th>
                  <th className="">Name</th>
                  <th className="">Age</th>
                  <th className=" pe-5">School</th>
                  <th className="">Class </th>
                  <th className="">Division</th>
                  <th className="">Status</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody width={100}>
                {filteredData?.map((item, i) => (
                  <tr key={i}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.school}</td>
                    <td>{item.classes}</td>
                    <td>{item.division}</td>
                    <td>{item.status}</td>
                    <td>
                      <a href="#" onClick={() => onEditClick(item)}>
                        Edit
                      </a>
                    </td>
                    <td>
                      <a href="#" onClick={() => deleteData(item.id)}>
                        Delete
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </form>
        </div>
      </div>
      <div className="row">
        <ReactHTMLTableToExcel
          id="test-table-xls-button"
          className="download-btn mt-4"
          table="table-to-xls"
          filename="tablexls"
          sheet="tablexls"
          buttonText="Download Excel"
        />
      </div>
    </div>
  );
}
