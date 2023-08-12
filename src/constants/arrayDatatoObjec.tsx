export default function datatoObject(data: any) {
    console.log(data)
    const object = {
      project: data[0],
      vendor: "0",
      SERVER_ADDRESS: data[1],
      SERVER_MQTT_PORT: data[2],
      SERVER_MQTT_USER: data[3],
      SERVER_MQTT_PASS: data[4],
      CSE_ID: data[5],
      CSE_NAME: data[6],
      FROM_ID: data[7],
      APP_ID: data[8],
      MAC: data[9],
    };
  
    return object;
}
  