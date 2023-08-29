module.exports = async function() {

	const blank = [{
		row: '-',
		seats: Array.apply(null, Array(30)).map(() => { return { taken: false, number: null, label: null } }),
	}]

	const topLabels = [
		{
			row: '-',
			seats: [
				{ taken: false, number: 'MM', label: null, labelOnly: true },
				{ taken: false, number: null, label: null },
				{ taken: false, number: 'NN', label: null, labelOnly: true },
				{ taken: false, number: null, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: 'OO', label: null, labelOnly: true },
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
				{ taken: false, number: 'UU', label: null, labelOnly: true },
				{ taken: false, number: null, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: 'VV', label: null, labelOnly: true },
				{ taken: false, number: null, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: 'WW', label: null, labelOnly: true },
				{ taken: false, number: null, label: null },
				{ taken: false, number: 'XX', label: null, labelOnly: true },
			]
		}
	]

	const bottomLabels = [
		{
			row: '-',
			seats: [
				{ taken: false, number: 'AA', label: null, labelOnly: true },
				{ taken: false, number: null, label: null },
				{ taken: false, number: 'BB', label: null, labelOnly: true },
				{ taken: false, number: null, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: 'CC', label: null, labelOnly: true },
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
				{ taken: false, number: 'II', label: null, labelOnly: true },
				{ taken: false, number: null, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: 'JJ', label: null, labelOnly: true },
				{ taken: false, number: null, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: 'KK', label: null, labelOnly: true },
				{ taken: false, number: null, label: null },
				{ taken: false, number: 'LL', label: null, labelOnly: true },
			]
		}
	]

	const top1 = [
		{
			row: '-',
			seats: [
				{ taken: false, number: 1, label: null, key: 'MM1' },
				{ taken: false, number: null, label: null },
				{ taken: false, number: 1, label: null, key: 'NN1' },
				{ taken: false, number: null, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: 1, label: null, key: 'OO1' },
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
				{ taken: false, number: 1, label: null, key: 'UU1' },
				{ taken: false, number: null, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: 1, label: null, key: 'VV1' },
				{ taken: false, number: null, label: null },
				{ taken: false, number: null, label: null },
				{ taken: false, number: 1, label: null, key: 'WW1' },
				{ taken: false, number: null, label: null },
				{ taken: false, number: null, label: null },
			]
		}
	]

	const top2 = [
		{
			row: '-',
			seats: [
				{ taken: false, number: 2, label: null, key: 'MM2' },
				{ taken: false, number: null, label: null },
				{ taken: false, number: 2, label: null, key: 'NN2' },
				{ taken: false, number: 3, label: null, key: 'NN3'  },
				{ taken: false, number: null, label: null },
				{ taken: false, number: 2, label: null, key: 'OO2' },
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
				{ taken: false, number: 2, label: null, key: 'UU2' },
				{ taken: false, number: 3, label: null, key: 'UU3'  },
				{ taken: false, number: null, label: null },
				{ taken: false, number: 2, label: null, key: 'VV2' },
				{ taken: false, number: 3, label: null, key: 'VV3' },
				{ taken: false, number: null, label: null },
				{ taken: false, number: 2, label: null, key: 'WW2' },
				{ taken: false, number: 3, label: null, key: 'WW3' },
				{ taken: false, number: null, label: null },
				{ taken: false, number: 1, label: null },
			]
		}
	]

	const bottom1 = [
		{
			row: '-',
			seats: [
				{ taken: false, number: 1, label: null, key: 'AA1' },
				{ taken: false, number: null, label: null },
				{ taken: false, number: 1, label: null, key: 'BB1' },
				{ taken: false, number: 2, label: null, key: 'BB2' },
				{ taken: false, number: null, label: null },
				{ taken: false, number: 1, label: null, key: 'CC1' },
				{ taken: false, number: 2, label: null, key: 'CC2' },
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
				{ taken: false, number: 1, label: null, key: 'II1' },
				{ taken: false, number: 2, label: null, key: 'II2' },
				{ taken: false, number: null, label: null },
				{ taken: false, number: 1, label: null, key: 'JJ1' },
				{ taken: false, number: 2, label: null, key: 'JJ2' },
				{ taken: false, number: null, label: null },
				{ taken: false, number: 1, label: null, key: 'KK1' },
				{ taken: false, number: 2, label: null, key: 'KK2' },
				{ taken: false, number: null, label: null },
				{ taken: false, number: 1, label: null, key: 'LL1' },
			]
		}
	]

	const bottom2 = [
		{
			row: '-',
			seats: [
				{ taken: false, number: 2, label: null, key: 'AA2' },
				{ taken: false, number: null, label: null },
				{ taken: false, number: 3, label: null, key: 'BB3' },
				{ taken: false, number: 4, label: null, key: 'BB4' },
				{ taken: false, number: null, label: null },
				{ taken: false, number: 3, label: null, key: 'CC3' },
				{ taken: false, number: 4, label: null, key: 'CC4' },
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
				{ taken: false, number: 3, label: null, key: 'II3' },
				{ taken: false, number: 4, label: null, key: 'II4' },
				{ taken: false, number: null, label: null },
				{ taken: false, number: 3, label: null, key: 'JJ3' },
				{ taken: false, number: 4, label: null, key: 'JJ4' },
				{ taken: false, number: null, label: null },
				{ taken: false, number: 3, label: null, key: 'KK3' },
				{ taken: false, number: 4, label: null, key: 'KK4' },
				{ taken: false, number: null, label: null },
				{ taken: false, number: 2, label: null, key: 'LL2' },
			]
		}
	]


	const raw = {
		"M": 30,
		"L": 30,
		"K": 30,
		"J": 30,
		"I": 30,
		"H": 30,
		"G": 30,
		"F": 30,
		"E": 28,
		"D": 26,
		"C": 24,
		"B": 22,
		"A": 20
	}

	let stalls = []

	Object.keys(raw).map(key => {
		let values = Array.apply(null, Array(raw[key])).map((x, i) => i+1)

		if (raw[key] < 30)
		{
			const empty = Array.apply(null, Array((30 - raw[key])/2)).map(() => null)
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
			...topLabels,
			...top1,
			...top2,
			...blank,
			...bottomLabels,
			...bottom1,
			...bottom2,
			...blank,
			...stalls
		]
	}
}