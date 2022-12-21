import * as React from 'react'
import styled from 'styled-components'
import { ServiceCard } from '../components/serviceCard'
import { Button } from '@mui/material'
import { NewServiceForm } from '../components/newServiceForm'
const Wrapper = styled.div`
  width:100%:
  height:100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  overflow:auto;
`
const CardList = styled.div`
	display: flex;
	width: 60%;
	flex-direction: column;
	gap: 3%;
	margin-top: 10%;
	align-self: center;
`

export const ServicosContratados = (props) => {
	const { id } = React.useId()
	const myServices = []

	return (
		<Wrapper>
			<CardList>
				{myServices.map((card) => (
					<ServiceCard
						name={card.nomeServico}
						description={card.descricao}
						category={card.categoria}
						value={card.valor}
						key={id}
						isSigned
					/>
				))}
			</CardList>
		</Wrapper>
	)
}
