import { useState } from "react";

const IncomeTaxForm = () => {
  const [name, setName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [income, setIncome] = useState("");

  const calculateIncomeTax = (name, email, income) => {
    let taxAmount;
    if (income <= 250000) {
      taxAmount = 0;
    } else if (income > 250000 && income <= 500000) {
      taxAmount = 12500;
    } else if (income > 500001 && income <= 750000) {
      taxAmount = 25000;
    } else if (income > 750000 && income <= 1000000) {
      taxAmount = 37500;
    } else if (income >1000000 && income < 1250000) {
      taxAmount = 50000;
    } else if (income > 1250000 && income < 1500000) {
      taxAmount = 62500;
    } else if (1500000) {
      taxAmount = 0;
    }


    return taxAmount;
  };
  const handleSubmit = (event) => {
     event.preventDefault();

    // call function to calculate income tax based on the input values
    const taxAmount = calculateIncomeTax(name, email, income);
    console.log(taxAmount);
  };

  return (
    <div className="tax">
      <div className="tax_Form">
        <form >
          <label name="name">Employee Name :</label>
          <input
            type="text"
            id="name"
            name="name"
            vlaue={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          ></input>
          <label name="email">EmailID : </label>
          <input
            type="email"
            id="email"
            name="name"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            required
          ></input>
          <label name="total">Get Total Tax :</label>
          <input
            type="text"
            name="income"
            onChange={(event) => {
              setIncome(event.target.value);
            }}
          ></input>

          <div className="btn">
            <button type="submit" onClick={handleSubmit}>
              Tax
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default IncomeTaxForm;
