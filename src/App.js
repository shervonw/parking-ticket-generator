import { useEffect, useState } from "react";
import styled from "styled-components";
import { PERMIT_LENGTH } from "./constants";
import { Permit } from "./Permit";

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 56px;
  width: 320px;
  margin: auto;
`;

function App() {
  const [permitLength, setPermitLength] = useState()
  const [plateNo, setPlateNo] = useState('CBMN830')

  useEffect(() => {
    if (permitLength) {
      setTimeout(() => {
        window.print();
        setPermitLength();
      }, 1000)
    }
  }, [permitLength])

  return (
   <div>
     <div className="no-print">
       <ButtonWrapper>
        <label htmlFor="plateNo">Plate:</label>
        <input id="plateNo" type="text" onChange={(e) => setPlateNo(e.target.value)} />
        </ButtonWrapper>
        <br />
        <ButtonWrapper>
          {Object.entries(PERMIT_LENGTH).map(([key, value]) => (
            <button key={key} onClick={()=> setPermitLength(value)}>
              {key}
            </button>
          ))}
        </ButtonWrapper>
      </div>
      {permitLength && (
        <Permit permitLength={permitLength} plateNo={plateNo} />
      )}
    </div>
  );
}

export default App;
