import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import I18n from '../../tools/i18n/locales';
import { FontAwesome } from '@expo/vector-icons';

import config from "../../config";

const Button = ({ text, icon, onPress, specificStyle = {} }) => {
    const addIcon = <FontAwesome name={icon} size={25} color={config.DARK_GRAY} />;

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress} >
                <Text style={[styles.button, specificStyle]}>
                    {icon && addIcon}
                    {I18n.t(text)}
                </Text>
            </TouchableOpacity>
        </View>
    )
};

export default Button;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingVertical: 15,
    },    
    button: {
        fontSize: 18,
        color: config.LIGHT_GRAY,
        fontWeight: "bold",
        alignSelf: "center",
        textAlign: "center",
        textTransform: "uppercase",
        backgroundColor: config.CURACAO,
        width: 300,
        paddingVertical: 20,
        borderRadius: 10,    
    }
});