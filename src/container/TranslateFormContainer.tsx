import React from 'react';
import { useState } from 'react';
import { SearchHistoryList } from '../components/SearchHistoryList';
import TranslateForm from '../components/TranslateForm';
import { Translator } from '../util/Translator';

const TranslateFormContainer = () => {
	const [ text, setText ] = useState('');
	const [ sourceLang, setSourceLang ] = useState('en');
	const [ targetLang, setTargetLang ] = useState('cs');
	const [ result, setResult ] = useState('');
	const [ searchHistory, setSearchHistory ] = useState(JSON.parse(localStorage.getItem('Previous Search') || '{}'));

	const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setText(e.target.value);
	};

	const handleSourceLangChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSourceLang(e.target.value);
	};

	const handleTargetLangChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setTargetLang(e.target.value);
	};

	const handleEnterKey = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter') {
			translateText();
		}
	};

	const translateText = () => {
		const tranz = async () => {
			let rez = Translator.translate(sourceLang, targetLang, text);
			let rex = await rez;
			setResult(rex);
			let newCopy = {
				sourceLang: sourceLang,
				targetLang: targetLang,
				source: text,
				target: rex
			};
			let pt: any = [];
			if (localStorage.getItem('Previous Search') !== null) {
				pt = JSON.parse(localStorage.getItem('Previous Search') || '{}');
			}
			pt.push(newCopy);
			localStorage.setItem('Previous Search', JSON.stringify(pt));
			setSearchHistory(() => {
				return JSON.parse(localStorage.getItem('Previous Search') || '{}');
			});
		};
		tranz();
	};

	return (
		<>
		<TranslateForm
			handleSource={handleTextChange}
			handleSourceLang={handleSourceLangChange}
			handleTargetLang={handleTargetLangChange}
			output={result}
			translate={translateText}
			handleEnterKey={handleEnterKey}
		/>
		<SearchHistoryList previousHistory={searchHistory} />
		</>
	);
};

export default TranslateFormContainer;
