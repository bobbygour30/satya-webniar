import React from 'react'
import Navbar from '../components/Navbar'
import HeroIntro from '../components/HeroIntro'
import AddressFears from '../components/AddressFears'
import FearUnnaturalHairline from '../components/FearUnnaturalHairline'
import FearPermanentDonorDamage from '../components/FearPermanentDonorDamage'
import FearMedicationSideEffects from '../components/FearMedicationSideEffects'
import FearResultsVanish from '../components/FearResultsVanish'
import FearProgressiveBaldness from '../components/FearProgressiveBaldness'
import FearGraftCountTransparency from '../components/FearGraftCountTransparency'
import FearAbandonedAfterSurgery from '../components/FearAbandonedAfterSurgery'
import DesireShiftSatyaGuarantee from '../components/DesireShiftSatyaGuarantee'
import HappySatyaFamily from '../components/HappySatyaFamily'
import ExpertiseProvenResults from '../components/ExpertiseProvenResults'

const HomePage = () => {
  return (
    <div>
        <Navbar />
        <HeroIntro />
        <AddressFears />
        <FearUnnaturalHairline />
        <FearPermanentDonorDamage />
        <FearMedicationSideEffects />
        <FearResultsVanish />
        <FearProgressiveBaldness />
        <FearGraftCountTransparency />
        <FearAbandonedAfterSurgery />
        <DesireShiftSatyaGuarantee />
        <HappySatyaFamily />
        <ExpertiseProvenResults />
    </div>
  )
}

export default HomePage