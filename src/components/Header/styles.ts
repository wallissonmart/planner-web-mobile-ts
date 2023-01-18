import styled from 'styled-components';
import './header.css';

export const Container = styled.div`
  background-image: url(https://images4.alphacoders.com/843/thumbbig-84366.webp);
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 6.5rem;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 2.35rem;
  text-align: center;
  font-family: 'Great Vibes', cursive;
  padding-top: 1rem;
  text-shadow: 3px 3px black;
`;

export const CInputMonth = styled.div`
  background-color: coral;
  display: flex;
  width: 45%;
  margin: 0.5rem 1rem;
`;

export const CInputYear = styled.div`
  background-color: beige;
  display: flex;
  width: 45%;
  margin: 0 1rem;
`;

export const Label = styled.h2`
  color: #000;
  font-size: 1rem;
`;

export const Input = styled.input`
  border: none;
  background-color: transparent;
  outline: 0;
  padding-left: 0.3rem;
  font-size: 0.9rem;
  font-weight: 700;
`;
