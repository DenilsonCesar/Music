import React, {useState} from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

import Icon from 'react-native-vector-icons/dist/MaterialIcons';

//import TrackPlayer from 'react-native-track-player';

const Index = () => {

    const [play, setPlay] = useState(false);

    function Pause(){
        setPlay(true);
    }

    function Play(){
        setPlay(false);
    }

    /*const start = async () => {
        // Set up the player
        await TrackPlayer.setupPlayer();
    
        // Add a track to the queue
        await TrackPlayer.add({
            id: 'trackId',
            url: require('track.mp3'),
            title: 'Track Title',
            artist: 'Track Artist',
            artwork: require('track.png')
        });
    
        // Start playing it
        await TrackPlayer.play();
    };
    start();*/

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Music Player</Text>
            <Image style={styles.img} source={require("../../assets/logo.png")}/>
            <Text style={styles.nameMusic}>Marilia Mendonça</Text>
            <Text style={styles.band}>Marilia Real</Text>
            
            <View style={styles.containerProgress}>
                <Text style={styles.duration}>00:00</Text>
                <View style={styles.progress}></View>
                <Text style={styles.duration}>02:15</Text>
            </View>

            <View style={styles.button}>
                <TouchableOpacity>
                    <Icon name='skip-previous' color='#000' size={40}/>
                </TouchableOpacity>
                
                {play?
                    <TouchableOpacity onPress={() => Play()} style={styles.play}>
                        <Icon name='pause-circle-filled' color='#000' size={80}/>
                    </TouchableOpacity>
                :
                    <TouchableOpacity onPress={() => Pause()} style={styles.play}>
                        <Icon name='play-circle-filled' color='#000' size={80}/>
                    </TouchableOpacity>
                }

                <TouchableOpacity>
                    <Icon name='skip-next' color='#000' size={40}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Index;