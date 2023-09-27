import React from 'react';
import { Text } from 'react-native';

export default function Row(props) {
    return (
        <Text>{props.item.firstname}, {props.item.lastname}</Text>
    )
}