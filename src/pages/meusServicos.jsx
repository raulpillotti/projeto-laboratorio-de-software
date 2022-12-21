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

const CreateService = styled.div``

const CreateNewServiceButton = styled.div`
	display: flex;
	width: 60%;
	align-self: center;
	flex-direction: column;
`

export const MeusServicos = (props) => {
	const [creatingNewService, setCreatingNewService] = React.useState(false)

	const { id } = React.useId()
	const myServices = []

	return (
		<Wrapper>
			{creatingNewService ? (
				<NewServiceForm
					onClose={() => {
						setCreatingNewService(false)
					}}
				/>
			) : (
				<>
					<CardList>
						{myServices.map((card) => (
							<ServiceCard
								name={card.nomeServico}
								description={card.descricao}
								category={card.categoria}
								value={card.valor}
								key={id}
								isDisabled
							/>
						))}
					</CardList>
					<CreateNewServiceButton>
						<Button
							variant='contained'
							onClick={() => {
								setCreatingNewService(true)
							}}
						>
							Criar novo serviço
						</Button>
					</CreateNewServiceButton>
				</>
			)}
		</Wrapper>
	)
}
