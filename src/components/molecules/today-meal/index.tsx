import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React,{FC} from 'react'
import { TodayMealsProps } from '../../../types'
import { Meal } from '../../../types'
import ViewFoods from '../view-food'

const TodayMeals:  FC<TodayMealsProps> = ({foods,onCompleteAddRemove}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Comidas</Text>
      <ScrollView style={styles.content}>
        {
            foods?.map((meal:Meal,i)=><ViewFoods key={meal.name && i} {...meal} isAbleToAdd={false} onCompleteAddRemove={onCompleteAddRemove} itemPosition={i}  />)
        }
      </ScrollView>
    </View>
  )
}

export default TodayMeals

const styles = StyleSheet.create({
    content:{marginVertical:16},
    container:{flex:1, marginTop:24},
    title:{fontSize:16}
})