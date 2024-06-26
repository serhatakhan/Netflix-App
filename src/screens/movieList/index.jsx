import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { appColors } from '../../theme/colors';

const MovieList = () => {
    return (
        <View style={styles.container}>
            <Text>MovieList</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: appColors.PRIMARY,
    },
});

export default MovieList;
