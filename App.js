import Expo from 'expo';
import React, { Component } from 'react';
import * as THREE from "three";
import ExpoTHREE from "expo-three"


export default class App extends Component {  
  render() {    
     return(       
        <Expo.GLView           
        style={{ flex: 1 }}           
        onContextCreate={this._onGLContextCreate}/>    
        )
    }
}
_onGLContextCreate = async (gl) => {
  // Here is where we will define our scene, camera and renderer
}


