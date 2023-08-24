const dotenv = require('dotenv')
dotenv.config()

module.exports = async function() {
	const data = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${process.env.SHEET_ID}/values/Sheet?key=${process.env.GOOGLE_API}`)
        .then(res => res.json())
        .then(json => {
            return json
        })
	
	data.values.shift()
	const ticketData = {
        'S': {},
        'DC': {},
        'UC': {},
    }

    const levelKeys = {
        'Stalls': 'S',
        'Dress Circle': 'DC',
        'Upper Circle': 'UC',
    }

	data.values.forEach(d => {
        const key = levelKeys[d[1]]
        let link = d[4]
        if (link && !link.startsWith('http') && !link.startsWith('https'))
        {
            link = `https://${link}`
        }
        ticketData[key][d[2].replace(/\s/g,'').toUpperCase()] = {
			name: d[3],
			link: link,
			discord: d[5],
		}
	})

    return ticketData
}