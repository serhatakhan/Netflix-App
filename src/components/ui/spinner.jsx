import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { appColors } from '../../theme/colors';

const Spinner = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size={"large"} color={appColors.YELLOW} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Spinner;
