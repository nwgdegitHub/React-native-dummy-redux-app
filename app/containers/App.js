


import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import  Lamp from '../components/Lamp';
import  * as switchLamp from '../actions/lamp';
//alert(state);

function mapStateToProps(state, props) {
  //console.log(state);
  return {

  light:state.light
  };
}

function mapDispatchToProps(dispatch) {

    return bindActionCreators(switchLamp, dispatch);

}

export default connect(mapStateToProps, mapDispatchToProps)(Lamp);
