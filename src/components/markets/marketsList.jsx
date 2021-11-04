import { fetchCoin, flushCoin } from '../coins/coinsSlice';
import styled from 'styled-components';
import store from '../../store';
import { useSelector } from "react-redux";

const Modal = ({className, coin}) => {
  const closeModal = () => {
    store.dispatch(flushCoin);
  };
  return (
    (typeof coin.id !== 'undefined') ?
      <>
        <Overlay />
        <div className={ className }>
          <CloseButton onClick={closeModal}><strong>🗙</strong></CloseButton>
          <p>Name: {coin.name}</p>
          <p>Symbol: {coin.symbol}</p>
          <p>Hashing Algorithm: {coin.hashing_algorithm}</p>
          <span><p>Description: <span dangerouslySetInnerHTML={{ __html: coin.description.en }} /></p></span>
          <p>Market Cap in Euro: {coin.market_data.market_cap.eur}</p>
          <p>Homepage: <a href={coin.links.homepage[0]} target="_blank" rel="noopener noreferer">{coin.links.homepage[0]}</a></p>
          <p>Genesis Date: {coin.genesis_date}</p>
        </div>
      </>
    :
    <></>
  )
};

const Header = styled.div`
  display: flex;
  font-weight: bold;
  padding: 1rem;
`

const Row = styled.div`
  display: flex;
  cursor: pointer;
  padding: 1rem;
`

const Column = styled.div`
  flex: 1;
`

const Logo = styled.img`
  width: 80px;
`

const StyledModal = styled(Modal)`
  background: white;
  border: 1px solid #333;
  border-radius: 4px;
  box-shadow: 0 0 4rem rgba(0,0,0,0.6);
  font-size: .8rem;
  left: 20%;
  padding: 2rem;
  position: fixed;
  right: 20%;
  top: 2rem;
  z-index: 10;
`

const CloseButton = styled.div`
  cursor: pointer;
  position: absolute;
  right: 2rem;
`

const Overlay = styled.div`
  background: rgba(20,20,20,.4);
  height: 100%;
  position: fixed;
  width: 100%;
`

const MarketsList = (props) => {
  const { markets } = props;
  const coin = useSelector(state => state.coins);
  const getDetails = (id) => {
    store.dispatch(fetchCoin(id));
  };
  const renderRow = (row) => {
    return (
      <Row key={row.id} onClick={() => getDetails(row.id)}>
        <Column><Logo src={row.image} /></Column>
        <Column>{row.name}</Column>
        <Column>{row.symbol}</Column>
        <Column>{row.current_price}</Column>
        <Column>{row.high_24h}</Column>
        <Column>{row.low_24h}</Column>
      </Row>
    )
  };
  return (
    <div>
      <StyledModal coin={coin} />
      <Header className="header">
        <Column>Image</Column>
        <Column>Name</Column>
        <Column>Symbol</Column>
        <Column>Current Price</Column>
        <Column>High 24 hour Price</Column>
        <Column>Low 24 hour Price</Column>
      </Header>
      { markets.map((market) => renderRow(market)) }
    </div>
  )
}

export default MarketsList;