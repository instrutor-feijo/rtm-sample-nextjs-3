import { Button, Icon, TextField } from "@mui/material";

const Cover = () => {
  const onButtonContainedTextAndIcoClick = (e) => {
    document.getElementById("result").value = "Loading";
    fetch("https://nodejs-api-beige.vercel.app/edge-functions")
      .then((response) => response.json())
      .then((data) => {
        //console.log(JSON.stringify(data))
        document.getElementById("result").value = JSON.stringify(data);
      })
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
          backgroundColor: "#efefef",
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
      <Button
        style={{
          position: "absolute",
          top: "174px",
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
      </Button>
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
