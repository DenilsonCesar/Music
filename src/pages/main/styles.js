
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    button:{
        flexDirection:'row',
        alignItems:'center',
    },
    title:{
        fontSize: 20,
        marginBottom: 32,
    },
    img:{
        width: 250,
        height: 250,
        marginBottom: 32,
    },
    nameMusic:{
        fontSize: 22,
        fontWeight: 'bold'
    },
    band:{
        fontSize: 15,
        color: '#B4AEAE',
        marginBottom: 32,
    },
    play:{
        marginLeft: 40,
        marginRight: 40,
    },
    progress:{
        width: 240,
        height: 7,
        backgroundColor: '#cacaca',
        marginLeft: 10,
        marginRight: 10,
    },
    containerProgress:{
        marginBottom: 32,
        flexDirection: 'row',
        alignItems: 'center',
    }
})

export default styles;