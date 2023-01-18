import { useEffect, useState } from 'react';
import {
  BoxDay,
  Container,
  CRowBox,
  CRowDayWeek,
  DayWeek,
  TextArea,
  TitleDW,
} from './styles';

const Calendar = () => {
  const [dataCalendar, setDataCalendar] = useState({
    box1: '',
    box2: '',
    box3: '',
    box4: '',
    box5: '',
    box6: '',
    box7: '',
    box8: '',
    box9: '',
    box10: '',
    box11: '',
    box12: '',
    box13: '',
    box14: '',
    box15: '',
    box16: '',
    box17: '',
    box18: '',
    box19: '',
    box20: '',
    box21: '',
    box22: '',
    box23: '',
    box24: '',
    box25: '',
    box26: '',
    box27: '',
    box28: '',
    box29: '',
    box30: '',
    box31: '',
    box32: '',
    box33: '',
    box34: '',
    box35: '',
  });

  function handleCalendarEdit(
    event: React.ChangeEvent<HTMLTextAreaElement>,
    name: string
  ) {
    setDataCalendar({
      ...dataCalendar,
      [name]: event.target.value,
    });
  }

  function handleSave(k: number, v: string) {
    localStorage.setItem(k.toLocaleString(), v);
  }

  function getDataFromStorage() {
    let b1 = localStorage.getItem('1');
    let b2 = localStorage.getItem('2');
    let b3 = localStorage.getItem('3');
    let b4 = localStorage.getItem('4');
    let b5 = localStorage.getItem('5');
    let b6 = localStorage.getItem('6');
    let b7 = localStorage.getItem('7');
    let b8 = localStorage.getItem('8');
    let b9 = localStorage.getItem('9');
    let b10 = localStorage.getItem('10');
    let b11 = localStorage.getItem('11');
    let b12 = localStorage.getItem('12');
    let b13 = localStorage.getItem('13');
    let b14 = localStorage.getItem('14');
    let b15 = localStorage.getItem('15');
    let b16 = localStorage.getItem('16');
    let b17 = localStorage.getItem('17');
    let b18 = localStorage.getItem('18');
    let b19 = localStorage.getItem('19');
    let b20 = localStorage.getItem('20');
    let b21 = localStorage.getItem('21');
    let b22 = localStorage.getItem('22');
    let b23 = localStorage.getItem('23');
    let b24 = localStorage.getItem('24');
    let b25 = localStorage.getItem('25');
    let b26 = localStorage.getItem('26');
    let b27 = localStorage.getItem('27');
    let b28 = localStorage.getItem('28');
    let b29 = localStorage.getItem('29');
    let b30 = localStorage.getItem('30');
    let b31 = localStorage.getItem('31');
    let b32 = localStorage.getItem('32');
    let b33 = localStorage.getItem('33');
    let b34 = localStorage.getItem('34');
    let b35 = localStorage.getItem('35');

    b1 &&
      setDataCalendar({
        ...dataCalendar,
        ['box1']: b1,
      });
    b2 &&
      setDataCalendar({
        ...dataCalendar,
        ['box2']: b2,
      });
    b3 &&
      setDataCalendar({
        ...dataCalendar,
        ['box3']: b3,
      });
    b4 &&
      setDataCalendar({
        ...dataCalendar,
        ['box4']: b4,
      });
    b5 &&
      setDataCalendar({
        ...dataCalendar,
        ['box5']: b5,
      });
    b6 &&
      setDataCalendar({
        ...dataCalendar,
        ['box6']: b6,
      });
    b7 &&
      setDataCalendar({
        ...dataCalendar,
        ['box7']: b7,
      });
    b8 &&
      setDataCalendar({
        ...dataCalendar,
        ['box8']: b8,
      });
    b9 &&
      setDataCalendar({
        ...dataCalendar,
        ['box9']: b9,
      });
    b10 &&
      setDataCalendar({
        ...dataCalendar,
        ['box10']: b10,
      });
    b11 &&
      setDataCalendar({
        ...dataCalendar,
        ['box11']: b11,
      });
    b12 &&
      setDataCalendar({
        ...dataCalendar,
        ['box12']: b12,
      });
    b13 &&
      setDataCalendar({
        ...dataCalendar,
        ['box13']: b13,
      });
    b14 &&
      setDataCalendar({
        ...dataCalendar,
        ['box14']: b14,
      });
    b15 &&
      setDataCalendar({
        ...dataCalendar,
        ['box15']: b15,
      });
    b16 &&
      setDataCalendar({
        ...dataCalendar,
        ['box16']: b16,
      });
    b17 &&
      setDataCalendar({
        ...dataCalendar,
        ['box17']: b17,
      });
    b18 &&
      setDataCalendar({
        ...dataCalendar,
        ['box18']: b18,
      });
    b19 &&
      setDataCalendar({
        ...dataCalendar,
        ['box19']: b19,
      });
    b20 &&
      setDataCalendar({
        ...dataCalendar,
        ['box20']: b20,
      });
    b21 &&
      setDataCalendar({
        ...dataCalendar,
        ['box21']: b21,
      });
    b22 &&
      setDataCalendar({
        ...dataCalendar,
        ['box22']: b22,
      });
    b23 &&
      setDataCalendar({
        ...dataCalendar,
        ['box23']: b23,
      });
    b24 &&
      setDataCalendar({
        ...dataCalendar,
        ['box24']: b24,
      });
    b25 &&
      setDataCalendar({
        ...dataCalendar,
        ['box25']: b25,
      });
    b26 &&
      setDataCalendar({
        ...dataCalendar,
        ['box26']: b26,
      });
    b27 &&
      setDataCalendar({
        ...dataCalendar,
        ['box27']: b27,
      });
    b28 &&
      setDataCalendar({
        ...dataCalendar,
        ['box28']: b28,
      });
    b29 &&
      setDataCalendar({
        ...dataCalendar,
        ['box29']: b29,
      });
    b30 &&
      setDataCalendar({
        ...dataCalendar,
        ['box30']: b30,
      });
    b31 &&
      setDataCalendar({
        ...dataCalendar,
        ['box31']: b31,
      });
    b32 &&
      setDataCalendar({
        ...dataCalendar,
        ['box32']: b32,
      });
    b33 &&
      setDataCalendar({
        ...dataCalendar,
        ['box33']: b33,
      });
    b34 &&
      setDataCalendar({
        ...dataCalendar,
        ['box34']: b34,
      });
    b35 &&
      setDataCalendar({
        ...dataCalendar,
        ['box35']: b35,
      });
  }

  useEffect(() => {
    getDataFromStorage();
  }, []);

  return (
    <Container>
      <CRowDayWeek>
        <DayWeek bgColor="#d40000">
          <TitleDW>SEGUNDA</TitleDW>
        </DayWeek>
        <DayWeek bgColor="#d44300">
          <TitleDW>TERÇA</TitleDW>
        </DayWeek>
        <DayWeek bgColor="#d4bf00">
          <TitleDW>QUARTA</TitleDW>
        </DayWeek>
        <DayWeek bgColor="#00d451">
          <TitleDW>QUINTA</TitleDW>
        </DayWeek>
        <DayWeek bgColor="#0091d4">
          <TitleDW>SEXTA</TitleDW>
        </DayWeek>
        <DayWeek bgColor="#d43100">
          <TitleDW>SÁBADO</TitleDW>
        </DayWeek>
        <DayWeek bgColor="#7500d4">
          <TitleDW>DOMINGO</TitleDW>
        </DayWeek>
      </CRowDayWeek>
      <CRowBox>
        <BoxDay>
          <TextArea
            value={dataCalendar.box1}
            onChange={(e) => handleCalendarEdit(e, 'box1')}
            onBlur={() => handleSave(1, dataCalendar.box1)}
          />
        </BoxDay>
        <BoxDay>
          <TextArea
            value={dataCalendar.box2}
            onChange={(e) => handleCalendarEdit(e, 'box2')}
            onBlur={() => handleSave(2, dataCalendar.box2)}
          />
        </BoxDay>
        <BoxDay>
          <TextArea
            value={dataCalendar.box3}
            onChange={(e) => handleCalendarEdit(e, 'box3')}
            onBlur={() => handleSave(3, dataCalendar.box3)}
          />
        </BoxDay>
        <BoxDay>
          <TextArea
            value={dataCalendar.box4}
            onChange={(e) => handleCalendarEdit(e, 'box4')}
            onBlur={() => handleSave(4, dataCalendar.box4)}
          />
        </BoxDay>
        <BoxDay>
          <TextArea
            value={dataCalendar.box5}
            onChange={(e) => handleCalendarEdit(e, 'box5')}
            onBlur={() => handleSave(5, dataCalendar.box5)}
          />
        </BoxDay>
        <BoxDay>
          <TextArea
            value={dataCalendar.box6}
            onChange={(e) => handleCalendarEdit(e, 'box6')}
            onBlur={() => handleSave(6, dataCalendar.box6)}
          />
        </BoxDay>
        <BoxDay>
          <TextArea
            value={dataCalendar.box7}
            onChange={(e) => handleCalendarEdit(e, 'box7')}
            onBlur={() => handleSave(7, dataCalendar.box7)}
          />
        </BoxDay>
      </CRowBox>
      <CRowBox>
        <BoxDay>
          <TextArea
            value={dataCalendar.box8}
            onChange={(e) => handleCalendarEdit(e, 'box8')}
            onBlur={() => handleSave(8, dataCalendar.box8)}
          />
        </BoxDay>
        <BoxDay>
          <TextArea
            value={dataCalendar.box9}
            onChange={(e) => handleCalendarEdit(e, 'box9')}
            onBlur={() => handleSave(9, dataCalendar.box9)}
          />
        </BoxDay>
        <BoxDay>
          <TextArea
            value={dataCalendar.box10}
            onChange={(e) => handleCalendarEdit(e, 'box10')}
            onBlur={() => handleSave(10, dataCalendar.box10)}
          />
        </BoxDay>
        <BoxDay>
          <TextArea
            value={dataCalendar.box11}
            onChange={(e) => handleCalendarEdit(e, 'box11')}
            onBlur={() => handleSave(11, dataCalendar.box11)}
          />
        </BoxDay>
        <BoxDay>
          <TextArea
            value={dataCalendar.box12}
            onChange={(e) => handleCalendarEdit(e, 'box12')}
            onBlur={() => handleSave(12, dataCalendar.box12)}
          />
        </BoxDay>
        <BoxDay>
          <TextArea
            value={dataCalendar.box13}
            onChange={(e) => handleCalendarEdit(e, 'box13')}
            onBlur={() => handleSave(13, dataCalendar.box13)}
          />
        </BoxDay>
        <BoxDay>
          <TextArea
            value={dataCalendar.box14}
            onChange={(e) => handleCalendarEdit(e, 'box14')}
            onBlur={() => handleSave(14, dataCalendar.box14)}
          />
        </BoxDay>
      </CRowBox>
      <CRowBox>
        <BoxDay>
          <TextArea
            value={dataCalendar.box15}
            onChange={(e) => handleCalendarEdit(e, 'box15')}
            onBlur={() => handleSave(15, dataCalendar.box15)}
          />
        </BoxDay>
        <BoxDay>
          <TextArea
            value={dataCalendar.box16}
            onChange={(e) => handleCalendarEdit(e, 'box16')}
            onBlur={() => handleSave(16, dataCalendar.box16)}
          />
        </BoxDay>
        <BoxDay>
          <TextArea
            value={dataCalendar.box17}
            onChange={(e) => handleCalendarEdit(e, 'box17')}
            onBlur={() => handleSave(17, dataCalendar.box17)}
          />
        </BoxDay>
        <BoxDay>
          <TextArea
            value={dataCalendar.box18}
            onChange={(e) => handleCalendarEdit(e, 'box18')}
            onBlur={() => handleSave(18, dataCalendar.box18)}
          />
        </BoxDay>
        <BoxDay>
          <TextArea
            value={dataCalendar.box19}
            onChange={(e) => handleCalendarEdit(e, 'box19')}
            onBlur={() => handleSave(19, dataCalendar.box19)}
          />
        </BoxDay>
        <BoxDay>
          <TextArea
            value={dataCalendar.box20}
            onChange={(e) => handleCalendarEdit(e, 'box20')}
            onBlur={() => handleSave(20, dataCalendar.box20)}
          />
        </BoxDay>
        <BoxDay>
          <TextArea
            value={dataCalendar.box21}
            onChange={(e) => handleCalendarEdit(e, 'box21')}
            onBlur={() => handleSave(21, dataCalendar.box21)}
          />
        </BoxDay>
      </CRowBox>
      <CRowBox>
        <BoxDay>
          <TextArea
            value={dataCalendar.box22}
            onChange={(e) => handleCalendarEdit(e, 'box22')}
            onBlur={() => handleSave(22, dataCalendar.box22)}
          />
        </BoxDay>
        <BoxDay>
          <TextArea
            value={dataCalendar.box23}
            onChange={(e) => handleCalendarEdit(e, 'box23')}
            onBlur={() => handleSave(23, dataCalendar.box23)}
          />
        </BoxDay>
        <BoxDay>
          <TextArea
            value={dataCalendar.box24}
            onChange={(e) => handleCalendarEdit(e, 'box24')}
            onBlur={() => handleSave(24, dataCalendar.box24)}
          />
        </BoxDay>
        <BoxDay>
          <TextArea
            value={dataCalendar.box25}
            onChange={(e) => handleCalendarEdit(e, 'box25')}
            onBlur={() => handleSave(25, dataCalendar.box25)}
          />
        </BoxDay>
        <BoxDay>
          <TextArea
            value={dataCalendar.box26}
            onChange={(e) => handleCalendarEdit(e, 'box26')}
            onBlur={() => handleSave(26, dataCalendar.box26)}
          />
        </BoxDay>
        <BoxDay>
          <TextArea
            value={dataCalendar.box27}
            onChange={(e) => handleCalendarEdit(e, 'box27')}
            onBlur={() => handleSave(27, dataCalendar.box27)}
          />
        </BoxDay>
        <BoxDay>
          <TextArea
            value={dataCalendar.box28}
            onChange={(e) => handleCalendarEdit(e, 'box28')}
            onBlur={() => handleSave(28, dataCalendar.box28)}
          />
        </BoxDay>
      </CRowBox>
      <CRowBox>
        <BoxDay>
          <TextArea
            value={dataCalendar.box29}
            onChange={(e) => handleCalendarEdit(e, 'box29')}
            onBlur={() => handleSave(29, dataCalendar.box29)}
          />
        </BoxDay>
        <BoxDay>
          <TextArea
            value={dataCalendar.box30}
            onChange={(e) => handleCalendarEdit(e, 'box30')}
            onBlur={() => handleSave(30, dataCalendar.box30)}
          />
        </BoxDay>
        <BoxDay>
          <TextArea
            value={dataCalendar.box31}
            onChange={(e) => handleCalendarEdit(e, 'box31')}
            onBlur={() => handleSave(31, dataCalendar.box31)}
          />
        </BoxDay>
        <BoxDay>
          <TextArea
            value={dataCalendar.box32}
            onChange={(e) => handleCalendarEdit(e, 'box32')}
            onBlur={() => handleSave(32, dataCalendar.box32)}
          />
        </BoxDay>
        <BoxDay>
          <TextArea
            value={dataCalendar.box33}
            onChange={(e) => handleCalendarEdit(e, 'box33')}
            onBlur={() => handleSave(33, dataCalendar.box33)}
          />
        </BoxDay>
        <BoxDay>
          <TextArea
            value={dataCalendar.box34}
            onChange={(e) => handleCalendarEdit(e, 'box34')}
            onBlur={() => handleSave(34, dataCalendar.box34)}
          />
        </BoxDay>
        <BoxDay>
          <TextArea
            value={dataCalendar.box35}
            onChange={(e) => handleCalendarEdit(e, 'box35')}
            onBlur={() => handleSave(35, dataCalendar.box35)}
          />
        </BoxDay>
      </CRowBox>
    </Container>
  );
};

export default Calendar;
