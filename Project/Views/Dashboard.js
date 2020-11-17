import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

import { imageSources } from '../Providers/DummyImageProvider';
import Header from '../Components/Header';
import sampledata from '../Assets/json/sampledata.json';

const styles = StyleSheet.create({
  view: {
    flex: 1
  },
  contentView: {
    padding: 20,
    flex: 1
  },
  eventItem: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    paddingBottom: 10,
    alignItems: 'center',
    width: '100%'
  },
  eventImg: {
    width: 75,
    marginRight: 15
  },
  eventItemContent: {
    flex: 1
  },
  eventItemTitle: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  eventRowLockLogo: {
    width: 25,
    marginLeft: 'auto',
    marginRight: 15
  },
  eventRowName: {
    fontSize: 24,
    marginBottom: 16
  },
  footerEventRow: {
    flexDirection: 'row',
    marginTop: 10
  },
  footerEventRowPeopleData: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  footerEventRowLink: {
    marginLeft: 'auto'
  },
  footerEventRowLinkText: {
    color: '#4319F0',
    textDecorationLine: 'underline'
  }
});

export default class Dashboard extends React.Component {
  goRoom = link => {
    this.props.navigation.navigate('LiveParty', {liveLink: link});
  }

  render() {
    return (
      <View style={styles.view}>
        <Header></Header>
        <ScrollView style={styles.contentView}>
          {
            sampledata.map((row, index) => {
              return (
                <View style={styles.eventItem} key={`event-row-${index}`}>
                  <Image style={styles.eventImg} source={imageSources[index]} resizeMode='contain' />
                  <View style={styles.eventItemContent}>
                    <View style={styles.eventItemTitle}>
                      <Text style={styles.eventRowName}>{row.name}</Text>
                      { row.withInvitation &&
                        <Image style={styles.eventRowLockLogo}
                               source={require('../Assets/img/lock.png')}
                               resizeMode='contain' />
                      }
                    </View>
                    <Text>{row.description}</Text>
                    <View style={styles.footerEventRow}>
                      <View style={styles.footerEventRowPeopleData}>
                        <Text>{row.attendingPeople} people</Text>
                      </View>
                      <TouchableOpacity onPress={_ => this.goRoom(row.link)} style={styles.footerEventRowLink}>
                        <Text style={styles.footerEventRowLinkText}>Access into room</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              )
            })
          }
        </ScrollView>
      </View>
    );
  }
};
