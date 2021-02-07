import React from 'react'
import CardList from '../../components/cardList/CardList'
import MainBanner from '../../components/mainBanner/MainBanner';


export default function Home() {
  return (
    <div className='home'>
      <MainBanner/>
      <CardList maxCardNumber={3}/>
    </div>
  )
}


