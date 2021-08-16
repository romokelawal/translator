import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import { SearchHistory } from './SearchHistory';

type Props = {
	previousHistory: any;
};

export const SearchHistoryList: React.FC<Props> = (previousHistory) => {
	const history = previousHistory.previousHistory;

	return (
		<div>
			{history.length > 0 && (
				<Row className="mt-4">
					<h3>Search History</h3>
					<ListGroup variant="flush" className="history-list">
						{history.map((prevHistory: { source: string; target: string; sourceLang: string; targetLang: string; }, index: React.Key | null | undefined) => {
							return (
								<SearchHistory
									key={index}
									source={prevHistory.source}
									target={prevHistory.target}
									sourceLang={prevHistory.sourceLang}
									targetLang={prevHistory.targetLang}
								/>
							);
						})}
					</ListGroup>
				</Row>
			)}
		</div>
	);
};
