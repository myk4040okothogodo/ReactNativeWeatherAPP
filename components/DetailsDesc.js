import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import { EthPrice, NFTTitle} from './SubInfo';
import { COLORS, SIZES, FONTS} from '../constants';
import Iconx from    'react-native-vector-icons/Ionicons'; 
import Iconm from 'react-native-vector-icons/MaterialCommunityIcons';


const DetailsDesc = ({ data, cityWeather }) => {
    const [text, setText] = useState(data.bio.slice(0, 150));
    const [readMore, setReadMore] = useState(false);

    return (
    <>
      <View
        style = {{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          }} 
        >
        <NFTTitle 
          title = {data.name}
          titleSize = {SIZES.extraLarge}
        />
      
      </View>
      <View style={{ marginVertical: SIZES.extraLarge * 1.5 }}>
        <Text 
         style = {{
             fontSize: SIZES.medium,
             fontFamily: FONTS.semiBold,
             color: COLORS.primary,
         }}
         >
           City Bio  {/*{{(cityWeather !== undefined ) ?  <Text> {cityWeather["text"]}</Text>}}
         {/* <Image 
              source = {cityWeather["icon"]}
              style ={{ width:"15%", height:"15%", borderRadius:"50%"}}
           />*/}
         </Text>
         <View
             style = {{
               marginTop : SIZES.base,
             }} 
         >
           <Text
              style = {{
                color: COLORS.secondary,
                fontSize: SIZES.small,
                fontFamily: FONTS.regular,
                lineHeight: SIZES.large,
              }}
           >
            {text}
            {! readMore && "..."}
             <Text 
               style = {{
                   color: COLORS.primary,
                   fontSize: SIZES.small,
                   fontFamily: FONTS.semiBold,
               }}
               onPress = {() => {
                 if (!readMore) {
                   setText(data.bio);
                   setReadMore(true);
                 } else {
                   setText(data.bio.slice(0, 100));
                   setReadMore(false);
                 }
               }}
              >
              {readMore ? " Show Less" : "Read More"}
           </Text>
          </Text>
        </View>
      </View>
      <View style={{flexDirection:"column"}}>
        <View style={{flexDirection: "row", padding:15, marginBottom:15, backgroundColor: "#adadad", borderRadius:16,
           shadowColor: "#000",
           shadowOffset: {
             width: 0,
             height: 10
           },
            shadowOpacity: .3,
            shadowRadius: 10
        }}>
         <View style={{fontSize: 24, fontWeight: "900", flexDirection:"row", justifyContent:"space-around"}}>
           <Text>Todays Weather Focust :  </Text>
           {(cityWeather !== undefined) ?
           <Text>{cityWeather["text"]} </Text>
             :
           <Text>"Didnt get data,retry!"</Text>
            }
         </View>
        </View>
        <View style={{flexDirection: "row", padding:15, marginBottom:14, backgroundColor: "#adadad", borderRadius:16,
           shadowColor: "#000",
           shadowOffset: {
             width: 0,
             height: 10
           },
            shadowOpacity: .3,
            shadowRadius: 10
        }}>
         <View style={{fontSize: 40, fontWeight: "900", flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
           <Text>Expected Temperatures Today   :    </Text>
           {(cityWeather !== undefined) ?
           <Text>{cityWeather["sun"]} °C     </Text>
             :
           <Text> 0 °C  </Text>
            }
            <Iconx name="sunny" size={40} color="#FFBF00" />
         </View>
        </View>
       <View style={{flexDirection: "row", padding:15, marginBottom:15, backgroundColor: "#adadad", borderRadius:16,
           shadowColor: "#000",
           shadowOffset: {
             width: 0,
             height: 10
           },
           shadowOpacity: .3,
           shadowRadius: 10
       }}>
         <View style={{fontSize: 24, fontWeight: "900", flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
         <Text>Expected Showers Today           :    </Text>
         {(cityWeather !== undefined) ?
         <Text>{cityWeather["rain"]}  mm  </Text>
           :
         <Text> 0 mm</Text>
         }
         <Iconx name="rainy" size={40} color="#6F7378" />
         </View>
        </View>
        <View style={{flexDirection: "row", padding:15, marginBottom:15, backgroundColor: "#adadad", borderRadius:16,
             shadowColor: "#000",
             shadowOffset: {
                width: 0,
                height: 10
             },
             shadowOpacity: .3,
             shadowRadius: 10
         }}>
         <View style={{fontSize: 24, fontWeight: "900", flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
         <Text>Expected Wind Speeds Today   :   </Text>
         {(cityWeather !== undefined) ? 
         <Text>{cityWeather["wind"]} km/h</Text>
           :
         <Text> 0 km/h</Text>
         }
         <Iconm name="weather-windy" size={40} color="#231F20" />
         </View>
        </View>
        <View style={{flexDirection: "row", padding:15, marginBottom:15, backgroundColor: "#adadad", borderRadius:16,
             shadowColor: "#000",
             shadowOffset: {
               width: 0,
               height: 10
             },
             shadowOpacity: .3,
             shadowRadius: 10
          }}>
         <View style={{fontSize: 25, fontWeight: "900", flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
         <Text>Expected Cloud Cover Today   :   </Text>
         {(cityWeather  !== undefined) ?
         <Text>{cityWeather["cloud"]} Oktas   </Text>
           :
         <Text>0 Oktas</Text>
         }
         <Iconx name="cloudy" size={40} color="#231F20" />
         </View>
        </View>
        </View>
      </>
    )
}


export default DetailsDesc;
