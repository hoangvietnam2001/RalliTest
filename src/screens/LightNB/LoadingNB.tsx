import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

export default function LoadingNB() {
	return (
		<View style={styles.container}>
			<Image source={require('../../assets/logo/logoNB.png')} style={styles.logo} />
			<Text style={styles.text}>Chưa có Đèn NB nào</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
    logo:{
        width:250,
        height:250,
    },
    text:{
        fontFamily:'Sura-Regular',
        fontWeight:'700',
        fontSize:16,
        lineHeight:25.24,
        textAlign:'center',
        marginTop:32
    }
});
