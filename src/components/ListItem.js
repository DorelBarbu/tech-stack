import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native';
import { CardSection } from './common';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ListItem extends Component {

  renderDescription() {
    const { library, expanded } = this.props;
    if (expanded) {
      return (
        <Text style={{ flex: 1 }}>{library.description}</Text>
      );
    }
  }

  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  render() {
    const { id, title } = this.props.library;

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
}

const mapStateToProps = (state, onwProps) => {
  const expanded = state.selectedLibraryId === onwProps.library.id;
  return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);