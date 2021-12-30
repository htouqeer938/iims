import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { localserver } from "../../../config";

const GroupList = () => {
  const [productsgroup, setProductgroup] = useState([]);

  useEffect(() => {
    getproductsGroup();
  }, []);

  const getproductsGroup = async () => {
    const responce = await axios.get(`${localserver}/productgroups`);
    setProductgroup(responce.data);
  };

  const deletegroup = async (id) => {
    await axios.delete(`${localserver}/productgroups/${id}`);
    getproductsGroup();
  };

  return (
    <div>
      <Link to="/productgroups/addgroup" className="button is-primary mt-2">
        Add Group
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Group ID</th>
            <th>Group Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {productsgroup.map((i, index) => (
            <tr key={i.id}>
              <td> {index + 1} </td>
              <td> {i.groupid} </td>
              <td> {i.groupname} </td>
              <td>
                <Link
                  to={`/productgroups/editgroup/${i.id}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                                 
                <button
                  onClick={() => deletegroup(i.id)}
                  className="button is-small is-danger"
                >
                  Delete
                </button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GroupList;
