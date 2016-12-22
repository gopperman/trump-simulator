
const playSound = (filename) => {
	let audioElement = document.createElement('audio')
	audioElement.setAttribute('src', `sound/{filename}.mp3`)
	audioElement.load()
	audioElement.addEventListener("load", function() { 
	  audioElement.play()
	}, true)
}

export { playSound }