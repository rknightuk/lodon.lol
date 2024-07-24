module.exports = async function() {

	const raw = {
		"G": 32,
		"F": 36,
		"E": 40,
		"D": 40,
		"C": 40,
		"B": 54,
		"A": 52,
	}

	let stalls = []

	Object.keys(raw).map(key => {
		let values = Array.apply(null, Array(raw[key])).map((x, i) => i+1)

		if (raw[key] < 54)
		{
			const empty = Array.apply(null, Array((54 - raw[key])/2)).map(() => null)
			values = empty.concat(values, empty)
		}

		stalls.push({
			row: key,
			seats: values.map((v,i) => {
				if (['D','E','F'].includes(key) && [19,37].includes(i))
				{
					return {
						taken: false,
						number: null,
						label: null,
						key: null,
					}
				} else {
					let seatNumber = v
					if (v && key === 'A') {
						seatNumber = seatNumber + 7
					} else if (v && key === 'B') {
						seatNumber = seatNumber + 6
					}
					return { 
						taken: false,
						number: seatNumber,
						label: null,
						key: v ? `${key}${seatNumber}` : null,
					}
				}
			})
		})
	})

	return {
		seats: [
			...stalls
		]
	}
}