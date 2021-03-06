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
// 1. Scene
var scene = new THREE.Scene(); 

// 2. Camera
const camera = new THREE.PerspectiveCamera(
  75, gl.drawingBufferWidth / gl.drawingBufferHeight, 0.1, 1000);

// 3. Renderer
const renderer = ExpoTHREE.createRenderer({ gl });
renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);

}


