import { Alert, StyleSheet, Text, View } from 'react-native'
import React ,{useState} from 'react'
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
export default function Demo() {
  const [code, setCode] = useState('');
  const handleData = (value: any)=>{
    setCode(value);
    console.log(value);
  }
  return (
    <View>
      <Text>Demo</Text>
      <QRCodeScanner
        onRead={({data})=>handleData(data)}
        flashMode={RNCamera.Constants.FlashMode.auto}
        reactivate = {true}
        reactivateTimeout={500}
        cameraStyle = {{}}
      />
      <Text>Code:  {code} </Text>
    </View>
  )
}

const styles = StyleSheet.create({})