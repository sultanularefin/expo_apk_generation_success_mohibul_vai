import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    body: {
        overflowX: 'hidden',
        fontSize: 20,
        fontFamily: 'Roboto Slab',
        margin: 0,
        padding: 0,
    },
    root: {
        backgroundColor: '#72b8d2',
    },
    
    container: {
        width: '90%',
        margin: 0,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    table: {
        border: '1px solid #333',
    },
    td: {
        border: '1px solid #333',
    },
    th: {
        border: '1px solid #333',
    },
    td:{
        padding: 5,
        backgroundColor: '#111',
        color: '#fff',
    },
    th: {
        padding: 5,
        backgroundColor: '#111',
        color: '#fff',
    },

    rewardCard: {
        textAlign: 'center',
        color: 'red',
        marginTop: '50px',
    },
    number: {
        border: '3px solid #FF4E12',
        paddingVertical: 25,
        paddingHorizontal: 23,
        color: 'white',
        backgroundColor: '#111',
        fontWeight: 'bold',
        backgroundColor: '#333',
        fontSize: 20,
        paddingVertical: 25,
        paddingHorizontal: 20,
        borderRadius: "50%"
    },

    cardText: {
        marginTop: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },

    loginForm: {
        padding: 20,
        boxShadow: '1px 5px 15px #777',
        backgroundColor: '#e3fbff',
        width: 280,
    },

    input: {
        paddingHorizontal: 10,
        paddingVertical: 13,
        border: '1px solid #333',
        marginVertical: 11,
    },
    submitBtn: {
        paddingVertical: 20,
        marginVertical: 25,
        border: '3px solid #333',
    },
    formTitle: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 10,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },

    registerForm: {
        padding: 25,
        boxShadow: '1px 5px 15px #777',
        backgroundColor: '#cee4e7',
        width: '40%',
    },
   
});

export{ styles }

