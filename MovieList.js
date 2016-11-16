import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  ListView,
} from 'react-native';

import MovieItem from './MovieItem';

export default class AwesomeProject extends Component {
    constructor(props){
        super(props);
        this.state = {
            subjects:new ListView.DataSource({
                rowHasChanged: ((row1, row2) => row1 !== row2)
            })
        };
    }
    componentDidMount(){
        fetch('https://movie.douban.com/j/search_subjects?type=movie&tag=%E7%83%AD%E9%97%A8&sort=rank&page_limit=20&page_start=0')
            .then((response)=> response.json())
            .then((responseJson)=> {
                var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
                this.setState({
                    subjects: ds.cloneWithRows(responseJson.subjects)
                })
            })
            .catch((error)=>{
                console.error(error);
            });
    }
  render() {
    return (
        <View style={{flex:1,marginTop:40}}>
            <ListView
              dataSource={this.state.subjects}
              renderRow={(movie,index) => <MovieItem movie={movie} navigator={this.props.navigator} />}
            />
        </View>
    );
  }
}
