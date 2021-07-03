import React, { useState } from 'react';

import { Button, Select } from '../templates';
import { getPaddedNumberStrings } from '../helpers';
import { useRadioGroup } from '../hooks';
import { isNumeric, isWithinLength } from '../validations';

const PREFIXES = ['random', 'S', 'T', 'F', 'G'];
const YEARS = ['random', ...getPaddedNumberStrings(0, 99, 2, '0')];

export const Generator: React.FC = () => {
  const { selected: prefix, selectValue: selectPrefix } = useRadioGroup(PREFIXES);
  const { selected: birthYear, selectValue: selectBirthYear } = useRadioGroup(YEARS);
  const [number, setNumber] = useState('');

  const handleNumberChange = (value: string) => {
    if (isWithinLength(value, 5) && isNumeric) {
      setNumber(value);
    }
  };

  const handleSubmit = () => {
    console.log('submitting...');
    console.log(`prefix: ${prefix}`);
    console.log(`year: ${birthYear}`);
    console.log(`number: ${number}`);
  };

  return (
    <form>
      <b>nric/fin with valid checksum</b>
      <div>
        <label htmlFor="prefix">prefix</label>
        <Select
          options={PREFIXES.map((prefix) => ({ label: prefix, value: prefix }))}
          name="prefix"
          selected={prefix}
          selectValue={selectPrefix}
        />
        <label htmlFor="prefix">birth year</label>
        <Select
          options={YEARS.map((year) => ({ label: year, value: year }))}
          name="birthYear"
          selected={birthYear}
          selectValue={selectBirthYear}
        />
        <label htmlFor="number">number</label>
        <input
          type="text"
          name="number"
          value={number}
          placeholder="random"
          onChange={(e) => handleNumberChange(e.target.value)}
        />
      </div>
      <Button label="Generate" onClick={() => handleSubmit()} />
    </form>
  );
};
