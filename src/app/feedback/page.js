"use client"

import { Button } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import { useState } from 'react'
import { toast } from '@/components/ui/use-toast'

const Feedback = () => {
	const [data, setData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		mobile: '',
		branch: '',
		message: ''
	})

	async function handleSubmit(e) {
		e.preventDefault()
		const res = await fetch('/api/feedback', {
			method: 'POST',
			body: JSON.stringify(data)
		})
		const response = await res.json()

		if (response.success) {
			setData({
				firstName: '',
				lastName: '',
				email: '',
				mobile: '',
				branch: '',
				message: ''
			})

			toast({ title: "Success", description: "Thanks for your valuable feedback!" })
		} else {
			toast({ title: "Error", description: response.message || 'Failed to send message' })
		}
	}

	return (
		<section className="p-6 dark:bg-gray-100 dark:text-gray-900">
			<form onSubmit={handleSubmit} className="container flex flex-col mx-auto space-y-12">
				<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
					<div className="space-y-2 col-span-full lg:col-span-1">
						<p className="text-xl font-bold">Give Us your Feedback</p>
						<p className="text-xs">Your Feedback is valuable for us for our constant improvement and making sure every things runs smoothely and as per our people choice.</p>
					</div>
					<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
						<div className="col-span-full sm:col-span-3">
							<label htmlFor="firstname" className="text-sm">First name</label>
							<input
								id="firstname"
								type="text"
								placeholder="First name"
								className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
								onChange={(e) => {
									setData(data => ({
										...data,
										firstName: e.target.value
									}))
								}}
							/>
						</div>
						<div className="col-span-full sm:col-span-3">
							<label htmlFor="lastname" className="text-sm">Last name</label>
							<input
								id="lastname"
								type="text"
								placeholder="Last name"
								className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
								onChange={(e) => {
									setData(data => ({
										...data,
										lastName: e.target.value
									}))
								}}
							/>
						</div>
						<div className="col-span-full sm:col-span-3">
							<label htmlFor="email" className="text-sm">Email</label>
							<input
								id="email"
								type="email"
								placeholder="Email"
								className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
								onChange={(e) => {
									setData(data => ({
										...data,
										email: e.target.value
									}))
								}}
							/>
						</div>
						<div className="col-span-full sm:col-span-3">
							<label htmlFor="Mobile Number" className="text-sm">Mobile Number</label>
							<input
								id="Mobile Number"
								type="Mobile Number"
								placeholder="Mobile Number"
								className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
								onChange={(e) => {
									setData(data => ({
										...data,
										mobile: e.target.value
									}))
								}}
							/>
						</div>
						<div className="col-span-3">
							<label htmlFor="branch" className="text-sm">Branch</label>
							<input
								id="branch"
								type="text"
								placeholder="Branch"
								className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
								onChange={(e) => {
									setData(data => ({
										...data,
										branch: e.target.value
									}))
								}}
							/>
						</div>
						<div className="col-span-8">
							<label htmlFor="message" className="text-sm">Your message</label>
							<textarea
								id="message"
								type="text"
								placeholder="Write your message for us"
								className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
								onChange={(e) => {
									setData(data => ({
										...data,
										message: e.target.value
									}))
								}}
							/>
						</div>
						<Button type='submit' variant="contained" style={{ background: '#4f46e5' }} startIcon={<SendIcon />} >Submit</Button>
					</div>
				</fieldset>
			</form>
		</section>
	)
}

export default Feedback