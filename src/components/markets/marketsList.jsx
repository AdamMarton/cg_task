import { CoinDetails } from '../coins/coinDetails';
import { MarketRow } from './marketRow';
import { Header, Column } from './style';
import { useSelector } from "react-redux";

export const MarketsList = ({ markets }) => {
  const coin = useSelector(state => state.coins);

  return (
    <div>
      <CoinDetails coin={ coin } />
      <Header>
        <Column>Image</Column>
        <Column>Name</Column>
        <Column>Symbol</Column>
        <Column>Current Price</Column>
        <Column>High 24 hour Price</Column>
        <Column>Low 24 hour Price</Column>
      </Header>
      { markets.map((market) => <MarketRow row={ market} />) }
    </div>
  )
};