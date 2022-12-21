import axios from 'axios'
import * as React from 'react'
import styled from 'styled-components'
import { FormControl, InputLabel, Input, Select, MenuItem, Button } from '@mui/material'

const Box = styled.div`
	width: 70%;
	height: 400px;
	align-self: center;
	display: flex;
	flex-direction: column;
	overflow: auto;
	border: 1px solid black;
	border-radius: 10px;
	margin-top: 10%;
	gap: 5%;
`
const Buttons = styled.div`
	display: flex;
	align-self: center;
	gap: 2%;
`

export const NewServiceForm = (props) => {
	const name = React.useRef('')
	const description = React.useRef('')
	const value = React.useRef(0)
	const address = React.useRef('')
	const category = React.useRef()
	const user = '8988311a-04bf-4ef8-931d-63fb540745fb'

	const publishService = () => {
		const newService = {
			UsuarioId: user,
			NomeServico: name.current,
			Descricao: description.current,
			Valor: Number(value.current),
			Categoria: category.current.target.value,
		}
		console.log(newService)
		axios
			.post('http://localhost:5000/Api/Servicos', newService, {
				headers: { 'Access-Control-Allow-Origin': '*' },
			})
			.catch((err) => console.log(err))

		name.current = ''
		description.current = ''
		value.current = ''
		address.current = ''

		category.current = ''

		props.onClose()
	}

	return (
		<Box>
			<FormControl fullWidth>
				<InputLabel htmlFor={'name'}>{'Nome do serviço'}</InputLabel>
				<Input
					onChange={(e) => {
						name.current = e.target.value
					}}
					id={'name'}
					fullWidth
				/>
			</FormControl>

			<FormControl fullWidth>
				<InputLabel htmlFor={'Descrição'}>{'Descrição'}</InputLabel>
				<Input
					onChange={(e) => {
						description.current = e.target.value
					}}
					id={'Descrição'}
					fullWidth
				/>
			</FormControl>

			{/* <FormControl fullWidth>
                <InputLabel htmlFor={'Endereço'}>{'Endereço'}</InputLabel>
                    <Input onChange={(e)=> {address.current = e.target.value}} id={'Endereço'} fullWidth />
            </FormControl> */}

			<FormControl fullWidth>
				<InputLabel htmlFor='Valor'>{'Valor'}</InputLabel>
				<Input
					onChange={(e) => {
						value.current = e.target.value
					}}
					id={'Valor'}
					fullWidth
					type={'number'}
				/>
			</FormControl>

			<InputLabel>Categoria</InputLabel>

			<Select value={category.current} onChange={(value) => (category.current = value)}>
				<MenuItem value={0}>Saúde</MenuItem>
				<MenuItem value={1}>Construção</MenuItem>
				<MenuItem value={2}>Música</MenuItem>
				<MenuItem value={3}>Outros</MenuItem>
			</Select>
			<Buttons>
				<Button variant='contained' onClick={() => publishService()}>
					{' '}
					Confirmar
				</Button>
				<Button
					variant='contained'
					onClick={() => {
						props.onClose()
					}}
				>
					{' '}
					Cancelar
				</Button>
			</Buttons>
		</Box>
	)
}
