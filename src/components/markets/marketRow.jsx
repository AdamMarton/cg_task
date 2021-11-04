import { fetchCoin } from '../coins/coinsSlice';
import store from '../../store';
import { Row, Column, Logo } from  './style';

export const MarketRow = ({ row }) => {
  const getDetails = () => {
    store.dispatch(fetchCoin(row.id));
  };

  return (
    <Row key={ row.id } onClick={ getDetails }>
      <Column><Logo src={ row.image } /></Column>
      <Column>{ row.name }</Column>
      <Column>{ row.symbol }</Column>
      <Column>{ row.current_price }</Column>
      <Column>{ row.high_24h }</Column>
      <Column>{ row.low_24h }</Column>
    </Row>
  )
};