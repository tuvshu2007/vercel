import React from 'react'
import Logo from "../container/boginoo.png";
import axios from 'axios';
import { useEffect } from 'react';

const styles = {
   container1: {
    width: "100vw",
    height: "85vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  img: {
    height: "118px",
    width: "184px",
  },
  input: {
    height: "44px",
    width: "581px",
    borderRadius: "100px",
    boxShadow: " 0px 1px 5px rgba(0, 0, 0, 0.16)",
    paddingLeft: "20px",
    border: 0,
  },
  button: {
    width: "192px",
    height: "44px",
    backgroundColor: "#02B589",
    borderRadius: "100px",
    color: "white",
    fontFamily: "Ubuntu",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "23px",
    border: 0,
    marginLeft: "40px",
  },
  history: {
    fontFamily: 'Ubuntu',
    fontStyle:"normal",
    fontWeight: 700,
    fontSize: "32px",
    lineHeight: "37px", 
    color: "#02B589",
    marginTop: "30px  "
  }
};

  const History = () => {
  
  return (
    <div style={styles.container1}>
      <img src={Logo} style={styles.img} />
      <div style={{marginTop: "50px"}}>
        <input placeholder="https://www.web-huudas.mn" style={styles.input} />
        <button style={styles.button}>Богиносгох</button>
        <div style={styles.history} >Түүх</div>
      </div>
    </div>
  );
}
export default History