/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import MovieList from './MovieList';

export default class AwesomeProject extends Component {
    constructor(props){
        super(props);
    }

    render() {
        let defaultName = 'MovieList';
        let defaultComponent = MovieList;

        var NavigationBarRouteMapper = {
            // 左键
              LeftButton(route, navigator, index, navState) {
                // ...
                console.log(index);
                if(index > 0){

                    return (
                        <View style={styles.nav}>
                          <TouchableOpacity
                            underlayColor='transparent'
                            onPress={() => {if (index > 0) {navigator.pop()}}}>
                            <Text style={styles.leftNavButtonText}>
                              返回
                            </Text>
                          </TouchableOpacity>
                        </View>
                    );
                }else{
                    return null;
                }
              },
              // 右键
              RightButton(route, navigator, index, navState) {
                return (
                    <View style={styles.nav}>
                        <Text style={styles.rightNavButtonText}>
                          我是右键
                        </Text>
                    </View>
                );
              },
              // 标题
              Title(route, navigator, index, navState) {
                return (
                  <View style={styles.nav}>
                    <Text style={styles.title}>
                      电影
                    </Text>
                  </View>
                );
              }
        };

        return (
            <Navigator
                initialRoute={{name:defaultName,component:defaultComponent}}
                configureScene={(route)=>{
                    return Navigator.SceneConfigs.VerticalDownSwipeJump;
                }}
                renderScene={(route,navigator)=>{
                    let Component = route.component;
                    return <Component {...route.params} navigator={navigator} />
                }}
                navigationBar={
                  <Navigator.NavigationBar
                    style={styles.navContainer}
                    routeMapper={NavigationBarRouteMapper}/>}
            />
        );


    }


}

const styles = StyleSheet.create({
    navContainer:{
        height:50,
        backgroundColor:'#95bf57'
    },
    title:{
        color:'#ffffff'
    },
    nav:{
        height:25,
        justifyContent:'center',
    },
    leftNavButtonText:{
        color:'#ffffff',
        marginLeft:10
    },
    rightNavButtonText:{
        color:'#ffffff',
        marginRight:10
    }


});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
