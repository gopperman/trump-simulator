
const playSound = (filename) => {
	let audioElement = document.createElement('audio')
	console.log('executing')
	audioElement.setAttribute('src', `sound/{filename}.mp3`)
	audioElement.load()
	audioElement.addEventListener("canplay", function() { 
	  audioElement.play()
	}, true)
}

export { playSound }