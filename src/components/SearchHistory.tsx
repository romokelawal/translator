import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import ListGroup from 'react-bootstrap/ListGroup';

type Props = {
	source: string;
	target: string;
	sourceLang: string;
	targetLang: string;
};

export const SearchHistory: React.FC<Props> = ({ source, target, sourceLang, targetLang }) => {
	return (
		<ListGroup.Item className="d-md-flex">
			<Col md={6} className="p-1">
				<h6>{sourceLang}</h6>
				{source}
			</Col>
			<Col md={6} className="p-1">    
				<h6>{targetLang}</h6>
				{target}
			</Col>
		</ListGroup.Item>
	);
};
