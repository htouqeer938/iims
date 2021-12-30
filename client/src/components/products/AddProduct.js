import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { localserver } from "../../config";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [productgroup, setProductgroup] = useState([]);
  const [groupId, setGroupId] = useState("");

  const history = useHistory();

  useEffect(() => {
    getproductsGroup()
  }, [])


  const saveProduct = async (e) => {
    // const newArr = [...productgroup]
    // newArr.filter((item) => String(item.groupid) === groupId)
    // console.log(newArr.filter((item) => String(item.groupid) === groupId))
    //console.log(groupId)
    e.preventDefault();
    await axios.post(`${localserver}/products`, {
      title: title,
      price: price,
    });
    history.push("/products");
  };

  const getproductsGroup = async () => {
    const responce = await axios.get(`${localserver}/productgroups`);
    //console.log(responce.data)
    setProductgroup(responce.data);
  };

  return (
    <div>
      <form onSubmit={saveProduct}>

        <div className="field">
          <label className="label">Title</label>

          <input
            className="input"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

        </div>

        <div className="field">
          <label className="label">Price</label>

          <input
            className="input"
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

        </div>

        <div className="field">
          <label className="label">Product Group</label>
          <select
            value={groupId}
            onChange={(e) => setGroupId(e.target.value)}
            className="input"
          >
            <option>select Group</option>
            {productgroup && productgroup.map((item) => <option key={item.groupid} value={item.groupid}>{item.groupname}</option>)}
          </select>
        </div>

        <div className="field">

          <button className="button is-primary">Save</button>

        </div>

      </form>
    </div>
  );
};

export default AddProduct;
