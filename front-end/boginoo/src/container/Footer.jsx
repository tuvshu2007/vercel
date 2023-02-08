import React from 'react'

const styles = {
    body: {
      display: "flex",
      justifyContent: "center"
    },
  up: {
    fontFamily: "Ubuntu",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "18px",
    color: "black"
  },
  down: {
    fontFamily: "Ubuntu",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "18px",
    color: "black",
    opacity: 0.2,
    marginLeft: "40px"
  },
};

export const Footer = () => {
  return (
    <div style={styles.body}>
        <div style={{display: "flex", flexDirection: "column"}}>
      <div style={styles.up}>Made with ♥️ by Nest Academy</div>
      <div style={styles.down}>©boginoo.io 2020</div>
      </div>
    </div>
  );
}
export default  Footer