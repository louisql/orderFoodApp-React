import { useState, useEffect } from "react";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState();

  useEffect(async () => {
    /* useEffect expect a function that is NOT asyncronious - so we create fetchMeals for it to be separated  */
    const fetchMeals = async () => {
      setIsLoading(true);

      const response = await fetch(
        "https://react-http-ede7f-default-rtdb.firebaseio.com/meals.json" /* Make sure to add .json */
      );

      if (!response.ok) {
      throw new Error('Something went wrong'); /* When throwing errors the lines after won't execute */
      }


      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    };


      fetchMeals().then().catch((error) => { /* because fetchMeals returns a promise we use the then  catch (catch for error) method */
        setIsLoading(false);
        setHttpError(error.message);

      }); 

  }, []);

  if (isLoading) {
    return (
      /* Returning so we don't run the code below */
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section>
        <p className={classes.MealsError}>{httpError}</p>
      </section>
    )
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
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
