import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

type Props = {
	handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
	str: string;
	code: string;
    language: Array<object>;
};

export const SelectLanguage: React.FC<Props> = ({ handleChange, str, code, language }) => {
	return (
		<Row>
			<Form.Group className="mb-3">
				<Form.Select onChange={handleChange}>
					<option value={code}>{str}</option>
					{language.map((lang: any, i: React.Key | null | undefined) => {
						return (
							<option key={i} value={lang.code}>
								{lang.body}
							</option>
						);
					})}
				</Form.Select>
			</Form.Group>
		</Row>
	);
};
