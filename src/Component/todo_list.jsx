import { Button, Container, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect } from "react";
import { useState } from "react";
import DataHolder from "./data_holder";
const useStyles = makeStyles({
  btn: {
    backgroundImage:
      "linear-gradient(to right, #1FA2FF 0%, #12D8FA  51%, #1FA2FF  100%)",
    margin: "10px",
    padding: " 15px 45px",
    textAlign: "center",
    textTransform: " uppercase",
    transition: "0.5s",
    backgroundSize: "200% auto",
    color: "white",
    boxShadow: "0 0 20px #eee",
    borderRadius: " 10px",
    display: " block",

    "&:hover": {
      backgroundPosition:
        "right center" /* change the direction of the change here */,
      color: "#fff",
      textDecoration: "none",
    },
  },
  main_title: {
    color: "#1FA2FF ",
  },
});
const Todolist = () => {
  const [nameError, setNameError] = useState(false);
  const [prizeError, setPriceError] = useState(false);
  const [name, setName] = useState("");
  const [id, setId] = useState(1);
  const [price, setPrice] = useState("");
  const [select, setSelect] = useState(false);
  const classes = useStyles();
  const [todoData, setTodoData] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setNameError(false);
    setPriceError(false);
    if (name && price) {
      setNameError(false);
      setPriceError(false);
      //   console.log("Name :", name);
      //   console.log("Prize :", price);
      let tododata = {
        id,
        name,
        price,
        select,
      };
      setTodoData([...todoData, tododata]);
      setName("");
      setPrice("");
      setId((prevId) => prevId + 1);
      //   console.log(todoData);
    }
    if (name === "") {
      setNameError(true);
    }
    if (price === "") {
      setPriceError(true);
    }
  };
  const handleCheck = (index) => {
    const checkValue = [...todoData];
    checkValue[index].select = !checkValue[index].select;

    setTodoData(checkValue);
  };

  const handleDelete = (index) => {
    const newData = todoData.filter((data, i) => i !== index);
    setTodoData(newData);
    console.log("click");
  };
  return (
    <Container>
      <Typography
        variant="h3"
        gutterBottom
        component="h3"
        className={classes.main_title}
      >
        Todo List
      </Typography>
      <form autoComplete="off">
        <TextField
          variant="outlined"
          id="name"
          label="Name"
          fullWidth
          required
          helperText="Please Enter Your Name"
          margin="dense"
          value={name}
          error={nameError}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <TextField
          variant="outlined"
          id="price"
          label="Price"
          type="number"
          fullWidth
          required
          helperText="Please Enter Your Name"
          margin="dense"
          error={prizeError}
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <Button
          variant="contained"
          fullWidth
          className={classes.btn}
          onClick={handleSubmit}
        >
          Add List
        </Button>
      </form>
      <DataHolder
        data={todoData}
        handleCheck={handleCheck}
        onDelete={handleDelete}
      />
    </Container>
  );
};

export default Todolist;
