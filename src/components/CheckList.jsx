import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import "../App.css";
import { store } from "..";
import { checkCategory } from "../store/actions";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 180,
  },
}));
function CheckList() {
  const cuisinFile = useSelector((state) => state.cuisinFile);
  const classes = useStyles();
  const [state, setState] = React.useState([]);

  useEffect(() => {
    store.dispatch(checkCategory(state));
  }, [state]);
  const handleChange = (event) => {
    if (state.includes(event.target.name)) {
      setState(state.filter((item) => item !== event.target.name));
    } else {
      setState([...state, event.target.name]);
    }
  };

  return (
    <div className="block">
      <FormGroup column>
        {cuisinFile &&
          cuisinFile.map((item) => (
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.includes(item.name) ? true : false}
                  name={item.name}
                  onChange={handleChange}
                />
              }
              label={item.name.toUpperCase()}
            />
          ))}
      </FormGroup>
    </div>
  );
}

export default CheckList;
