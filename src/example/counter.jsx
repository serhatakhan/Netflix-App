import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount } from '../store/slice/counterSlice';

const Counter = () => {
    const count = useSelector((state)=> state.counter.value)
    const dispatch = useDispatch()

    return (
        <View style={styles.container}>
            <Text style={{fontSize: 50, fontWeight: "500"}}>{count}</Text>

            <Button title='increment' color={"red"} onPress={()=> dispatch(increment())} />
            <Button title='decrement' color={"black"} onPress={()=> dispatch(decrement())} />
            <Button title='add +5' onPress={()=> dispatch(incrementByAmount(5))} />
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

export default Counter;
