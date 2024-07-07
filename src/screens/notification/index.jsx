import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { screenStyle } from '../../styles/screenStyle';
import { useSelector } from 'react-redux';
import { appColors } from '../../theme/colors';
import NotificationCard from '../../components/notification/notificationCard';

const Notification = () => {
    const {notifications} = useSelector(state=> state.notification)

    return (
        <View style={screenStyle.container}>
            <Text style={{color: appColors.GRAY2, fontSize: 24, fontWeight: "600", letterSpacing: 1}}>Notifications</Text>
            <FlatList
            data={notifications}
            renderItem={({item})=> <NotificationCard item={item} />}
            />
        </View>
    );
};

export default Notification;
