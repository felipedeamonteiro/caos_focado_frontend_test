import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import cep from 'cep-promise';

import { Container } from './styles';
import Input from '../../components/Input';
import Checkbox from '../../components/Checkbox';
import Button from '../../components/Button';

interface CheckboxOption {
  id: string;
  value: string;
  label: string;
}

const AddClinicsForm: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const checkboxOptions: CheckboxOption[] = [
    {
      id: 'exames_clinicos',
      value: 'Exames Clínicos',
      label: 'Exames Clínicos',
    },
    {
      id: 'ex_complementares',
      value: 'Exames Complementares',
      label: 'Exames Complementares',
    },
    { id: 'ppra', value: 'PPRA', label: 'PPRA' },
    { id: 'pcmso', value: 'PCMSO', label: 'PCMSO' },
  ];

  const handleSubmit = useCallback(data => {
    console.log('data', data);
  }, []);

  const onBlurCep = useCallback(async event => {
    const cepNumber = event.target.value.replace('-', '');
    if (cepNumber.length !== 8) {
      // eslint-disable-next-line no-useless-return
      // retornar erro de complete
      return;
    }
    const res = await cep(cepNumber);
    console.log('res', res);
  }, []);

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit} id="form">
        <div className="upper-title">
          <h2>Adicionar Clínica</h2>
        </div>
        <div className="input-div">
          <div className="left-div">
            <Input
              name="clinicName"
              placeholder="Digite o nome da clínica"
              label="Nome da Clínica"
            />
            <Input
              name="cep"
              placeholder="Digite o cep da clínica"
              label="CEP"
              mask="99999-999"
              onBlur={onBlurCep}
            />
            <Input
              name="address"
              placeholder="Endereço"
              label="Endereço da Clínica"
            />
          </div>
          <div className="right-div">
            <Input name="email" placeholder="Digite o email" label="Email" />
            <Input
              name="whatsapp"
              placeholder="Digite o WhatsApp"
              label="WhatsApp"
            />
            <Checkbox
              name="checkbox"
              label="Serviços"
              options={checkboxOptions}
            />
          </div>
        </div>
        <div className="button-div">
          <Button type="submit">Adicionar</Button>
        </div>
      </Form>
    </Container>
  );
};

export default AddClinicsForm;
