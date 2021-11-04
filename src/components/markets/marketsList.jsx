import { CoinDetails } from '../coins/coinDetails';
import { MarketRow } from './marketRow';
import styled from 'styled-components';
import { useSelector } from "react-redux";

const Header = styled.div`
  border-bottom: 2px solid #eee;
  display: flex;
  font-weight: bold;
  padding: 1rem;
`

const Column = styled.div`
  align-self: center;
  flex: 1;
`

const MarketsList = (props) => {
  const { markets } = props;
  const coin = useSelector(state => state.coins);

  return (
    <div>
      <CoinDetails coin={coin} />
      <Header className="header">
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
}

export default MarketsList;