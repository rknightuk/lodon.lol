module.exports = async function() {

	const blank = [{
		row: '-',
		seats: Array.apply(null, Array(48)).map(() => { return { taken: false, number: null, label: null } }),
	}]

	const boxLabels = [
		{
			row: '-',
			seats: [
				{ taken: false, number: 'B.H', label: null, labelOnly: true },
				{ taken: false, number: null, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: 'B.I', label: null, labelOnly: true },
				{ taken: false, number: null, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: 'B.J', label: null, labelOnly: true },
				{ taken: false, number: null, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: 'B.K', label: null, labelOnly: true },
				{ taken: false, number: null, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: 'B.L', label: null, labelOnly: true },
				{ taken: false, number: null, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: 'B.M', label: null, labelOnly: true },
				{ taken: false, number: null, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: 'B.N', label: null, labelOnly: true },
				{ taken: false, number: null, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: 'B.O', label: null, labelOnly: true },
				{ taken: false, number: null, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: 'B.P', label: null, labelOnly: true },
				{ taken: false, number: null, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: 'B.Q', label: null, labelOnly: true },
			]
		}
	]

	const box1 = [
		{
			row: '-',
			seats: [
				{ taken: false, number: 1, label: null },
				{ taken: false, number: 2, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: 1, label: null },
				{ taken: false, number: 2, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: 1, label: null },
				{ taken: false, number: 2, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: 1, label: null },
				{ taken: false, number: 2, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: 1, label: null },
				{ taken: false, number: 2, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: 1, label: null },
				{ taken: false, number: 2, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: 1, label: null },
				{ taken: false, number: 2, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: 1, label: null },
				{ taken: false, number: 2, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: 1, label: null },
				{ taken: false, number: 2, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: 1, label: null },
				{ taken: false, number: 2, label: null },
			]
		}
	]

	const box2 = [
		{
			row: '-',
			seats: [
				{ taken: false, number: 1, label: null },
				{ taken: false, number: 2, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: 1, label: null },
				{ taken: false, number: 2, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: 1, label: null },
				{ taken: false, number: 2, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: 1, label: null },
				{ taken: false, number: 2, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: 1, label: null },
				{ taken: false, number: 2, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: 1, label: null },
				{ taken: false, number: 2, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: 1, label: null },
				{ taken: false, number: 2, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: 1, label: null },
				{ taken: false, number: 2, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: 1, label: null },
				{ taken: false, number: 2, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: 1, label: null },
				{ taken: false, number: 2, label: null },
			]
		}
	]

	const raw = {
		"G": 16,
		"F": 40,
		"E": 42,
		"D": 42,
		"C": 40,
		"B": 36,
		"A": 48
	}

	let stalls = []

	Object.keys(raw).map(key => {
		let values = Array.apply(null, Array(raw[key])).map((x, i) => i+1)

		if (raw[key] < 48)
		{
			const empty = Array.apply(null, Array((48 - raw[key])/2)).map(() => null)
			values = empty.concat(values, empty)
		}

		stalls.push({
			row: key,
			seats: values.map(v => {
				return { 
					taken: false,
					number: v,
					label: null,
					key: v ? `${key}${v}` : null,
				}
			})
		})
	})

	return {
		seats: [
			...boxLabels,
			...box1,
			...box1,
			...blank,
			...stalls
		]
	}
}