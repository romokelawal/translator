import './App.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TranslateFormContainer from './container/TranslateFormContainer';
import { Header } from './common/Header';

const App = () => {
	return (
		<div>
			<Header />
			<Container>
				<Row className="d-flex justify-content-center">
					<Col xs={10}>
						<TranslateFormContainer />
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default App;
