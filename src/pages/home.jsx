import axios from 'axios';
import * as React from 'react';
import styled from 'styled-components';
import { ServiceCard } from '../components/serviceCard';

const Wrapper = styled.div`
  width:100%:
  height:100%;
  display:flex;
  justify-content:center;
  overflow:auto;
`;

const CardList = styled.div`
	display: flex;
	width: 60%;
	margin-left: 5%;
	flex-direction: column;
	gap: 3%;
	margin-top: 10%;
`;

export const Home = (props) => {
	const [services, setServices] = React.useState([]);

	axios
		.get('http://localhost:5000/servicos', { headers: { 'Access-Control-Allow-Origin': '*' } })
		.then((r) =>
			setServices(r.data.sort((a, b) => a.nomeServico.localeCompare(b.nomeServico))),
		);

	const { id } = React.useId();

	return (
		<Wrapper>
			<CardList>
				{services.map((card) => (
					<ServiceCard
						name={card.nomeServico}
						description={card.descricao}
						category={card.categoria}
						value={card.valor}
						key={id}
					/>
				))}
			</CardList>
		</Wrapper>
	);
};
