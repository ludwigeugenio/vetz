import React, { useState } from 'react';
import './App.css';
import ProductConfigurator from './components/ProductConfigurator/ProductConfigurator';
import styled from 'styled-components';
import api from './constants/api';
import { ToastsContainer, ToastsStore } from 'react-toasts';

function App() {
	const Container = styled.div`
		height: 500px;
		width: 1440px;
		padding: 0 100px;
	`;

	return (
		<div className="App" style={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
			<Container>
				<ProductConfigurator data={api} />
			</Container>
			<ToastsContainer store={ToastsStore} />
		</div>
	);
}

export default App;