import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 1rem;
`;

export const CToDo = styled.div`
  width: 80%;
  max-width: 600px;
  box-shadow: 10px 10px 40px rgba(black, 0.15);
  border-radius: 0 0 10px 10px;
  overflow: hidden;
`;

export const HeaderCToDo = styled.div`
  width: 100%;
  height: 50px;
  background: #333;
  border-radius: 5px 5px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Tasks = styled.div`
  width: 100%;
  height: 100%;
  min-height: 60vh;
  padding: 35px 20px;
  background: repeating-linear-gradient(
    #f1ede9,
    #f1ede9 31px,
    #000 31px,
    #94acd4 32px
  );
  font-family: 'Shadows Into Light', cursive;
  line-height: 32px;
  outline: 0;
  font-size: 22px;
`;

export const CInputCheckDefault = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0.55rem;
`;

export const CInputCheck = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0.8rem;
`;

export const CheckBox = styled.input`
  width: 8%;
`;

export const Task = styled.input`
  width: 92%;
  outline: 0;
  border: none;
  background-color: transparent;
  height: 1.2rem;
  font-size: 0.9rem;
  @media (max-width: 600px) {
    margin-left: 0.5rem;
  }
`;

export const TitleHeader = styled.div`
  font-size: 2rem;
  color: #fff;
`;
