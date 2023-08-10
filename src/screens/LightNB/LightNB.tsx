import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	TouchableOpacity,
	Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import LoadingNB from './LoadingNB';
export default function LightNB() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	});

	return (
        <>
			{loading ? (
				<LoadingNB />
			) : (
				<SafeAreaView style={styles.container}>
					{/* <LoadingNB /> */}
					<View style={styles.header}>
						<TouchableOpacity style={styles.icon}>
							<Image
								source={require('../../assets/icons/addIcon.png')}
								style={styles.imgIcon}
							/>
						</TouchableOpacity>
						<Text style={styles.textHeader}>Danh sách đèn NB</Text>
						<TouchableOpacity style={styles.icon}>
							<Image
								source={require('../../assets/icons/camera.png')}
								style={styles.imgIcon}
							/>
						</TouchableOpacity>
					</View>
					<View style={styles.listNB}></View>
				</SafeAreaView>
			)}
            </>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	header: {
		flexDirection: 'row',
		height: 48,
		alignItems: 'center',
		justifyContent: 'space-between',
		marginHorizontal: 18,
	},
	icon: {
		width: 32,
		height: 32,
		justifyContent: 'center',
		alignItems: 'center',
	},
	imgIcon: {
		width: 24,
		height: 24,
		resizeMode: 'stretch',
	},
	textHeader: {
		fontFamily: 'ABeeZee-Regular',
		fontWeight: '400',
		fontSize: 18,
		lineHeight: 21.28,
		textAlign: 'center',
		color: '#005A6F',
	},
	listNB: {
		flex: 1,
		backgroundColor: 'yellow',
	},
});
