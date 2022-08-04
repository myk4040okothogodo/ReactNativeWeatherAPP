import React, {useState, useEffect} from "react";
import { View, Text, SafeAreaView, Image,Animated, StatusBar, FlatList } from "react-native";

import { COLORS, SIZES, assets, SHADOWS, FONTS } from "../constants";
import { CircleButton, RectButton, SubInfo, DetailsDesc, DetailsBid, FocusedStatusBar } from "../components";
//import {weatherData} from "../constants"; 
import {Icon} from 'react-native-elements'







const DetailsHeader = ({ data,liked,likeHandler,index2,counter,currentValue,visible, navigation }) => (

 
  <View style={{ width: "100%", height: 373 }}>
    <Image
      source={data.image}
      resizeMode="cover"
      style={{ width: "100%", height: "100%" }}
    />

    <CircleButton
      imgUrl={assets.left}
      handlePress={() => navigation.goBack()}
      left={15}
      top={StatusBar.currentHeight + 10}
    />
   {/*
    <CircleButton
      imgUrl={assets.heart}
      right={15}
      top={StatusBar.currentHeight + 10}
    />
    */}
    <View style={{
       marginTop:0,
       top : -(338),
       right: -290,
       margin:10,
       width : 40,
       height: 40,
       backgroundColor: "white",
       alignItems: "center",
       justifyContent:"center",
       borderRadius: 25,
    }}>
      <Icon
        name = {liked && (index2 === counter) ? "favorite" :"favorite-border"}
        type="material"
        color = "red"
        size ={28}
        onPress ={likeHandler}
      />  
    </View>

    <View style={{marginTop:0, alignItems:"center",justifyContent:"center"}}>
      {visible && (index2 == counter) &&
        <Animated.View style ={{transform:[{scale:currentValue}]}}>
        <Icon  name="favorite"
          size = {40}
          color="#FF033E"
        />
       </Animated.View>
      }
      </View>
  </View>
);

const Details = ({ route, navigation }) => {
  const { data, thiscityWeather } = route.params;

  const currentValue = new Animated.Value(1);
  const [liked, setLiked] = useState(false);
  const [counter, setCounter] = useState(-2);
  const [visible, setVisible] = useState(false);
  const index2     = 8;
  const likeHandler =() => {
    if (liked == false){
      setVisible(true)
    }
    setLiked( !liked)
    setCounter(index2)
  }

   useEffect(() => {
      if(liked == true){
        Animated.spring(currentValue, {
          toValue: 3,
          friction: 1.5,
          useNativeDriver: true
        }).start(() => {
          Animated.spring(currentValue,{
            toValue: 0.5,
            friction: 0.6,
            useNativeDriver: true
          }).start(() => {
            setVisible(false)
          })
        })
      }
   }, [liked])
 
 
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />

      <View
        style={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          paddingVertical: SIZES.font,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255,255,255,0.5)",
          zIndex: 2,
        }}
      >
      </View>
    
      <FlatList
        data={weatherData}
        renderItem={({ item }) => <DetailsBid weather={item} cityweather={thiscityWeather} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: SIZES.extraLarge * 3,
        }}
        ListHeaderComponent={() => (
          <React.Fragment>
            <DetailsHeader liked={liked} likeHandler={likeHandler} currentValue={currentValue} index2={index2} visible={visible} counter={counter} data={data} navigation={navigation} />
            <SubInfo cityweather={thiscityWeather}/>
            <View style={{ padding: SIZES.font }}>
              <DetailsDesc data={data} cityWeather={thiscityWeather} />
            </View>
          </React.Fragment>
        )}
      /> 
    </SafeAreaView>
  );
};

export default Details;
