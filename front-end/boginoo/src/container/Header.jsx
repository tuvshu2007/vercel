import React from "react";
import { Link } from "react-router-dom";

const styles = {
  home: {
    display: "flex",
    justifyContent: "space-around",
    gap: "40px",
    marginTop: "50px",
    marginRight: "100px",
  },
  header: {
    fontFamily: "Ubuntu",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "23px",
    color: "#02B589",
  },
  input: {
    height: "35px",
    width: "120px",
    backgroundColor: "#02B589",
    borderRadius: "100px",
    color: "white",
    fontFamily: "Ubuntu",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "23px",
    border: 0,
  },
  button: {
    height: "35px",
    width: "120px",
    backgroundColor: "#02B589",
    borderRadius: "100px",
    color: "white",
    fontFamily: "Ubuntu",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "23px",
    border: 0,
  },
};
const Header = () => {
  return (
    <div>
      <div style={styles.home}>
        <Link to="/History">
          <button style={styles.button}>History</button>
        </Link>
        <div style={{ display: "flex", gap: "30px" }}>
          <div style={styles.header}>Хэрхэн ажилладаг вэ?</div>
          <button style={styles.input}>Нэвтрэх</button>
        </div>
      </div>
    </div>
  );
}
export default Header