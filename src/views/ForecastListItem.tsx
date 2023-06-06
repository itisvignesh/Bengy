
import React from 'react'
import {FlatList, Text, View, StyleSheet, StatusBar,Image } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'

var data = 
[
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Expect a day of partly cloudy with clear spells Expect a day of partly cloudy with clear spells',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

export interface Forecast {title:String}
  
const Item = ({title}:Forecast) => (
  <View style={forecastItemStyles.item}>
    <View style={{alignItems:"center"}}>
    <Text style={{fontWeight:"bold"}}>Jun 1, 2023</Text>
    <Image source={{uri: 'https://openweathermap.org/img/wn/10d@4x.png'}} style = {forecastItemStyles.image}></Image>
    <Text >Clouds</Text>
    </View>
     <View style={forecastItemStyles.rightContainer}>
     <Text style={forecastItemStyles.short_description}>{title}</Text>
     <View>
     <View style={forecastItemStyles.tempratureRow}>
     <Text style={forecastItemStyles.minTempText}>Min:10C</Text>
     <Text style={forecastItemStyles.maxTempText}>Max:28C</Text>
     </View>
     <LinearGradient
     start={[0,1]}
     end={[1,0]}
     colors={['red', 'blue']}
     style = {forecastItemStyles.colorBarView}
     >
     </LinearGradient>
     </View>
     </View>
  </View>
);


export default function ForecastList() {
    return (
        <FlatList 
        style = {forecastItemStyles.container}
        data={data}
        renderItem={({item}) => <Item title={item.title} />}/>
        );
}


var forecastItemStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "gray",
    alignSelf:'stretch',
    
  },
  item: {
    backgroundColor: 'whiteʼ',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 0,
    borderRadius : 10,
    flexDirection:'row',
    boxShadow: "10px 10px 17px -12px rgba(0,0,0,0.75)"

  },
  title: {
    fontSize: 32,
  },
  image:{
    width: 120,
    height: 120,
    margin:-20
  },
  short_description:{
    fontSize : 18,
    flex:1,
    flexWrap:"wrap",
    maxWidth:280
  },
  colorBarView:{
    borderRadius: 5,
    height:10,
    width:250,  },
  tempratureRow:{
    flexDirection:"row",
    justifyContent:"space-between"},
  rightContainer:{
    flexDirection:"column",
    justifyContent:"space-between"
  },
  minTempText:{
  fontSize:16,
  color:"red"
  },
  maxTempText:{
    fontSize:16,
    color:"blue"
  }
  
});
