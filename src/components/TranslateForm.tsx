import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import SelectLanguageContainer from '../container/SelectLanguageContainer';
import TranslateResultContainer from '../container/TranslateResultContainer';

type Props = {
	handleSource: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
	handleSourceLang: (e: React.ChangeEvent<HTMLSelectElement>) => void;
	handleTargetLang: (e: React.ChangeEvent<HTMLSelectElement>) => void;
	handleEnterKey: (e: React.KeyboardEvent) => void;
	output: string;
	translate: Function;
};

const TranslateForm: React.FC<Props> = ({
	handleSource,
	handleSourceLang,
	handleTargetLang,
	handleEnterKey,
	output,
	translate
}) => {
	return (
		<Row>
			<Col xs={12} md={6}>
				<h5>Source Language</h5>
				<SelectLanguageContainer handleChange={handleSourceLang} str={`English`} code={`en`} />
				<FloatingLabel controlId="floatingTextarea" label="Enter text" className="mb-3">
					<Form.Control
						as="textarea"
						placeholder="Enter text"
						onKeyPress={handleEnterKey}
						onChange={handleSource}
						style={{ height: '100px' }}
					/>
				</FloatingLabel>
			</Col>
			<Col xs={12} md={6}>
				<h5>Target Language</h5>
				<SelectLanguageContainer handleChange={handleTargetLang} str={`Czech`} code={`cs`} />
				<TranslateResultContainer results={output} />
			</Col>
			<Col xs={12} md={{ span: 6, offset: 3 }}>
				<Button
					className="w-100"
					onClick={() => {
						translate();
					}}
				>
					Translate
				</Button>
			</Col>
		</Row>
	);
};

export default TranslateForm;
