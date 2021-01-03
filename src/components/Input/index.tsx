import React, { InputHTMLAttributes, useEffect, useRef, useState } from 'react';
import { useField } from '@unform/core';
import InputMask from 'react-input-mask';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  value?: string;
  updateDefaultValue?: string;
  mask?: string;
}

const Input: React.FC<InputProps> = ({
  disabled = false,
  mask,
  label,
  name,
  placeholder,
  updateDefaultValue,
  ...rest
}) => {
  const [defaultValueState, setDefaultValueState] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
    if (updateDefaultValue) {
      setDefaultValueState(updateDefaultValue);
    }
  }, [fieldName, registerField, updateDefaultValue]);

  return (
    <Container isErrored={!!error} isDisabled={disabled}>
      {mask ? (
        <>
          <input
            ref={inputRef}
            name={name}
            className="invisible-input"
            type="text"
            value={defaultValueState}
            onChange={e => setDefaultValueState(e.target.value)}
            style={{
              visibility: 'hidden',
              width: 0,
              height: 0,
              margin: 0,
              padding: 0,
            }}
          />
          <InputMask
            mask={mask}
            value={defaultValueState}
            onChange={e => setDefaultValueState(e.target.value)}
            type="text"
            name={name}
            defaultValue={defaultValue}
            placeholder={placeholder}
            disabled={disabled}
            onKeyPress={e => {
              if (e.key === 'Enter') e.preventDefault();
            }}
            {...rest}
          />
        </>
      ) : (
        <input
          ref={inputRef}
          type="text"
          name={name}
          defaultValue={defaultValue}
          placeholder={placeholder}
          disabled={disabled}
          value={defaultValueState}
          onChange={e => setDefaultValueState(e.target.value)}
          onKeyPress={e => {
            if (e.key === 'Enter') e.preventDefault();
          }}
          {...rest}
        />
      )}

      {label ? <label htmlFor={name}>{label}</label> : ''}
      <span style={{ color: '#c53030' }}>{error}</span>
    </Container>
  );
};

export default Input;
