import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { SelectLanguage } from '../components/SelectLanguage';
import { Translator } from '../util/Translator';

type Props = {
	handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
	str: string;
	code: string;
};

const SelectLanguageContainer: React.FC<Props> = ({ handleChange, str, code }) => {
	const [ language, setLanguage ]: any = useState([]);
	useEffect(() => {
		Translator.getLanguages().then((response) => {
			for (let key in response) {
				let Value: Object = response[key];
				let val = Object.values(Value)[0];
				setLanguage((prev: any) => [ ...prev, { code: key, body: val } ]);
			}
		});
	}, []);

	return <SelectLanguage handleChange={handleChange} str={str} code={code} language={language} />;
};

export default SelectLanguageContainer;
