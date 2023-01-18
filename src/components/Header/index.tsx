import { useEffect, useState } from 'react';
import { RiPencilFill } from 'react-icons/ri';
import {
  CInputYear,
  CInputMonth,
  Container,
  Input,
  Label,
  Title,
} from './styles';

const Header = () => {
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  function handleSave() {
    month && year !== '' && localStorage.setItem('m', month),
      localStorage.setItem('y', year);
  }

  function getDataFromStorage() {
    let m = localStorage.getItem('m');
    let y = localStorage.getItem('y');

    if (m && y) {
      setMonth(m);
      setYear(y);
    }
  }

  useEffect(() => {
    getDataFromStorage();
  }, []);

  return (
    <Container>
      <Title>Planeje e aja</Title>
      <CInputMonth>
        <Label>Mês:</Label>
        <Input
          type="text"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          onBlur={handleSave}
        />
        <RiPencilFill className="iconHeaderM" />
      </CInputMonth>
      <CInputYear>
        <Label>Ano:</Label>
        <Input
          type="text"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          onBlur={handleSave}
        />
        <RiPencilFill className="iconHeaderY" />
      </CInputYear>
    </Container>
  );
};

export default Header;
