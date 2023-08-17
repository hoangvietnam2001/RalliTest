import {Alert, Dimensions, StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import {useDispatch} from 'react-redux';
import {SetCODE, setSTATUS} from '../../redux/fetchingSlice';

const Scanner = ({navigation, route}: {navigation: any; route: any}) => {
	const {from} = route.params;
	const dispatch = useDispatch();
	const handleData = (value: any) => {
		dispatch(setSTATUS({from: from, value: value}));
		navigation.goBack();
	};
	useEffect(() => {
		console.log(from);
	}, []);
	return (
		<View style={styles.constainer}>
			<Text style={styles.title}>Lọc đèn NB theo mã QR</Text>
			<View style={styles.scanner}>
				<QRCodeScanner
					onRead={({data}) => handleData(data)}
					flashMode={RNCamera.Constants.FlashMode.off}
					reactivate={true}
					reactivateTimeout={1500}
					cameraStyle={styles.camera}
					//  cameraContainerStyle={styles.camera}
				/>
			</View>
		</View>
	);
};

const WIDTH = Dimensions.get('screen').width;
const HEGHT = Dimensions.get('screen').height;
const minSize = Math.min(WIDTH, HEGHT);
const styles = StyleSheet.create({
	constainer: {
		width: WIDTH,
		height: HEGHT,
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		marginTop: HEGHT / 12.5,
		fontSize: 18,
		fontWeight: '600',
		color: '#005A6F',
	},
	scanner: {
		flex: 1,
		borderRadius: 10,
		overflow: 'hidden',
		width: 300,
		height: 300,
		// backgroundColor: 'red',
		justifyContent: 'center',
		alignItems: 'center',
	},
	camera: {
		flex: 1,
		width: 300,
		height: 200,
		alignSelf: 'center',
		justifyContent: 'center',
		alignItems: 'center',
	},
	qrContainer: {
		position: 'absolute',
		bottom: 50,
		left: 0,
		right: 0,
		alignItems: 'center',
	},
});

export default Scanner;
