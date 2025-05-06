'use client'
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { missionStatement } from '../../public/data'
import styles from './landingPage.module.css'

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div>
      <div className={styles.background}></div>
      <div className={styles.landingPage}>
          <h1 className={styles.heading}>{missionStatement}</h1>
          {/* @ts-ignore */}
          <givebutter-widget className={styles.donate} id="j1Pwxp"></givebutter-widget>
      </div>

      <div className={styles.photoBlurbs}>
        <div className={styles.blurb}>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 p-20">
            The sky’s the limit—or is it just the beginning?
            For individuals with mobility challenges, adventure shouldn’t end where the pavement does.
          </p>
          <img className={styles.image} src={'/dana-bobby-kyle-launch-16-9.jpeg'} alt="" width="300" height="400"/>
        </div>

        <div className={styles.blurb2}>
          <img className={styles.image} src={'/tandem-16-9.jpeg'}/>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 p-20">
          Everyone deserves the chance to feel the thrill of soaring through the air—regardless of physical ability.
          </p>
        </div>

        <div className={styles.blurb}>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 p-20">
          These aren’t just fun outings—they’re moments of freedom, empowerment, and transformation
          </p>
          <img className={styles.image} src={'/dana-launch-4-3-2.jpeg'}/>
        </div>
      </div>
      </div>
  )
}
