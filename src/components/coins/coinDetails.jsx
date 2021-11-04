import { flushCoin } from './coinsSlice';
import store from '../../store';
import styled from 'styled-components';

const Modal = ({ className, coin }) => {
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
          <p>Description: <span dangerouslySetInnerHTML={{ __html: coin.description.en }} /></p>
          <p>Market Cap in Euro: {coin.market_data.market_cap.eur}</p>
          <p>Homepage: <a href={coin.links.homepage[0]} target="_blank" rel="noreferrer">{coin.links.homepage[0]}</a></p>
          <p>Genesis Date: {coin.genesis_date ? coin.genesis_date : 'N/A'}</p>
        </div>
      </>
    :
    <></>
  )
};

export const CoinDetails = styled(Modal)`
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