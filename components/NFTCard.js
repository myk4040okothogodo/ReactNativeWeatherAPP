import React,{useState, useEffect} from "react";
import { useNavigation } from "@react-navigation/native";
import {Text, View,Animated, Image, TouchableOpacity } from "react-native";

import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import { SubInfo, EthPrice, NFTTitle } from "./SubInfo";
import { RectButton, CircleButton } from "./Button";
import Iconx from    'react-native-vector-icons/Ionicons'; 
import Iconm from 'react-native-vector-icons/MaterialCommunityIcons';
import {Icon} from 'react-native-elements';



const NFTCard = ({data,thiscityWeather, opacity, scale }) => {
  const navigation = useNavigation();
  
  
  const currentValue = new Animated.Value(1);
  const [liked, setLiked] = useState(false);
  const [counter, setCounter] = useState(-2);
  const [visible, setVisible] = useState(false);
  const index2     = 8;
  const likeHandler =() => {
    if (liked == false){
      setVisible(true)
    }
    setLiked(!liked)
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
    <TouchableOpacity
        onPress ={() => {
            navigation.navigate("Details", {data, thiscityWeather});
        }}
    >
    <Animated.View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
        transform: [{ scale }],
        opacity

      }}
    >
      <View
        style={{
          width: "100%",
          height: 250,
        }}
      >
        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "90%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />

        {/*<CircleButton imgUrl={assets.heart} right={10} top={10} />*/}
       <View style={{
       marginTop:0,
       top :  -207,
       right: -273,
       margin:10,
       width : 40,
       height: 40,
       backgroundColor: "white",
       alignItems: "center",
       justifyContent:"center",
       borderRadius: 40,
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

      <SubInfo  />
    
      <View style={{ width: "100%", padding: SIZES.font }}>
        <View style={{flexDirection:"row", justifyContent:"center",paddingBottom:50}}>
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small}
        />
        </View>
        <View
          style={{
            marginTop: 0,   //SIZES.font,
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >  
      <Iconx name="sunny" size={40} color="#FFBF00" />
      <Iconx name="cloudy" size={40} color="#A9A9A9" />
      <Iconm name="weather-windy" size={40} color="#231F20" />
      <Iconx name="rainy" size={40} color="#6F7378" />
    </View>
    {(thiscityWeather !== undefined) ? 
      <View style={{ flexDirection:"row", justifyContent:"space-around", fontSize:17 }}>
          <Text> {thiscityWeather["sun"]}°C</Text>
          <Text> {thiscityWeather["cloud"]} Oktas</Text>
          <Text> {thiscityWeather["wind"]} km/h</Text>
          <Text> {thiscityWeather["rain"]} mm</Text> 
      </View>
      :
      <View style={{ flexDirection:"row", justifyContent:"space-around", fontSize:17 }}>
          <Text>0 °C</Text>
          <Text>0 Oktas</Text>
          <Text>0 km/h</Text>
          <Text>0 mm</Text>
      </View>
      }
      </View> 
    </Animated.View>
    </TouchableOpacity>
  );
};

export default NFTCard;
