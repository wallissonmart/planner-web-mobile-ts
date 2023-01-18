import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Annotation = styled.div`
  width: 13rem;
  height: 15rem;
  position: relative;
  background: #ffa;
  overflow: hidden;
  margin: 30px auto;
  padding: 20px;
  border-radius: 0 0 0 30px/45px;
  box-shadow: inset 0 -40px 40px rgba(0, 0, 0, 0.2),
    inset 0 25px 10px rgba(0, 0, 0, 0.2), 0 5px 6px 5px rgba(0, 0, 0, 0.2);
  font-family: 'Permanent Marker', cursive;
  line-height: 1.7em;
  font-size: 19px;
  //-webkit-mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC);

  color: #130d6b;

  ::before {
    content: '';
    display: block;
    position: absolute;
    width: 20px;
    height: 25px;
    background: #ffa;
    box-shadow: 3px -2px 10px rgba(0, 0, 0, 0.2),
      inset 15px -15px 15px rgba(0, 0, 0, 0.3);
    left: 0;
    bottom: 0;
    z-index: 2;
    transform: skewX(25deg);
  }

  ::after {
    content: '';
    display: block;
    position: absolute;
    width: 75%;
    height: 20px;
    border-top: 3px solid #130d6b;
    border-radius: 50%;
    bottom: 0px;
    left: 10%;
  }
`;

export const Title = styled.h1`
  color: #000;
  font-size: 1.5rem;
  text-align: center;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 80%;
  padding: 0.2rem;
  overflow-y: hidden;
  font-size: 0.9rem;
  border: none;
  outline: 0;
  resize: none;
  background-color: transparent;
`;
