import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Camera, CameraType } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { Button } from 'react-native-paper';
import { Image } from 'react-native';


const Gallery = () => {
    const [image, setImage] = useState(null);
    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();

    // if (!permission) ... 

    // if (!permission.granted) ... 

    function toggleCameraType() {
        console.log('toggleCameraType')
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    }


    const pickImage = async () => {
        // No permissions request is necessary for launching the image library

        console.log("EXPO CAMERA >>>>")
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            base64: true,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <Button icon="image" mode="contained" buttonColor='purple' uppercase={true}
                style={{ width: "50%", marginTop: 30 }} onPress={pickImage}>
                Pick an image
            </Button>


            <Camera style={styles.camera} type={type}>
                <Button icon="camera" mode="contained" buttonColor='purple' uppercase={true}
                    style={{ width: "50%", marginTop: 30 }} onPress={toggleCameraType}>
                    Camera
                </Button>
            </Camera>


            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        </View>
    )
}

export default Gallery;

const styles = StyleSheet.create({
    camera:{
        height:400, width:'100%', justifyContent:"flex-end", alignItems:"center", padding:20, margin:20
    }
})