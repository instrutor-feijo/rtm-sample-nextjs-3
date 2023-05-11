import "bootstrap/dist/css/bootstrap.min.css";
import { Button as MuiButton, Icon, TextField } from "@mui/material";
import { Dropdown, DropdownButton, SplitButton } from "react-bootstrap";

const Cover = () => {
  const onButtonContainedTextAndIcoClick = (e) => {
    fetch("https://nodejs-api-beige.vercel.app/departamentos")
      .then((response) => {
        document.getElementById("result").innerHTML = JSON.stringify(
          response.json()
        );
      })
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "#fff",
        width: "100%",
        height: "768px",
        overflow: "hidden",
        textAlign: "left",
        fontSize: "24px",
        color: "#000",
        fontFamily: "Jaldi",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "26px",
          left: "0px",
          backgroundColor: "#f3f3f3",
          width: "1024px",
          height: "768px",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "0px",
          left: "0px",
          backgroundColor: "#020202",
          width: "1024px",
          height: "76px",
        }}
      />
      <div style={{ position: "absolute", top: "96px", left: "32px" }}>
        Edge Functions
      </div>
      <div
        style={{
          position: "absolute",
          top: "18px",
          left: "32px",
          color: "#ff7a00",
        }}
      >
        Real Time Manager
      </div>
      <DropdownButton
        style={{
          width: "121px",
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          top: "174px",
          left: "32px",
        }}
        title="Dropdown"
        variant="primary"
        align="start"
        drop="down"
      >
        <Dropdown.Item>A</Dropdown.Item>
        <Dropdown.Item>B</Dropdown.Item>
        <Dropdown.Item>C</Dropdown.Item>
      </DropdownButton>
      <MuiButton
        style={{
          position: "absolute",
          top: "247px",
          left: "32px",
          cursor: "pointer",
        }}
        variant="contained"
        name="btn"
        id="btn"
        color="primary"
        endIcon={<Icon>arrow_forward_sharp</Icon>}
        onClick={onButtonContainedTextAndIcoClick}
      >
        CALL API
      </MuiButton>
      <TextField
        style={{ position: "absolute", top: "174px", left: "432px" }}
        sx={{ width: 562 }}
        color="primary"
        variant="outlined"
        multiline
        name="result"
        id="result"
        label="Label"
        placeholder="Textarea placeholder"
        margin="none"
      />
    </div>
  );
};

export default Cover;
