import React from "react";

export default function ReadRow(item, deleteData) {
  return (
    <tr key={[item.id]}>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.age}</td>
      <td>{item.school}</td>
      <td>{item.classes}</td>
      <td>{item.division}</td>
      <td>{item.status}</td>
      <td>
        <a href="#">Edit</a>
      </td>
      <td>
        <a href="#" onClick={() => deleteData(item.id)}>
          Delete
        </a>
      </td>
    </tr>
  );
}
