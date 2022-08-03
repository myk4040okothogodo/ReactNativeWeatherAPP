import React from "react";
import { View, Text, Image} from "react-native";
import {COLORS, SIZES, FONTS} from "../constants";







const ElementsCards = ({weatherData}) => {
  const AVATAR_SIZE = 70;
    return (
        <View style={{ flexDirection: "column"}}>
          <View style={{flexDirection: 'row', padding: SPACING, marginBottom: SPACING, backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: 16,
             shadowColor: "#000",
             shadowOffset: {
               width: 0,
               height: 10
             },
             shadowOpacity: .3,
             shadowRadius: 10
          
           }}> 
            <Image 
              source={{uri: item.image}}
              style={{width: AVATAR_SIZE, height: AVATAR_SIZE, borderRadius: AVATAR_SIZE,
                      marginRight: SPACING/2
              }}
              
            />
            <View>
              <Text style={{fontSize: 22, fontWeight: '700'}}>{item.name}</Text>
              <Text style={{fontSize: 18, opacity: .7}}>{item.jobTitle}</Text>
              <Text style={{fontSize: 14, opacity: .8, color: '#0099c'}}>{item.email}</Text>
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row', padding: SPACING, marginBottom: SPACING, backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: 16,
             shadowColor: "#000",
             shadowOffset: {
               width: 0,
               height: 10
             },
             shadowOpacity: .3,
             shadowRadius: 10
          
           }}> 
            <Image 
              source={{uri: item.image}}
              style={{width: AVATAR_SIZE, height: AVATAR_SIZE, borderRadius: AVATAR_SIZE,
                      marginRight: SPACING/2
              }}
              
            />
            <View>
              <Text style={{fontSize: 22, fontWeight: '700'}}>{item.name}</Text>
              <Text style={{fontSize: 18, opacity: .7}}>{item.jobTitle}</Text>
              <Text style={{fontSize: 14, opacity: .8, color: '#0099c'}}>{item.email}</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', padding: SPACING, marginBottom: SPACING, backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: 16,
             shadowColor: "#000",
             shadowOffset: {
               width: 0,
               height: 10
             },
             shadowOpacity: .3,
             shadowRadius: 10
          
           }}> 
            <Image 
              source={{uri: item.image}}
              style={{width: AVATAR_SIZE, height: AVATAR_SIZE, borderRadius: AVATAR_SIZE,
                      marginRight: SPACING/2
              }}
              
            />
            <View>
              <Text style={{fontSize: 22, fontWeight: '700'}}>{item.name}</Text>
              <Text style={{fontSize: 18, opacity: .7}}>{item.jobTitle}</Text>
              <Text style={{fontSize: 14, opacity: .8, color: '#0099c'}}>{item.email}</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', padding: SPACING, marginBottom: SPACING, backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: 16,
             shadowColor: "#000",
             shadowOffset: {
               width: 0,
               height: 10
             },
             shadowOpacity: .3,
             shadowRadius: 10
          
           }}> 
            <Image 
              source={{uri: item.image}}
              style={{width: AVATAR_SIZE, height: AVATAR_SIZE, borderRadius: AVATAR_SIZE,
                      marginRight: SPACING/2
              }}
              
            />
            <View>
              <Text style={{fontSize: 22, fontWeight: '700'}}>{item.name}</Text>
              <Text style={{fontSize: 18, opacity: .7}}>{item.jobTitle}</Text>
              <Text style={{fontSize: 14, opacity: .8, color: '#0099c'}}>{item.email}</Text>
            </View>
          </View>
    )
}
