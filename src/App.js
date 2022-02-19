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

  useEffect(() => {
    if (permitLength) {
      setTimeout(() => {
        window.print();
      }, 1000)
    }
  }, [permitLength])

  return (
   <div>
     <ButtonWrapper className="no-print">
      {Object.entries(PERMIT_LENGTH).map(([key, value]) => (
        <button key={key} onClick={()=> setPermitLength(value)}>
          {key}
        </button>
      ))}
     </ButtonWrapper>
    {permitLength && (
      <Permit permitLength={permitLength} />
    )}
   </div>
  );
}

export default App;
