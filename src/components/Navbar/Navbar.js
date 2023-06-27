import React from 'react'
import styles from './navbar.module.css'

const Navbar = () => {
  return (
      <div className={styles['drive-navbar']}>
          <div>
          <div className={styles['drive-section']}>
          <div className={styles['section-of-img']}>
              <img src={process.env.PUBLIC_URL + '/images/Navbarimg/logo.png'} alt='logo' />
              <p>Home</p>
          </div>
              <div className={styles['user-details']}>
                  <img src={process.env.PUBLIC_URL + '/images/Navbarimg/user.png'} alt='user' className={styles['user-image-icons']} />
                  <img src={process.env.PUBLIC_URL + '/images/Navbarimg/grid.png'} alt='grid' className={styles['image-icons']} />
              </div>
              </div>
           </div>
    </div>
  )
}

export default Navbar