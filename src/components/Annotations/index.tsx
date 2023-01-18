import { useEffect, useState } from 'react';
import { Annotation, Container, Title, TextArea } from './styles';

const Annotations = () => {
  const [annotations, setAnnotations] = useState('');

  function handleSave(k: string, v: string) {
    localStorage.setItem(k, v);
  }

  function getDataFromStorage() {
    let annts = localStorage.getItem('annotations');
    annts && setAnnotations(annts);
  }

  useEffect(() => {
    getDataFromStorage();
  }, []);

  return (
    <Container>
      <Annotation>
        <Title>Anotações</Title>
        <TextArea
          value={annotations}
          onChange={(e) => setAnnotations(e.target.value)}
          onBlur={() => handleSave('annotations', annotations)}
        />
      </Annotation>
    </Container>
  );
};

export default Annotations;
