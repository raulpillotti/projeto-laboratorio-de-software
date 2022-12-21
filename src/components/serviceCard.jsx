import * as React from 'react'
import styled from 'styled-components'
import { FaStar } from 'react-icons/fa'
import { ServiceCardDetails } from './serviceCardDetails'
import { ConfirmPurchasePopup } from './confirmPurchasePopup'
import { Button, Rating, Typography } from '@mui/material'

const CardWrapper = styled.div`
    display:flex;
    flex-direction:column;
    height:${(p) => (p.isDisabled ? '100px' : '200px')};
    background:#edf0ee;
    margin-bottom:15px;
    border-radius:10px;
    border:1px solid black;
    border-left 20px solid red;
    cursor: ${(p) => (p.isDisabled ? undefined : 'pointer')};

`

const TitleField = styled.div`
	display: flex;
	width: 100%;
	font-size: 25px;
	font-weight: bold;
	width: 100%;
	justify-content: center;
`

const CategoryField = styled.div`
	font-size: 15px;
	align-self: flex-end;
	margin-left: 50px;
	font-weight: 400;
`

const DescriptionField = styled.div`
	margin-top: 3%;
	height: 50%;
	overflow: hidden;
	font-size: 20px;
`

const ValueField = styled.div`
	margin-left: 2%;
`

export const ServiceCard = (props) => {
	const [showDetails, setShowDetails] = React.useState(false)

	const evaluation = 5 //get para média de avaliações de um usuário

	return (
		<>
			{!showDetails ? (
				<CardWrapper
					onClick={() => !props.isDisabled && setShowDetails(true)}
					isDisabled={props.isDisabled}
				>
					<TitleField>
						{props.name}
						<ValueField>
							<Rating
								readOnly
								name='simple-controlled'
								value={evaluation}
								// onChange={(event, val) => {
								//   setEvaluation(val);
								// }}
							/>
						</ValueField>
						<CategoryField>{props.category}</CategoryField>
					</TitleField>
					{!props.isDisabled && (
						<div style={{ marginLeft: '3%', height: '100%' }}>
							<DescriptionField>{props.description}</DescriptionField>
						</div>
					)}
				</CardWrapper>
			) : (
				<ServiceCardDetails
					name={props.name}
					description={props.description}
					value={props.value}
					address={props.address}
					onClose={() => {
						setShowDetails(false)
					}}
					isSigned={props.isSigned}
				/>
			)}
		</>
	)
}
