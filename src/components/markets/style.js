import styled from 'styled-components';

export const Header = styled.div`
  border-bottom: 2px solid #eee;
  display: flex;
  font-weight: bold;
  padding: 1rem;
`

export const Column = styled.div`
  align-self: center;
  flex: 1;
`

export const Row = styled.div`
  border-bottom: 1px solid #eee;
  cursor: pointer;
  display: flex;
  overflow: auto;
  padding: 1rem;
`

export const Logo = styled.img`
  width: 80px;
`