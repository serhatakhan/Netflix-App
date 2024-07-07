import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { appColors } from '../../theme/colors';

const NotificationCard = ({item}) => {
    return (
        <View style={{flexDirection: "row", padding: 10, gap: 20}}>
            <View>
                <Image source={{uri: item?.notification?.android?.imageUrl}}
                style={{width:90, height:90}} />
            </View>
            <View>
                <Text style={{color: appColors.GRAY2, fontSize: 20, fontWeight: "bold"}}>{item?.notification?.title}</Text>
                <Text style={{color: appColors.GRAY2}}>{item?.notification?.body}</Text>
            </View>
        </View>
    );
};

export default NotificationCard;
