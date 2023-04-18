import React, { Fragment } from 'react'
import MealsSummary from './MealsSummary';
import AvailableMeals from './AvailableMeals';
import MealItemForm from './MealItem/MealItemForm';

function Meals() {
  return (
    <Fragment>
      <MealsSummary/>
      <AvailableMeals/>
     
    </Fragment>
  )
}

export default Meals;
