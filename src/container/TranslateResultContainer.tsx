import React, { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import TranslateResult from '../components/TranslateResult';

type Props = {
	results: string;
};

const TranslateResultContainer: React.FC<Props> = (results) => {
	const [ result, setResult ] = useState('');
	const [ showTip, setShowTip ] = useState(false);
	const target = useRef(null);

	const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setResult(e.target.value);
	};
	useEffect(
		() => {
			setResult(results.results);
			const timerId = setInterval(() => {
				setShowTip(showTip ? !showTip : showTip);
			}, 3000);
			return () => clearInterval(timerId);
		},
		[ results, showTip ]
	);

	return (
		<TranslateResult
			result={result}
			target={target}
			showTip={showTip}
			handleTextAreaChange={handleTextAreaChange}
			setShowTip={setShowTip}
		/>
	);
};

export default TranslateResultContainer;
