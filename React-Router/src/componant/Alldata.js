import axios from "axios";
import React, { useEffect, useState } from "react";

function Alldata() {
  const [emp, setEmp] = useState([]);

  const getall = async () => {
    const res = await axios.get("http://localhost/api/all.php");

    setEmp(res.data);
  };

  useEffect(() => {
    getall();
  }, []);

  return (
    <>
      <table
        className="mt-3 table table-bordered w-50 table-danger"
        align="center"
      >
        <thead>
          <tr>
            <th>Empid</th>
            <th>Empname</th>
            <th>Email</th>
            <th>Contact</th>
            <th>City</th>
          </tr>
        </thead>

        <tbody>
          {emp.map((v) => {
            return (
              <tr>
                <td>{v.eid}</td>
                <td>{v.ename}</td>
                <td>{v.email}</td>
                <td>{v.contact}</td>
                <td>{v.city}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Alldata;
