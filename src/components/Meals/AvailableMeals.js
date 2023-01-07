import {useState, useEffect} from 'react'

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";


const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(async () => {
    /* useEffect expect a function that is NOT asyncronious - so we create fetchMeals for it to be separated  */
    const fetchMeals = async () => {
      const response = await fetch('https://react-http-ede7f-default-rtdb.firebaseio.com/meals.json'); /* Make sure to add .json */
      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price
        })
      }

      setMeals(loadedMeals);
    }

    fetchMeals();
  }, []);

  const mealsList = meals.map((meal) => (
    <MealItem 
    id={meal.id}
    key={meal.id} 
    name={meal.name} 
    description={meal.description}
    price = {meal.price} 
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
