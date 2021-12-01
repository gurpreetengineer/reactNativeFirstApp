import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';
import logo from './assets/bh.jpg';

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const OpenImagePickerAsync = async () => {
    const permissionResult = ImagePicker.requestMediaLibraryPermissionsAsync();
    console.log('App: permissionResult', permissionResult);
    
    if (permissionResult === false) {
      alert('Permission for accessing Camera roll is denied');
      return;
    }
    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if(pickerResult.cancelled === true) {
      alert('No Image Provided');
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri})
    console.log('App: pickerResult', pickerResult);
  }

  const ShareImageAsync = async () => {

  }
  return (
    
    <View style={styles.container}>
        <Image source={selectedImage ? {uri: se lectedImage.localUri} : logo} style={styles.soloImage} />
        <Text style={styles.instructions}>
          Open up App.js to start working on your app!
        </Text>
        <StatusBar style="auto" />
        
      {/* For button we use */}
      <TouchableOpacity
          onPress={() => { 
            alert('zap it bruhh');
            OpenImagePickerAsync();
          }}
          style={styles.buttonShaper}> 
          <Text style={styles.pickButtonShaperText}>Pick a photo</Text>
      </TouchableOpacity>
      <TouchableOpacity
          onPress={() => { 
            alert('zap it bruhh');
            // OpenImagePickerAsync();
          }}
          style={styles.buttonShaper}> 
          <Text style={styles.shareButtonShaperText}>Share photo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  soloImage: {
    width: 390,
    height: 305,
    marginBottom: 11,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
  },
  buttonShaper: {
    marginTop: 10,
  },
  pickButtonShaperText: {
    fontSize: 20, 
    color: '#fff',
    backgroundColor: 'blue' ,
    paddingHorizontal: 15,
    paddingVertical: 13,
    borderRadius: 5,
  },
  shareButtonShaperText: {
    fontSize: 20, 
    color: '#fff',
    marginTop: 5,
    backgroundColor: 'blue' ,
    paddingHorizontal: 15,
    paddingVertical: 13,
    borderRadius: 5,
  },
});
