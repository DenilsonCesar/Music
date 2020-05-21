import React, {useEffect} from 'react';
import { View, Text } from 'react-native';

import LottieView from 'lottie-react-native';

const splash = (props) => {

    useEffect(()=>{
        setTimeout(() => { props.navigation.navigate('Main')},3000)
    },[])

    return (
        <View 
            style={{ 
                flex: 1, 
                justifyContent: 'center', 
                alignItems: 'center', 
                backgroundColor: '#fff' 
            }}
        >   

            <LottieView style={{width: 270, height: 270}} source={require('../../lotties/logo.json')} autoPlay loop />        
            <Text style={{fontSize: 30,}}>Music Player</Text>
        </View>    
    );
}

export default splash;