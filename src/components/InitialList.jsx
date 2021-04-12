import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { store } from "..";
import { filteredData } from "../store/actions";
import ListCard from "./ListCard";

function InitialList() {
  const { restaurantFile } = useSelector((state) => state);
  const { checked } = useSelector((state) => state);
  const { cuisinFile } = useSelector((state) => state);
  const { filtered } = useSelector((state) => state);

  useEffect(() => {
    redundant();
  }, [checked]);

  const redundant = () => {
    var Data = [];
    checked &&
      checked.length > 0 &&
      checked.map((data) => {
        cuisinFile.map((category) =>
          data === category.name
            ? (Data = [...Data, ...category.restaurants])
            : (Data = [...Data])
        );
      });
    var tempData = Data.map((data) => {
      return [data.id, data];
    });
    var final = new Map(tempData);
    console.log([...final.values()]);
    store.dispatch(filteredData([...final.values()]));
  };

  return (
    <div>
      {checked && checked.length === 0
        ? restaurantFile &&
          restaurantFile.length > 0 &&
          restaurantFile.map((user) => <ListCard rest={user} />)
        : filtered &&
          filtered.length > 0 &&
          filtered.map((user) => <ListCard rest={user} />)}
    </div>
  );
}

export default InitialList;
