import React, { useRef, useEffect, useState } from 'react'
import './App.css' // Import your CSS file

function App() {
  const [cards, setCards] = useState([
    { desc: 'This is the first card', img: null },
    { desc: 'This is a card', img: null },
    { desc: 'This is a card', img: null },
    { desc: 'This is a card', img: null },
    { desc: 'This is a card', img: null },
    { desc: 'This is a card', img: null },
    { desc: 'This is a card', img: null },
    { desc: 'This is a card', img: null },
    { desc: 'This is a card', img: null },
    { desc: 'This is a card', img: null },
    { desc: 'This is a card', img: null },
    { desc: 'This is a card', img: null },
    { desc: 'This is a card', img: null },
    { desc: 'This is a card', img: null },
    { desc: 'This is a card', img: null },
    { desc: 'This is the last card', img: null },
  ]) // State for holding card data

  const cardContainerRef = useRef(null) // Ref for card container element
  const lastCardRef = useRef(null) // Ref for the last card element
  const observer = useRef(null) // Ref for IntersectionObserver instance

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('show', entry.isIntersecting)
        })
      },
      { rootMargin: '100px' }
    )

    // Observe initial cards
    const initialCards = cardContainerRef.current.querySelectorAll('.card')
    initialCards.forEach((card) => observer.current.observe(card))

    // Cleanup function to disconnect observer on unmount
    return () => {
      if (observer.current) {
        observer.current.disconnect()
      }
    }
  }, [cards]) // Re-run effect when cards state changes

  const loadNewCards = async () => {
    const data = await fetch('./config.json')

    const { image_url } = await data.json()

    return image_url
  }

  useEffect(() => {
    const lastCard = lastCardRef.current

    if (!lastCard) return // Skip if last card ref not set

    const lastCardObserver = new IntersectionObserver(async (entries) => {
      const [lastCardEntry] = entries

      if (!lastCardEntry.isIntersecting) return // Don't load if still visible

      loadNewCards().then((image_url) => {
        setCards((prevCards) => [...prevCards, { desc: '', img: image_url }])
      })

      // Update last card reference after new card is added
      lastCardRef.current =
        cardContainerRef.current.querySelector('.card:last-child')
    })

    lastCardObserver.observe(lastCard)

    // Cleanup function to disconnect observer on unmount
    return () => {
      if (lastCardObserver) {
        lastCardObserver.disconnect()
      }
    }
  }, [lastCardRef, cards]) // Re-run effect when lastCardRef changes

  return (
    <div className='card-container' ref={cardContainerRef}>
      {cards.map((card, index) => {
        const { img, desc } = card
        if (cards.length == index + 1) {
          return (
            <div class='card' ref={lastCardRef}>
              {img ? (
                <img className={'img'} src={img} />
              ) : (
                ' This is the last card'
              )}
            </div>
          )
        } else {
          return (
            <>
              {!img ? (
                <div class='card'>{desc} </div>
              ) : (
                <div class='card'>
                  <img className={'img'} src={img} />
                </div>
              )}
            </>
          )
        }
      })}
    </div>
  )
}

export default App
