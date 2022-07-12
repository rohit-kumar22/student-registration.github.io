import React from "react";
import "./EditableRow.css";

export default function EditableRow() {
  return (
    <tr>
      <td>
        <input
          className="input-content1 ms-0"
          type="text"
          required="required"
          placeholder="Enter id"
          name="id"></input>
      </td>
      <td>
        <input
          className="input-content1"
          type="text"
          required="required"
          placeholder="Full Name"
          name="name"></input>
      </td>
      <td>
        <input
          className="input-content1"
          type="text"
          required="required"
          placeholder="Age"
          name="age"></input>
      </td>

      <td>
        <select className="input-content1" name="school">
          <option value="" disabled selected hidden>
            Select
          </option>
          <option value="Modern Public School">Modern Public School</option>
          <option value="Delhi Public School">Delhi Public School</option>
          <option value="PMS Public School">PMS Public School</option>
        </select>
      </td>
      <td>
        <select className="input-content1" name="class">
          <option value="" disabled selected hidden>
            Select
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </td>
      <td>
        <select required className="input-content1" name="division">
          <option value="" disabled selected hidden>
            Select
          </option>
          <option value="A">A</option>
          <option value="B">B</option>
        </select>
      </td>
      <td>
        <select required className="input-content1" name="status">
          <option value="" disabled selected hidden>
            Select
          </option>
          <option value="Active">Active</option>
          <option value="Invoice">Invoice</option>
        </select>
      </td>
    </tr>
  );
}
