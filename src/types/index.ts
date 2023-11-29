import { NativeStackNavigationProp } from "@react-navigation/native-stack";
export type RootStackParams = {
  Home: undefined;
  AddFood: undefined;
};
export type RootStackParamList = NativeStackNavigationProp<
  RootStackParams,
  "AddFood"
>;

export type AddFoodModalProps = {
  onClose: (shouldUpdate?: boolean) => void;
  visible: boolean;
};
export type Form = {
  textnames: string;
  onChange: (name: string, value: string) => void;
  name: string;
  value: string;
};

export type FormTypeState = {
  calories: string;
  name: string;
  portion: string;
};

export type Meal = {
  calories: string | number;
  name: string | number;
  portion: string | number;
  date?: string | number;
};
export type TotalCalories = {
  Total: string | number;
  Consumed: string | number;
  remaining: string | number;
  percentage: number;
};

export type KeyValue = {
  keyValue: string | number;
  value: string | number;
};

export type TodayMealsProps = {
  foods: Meal[];
  onCompleteAddRemove?:()=>void
};