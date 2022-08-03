import React from "react";
import { View, Text, Image } from "react-native";
import { EthPrice } from "./SubInfo";
import { COLORS, SIZES, FONTS } from "../constants";

const DetailsBid = ({ weather, cityweather }) => {
    return (
       <View
          style = {{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginVertical: SIZES.base,
              paddingHorizontal: SIZES.base,
          }}
          key = {weather.id}
      >
      
          <Image 
              source = {weather.image}
              resizeMode = "contain"
              style = {{ width: 48, height: 48 }}
          /> 
          <View 
             style = {{
                 flex: 1,
                 alignItems: "center",
                 paddingHorizontal: SIZES.base,
             }}
           >
          <Text
              style = {{
                  fontFamily: FONTS.semiBold,
                  fontSize: SIZES.small,
                  color:  COLORS.primary,
              }}
           >
               highs of  {weather.name}
           </Text>
           <Text 
               style = {{
                  fontFamily: FONTS.regular,
                  fontSize: SIZES.small - 2,
                  color: COLORS.secondary,
                  marginTop: 3,
               }} 
           >
           { cityweather.map((specificweather) => {
               if (weather.name == specificweather){
                   <View>
                      {specificweather}
                   </View>
               }
           })}
           </Text>
         </View>
      {/*<EthPrice price = {bid.price} />*/}
      </View>
    );
};

export default DetailsBid;
