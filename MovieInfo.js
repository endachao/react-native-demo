import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ListView,
  Image
} from 'react-native';

class MovieInfo extends Component{

    constructor(props){
        super(props);
        this.state={
            info:null,
        }
    }

    componentDidMount(){
        fetch('https://api.douban.com/v2/movie/subject/'+this.props.movieId)
            .then((response)=> response.json())
            .then((responseJson)=> {
                this.setState({
                    info: responseJson
                })
            })
            .catch((error)=>{
                console.error(error);
            });
    }

    render(){

        if(this.state.info == null){
            return (
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <Text>
                        loading....
                    </Text>
                </View>
            );
        }


        let movie = this.state.info;
        return (
            <View style={styles.container}>
                <View style={styles.imgView}>
                    <Image source={{uri:movie.images.large}} style={styles.movieImg} />

                    <View style={styles.infoView}>
                        <Text style={styles.title}> {movie.title}</Text>
                        <View style={styles.rateView}>
                            <Text>评分: </Text>
                            <Text style={styles.rate}> {movie.rating.average} </Text>
                            <Text style={styles.rareText}> （{movie.ratings_count} 人参与评价）</Text>
                        </View>
                        <View style={styles.director}>
                            <Text>----导演-----------</Text>
                            {movie.directors.map((director,index)=>
                                <Text key={index}>{director.name}</Text>
                            )}
                        </View>
                        <View style={styles.director}>
                            <Text>----演员-----------</Text>
                            {movie.casts.map((casts,index)=>
                                <Text key={index}>{casts.name}</Text>
                            )}
                        </View>
                    </View>
                </View>
                <View style={styles.summary}>
                    <Text>
                        {movie.summary}
                    </Text>
                </View>

            </View>
        );
    }

}

var styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop:55,
      marginLeft:10,
      marginRight:10
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
    },
    movieImg:{
        width:150,
        height:222
    },
    imgView:{
        flexDirection:'row'
    },
    infoView:{
        marginLeft:5
    },
    rate:{
        color:'#e09015'
    },
    rateView:{
        flexDirection:'row',
        marginTop:10,
    },
    rareText:{
        fontSize:10
    },
    director:{
        marginTop:10
    },
    summary:{
        marginTop:20
    }
});

export default MovieInfo;
