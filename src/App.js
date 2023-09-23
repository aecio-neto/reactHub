import { useState } from "react";

export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage percentage={percentage1} onSelect={setPercentage1}>
        Você gostou do serviço?
      </SelectPercentage>
      <SelectPercentage percentage={percentage2} onSelect={setPercentage2}>
        Seu amigo gostou do serviço?
      </SelectPercentage>

      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>Quando deu a conta?  </label>
      <input
        type="number"
        placeholder="insira um valor"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}

function SelectPercentage({ children, percentage, onSelect }) {
  return (
    <div>
      <label>{children}  </label>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Não foi bom (0%)</option>
        <option value="5">Foi Ok (5%)</option>
        <option value="10">Muito bom (10%)</option>
        <option value="20">Magnífico (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <h3>
      Você vai pagar ${bill + tip} (${bill} + ${tip} gorjeta)
    </h3>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Limpar tudo</button>;
}




// Como eu fiz
// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [total, setTotal] = useState(0);
//   const [tips, setTips] = useState({});

//   function calculateTip(newTip, id) {
//     setTips((prevTips) => ({ ...prevTips, [id]: newTip }));
//   }

//   const tipValues = Object.values(tips);
//   const totalTip = tipValues.length > 0 ? tipValues.reduce((acc, tip) => acc + tip, 0) / tipValues.length : 0;
//   const totalAmount = parseFloat(total) + totalTip;

//   return (
//     <div className="App">
//       <Bill total={total} setTotal={setTotal} />
//       <TipQuerie id="1" total={total} calculateTip={calculateTip}>
//         Você gostou do serviço?
//       </TipQuerie>
//       <TipQuerie id="2" total={total} calculateTip={calculateTip}>
//         Seu amigo gostou do serviço?
//       </TipQuerie>
//       <Result total={totalAmount} tip={totalTip} />
//     </div>
//   );
// }

// function Bill({ total, setTotal }) {
//   return (
//     <div>
//       <label htmlFor="total">Quanto deu a conta? </label>
//       <input
//         type="number"
//         value={total}
//         onChange={(e) => setTotal(e.target.value)}
//         id="total"
//         name="total"
//         placeholder="Insira o valor"
//       />
//     </div>
//   );
// }

// function TipQuerie({ children, calculateTip, total, id }) {
//   function handleChange(e) {
//     const selectedOption = parseFloat(e.target.value);
//     const newTip = (selectedOption / 100) * parseFloat(total);
//     calculateTip(newTip, id);
//   }

//   return (
//     <div>
//       <label htmlFor={`meuSelect-${id}`}>{children}</label>
//       <select id={`meuSelect-${id}`} onChange={handleChange}>
//         <option value="0">Selecione uma opção</option>
//         <option value="5">Foi ok (5%)</option>
//         <option value="10">Foi muito bom (10%)</option>
//         <option value="15">Magnífico (15%)</option>
//       </select>
//     </div>
//   );
// }

// function Result({ total, tip }) {
//   return <p>{`Você pagará R$${total.toFixed(2)} (R$${tip.toFixed(2)} de gorjeta)`}</p>;
// }

// export default App;

