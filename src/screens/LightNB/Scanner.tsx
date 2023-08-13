import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {RNCamera} from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-svg';
const Scanner = () => {
	const [scannedData, setScannedData] = useState(null);
	const handleCodeScanned = ({data}: {data: any}) => {
		if (data) {
			setScannedData(data);
		}
	};

	return (
		<View style={styles.constainer}>
			<Text style={styles.title}>Lọc đèn NB theo mã QR</Text>

      <View style={styles.scanner}>
        <RNCamera
				style={styles.camera}
				type={RNCamera.Constants.Type.back}
				onBarCodeRead={handleCodeScanned}
        
			/>
			{scannedData && (
				<View style={styles.qrContainer}>
					<QRCodeScanner
						value={scannedData}
						size={200}
						color="black"
						backgroundColor="white"
					/>
				</View>
			)} 
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
    // justifyContent:'center'
	},
	title: {
		marginTop: HEGHT / 12.5,
		fontSize: 18,
		fontWeight: '600',
		color: '#005A6F',
	},
	scanner: {
		marginTop: HEGHT / 5,
		width: WIDTH / 1.33,
		height: WIDTH / 1.33,
		borderRadius: 20,
	},
	camera: {
		width:minSize-100,
		height: minSize-100,
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
