import React from 'react'
import image1 from '../assets/image-1.jpg'
import image2 from '../assets/image-2.jpg'
import image3 from '../assets/image-3.jpg'

const Destinations = () => {
  return (
    <section className='destinations'>
      <h3>Now available in more than 100+ cities all over India!</h3>
      <div className='grid'>
        <div>
          <img src={image1} alt='destination-1' />
          <h3>Fly to Jaipur</h3>
          <p>
          These historic structures showcase the rich culture of the various dynasties and rulers. There are several such royal residences and some are managed by top premium hotel chains and are palace hotels or luxury resorts.
          </p>
        </div>

        <div>
          <img src={image2} alt='destination-2' />
          <h3>Experience Varanasi</h3>
          <p>
          Varanasi, popularly known as Kashi is popular amongst the pilgrims for taking holy dips in the River Ganges. The city has been one of the most popular tourist destinations in India due to its endless ghats, famous temples, fascinating rituals, and vibrant religious festivals.
          </p>
        </div>

        <div>
          <img src={image3} alt='destination-3' />
          <h3>Savour Kashmir</h3>
          <p>
          The valleys of Kashmir are untamed and unspoilt. Surrounded by the sublime mountains, these valleys echo nature, beauty and a certain level of mysticism. Charming lakes: The lakes in Kashmir are crystal clear, stunning and pristine. Srinagar boasts of the Dal and Nageen Lakes which are stunning.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Destinations
