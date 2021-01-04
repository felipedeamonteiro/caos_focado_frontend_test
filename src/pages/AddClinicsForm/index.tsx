/* eslint-disable react/jsx-indent */
import React, { useCallback, useRef, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import cep from 'cep-promise';
import * as Yup from 'yup';

import { BiArrowBack } from 'react-icons/bi';
import { Link, useHistory } from 'react-router-dom';
import getValidationErrors from '../../utils/getValidationErrors';
import { addNewClinicToDados } from '../../server.json';

import { Container } from './styles';
import Input from '../../components/Input';
import Checkbox from '../../components/Checkbox';
import Button from '../../components/Button';

interface CheckboxOption {
  id: string;
  value: string;
  label: string;
}

interface FormRawData {
  address: string;
  cep: string;
  services: string[] | [];
  clinicName: string;
  email: string;
  whatsapp: string;
}

interface FormErrors {
  address?: string;
  cep?: string;
  services?: string;
  clinicName?: string;
  email?: string;
  whatsapp?: string;
}

const AddClinicsForm: React.FC = () => {
  const [errorCep, setErrorCep] = useState<string>('');
  const [gotErrorCep, setGotErrorCep] = useState<boolean>(false);

  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

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

  const handleSubmit = useCallback(
    async (data: FormRawData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          address: Yup.string().required('O endereço deve ser preenchido'),
          cep: Yup.string().required('O CEP deve ser preenchido'),
          clinicName: Yup.string().required(
            'O nome da clínica deve ser preenchido',
          ),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite uma e-mail válido'),
          whatsapp: Yup.string().required('O whatsapp deve ser preenchido'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const submissionData = {
          address: data.address,
          cep: data.cep,
          clinicName: data.clinicName,
          email: data.email,
          whatsapp: data.whatsapp,
          services: String(data.services).replace(/,/g, ', '),
        };
        addNewClinicToDados(submissionData);
        history.push('/');
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors: FormErrors = getValidationErrors(error);

          formRef.current?.setErrors(errors);
        }
      }
    },
    [history],
  );

  const onBlurCep = useCallback(async event => {
    try {
      setGotErrorCep(false);
      const cepNumber = event.target.value.replace('-', '');
      if (cepNumber.length === 0) {
        return;
      }
      const res = await cep(cepNumber);

      formRef.current?.setFieldValue('address', res.street);
    } catch (error) {
      setGotErrorCep(true);
      setErrorCep(
        'O CEP digitado não corresponde a nenhum endereço. Tente novamente.',
      );
    }
  }, []);

  return (
    <Container>
      <Link to="/">
        <button type="button" className="arrow">
          <BiArrowBack size={20} />
          <h3>Voltar</h3>
        </button>
      </Link>

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
            {gotErrorCep ? (
              <span className="error-messages1">
                <p>{errorCep}</p>
              </span>
            ) : (
              ''
            )}
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
              mask="(99) 99999-9999"
              placeholder="Digite o WhatsApp"
              label="WhatsApp"
            />
            <Checkbox
              name="services"
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
