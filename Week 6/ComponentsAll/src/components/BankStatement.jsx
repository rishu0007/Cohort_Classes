import React, { useEffect } from "react";
import { useState } from "react";

function BankStatement() {
  const [exchangeData, setExchangeData] = useState({});
  const [bankData, setBankData] = useState({});

  console.log("re-rendering");

  useEffect(() => {
    setTimeout(() => {
      setBankData({
        income: 100,
      });
    }, 3000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setExchangeData({
        returns: 100,
      });
    }, 1000);
  }, []);

  const incomeTax = (bankData.income + exchangeData.returns) * 0.3;

  return <div>hii, your income tax returns are {incomeTax}</div>;
}

export default BankStatement;
