import { useState } from "react";

const IncomeTaxForm = () => {
  const [name, setName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [income, setIncome] = useState("");

  
   const handleSubmit= (event)=>{
    event.preventDefault();
   }

  
     // call function to calculate income tax based on the input values

     const taxAmount = calculateIncomeTax(name,email,income);

      const calculateIncomeTax= (name ,email,income ) =>{
        
        let taxAmount;
        if(income <= 250000){
            taxAmount = income*0;
        } else if(income>= 250001 && income <= 500000)

        {
            taxAmount=250001+(income-250001) *5;
        }else if(income >=500001 && income <=750000) {
            taxAmount=15000 +(income-100000) * 0.3;
        }
        return taxAmount;
      }
      
  

     // Display the calculated tax amount 

     alert(`your income tax is ${taxAmount}`)

 

  return (
    <div className="tax">
      <div className="tax_Form">
        <form onSubmit={handleSubmit()}>
          <label name="name">Employee Name :</label>
          <input
            type="text"
            id="name"
            name="name"
            vlaue={name}
            onChange={(event)=>{setName(event.target.value)}}
          ></input>
          <label name="email">EmailID : </label>
          <input
            type="email"
            id="email"
            name="name"
            value={email}
            onChange={(event)=>{setEmail(event.target.value)}}
            required
          ></input>
          <label name="total">Get Total Tax :</label>
          <input type="text" name="income" onChange={(event)=>{
           setIncome( event.target.value)
          }}></input>

          <div className="btn">
               <button type="submit"  >Tax</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default IncomeTaxForm;
