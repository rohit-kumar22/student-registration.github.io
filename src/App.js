import React from "react";
import AddStudent from "./AddStudent";
import "./App.css";
import ViewStudent from "./ViewStudent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function App() {
  const chevronArrow = <FontAwesomeIcon icon={faChevronDown} />;
  const groupIcon = <FontAwesomeIcon icon={faUserGroup} />;
  const addUser = <FontAwesomeIcon icon={faUserPlus} />;

  const studentSideBarList = {
    VIEW: { name: "View Student", icon: groupIcon },
    ADD: { name: "Add Student", icon: addUser },
  };

  const [selectedItem, setSelectedItem] = useState(
    studentSideBarList.VIEW.name
  );

  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row title-row d-flex">
          <p className="my-auto">TUNICALABS MEDIA</p>
        </div>
        <div className="row px-5">
          <div className="col-12 mt-5 form-detail-box">
            <div className="row">
              <div className="col-sm-2 student-side-bar">
                <div className="chevron">
                  <div className="side-button">
                    <button className=" mt-2 side-button">
                      <p className="">
                        Student
                        <span style={{ fontSize: "15px" }}>
                          &emsp;&emsp;&emsp;&emsp;{chevronArrow}
                        </span>
                      </p>
                    </button>
                    <div style={{ fontSize: "1.5rem" }}>
                      {Object.values(studentSideBarList).map((item) => (
                        <div
                          className="c-pointer"
                          style={{ cursor: "pointer" }}
                          onClick={() => setSelectedItem(item.name)}>
                          <p
                            style={{
                              fontSize: "1.2rem",
                              fontWeight: "400",
                              color: `${
                                selectedItem === item.name ? "red" : "black"
                              }`,
                            }}>
                            {item.icon}&emsp;{item.name}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div></div>
                <div></div>
              </div>
              {console.log(
                "selectedItem",
                selectedItem,
                "studentSideBarList.VIEW.name",
                studentSideBarList.VIEW.name
              )}
              {studentSideBarList.VIEW.name === selectedItem && <ViewStudent />}
              {studentSideBarList.ADD.name === selectedItem && <AddStudent />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
