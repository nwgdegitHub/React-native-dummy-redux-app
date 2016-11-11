'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  Switch
} from 'react-native';
import {
  Button,
  Icon,
  SocialIcon
} from 'react-native-elements';


class Lamp extends Component {

  constructor(props) {
    super(props);
       
      this.state = {
		    trueSwitchIsOn: true,
		    falseSwitchIsOn: false,
      }
  }
  componentDidMount() {}

  // shut() {
  //    this.setState({
  //      light : !this.state.light
  //    })
  // }
  render() {
     const { switchLamp,light} = this.props;

     //this.shut=this.shut.bind(this);
      console.log(light.light);
      var status =light.light==false
      ? require('./image/off.png')
      : require('./image/on.png');
        return (
          <View style={styles.container}>
              <Image source={status}
                     style={styles.customimg}/>
              <Icon
                     raised
                     name='heartbeat'
                     type='font-awesome'
                     color='#f50'
                     onPress={() => switchLamp()} />
               <Switch
			          onValueChange={() => switchLamp()}
			          style={{marginBottom: 10}}
			          value={light.light} />
          </View>
        );

    }

}

var styles=StyleSheet.create({
    container:{
       flex:1,
       justifyContent:'center',
       alignItems:'center',
       backgroundColor:'#F5FCFF'
    },
    customimg:{
      width:200,
      height:310
    },
    buttonMargin:{
      marginTop:10,
      marginLeft:150,
      justifyContent:'center',
    }

});

export default Lamp;
