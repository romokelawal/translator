import React from 'react';
import { Overlay, Tooltip } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import styled from 'styled-components';

const ClipBoard = styled(Form)`
	&:after {
		content: "";
		position: absolute;
		top: 0;
		right: .8rem;
		background: url('img/copy.svg');
        background-repeat: no-repeat;
        color: white;
        width: 1.2rem;
		height: 1.2rem;
        cursor: pointer;
	}
`;

type Props = {
	result: string;
	target: any;
	showTip: boolean;
	setShowTip: Function;
};

const TranslateResult: React.FC<Props> = ({ result, target, showTip, setShowTip }) => {
	return (
		<Row>
			<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" style={{ position: 'relative' }}>
				<ClipBoard
					ref={target}
					onClick={() => {
						navigator.clipboard.writeText(result);
						setShowTip(!showTip);
					}}
				>
					<Form.Control
						as="textarea"
						disabled
						value={result !== undefined ? result : 'Language not supported!'}
						style={{ height: '100px' }}
					/>
				</ClipBoard>
				<Overlay target={target.current} show={showTip} placement="right">
					{(props) => (
						<Tooltip id="tool-tip" {...props}>
							Copied!
						</Tooltip>
					)}
				</Overlay>
			</Form.Group>
		</Row>
	);
};

export default TranslateResult;
