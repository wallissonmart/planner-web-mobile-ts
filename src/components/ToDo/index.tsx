import { useEffect, useState } from 'react';
import {
  CheckBox,
  CInputCheck,
  Container,
  CInputCheckDefault,
  CToDo,
  HeaderCToDo,
  Task,
  Tasks,
  TitleHeader,
} from './styles';

const ToDo = () => {
  const [checkB1, setCheckB1] = useState(false);
  const [checkB2, setCheckB2] = useState(false);
  const [checkB3, setCheckB3] = useState(false);
  const [checkB4, setCheckB4] = useState(false);
  const [checkB5, setCheckB5] = useState(false);
  const [checkB6, setCheckB6] = useState(false);
  const [checkB7, setCheckB7] = useState(false);
  const [checkB8, setCheckB8] = useState(false);
  const [checkB9, setCheckB9] = useState(false);
  const [checkB10, setCheckB10] = useState(false);
  const [checkB11, setCheckB11] = useState(false);

  const [taskRow, setTaskRow] = useState({
    row1: '',
    row2: '',
    row3: '',
    row4: '',
    row5: '',
    row6: '',
    row7: '',
    row8: '',
    row9: '',
    row10: '',
    row11: '',
  });

  function handleTaskRowEdit(
    event: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) {
    setTaskRow({
      ...taskRow,
      [name]: event.target.value,
    });
  }

  function handleSave(k: string, v: boolean, setCheck: (v: boolean) => void) {
    setCheck(!v);
    let value = v === true ? 'false' : 'true';
    localStorage.setItem(k, value);
  }

  function handleSaveTask(k: string, v: string) {
    localStorage.setItem(k, v);
  }

  function getDataFromStorage() {
    let check1 = localStorage.getItem('b1');
    let check2 = localStorage.getItem('b2');
    let check3 = localStorage.getItem('b3');
    let check4 = localStorage.getItem('b4');
    let check5 = localStorage.getItem('b5');
    let check6 = localStorage.getItem('b6');
    let check7 = localStorage.getItem('b7');
    let check8 = localStorage.getItem('b8');
    let check9 = localStorage.getItem('b9');
    let check10 = localStorage.getItem('b10');
    let check11 = localStorage.getItem('b11');

    check1 && setCheckB1(check1 == 'true' ? true : false);
    check2 && setCheckB2(check2 == 'true' ? true : false);
    check3 && setCheckB3(check3 == 'true' ? true : false);
    check4 && setCheckB4(check4 == 'true' ? true : false);
    check5 && setCheckB5(check5 == 'true' ? true : false);
    check6 && setCheckB6(check6 == 'true' ? true : false);
    check7 && setCheckB7(check7 == 'true' ? true : false);
    check8 && setCheckB8(check8 == 'true' ? true : false);
    check9 && setCheckB9(check9 == 'true' ? true : false);
    check10 && setCheckB10(check10 == 'true' ? true : false);
    check11 && setCheckB11(check11 == 'true' ? true : false);

    let row1 = localStorage.getItem('row1');
    let row2 = localStorage.getItem('row2');
    let row3 = localStorage.getItem('row3');
    let row4 = localStorage.getItem('row4');
    let row5 = localStorage.getItem('row5');
    let row6 = localStorage.getItem('row6');
    let row7 = localStorage.getItem('row7');
    let row8 = localStorage.getItem('row8');
    let row9 = localStorage.getItem('row9');
    let row10 = localStorage.getItem('row10');
    let row11 = localStorage.getItem('row11');

    row1 &&
      setTaskRow({
        ...taskRow,
        ['row1']: row1,
      });
    row2 &&
      setTaskRow({
        ...taskRow,
        ['row2']: row2,
      });
    row3 &&
      setTaskRow({
        ...taskRow,
        ['row3']: row3,
      });
    row4 &&
      setTaskRow({
        ...taskRow,
        ['row4']: row4,
      });
    row5 &&
      setTaskRow({
        ...taskRow,
        ['row5']: row5,
      });
    row6 &&
      setTaskRow({
        ...taskRow,
        ['row6']: row6,
      });
    row7 &&
      setTaskRow({
        ...taskRow,
        ['row7']: row7,
      });
    row8 &&
      setTaskRow({
        ...taskRow,
        ['row8']: row8,
      });
    row9 &&
      setTaskRow({
        ...taskRow,
        ['row9']: row9,
      });
    row10 &&
      setTaskRow({
        ...taskRow,
        ['row10']: row10,
      });
    row11 &&
      setTaskRow({
        ...taskRow,
        ['row11']: row11,
      });
  }

  useEffect(() => {
    getDataFromStorage();
  }, []);

  return (
    <Container>
      <CToDo>
        <HeaderCToDo>
          <TitleHeader>Tarefas</TitleHeader>
        </HeaderCToDo>
        <Tasks>
          <CInputCheckDefault>
            <CheckBox
              type="checkbox"
              checked={checkB1}
              onChange={() => {
                handleSave('b1', checkB1, setCheckB1);
              }}
            />
            <Task
              type="text"
              value={taskRow.row1}
              onChange={(e) => handleTaskRowEdit(e, 'row1')}
              onBlur={() => handleSaveTask('row1', taskRow.row1)}
            />
          </CInputCheckDefault>
          <CInputCheck>
            <CheckBox
              type="checkbox"
              checked={checkB2}
              onChange={() => {
                handleSave('b2', checkB2, setCheckB2);
              }}
            />
            <Task
              type="text"
              value={taskRow.row2}
              onChange={(e) => handleTaskRowEdit(e, 'row2')}
              onBlur={() => handleSaveTask('row2', taskRow.row2)}
            />
          </CInputCheck>
          <CInputCheck>
            <CheckBox
              type="checkbox"
              checked={checkB3}
              onChange={() => {
                handleSave('b3', checkB3, setCheckB3);
              }}
            />
            <Task
              type="text"
              value={taskRow.row3}
              onChange={(e) => handleTaskRowEdit(e, 'row3')}
              onBlur={() => handleSaveTask('row3', taskRow.row3)}
            />
          </CInputCheck>
          <CInputCheck>
            <CheckBox
              type="checkbox"
              checked={checkB4}
              onChange={() => {
                handleSave('b4', checkB4, setCheckB4);
              }}
            />
            <Task
              type="text"
              value={taskRow.row4}
              onChange={(e) => handleTaskRowEdit(e, 'row4')}
              onBlur={() => handleSaveTask('row4', taskRow.row4)}
            />
          </CInputCheck>
          <CInputCheck>
            <CheckBox
              type="checkbox"
              checked={checkB5}
              onChange={() => {
                handleSave('b5', checkB5, setCheckB5);
              }}
            />
            <Task
              type="text"
              value={taskRow.row5}
              onChange={(e) => handleTaskRowEdit(e, 'row5')}
              onBlur={() => handleSaveTask('row5', taskRow.row5)}
            />
          </CInputCheck>
          <CInputCheck>
            <CheckBox
              type="checkbox"
              checked={checkB6}
              onChange={() => {
                handleSave('b6', checkB6, setCheckB6);
              }}
            />
            <Task
              type="text"
              value={taskRow.row6}
              onChange={(e) => handleTaskRowEdit(e, 'row6')}
              onBlur={() => handleSaveTask('row6', taskRow.row6)}
            />
          </CInputCheck>
          <CInputCheck>
            <CheckBox
              type="checkbox"
              checked={checkB7}
              onChange={() => {
                handleSave('b7', checkB7, setCheckB7);
              }}
            />
            <Task
              type="text"
              value={taskRow.row7}
              onChange={(e) => handleTaskRowEdit(e, 'row7')}
              onBlur={() => handleSaveTask('row7', taskRow.row7)}
            />
          </CInputCheck>
          <CInputCheck>
            <CheckBox
              type="checkbox"
              checked={checkB8}
              onChange={() => {
                handleSave('b8', checkB8, setCheckB8);
              }}
            />
            <Task
              type="text"
              value={taskRow.row8}
              onChange={(e) => handleTaskRowEdit(e, 'row8')}
              onBlur={() => handleSaveTask('row8', taskRow.row8)}
            />
          </CInputCheck>
          <CInputCheck>
            <CheckBox
              type="checkbox"
              checked={checkB9}
              onChange={() => {
                handleSave('b9', checkB9, setCheckB9);
              }}
            />
            <Task
              type="text"
              value={taskRow.row9}
              onChange={(e) => handleTaskRowEdit(e, 'row9')}
              onBlur={() => handleSaveTask('row9', taskRow.row9)}
            />
          </CInputCheck>
          <CInputCheck>
            <CheckBox
              type="checkbox"
              checked={checkB10}
              onChange={() => {
                handleSave('b10', checkB10, setCheckB10);
              }}
            />
            <Task
              type="text"
              value={taskRow.row10}
              onChange={(e) => handleTaskRowEdit(e, 'row10')}
              onBlur={() => handleSaveTask('row10', taskRow.row10)}
            />
          </CInputCheck>
          <CInputCheck>
            <CheckBox
              type="checkbox"
              checked={checkB11}
              onChange={() => {
                handleSave('b11', checkB11, setCheckB11);
              }}
            />
            <Task
              type="text"
              value={taskRow.row11}
              onChange={(e) => handleTaskRowEdit(e, 'row11')}
              onBlur={() => handleSaveTask('row11', taskRow.row11)}
            />
          </CInputCheck>
        </Tasks>
      </CToDo>
    </Container>
  );
};

export default ToDo;
