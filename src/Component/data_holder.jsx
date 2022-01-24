import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
  Button,
  Checkbox,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Pill } from "evergreen-ui";
import React from "react";
import { useState, useEffect } from "react";

const useStyles = makeStyles({
  title: {
    marginTop: 50,
    color: "#1FA2FF ",
  },
  pill: {
    padding: "10px 15px 25px 15px",
  },
});
const DataHolder = ({ data, onDelete, handleCheck }) => {
  const classes = useStyles();
  //   console.log(data);
  const [addValue, setAddValue] = useState([]);
  const [total, setTotal] = useState();
  // const addValue_array = (array_data) => {
  //   setAddValue(array_data.price);
  //   const value = array_data.price;
  //   const check_data = {
  //     value,
  //   };
  //   setAddValue([...addValue, check_data]);
  //   console.log(addValue);
  //   var sum = 0;
  //   for (var i = 0; i < addValue.length; i++) {
  //     var sum = sum + parseInt(addValue[i].value);
  //   }
  //   setTotal(sum);
  // };
  // const remove_value = (data) => {
  //   console.log(data);
  //   const remove_value = data.price;
  //   setTotal(total - remove_value);
  // };
  const getTotal = () => {
    let temp = 0;
    data.map((t) => {
      if (t.select) temp += parseInt(t.price);
    });
    setTotal(temp);
  };

  useEffect(() => {
    getTotal();
  }, [data]);
  return (
    <React.Fragment>
      <Typography
        variant="h3"
        // color="primary"
        component="h3"
        className={classes.title}
      >
        Todo DataHolder
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <caption>
            <b>
              <Button variant="contained" onClick={getTotal}>
                Total
              </Button>
              :
              <Pill color="blue" className={classes.pill}>
                {total}
              </Pill>{" "}
              <br></br>
            </b>
          </caption>
          <TableHead>
            <TableRow>
              <TableCell>Sr.no</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Price&nbsp;(₹)</TableCell>
              <TableCell align="right">Select</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((data, index) => (
              <TableRow
                key={data.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell align="right">{data.name}</TableCell>
                <TableCell align="right">{data.price}</TableCell>
                <TableCell align="right">
                  {
                    <Checkbox
                      onChange={(e) => {
                        handleCheck(index);
                      }}
                      size="small"
                    />
                  }
                </TableCell>
                <TableCell align="right">
                  <Button
                    type="button"
                    variant="contained"
                    onClick={() => {
                      onDelete(index);
                    }}
                    endIcon={<DeleteOutlineIcon />}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
};

export default DataHolder;
