import React, { useState } from "react";
import "./AddStudent.css";
import TextField from "@material-ui/core/TextField";

export default function AddStudent() {
  console.log("AddStudent");
  const [data, setData] = useState({});

  const onInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData((prev) => ({ ...prev, [name]: value }));
  };
  const SaveData = () => {
    Object.entries(data).forEach(([name, value]) => {
      console.log("name", name, "value", value);
      localStorage.setItem(name, value);
    });
  };
  return (
    <div className="col-sm-10">
      {console.log("data", data)}
      <div className="row ">
        <div className="col-12">
          <p className="mt-2 add-student-heading">Add Student</p>
        </div>
        <div className="col-12">
          <div className="row mt-5">
            <div className="col-2">
              <label>Full Name:</label>
            </div>
            <div className="col-5">
              <input
                placeholder="Name"
                name="full_name"
                className="input-content"
                type="text"
                value={data["full_name"] ? data["full_name"] : ""}
                onChange={(e) => onInputChange(e)}
              />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-2">
              {" "}
              <label>Date Of Birth</label>
            </div>
            <div className="col-5">
              <TextField
                className="input-content"
                name="dob"
                id="dob"
                type="date"
                defaultValue="DD-MM-YY"
                value={data["dob"] ? data["dob"] : ""}
                onChange={(e) => onInputChange(e)}
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
                value={data["school"] ? data["school"] : ""}
                onChange={(e) => onInputChange(e)}>
                <option value="" disabled selected hidden>
                  Select
                </option>
                <option value="mps">Modern Public School</option>
                <option value="dps">Delhi Public School</option>
                <option value="pms">PMS Public School</option>
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
                value={data["class"] ? data["class"] : ""}
                onChange={(e) => onInputChange(e)}>
                <option value="" disabled selected hidden>
                  Select
                </option>
                <option value="one">1</option>
                <option value="two">2</option>
                <option value="three">3</option>
                <option value="four">4</option>
                <option value="five">5</option>
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
                value={data["division"] ? data["division"] : ""}
                onChange={(e) => onInputChange(e)}>
                <option value="" disabled selected hidden>
                  Select
                </option>
                <option value="a">A</option>
                <option value="b">B</option>
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
                value="active"
                checked={data["status"] === "active"}
                name="status"
                onChange={(e) => onInputChange(e)}
              />{" "}
              Active
              <input
                className="ms-4"
                type="radio"
                value="invoice"
                name="status"
                checked={data["status"] === "invoice"}
                onChange={(e) => onInputChange(e)}
              />{" "}
              Invoice
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-2"></div>
            <div className="col-5 ">
              <button className="input-content save-button" onClick={SaveData}>
                Save{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
