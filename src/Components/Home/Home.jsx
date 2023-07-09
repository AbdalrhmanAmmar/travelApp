import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Home.css'
import Footer from '../Footer/Footer'



function Home() {
  return (
      <>
          <div className="header">
              <div className="layer"></div>
              <Navbar />
              <div className='headerContent'>
                  <div className="headerContentItem">
                      <h2>Your Journey Your Story</h2>
                      <p>Choose Your Favourit Destination</p>
                      <button className='buttonHeader'>Travel Plane</button>
                  </div>
              </div>

              
          </div>
          <div className="destination">
              <h1>Popular Destinations</h1>
              <p>Tours give you the opportunity to see a lot, within a time frame.</p>
              <div className='first-des'>
                  <div className="des-Text">
                      <h2>Taal Volcano, Batangas</h2>
                      <p>One of the most iconic views in Luzon, Mt. Taal boasts a
volcano inside a lake inside an island. If you fancy a closer
look, the hike up to the crater is a mere 45 minutes, and is
easy enough for beginners. Guides will assist you most of
the way, and you'll see the peculiar environment found on
an active volcano, including volcanic rocks and steam
vents. The hike can be dusty and hot, so plan for an early
morning trip, and then unwind with some bulalo before
heading back home!</p>
                      
                  </div>
                  <div className='image'>
                      <img src="./../../../public/assets/1.jpg" alt="" />
                      <img src="./../../../public/assets/2.jpg" alt="" />
                  </div>
              </div>
          </div>
          <div className="destination reverse">
              <div className='first-des reverse'>
                  <div className="des-Text">
                      <h2>Mt. Daguldul, Batangas</h2>
                      <p>If you're looking for a hike that's a little more challenging
but still good for a beginner mountaineer, check out Mt.
Daguldul in San Juan, Batangas. You'll start your hike from
the beach and pass through tropical forest, different rock
formations, and small streams. There's a small store
halfway up the trail where you can take a break and drink
buko juice, and though the summit itself may not have the
best view, the breeze is fantastic. Once you've made it
back down, head straight to the beach for a refreshing,
well-deserved swim.</p>
                      
                  </div>
                  <div className='image'>
                      <img src="./../../../public/assets/5.jpg" alt="" />
                      <img src="./../../../public/assets/8.jpg" alt="" />
                  </div>
              </div>
          </div>
          <section className='trip'>
              <h1>Recent Trips</h1>
              <p>You can discover unique destinations using Google Maps.</p>
              <div className="tripCard">
                                <div className='t-card'>
                  <div className="t-image">
                      <img src="./../../../public/assets/5.jpg" alt="" />
                  </div>
                  <h4>Trip in Indonesia</h4>
                  <p>Indonesia, officially the Republic of
Indonesia, is a country in Southeast Asia
and Oceania between the Indian and
Pacific oceans. It consists of over 17,000
islands, including Sumatra, Java, Sulawesi
and parts of Borneo and New Guinea.</p>
              </div>
              <div className='t-card'>
                  <div className="t-image">
                      <img src="./../../../public/assets/6.jpg" alt="" />
                  </div>
                  <h4>Trip in Indonesia</h4>
                  <p>Indonesia, officially the Republic of
Indonesia, is a country in Southeast Asia
and Oceania between the Indian and
Pacific oceans. It consists of over 17,000
islands, including Sumatra, Java, Sulawesi
and parts of Borneo and New Guinea.</p>
              </div>
              <div className='t-card'>
                  <div className="t-image">
                      <img src="./../../../public/assets/8.jpg" alt="" />
                  </div>
                  <h4>Trip in Indonesia</h4>
                  <p>Indonesia, officially the Republic of
Indonesia, is a country in Southeast Asia
and Oceania between the Indian and
Pacific oceans. It consists of over 17,000
islands, including Sumatra, Java, Sulawesi
and parts of Borneo and New Guinea.</p>
              </div>
              </div>

          </section>
          <Footer/>

      






 
          
          
     </>
  )
}

export default Home