import React from 'react';
import { View } from 'react-native';

function Suggestion (props) {
    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <Image 
                    style={styles.cover}
                    src={require('../../../assets/images/logo.png')}
                />
            </View>

            <View>
                
            </View>
        </View>
    )
}

export default Suggestion;