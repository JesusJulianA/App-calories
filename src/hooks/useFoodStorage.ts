import AsyncStorage from "@react-native-async-storage/async-storage";
import { isToday } from "date-fns";
import { Meal } from "../types";
const MY_FOOD_KEY = "@MyFood:Key";
const MY_TODAY_FOOD_KEY = "MyTodayFood:key";
const useFoodStorage = () => {
  // guaradar datos
  const saveInfoToStorage = async (storageKey: string, meal: Meal) => {
    try {
      const currentSavedFood = await AsyncStorage.getItem(storageKey);

      if (currentSavedFood !== null) {
        const currentSavedFoodParsed = JSON.parse(currentSavedFood);

        if (Array.isArray(currentSavedFoodParsed)) {
          currentSavedFoodParsed.push(meal);

          await AsyncStorage.setItem(
            storageKey,
            JSON.stringify(currentSavedFoodParsed)
          );

          return Promise.resolve();
        } else {
          console.log("no es un array");
        }
      }
      await AsyncStorage.setItem(storageKey, JSON.stringify([meal]));
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  };
  //guardar comida hoy
  const handleSaveTodayFood = async ({ calories, name, portion }: Meal) => {
    try {
      const result = await saveInfoToStorage(MY_TODAY_FOOD_KEY, {
        calories,
        name,
        portion,
        date: new Date().toISOString(),
      });
      return Promise.resolve(result);
    } catch (error) {
      console.log(error);

      return Promise.reject(error);
    }
  };
  //guardar comida
  const handleSaveFood = async ({ calories, name, portion }: Meal) => {
    try {
      const result = await saveInfoToStorage(MY_FOOD_KEY, {
        calories,
        name,
        portion,
      });
      console.log("guarda comida", result);

      return Promise.resolve(result);
    } catch (error) {
      return Promise.reject(error);
    }
  };

  //traer la comida
  const handleGet = async (storageKey: string) => {
    try {
      const foods = await AsyncStorage.getItem(storageKey);
      if (foods !== null) {
        const parsedFoods = JSON.parse(foods) as Meal[];
        return Promise.resolve(parsedFoods);
      }
    } catch (error) {
      console.error(error);

      return Promise.reject(error);
    }
  };

  const handleGetFood = async () => {
    const alimentos = await handleGet(MY_FOOD_KEY);
    return Promise.resolve(alimentos);
  };

  // traer la comida de  hoy
  const handlegetTodayFood = async () => {
    const alimentosToday = await handleGet(MY_TODAY_FOOD_KEY);
    return Promise.resolve(
      alimentosToday?.filter(
        (meal) => meal.date && isToday(new Date(meal.date))
      )
    );
  };

  const handleRemoveTodayFood = async (index: number) => {
    try {
      const todayFood = await handlegetTodayFood();
      const filterItem = todayFood?.filter((_,itemIndex) => {
        return itemIndex !== index;
      });
      await AsyncStorage.setItem(MY_TODAY_FOOD_KEY, JSON.stringify(filterItem));
      return Promise.resolve();
    } catch (error) {}
  };

  return {
    onSaveTodayFood: handleSaveTodayFood,
    onSaveFood: handleSaveFood,
    onGetFoods: handleGetFood,
    onGetTodayFood: handlegetTodayFood,
    onRemoveTodayFood: handleRemoveTodayFood,
  };
};


export default useFoodStorage;