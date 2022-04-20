import { addDays } from "date-fns";
import JsBarcode from "jsbarcode";
import { useEffect } from "react";
import styled from "styled-components";
import logo from "./assets/city_of_toronto_logo.png";
import { formatDate, getPermitNumber } from "./utils";


const PermitWrapper = styled.div`
  margin: auto;
  padding: 7rem 7rem 0;
  width: 360px;
  transform: scale(0.82);
`;

const PermitDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 310.08px;

  & p {
    font-size: 1.04rem;
    margin-top: 1rem;
    margin-bottom: 0;
    letter-spacing: 0.1px;
  }
`

const PermitDetailsListWrapper = styled.div`
  display: grid;
  grid-template-columns: 36% auto;
`

const Logo = styled.img`
  margin: auto;
  width: 170px;
`;

const Title = styled.p`
  margin-bottom: 2rem !important;
  margin-top: 0.3rem !important;
  text-align: center;
`;

const BarcodeWrapper = styled.div`
  margin-left: 6rem;
  margin-top: 0.3rem;

  & svg {
    transform: scale(1.3, 1) !important;
  }
`;

const Zone = styled.h1`
  text-align: center;
  font-size: 2.2rem;
  letter-spacing: -2px;
  margin-top: 0.75rem;
  margin-left: 3.7rem;
  margin-bottom: 0.5rem;
`;

const DisclaimerWrapper = styled.div`
  font-size: 0.75rem;
  margin-top: 1.5rem;
  text-align: right;
  width: 100%;
`;


export const Permit=({permitLength, plateNo})=> {
  const now = new Date();
  const permitNumber = getPermitNumber(now);

  useEffect(() => {
    JsBarcode("#barcode").init();
  }, [])

  return (
    <PermitWrapper>
      <PermitDetailsWrapper>
        <Logo alt="city of toronto logo" src={logo} />
        <Title>Temporary Parking Permit</Title>
        <PermitDetailsListWrapper>
          <p>Valid from:</p>
          <p>{formatDate(now)}</p>

          <p>Valid to:</p>
          <p>{formatDate(addDays(now, permitLength))}</p>
        </PermitDetailsListWrapper>
        <BarcodeWrapper>

        <svg 
          id="barcode"
          jsbarcode-format="code39"
          jsbarcode-value={permitNumber}
          jsbarcode-textmargin="0"
          jsbarcode-height="60"
          jsbarcode-width="1"
          jsbarcode-displayvalue="false"
          jsbarcode-linecolor="#"
        />
        </BarcodeWrapper>
        <Zone>
          9A
        </Zone>
        <PermitDetailsListWrapper>
          <p>Permit no.:</p>
          <p>T{permitNumber}</p>

          <p>Plate no.:</p>
          <p>{plateNo}</p>

          <p>Issued:</p>
          <p>{formatDate(now)}</p>
        </PermitDetailsListWrapper>
      
      </PermitDetailsWrapper>
      <DisclaimerWrapper>
        <i>Clearly display in vehicle</i>
      </DisclaimerWrapper>
    </PermitWrapper>
  );
}

