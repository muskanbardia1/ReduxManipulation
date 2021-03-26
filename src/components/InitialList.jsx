import React from "react";
import { useSelector } from "react-redux";
import ListCard from "./ListCard";

function InitialList() {
  const { restaurantFile } = useSelector((state) => state);
  const { checked } = useSelector((state) => state);
  const { cuisinFile } = useSelector((state) => state);
  return (
    <div>
      {checked && checked.length > 0
        ? checked &&
          checked.length > 0 &&
          checked.map((item, index) =>
            cuisinFile.map((category, i) =>
              item == category.name
                ? category.restaurants.map((user) => <ListCard rest={user} />)
                : null
            )
          )
        : restaurantFile &&
          restaurantFile.length > 0 &&
          restaurantFile.map((user) => <ListCard rest={user} />)}
    </div>
  );
}

export default InitialList;
