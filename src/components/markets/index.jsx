import React from 'react';
import { useSelector } from "react-redux";
import { MarketsList } from './marketsList';

export const Markets = () => {
  const markets = useSelector(state => state.markets);
  return (
    markets.length === 'undefined' ? <div>Loading...</div> : <MarketsList markets={ markets } />
  );
};