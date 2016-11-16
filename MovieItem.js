import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ListView,
  TouchableOpacity,
  Navigator
} from 'react-native';

import MovieInfo from './MovieInfo';

class MovieItem extends Component{

    constructor(props){
        super(props);
    }

    _onPressView(){
        const { navigator } = this.props;
        if(navigator) {
            navigator.push({
                name: 'MovieInfo',
                component: MovieInfo,
                params:{
                    movieId: this.props.movie.id
                }
            });
        }
    }
    render(){
        return (
            <TouchableOpacity onPress={this._onPressView.bind(this)}>
                <View style={styles.container}>
                    <Image source={{uri:this.props.movie.cover}} style={styles.movieImg} >
                        <View style={styles.desc}>
                            <Text style={styles.title}>
                                {this.props.movie.title}
                            </Text>
                            <Text style={styles.rate}>{this.props.movie.rate}</Text>
                        </View>
                    </Image>
                </View>
            </TouchableOpacity>
        );
    }

}

var styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop:10,
    },
    movieImg:{
        width:375,
        height:424,
        justifyContent:'flex-end'
    },
    desc:{
        marginTop:10,
        justifyContent:'center', //justifyContent
        flexDirection:'row',
        backgroundColor:'#000000',
        height:100,
        opacity:0.8,
        alignItems:'center'
    },
    rate:{
        color:'#e09015'
    },
    title:{
        color:'#fff',
        fontSize:18,
        fontWeight:'bold'
    }
});

export default MovieItem;
