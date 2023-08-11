import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Switch,
	Image,
} from 'react-native';
import React, {useState} from 'react';

export default function ItemNB({item}: {item: any}) {
	const [toggle, setToggle] = useState(item.STATUS);
	//
	const [selectedItem, setSelectedItem] = useState(null);
	const [visible, setVisible] = useState(false);
	const handleItemPress = (item: any) => {
		setSelectedItem(item);
		setVisible(!visible);
	};
	
	return (
		<View style={styles.itemRound}>
			<TouchableOpacity
				style={[styles.items]}
				onPress={() => handleItemPress(item)}>
				{item.STATUS ? (
					<Image
						style={styles.iconNB}
						source={require(`../assets/icons/Play.png`)}
					/>
				) : (
					<Image
						style={styles.iconNB}
						source={require(`../assets/icons/PlayHover.png`)}
					/>
				)}

				<Text
					style={[styles.nameNB, {color: item.STATUS ? '#005A6F' : '#CACACA'}]
					}>
					{item.project}
				</Text>
				<Switch
					style={styles.switch}
					value={toggle}
					onChange={() => setToggle(!toggle)}
					trackColor={{false: 'gray', true: '#005A6F'}}
				/>
			</TouchableOpacity>
            {
                visible ? (<View style={styles.popup}>
                    <Text style={styles.text}>Dự án: {item.project}</Text>
                    <Text style={styles.text}>Địa chỉ server: {item.SERVER_ADDRESS}</Text>
                    <Text style={styles.text}>MAC: {item.MAC}</Text>
                </View>):(<></>)
            }  
		</View>
	);
}

const styles = StyleSheet.create({
	itemRound: {
		borderRadius: 10,
        alignItems:'center',
        width:343,
        alignSelf:'center',
	},
	items: {
		flexDirection: 'row',
		height: 60,
		alignItems: 'center',
		borderRadius: 10,
        width:343
	},
	iconNB: {
		width: 24,
		height: 24,
	},
	nameNB: {
		width:260,
		marginLeft: 12,
		fontFamily: 'ABeeZee-Regular',
		fontWeight: '400',
		fontSize: 18,
		lineHeight: 21.28,
		fontStyle: 'italic',
		color: '#005A6F',
	},
	switch: {
		position: 'absolute',
		right: 0,
	},

    popup:{
        width:338,
        height:160,
        borderRadius:10,
        shadowRadius:20,
        borderWidth:1,
        borderColor:'gray'
    },
    text:{
        marginVertical:10,
        fontSize:18,
        fontWeight:'400',
        fontFamily:'ABeeZee-Regular',
        fontStyle:'italic',
        lineHeight:21.28,
        color:'#005A6F',
        marginLeft:32,
    },
});
