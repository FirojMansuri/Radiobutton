import React, { useState } from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'

const Radio = () => {
    const [showradio, setShowRadio]=useState(1)
    return (
        <View style={styles.main}>
            <TouchableOpacity onPress={()=>setShowRadio(1)}>
                <View style={styles.radioWrapper}>
                    <View style={styles.radio}>
                        { showradio ===1 ? <View style={styles.radiobg}></View> :null}
                    </View>
                    <Text style={styles.radioText}>Radio1</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>setShowRadio(2)}>
                <View style={styles.radioWrapper}>
                    <View style={styles.radio}>
                    { showradio ===2 ? <View style={styles.radiobg}></View> :null}
                    </View>
                    <Text style={styles.radioText}>Radio2 </Text>
                </View>
            </TouchableOpacity>
            
        </View>
    )
};
const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    radioText: {
        fontSize: 20,
    },
    radio: {
        height: 35,
        width: 35,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 17.5,
        margin: 10,
    },
    radioWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    radiobg:{
        backgroundColor:'#000',
        height:30,
        width:30,
        borderRadius:15,
        margin:3,
    }
})

export default Radio
