import React, { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import TranslateResult from '../components/TranslateResult';

type Props = {
	results: string;
};

const TranslateResultContainer: React.FC<Props> = (results) => {
	const result = results.results;
	const [ showTip, setShowTip ] = useState(false);
	const target = useRef(null);
	
	useEffect(
		() => {
			const timerId = setInterval(() => {
				setShowTip(showTip ? !showTip : showTip);
			}, 3000);
			return () => clearInterval(timerId);
		},
		[ showTip ]
	);

	return (
		<TranslateResult
			result={result}
			target={target}
			showTip={showTip}
			setShowTip={setShowTip}
		/>
	);
};

export default TranslateResultContainer;
