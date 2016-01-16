
const getPromise = (time, message) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(message), time)
	})
}

const start = async function() {
	console.info('start')
	let text = await getPromise(3000, 'hello world')
	return text
}

const message = start()
console.log(message)