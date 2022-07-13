import React, { useState, useEffect } from "react";
import "./AddStudent.css";
import TextField from "@material-ui/core/TextField";

const getDataFromLS = () => {
  const studentInfo = localStorage.getItem("data");
  console.log("studentInfo", studentInfo);
  if (studentInfo !== "null") {
    return JSON.parse(studentInfo);
  } else {
    return [];
  }
};

export default function AddStudent({ editItem, isInfoUpdated }) {
  // console.log("id", studentId);
  console.log("AddStudent");
  const [data, setData] = useState(getDataFromLS());
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [school, setSchool] = useState("");
  const [classes, setClasses] = useState("");
  const [division, setDivision] = useState("");
  const [status, setStatus] = useState("");

  const handleAddDataSubmit = (e) => {
    e.preventDefault();
    const info = {
      id,
      name,
      age,
      school,
      classes,
      division,
      status,
    };

    setData((prev) => [...prev, info]);
    setId("");
    setName("");
    setAge("");
    setSchool("");
    setClasses("");
    setDivision("");
    setStatus("");
  };

  const handleUpdateDataStudent = (e) => {
    e.preventDefault();

    const oldInfo = data.filter((item) => item.id !== id);
    setData(oldInfo);
    const info = {
      id,
      name,
      age,
      school,
      classes,
      division,
      status,
    };
    setData((prev) => [...prev, info]);

    setId("");
    setName("");
    setAge("");
    setSchool("");
    setClasses("");
    setDivision("");
    setStatus("");

    isInfoUpdated(true);
  };

  useEffect(() => {
    if (editItem) {
      setId(editItem.id);
      setName(editItem.name);
      setAge(editItem.age);
      setSchool(editItem.school);
      setClasses(editItem.classes);
      setDivision(editItem.division);
      setStatus(editItem.status);
    } else {
      setId("");
      setName("");
      setAge("");
      setSchool("");
      setClasses("");
      setDivision("");
      setStatus("");
    }
  }, [editItem]);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  return (
    <div className="col-sm-10">
      {console.log("data", data)}
      <div className="row ">
        <div className="col-12">
          <p className="mt-2 add-student-heading">
            {editItem ? "Update" : "Add"} Student
          </p>
        </div>
        <form autoComplete="off" onSubmit={() => handleAddDataSubmit}>
          <div className="col-12">
            <div className="row mt-4">
              <div className="col-2">
                <label>ID:</label>
              </div>
              <div className="col-5">
                <input
                  placeholder="Enter id"
                  name="id"
                  className="input-content"
                  required="required"
                  type="text"
                  onChange={(e) => setId(e.target.value)}
                  value={id}
                />
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-2">
                <label>Full Name:</label>
              </div>
              <div className="col-5">
                <input
                  placeholder="Name"
                  name="full_name"
                  className="input-content"
                  required
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-2">
                <label>Age:</label>
              </div>
              <div className="col-5">
                <input
                  placeholder="Age"
                  name="age"
                  className="input-content"
                  required
                  type="text"
                  onChange={(e) => setAge(e.target.value)}
                  value={age}
                />
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-2">
                <label>School</label>
              </div>
              <div className="col-5">
                <select
                  placeholder="Select"
                  className="input-content"
                  name="school"
                  defaultValue="Select"
                  onChange={(e) => setSchool(e.target.value)}
                  value={school}>
                  <option value="" disabled selected hidden>
                    Select
                  </option>
                  <option value="Modern Public School">
                    Modern Public School
                  </option>
                  <option value="Delhi Public School">
                    Delhi Public School
                  </option>
                  <option value="PMS Public School">PMS Public School</option>
                </select>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-2">
                <label>Class</label>
              </div>
              <div className="col-5">
                <select
                  className="input-content"
                  name="class"
                  onChange={(e) => setClasses(e.target.value)}
                  value={classes}>
                  <option value="" disabled selected hidden>
                    Select
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-2">
                <label>Division</label>
              </div>
              <div className="col-5">
                <select
                  required
                  className="input-content"
                  name="division"
                  onChange={(e) => setDivision(e.target.value)}
                  value={division}>
                  <option value="" disabled selected hidden>
                    Select
                  </option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                </select>
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-2">
                <label>Status</label>
              </div>
              <div className="col-5">
                <input
                  style={{ marginLeft: "100px" }}
                  type="radio"
                  name="status"
                  value="Active"
                  onChange={(e) => setStatus(e.target.value)}
                  checked={status === "Active"}
                />{" "}
                Active
                <input
                  className="ms-4"
                  type="radio"
                  name="status"
                  value="Invoice"
                  onChange={(e) => setStatus(e.target.value)}
                  checked={status === "Invoice"}
                />{" "}
                Invoice
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-2"></div>
              <div className="col-5 ">
                <button
                  type="submit"
                  className="input-content save-button"
                  onClick={
                    editItem ? handleUpdateDataStudent : handleAddDataSubmit
                  }>
                  Save
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
