const Exponent = ({ num, exponent }) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">
      {num}
      <span style={{ verticalAlign: "super", fontSize: "60%" }}>
        {exponent}
      </span>
    </p>
    <p className="exponent-result">
      {num} {` * ${num}`.repeat(num == 0 ? 0 : num - 1)} ={" "}
      <span className="total">{Math.pow(num, exponent)}</span>
    </p>
  </div>
);

export default Exponent;
