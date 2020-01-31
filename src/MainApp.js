import React, { Component } from 'react';
import { Spinner } from './components';
import { View } from 'react-native'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { showToast } from './redux/actions/Toast';
import Toast from './components/Toast';
import Navigation from './navigation';

class MainApp extends Component {
  render() {

    return (
      <View style={{ flex: 1 }}>
        <Navigation />
        <Toast />
        {this.props.loading && <Spinner />}
      </View>
    );
  }
};




const mapStateToProps = state => {
  return {

    loading: state.loading.loading,
    message: state.toast.message,

  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    showToast
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MainApp);