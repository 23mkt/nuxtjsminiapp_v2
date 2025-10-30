import "./index.css";
import { Button } from "antd-mobile";

function Footer() {
  const closeApp = () => {
    window.WindVane.call(
      "WVNavigator",
      "pop",
      {},
      function (e) {
        console.log("Close successfully");
      },
      function (e) {
        alert("Failed to close");
      }
    );
  };

  return (
    <div id="home-footer-container">
      <Button
        color="warning"
        style={{ width: "94%", marginBottom: "5px" }}
        block
        onClick={closeApp}
      >
        Exit
      </Button>
    </div>
  );
}

export default Footer;
