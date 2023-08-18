import { Alert, Dimensions, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { useDispatch, useSelector } from 'react-redux';
import { SetCODE, setSTATUS } from '../../redux/fetchingSlice';
import Rall from '../../services/API';

const API = new Rall();

const Scanner = ({ navigation, route }: { navigation: any, route: any }) => {
	const { from } = route.params;
	const [MAC, setMAC] = useState('');
	const dispatch = useDispatch();
	const Mac = useSelector((state: any) => state.CODE.STATUS);
	const handleData = async (value: any) => {
		const ClientId = await API.GetClient();
		setMAC(value);
		if( from === 1){
			await dispatch(setSTATUS({ from: 1, value: value, clientId: ClientId }))
			navigation.goBack();
		}
	}
	const handleSearch =async () => {
		if (MAC === '') {
			ToastAndroid.show('Chưa có địa chỉ MAC', ToastAndroid.SHORT);
		}
		else {
			await dispatch(setSTATUS({ from: 0, value: MAC }))
			navigation.goBack();
		}
	}
	const handleAddNew = async () => {
		const ClientId = await API.GetClient();
		if (MAC === '') {
			ToastAndroid.show('Chưa có địa chỉ MAC', ToastAndroid.SHORT);
		}
		else {
			await dispatch(setSTATUS({ from: 1, value: MAC, clientId: ClientId }))
			navigation.goBack();
		}
	}
	const handleCancle = () => {
		navigation.goBack();
	};
	useEffect(() => {
	}, [])
	return (
		<View style={styles.constainer}>
			<Text style={styles.title}>Lọc đèn NB theo mã QR</Text>
			<View style={styles.scanner}>
				<QRCodeScanner
					onRead={({ data }) => handleData(data)}
					flashMode={RNCamera.Constants.FlashMode.off}
					reactivate={true}
					reactivateTimeout={1200}
					cameraStyle={styles.camera}
				/>
			</View>
			<View style={styles.viewMAC}>
				<Text style={styles.textMAC}>MAC</Text>
				<Text style={styles.contentMAC}>{MAC}</Text>
			</View>
			<View style={styles.btnView}>
				<TouchableOpacity onPress={handleAddNew}>
					<Text>Tạo mới</Text>
				</TouchableOpacity>
				<Text style={[{ backgroundColor: 'red', borderLeftWidth: 0.5, opacity: 0.5 }]}></Text>
				<TouchableOpacity onPress={handleSearch}>
					<Text>Tìm kiếm</Text>
				</TouchableOpacity>
				<Text style={[{ backgroundColor: 'red', borderLeftWidth: 0.5, opacity: 0.5 }]}></Text>
				<TouchableOpacity onPress={handleCancle}>
					<Text>Huỷ</Text>
				</TouchableOpacity>
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
		marginTop: 100,
		borderRadius: 10,
		overflow: 'hidden',
		width: WIDTH / 1.5,
		height: 250,
		justifyContent: 'center',
		alignItems: 'center'
	},
	camera: {
		height: 200,
	},
	qrContainer: {
		position: 'absolute',
		bottom: 50,
		left: 0,
		right: 0,
		alignItems: 'center',
	},
	viewMAC: {
		marginTop: 20,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	textMAC: {
		fontFamily: 'ABeeZee-Regular',
		color: 'black',
		fontSize: 18,
		fontWeight: '500',

	},
	contentMAC: {
		fontFamily: 'ABeeZee-Regular',
		fontSize: 16,
		fontWeight: '600',
		lineHeight: 30,
		height: 30,
		color: '#005A6F',
	},
	btnView: {
		top: 20,
		flexDirection: 'row',
		width: WIDTH,
		justifyContent: 'space-around'
	}
});

export default Scanner;
