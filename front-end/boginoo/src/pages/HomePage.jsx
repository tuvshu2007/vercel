import React from "react";
import Logo from "../container/boginoo.png";
import { useState } from "react";
import axios from 'axios'

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
  url: {
    color: "black",
    opacity: 0.5,
    paddingTop: "100px",
    fontWeight: 800,
  },
  copy: {
    height: "30px",
    width: "75px",
    backgroundColor: "#02B589",
    color: "white",
    borderRadius: "100px",
    fontFamily: "Ubuntu",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "23px",
    marginTop: "10px"
  },
};
export const Homepage = () => {
  const [point, setPoint] = useState("")

  const [short, setShort] = useState('')
  const [url, setUrl] = useState() 
  const change = async () => {
    await axios
      .post("http://localhost:8000/links", { link: point })
      .then((response) => {
        setUrl(response.data.data.link);
        setShort(response.data.data.short);
      })
      .catch((error) => console.log(error));
  }
  const Funct = ({link, short}) => {
    const value = 'histroy'
    return (
      <div >
        <div>Өгөгдсөн холбоос:</div>
        <p>{link}</p>
        <div style={{ paddingTop: "100px" }}>Богино холбоос:</div>
        <div style={{display:"flex", gap: "30px"}}>
          <p>{short}</p>
          <button style={styles.copy} onClick={() => {navigator.clipboard.writeText(short)}}>copy</button>
        </div>
      </div>
    );
  }
  return (
    <div style={styles.container1}>
      <img src={Logo} style={styles.img} />
      <div style={{ marginTop: "40px" }}>
        <input
          placeholder="https://www.web-huudas.mn"
          style={styles.input}
          onChange={(e) => setPoint(e.target.value)}
        />
        <button style={styles.button} onClick={change}>
          Богиносгох
        </button>
        <div style={styles.url}>
       <Funct link={url} short={short}/>
        </div>
      </div>
    </div>
  );
};
