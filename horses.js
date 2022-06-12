// Shuffle array
for (let i = 0; i < images.length; i++) {
  let idxA = Math.floor(Math.random() * images.length)
  let idxB = Math.floor(Math.random() * images.length)
  if (idxA > idxB) {
    [idxA, idxB] = [idxB, idxA]
  }

  const removed = images.splice(idxA, 1)
  images.splice(idxB - 1, 0, removed)
}

const parent = document.getElementById('horses')
images.forEach((url, i) => {
  const img = document.createElement('img')
  img.setAttribute('src', url)
  const angle = Math.random() * 20 - 10;
  img.setAttribute('style', `transform: rotate(${angle.toFixed(2)}deg)`)

  const imgContainer = document.createElement('div')
  imgContainer.className = 'horse'
  imgContainer.appendChild(img)

  parent.appendChild(imgContainer)
})
