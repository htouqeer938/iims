import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { localserver } from "../../../config";

const AddGroup = () => {
  let [groupid, setgroupid] = useState("");
  const [groupname, setgroupname] = useState("");

  const history = useHistory();

  const saveproductgroup = async (e) => {
    e.preventDefault();
    await axios.post(`${localserver}/productgroups`, {
      groupid: groupid,
      groupname: groupname,
    });
    history.push("/productgroups");
  };

  return (
    <div>
      <form onSubmit={saveproductgroup}>
        <div className="field">
          <label className="label">Group ID</label>
          <input
            className="input"
            type="text"
            placeholder="Group ID"
            value={groupid}
            onChange={(e) => setgroupid(e.target.value)}
          />
        </div>

        <div className="field">
          <label className="label">Group Name</label>
          <input
            className="input"
            type="text"
            placeholder="Group Name"
            value={groupname}
            onChange={(e) => setgroupname(e.target.value)}
          />
        </div>

        <div className="field">
          <button className="button is-primary">Save</button>
        </div>
      </form>
    </div>
  );
};

export default AddGroup;
