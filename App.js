import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View,Switch, TouchableOpacity } from 'react-native';
import {createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();


const Dock = ()=>{
  const [Toggle,SetToggle] = useState(false)
  const SectionTime = ({time,Tilte,Style})=>{
    return (
      <View style = {{...styles.ItemTime,...Style}}>
            <View style = {styles.Time}>
                  <Text style = {styles.TextTime}>{time}</Text>
                  <Text style = {{marginBottom : 20}}>{Tilte}</Text>
            </View>
            <View style = {styles.Button}>
                <Switch style = {styles.SwithButton}
                  trackColor={{ false: "#767577", true: "blue" }}
                  thumbColor={"#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={()=>SetToggle(!Toggle)}
                  value={Toggle}
                  style={{ transform: [{ scaleX: 2.0 }, { scaleY: 2.0 }] }}
                />
            </View>
      </View>
    )
  }
  return (
    <View style = {styles.container}>
        <View style = {styles.SectionBody}>
            
            {/*  */}
            <SectionTime Style ={styles.ItemWithBorder} time = '7:00' Tilte = 'Wake Up'/>
            {/*  */}
            <SectionTime Style ={styles.ItemWithBorder} time = '7:15' Tilte = 'Go to School'/>
            {/*  */}
            <SectionTime time = '08:00' Tilte = 'Run'/>

            <View style = {styles.SectionButton}>
                  <TouchableOpacity style = {styles.ButtonAdd} >
                        <Text style = {{color : '#fff',fontWeight : 'bold',fontSize : 20}}>Add Alarm</Text>
                  </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}
const Alarm = ()=>{
  return (
    <View style = {styles.container}>
        <Text>Dock</Text>
    </View>
  )
}

const Timmer = ()=>{
  return (
    <View>
        <Text>Dock</Text>
    </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions = {{
             tabBarPressColor : 'red',
             tabBarIndicatorContainerStyle : {
                borderBottomColor : 'red'
             }
          }
        }
      >
        <Tab.Screen name = 'Dock' component = {Dock}></Tab.Screen>
        <Tab.Screen name = 'Alarm' component = {Alarm}></Tab.Screen>
        <Tab.Screen name = 'Timmer' component = {Timmer}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  SectionBody : {
    flex : 1,
    paddingHorizontal : 20,
  },
  ItemTime: {
    marginTop : 20,
    height : 100,
    alignItems :'center',
    flexDirection : 'row',
    justifyContent : 'space-between',
    paddingRight : 20
  },
  ItemWithBorder :{
    borderBottomWidth : 1,
    borderBottomColor : '#949494'
  },
  TextTime : {
    fontSize : 50,
    fontWeight : 'bold'
  },
  SwithButton : {
     height : 50,
     width : 70,
  },
  SectionButton :{
      justifyContent : 'flex-end',
      alignItems : 'center',
      flex : 1,
      marginBottom : 50
  },
  ButtonAdd : {
    minHeight: 50,
    minWidth : 50,
    backgroundColor : 'blue',
    padding : 20,
    borderRadius : 30,
  },
});
