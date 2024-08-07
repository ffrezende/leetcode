const cards = document.querySelectorAll('.card')

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('show', entry.isIntersecting)
      // if (entry.isIntersecting) {
      //   observer.unobserve(entry.target)
      // }
    })
  },
  { rootMargin: '100px' }
  // { threshold: 0.5, rootMargin: '100px' }
)

const loadNewCards = async () => {
  const data = await fetch('./config.json')

  const { image_url } = await data.json()

  const newImg = document.createElement('img')
  newImg.src = image_url
  newImg.classList.add('img')

  const newCard = document.createElement('div')
  newCard.classList.add('card')
  newCard.appendChild(newImg)
  observer.observe(newCard)
  document.querySelector('.card-container').append(newCard)
}

const lastCardObserver = new IntersectionObserver(async (entires) => {
  const lastCard = entires[0]

  if (!lastCard.isIntersecting) return

  await loadNewCards()
  //after the fetch there is a new last card -> oberser the new card
  lastCardObserver.unobserve(lastCard.target)
  lastCardObserver.observe(document.querySelector('.card:last-child'))
}, {})

//list
cards.forEach((card) => observer.observe(card))

//last card behavior
lastCardObserver.observe(document.querySelector('.card:last-child'))
