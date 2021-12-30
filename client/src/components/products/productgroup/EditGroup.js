import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { localserver } from "../../../config";

const EditGroup = () => {
  const [groupid, setgroupId] = useState("");
  const [groupname, setgroupName] = useState("");
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    getGroupById();
  }, []);

  const updateGroup = async (e) => {
    e.preventDefault();
    await axios.patch(`${localserver}/productgroups/${id}`, {
      groupid: groupid,
      groupname: groupname,
    });
    history.push("/productgroups");
  };

  const getGroupById = async () => {
    const response = await axios.get(`${localserver}/productgroups/${id}`);
    setgroupId(response.data.groupid);
    setgroupName(response.data.groupname);
  };

  return (
    <div>
                  
      <form onSubmit={updateGroup}>
                        
        <div className="field">
                              <label className="label">Title</label>
                              
          <input
            className="input"
            type="text"
            placeholder="Group ID"
            value={groupid}
            onChange={(e) => setgroupId(e.target.value)}
          />
                          
        </div>
                          
        <div className="field">
                              <label className="label">Price</label>
                              
          <input
            className="input"
            type="text"
            placeholder="Price"
            value={groupname}
            onChange={(e) => setgroupName(e.target.value)}
          />
                          
        </div>
                          
        <div className="field">
                              
          <button className="button is-primary">Update</button>
                          
        </div>
                    
      </form>
              
    </div>
  );
};
export default EditGroup;
