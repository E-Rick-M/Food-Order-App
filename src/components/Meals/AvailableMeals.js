import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Smocha',
    description: 'Finest kenyan food',
    price: 45,
  },
  {
    id: 'm2',
    name: 'Chips Mwitu',
    description: 'A Kenyan specialty!',
    price: 100,
  },
  {
    id: 'm3',
    name: 'Kfc',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Fish',
    description: 'Healthy...and Great For Brain Development...',
    price: 200,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
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
