import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import {styles} from '../../../styles/YourOrders/YourOrders';
import * as Animatable from 'react-native-animatable';
import Accordion from 'react-native-collapsible/Accordion';
import YourOrdersTable from '../../atoms/YourOrders/YourOrdersTable';

const BACON_IPSUM = 'Helloxxxx';

const CONTENT = [
  {
    title: 'Order #5678',
    content: BACON_IPSUM,
  },
  {
    title: 'Order #4722',
    content: BACON_IPSUM,
  },
  {
    title: 'Order #3008',
    content: BACON_IPSUM,
  },
  {
    title: 'Order #3008',
    content: BACON_IPSUM,
  },
];

export default class YourOrdersMain extends Component {
  state = {
    activeSections: [],
    multipleSelect: true,
  };

  setSections = (sections) => {
    this.setState({
      activeSections: sections.includes(undefined) ? [] : sections,
    });
  };

  renderHeader(section, _, isActive) {
    return (
      <Animatable.View
        elevation={5}
        duration={400}
        style={[isActive ? styles.orderContainerOpen : styles.orderContainer, styles.active]}
        transition="backgroundColor">
        <Text style={styles.headerText}>{section.title}</Text>
        <Image
          style={styles.Icon}
          source={
            isActive
              ? require('../../../assets/images/up-arrow.png')
              : require('../../../assets/images/down-arrow.png')
          }></Image>
      </Animatable.View>
    );
  }

  renderContent() {
    return (
      <Animatable.View 
        style={[styles.content]} > 
        <YourOrdersTable></YourOrdersTable>   
      </Animatable.View>
    );
  }

  render() {
    const {multipleSelect, activeSections} = this.state;

    return (
      <View style={styles.mainContainer}>   
          <ScrollView>
            <Accordion
              activeSections={activeSections}
              sections={CONTENT} 
              touchableComponent={TouchableOpacity}
              expandMultiple={multipleSelect}
              renderHeader={this.renderHeader}
              renderContent={this.renderContent}
              duration={400}
              onChange={this.setSections}
            />
          </ScrollView> 
      </View>
    );
  }
}
