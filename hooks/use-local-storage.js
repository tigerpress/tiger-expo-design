import { useEffect, useState } from 'react'

export const useLocalStorage = (key, initialValue) => {
	const [value, setValue] = useState(initialValue)

	useEffect(() => {
		const existingValue = window.localStorage.getItem(key)
		if (existingValue) setValue(JSON.parse(existingValue))
	}, [])

	useEffect(() => {
		if (value !== initialValue) {
			window.localStorage.setItem(key, JSON.stringify(value))
		}
	}, [value])

	return [value, setValue]
}