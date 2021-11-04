import { fetchCoin } from '../coins/coinsSlice';
import store from '../../store';
import styled from 'styled-components';

const Row = styled.div`
  border-bottom: 1px solid #eee;
  cursor: pointer;
  display: flex;
  overflow: auto;
  padding: 1rem;
`

const Column = styled.div`
  align-self: center;
  flex: 1;
`

const Logo = styled.img`
  width: 80px;
`

export const MarketRow = ({row}) => {
  const getDetails = () => {
    store.dispatch(fetchCoin(row.id));
  };
  return (
    <Row key={row.id} onClick={getDetails}>
      <Column><Logo src={row.image} /></Column>
      <Column>{row.name}</Column>
      <Column>{row.symbol}</Column>
      <Column>{row.current_price}</Column>
      <Column>{row.high_24h}</Column>
      <Column>{row.low_24h}</Column>
    </Row>
  )
};