import styled from 'styled-components';

interface IDayWeek {
  bgColor: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 12px 1px;
`;

export const CRowDayWeek = styled.div`
  margin-top: 0.25rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 3rem;
  gap: 0.2rem;
`;

export const CRowBox = styled.div`
  margin-bottom: 0.25rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 3rem;
  gap: 0.2rem;
`;

export const DayWeek = styled.div`
  background-color: ${(bg: IDayWeek) => bg.bgColor};
  width: 3.5rem;
`;

export const TitleDW = styled.h1`
  font-size: 0.7rem;
`;

export const BoxDay = styled.div`
  background-color: #fff;
  width: 3.5rem;
  height: 3rem;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  padding: 0.2rem;
  overflow-y: hidden;
  font-size: 0.8rem;
  border: none;
  outline: 0;
  resize: none;
`;
