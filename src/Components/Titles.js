import { Box } from "@mui/material";

export default function Titles() {
  const textStyle = {
    textShadow:
      "-1px 1px 0 #d3d3d3, 1px 1px 0 #d3d3d3, 1px -1px 0 #d3d3d3, -1px -1px 0 #d3d3d3",
    textAlign: "center",
    color: "white",
    textTransform: "uppercase",
    fontFamily: "sans-serif",
    fontSize: "105px",
    fontWeight: "600",
  };
  return (
    <Box sx={{justifyContent:"center"}}>
   <div class="whitetext" style={textStyle}>
        what
      </div>
      <div
        style={{
          fontFamily: "sans-serif",
          textTransform: "capitalize",
          textAlign: "center",
          fontSize: "30px",
          fontWeight: "bolder",
          marginTop: "-50px",
        }}
      >
        We Invest
      </div>

      <div class="whitetext" style={textStyle}>
        WHY
      </div>
      <div
        style={{
          fontFamily: "sans-serif",
          textTransform: "capitalize",
          textAlign: "center",
          fontSize: "30px",
          fontWeight: "bolder",
          marginTop: "-50px",
        }}
      >
        We Invest
      </div>

      <div class="whitetext" style={textStyle}>
        WHO
      </div>
      <div
        style={{
          fontFamily: "sans-serif",
          textTransform: "capitalize",
          textAlign: "center",
          fontSize: "30px",
          fontWeight: "bolder",
          marginTop: "-50px",
        }}
      >
        We Invest
      </div>

      <div class="whitetext" style={textStyle}>
        How
      </div>
      <div
        style={{
          fontFamily: "sans-serif",
          textTransform: "capitalize",
          textAlign: "center",
          fontSize: "30px",
          fontWeight: "bolder",
          marginTop: "-50px",
        }}
      >
        We work
      </div>

      <div class="whitetext" style={textStyle}>
        Faq
      </div>
      <div
        style={{
          fontFamily: "sans-serif",
          textTransform: "capitalize",
          textAlign: "center",
          fontSize: "30px",
          fontWeight: "bolder",
          marginTop: "-50px",
        }}
      >
        Need help?
      </div>
    </Box>
  );
}
