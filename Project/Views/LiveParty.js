import React from 'react';
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import { ScrollView } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  livePartyView: {
    backgroundColor: '#000',
    flex: 1
  },
  liveSection: {
    position: 'absolute',
    top: 15,
    right: 20,
    zIndex: 1000,
    flexDirection: 'row',
    alignItems: 'center'
  },
  liveSectionText: {
    color: 'white'
  },
  liveSectionIcon: {
    height: 16,
    width: 16,
    marginRight: 10,
    borderRadius: 100,
    backgroundColor: 'red'
  },
  logoSection: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1000
  },
  logo: {
    height: 100,
    width: 100
  },
  commentSectionContainer: {
    flex: 1,
    height: '100%'
  },
  commentSection: {
    marginVertical: 20,
    flexDirection: 'row',
    marginLeft: 10
  },
  commentBackground: {
    height: 50,
    width: 50,
    borderRadius: 100,
    marginRight: 20
  },
  commentTitle: {
    fontSize: 20
  },
  commentText: {
    color: 'white'
  }
})

const logo = require('../Assets/img/logo2x-white.png');

export default class LiveParty extends React.Component {
  state = {
    comments: [],
    commentIntervalRef: null
  };

  _generateDummyComment = () => {
    const names = ['Richard', 'Marianne', 'Laura', 'Alfred', 'Carlos', 'Fernando'];
    const lastNames = ['Bay', 'Fernandez', 'Rouge', 'Belle', 'Aux', 'De Las Flores'];
    const comments = ['Great', 'Amazing scenario', 'I am late', 'I hope this live will be excelent'];
    const backgrounds = ['#fff', '#301ab1', '#129801', '#8023bb', '#454545', '#218974'];

    let dummyProfile = {
      name: '',
      comment: '',
      background: ''
    };
    const name = `${names[Math.floor(Math.random() * 5)]} ${lastNames[Math.floor(Math.random() * 6)]}`;
    const comment = comments[Math.floor(Math.random() * 4)];
    const background = backgrounds[Math.floor(Math.random() * 6)];
    return {...dummyProfile, name, comment, background};
  }

  _setComment = () => {
    this.setState({
      comments: [
        ...this.state.comments,
        this._generateDummyComment()
      ]
    });
    if (this.scrollView) {
      this.scrollView.scrollToEnd({ animated: true });
    }
  }

  componentDidMount = () => {
    const interval = 2400;
    setInterval(this._setComment, interval);
  }

  componentWillMount = () => {
    clearInterval(this._setComment);
  }

  playing = () => {

  }

  render() {
    const link = this.props.route.params.liveLink;
    const windowHeight = Dimensions.get('window').height;

    return (
      <View style={styles.livePartyView}>
        <View style={styles.logoSection}>
          <Image style={styles.logo} source={logo} resizeMode='contain' />
        </View>
        <View style={styles.liveSection}>
          <View style={styles.liveSectionIcon}></View>
          <Text style={styles.liveSectionText}>LIVE</Text>
        </View>
        <YoutubePlayer height={windowHeight}
                       play={this.playing}
                       height={200}
                       videoId={link}
                       onChangeState={this.onStateChange}/>
        <View style={styles.commentSectionContainer}>
          <ScrollView ref={(ref) => this.scrollView = ref }>
            {
              this.state.comments.map((commentText, ix) => {
                return <View style={styles.commentSection} key={`comment_${ix}`}>
                  <View style={[styles.commentBackground, {backgroundColor: commentText.background}]}></View>
                  <View>
                    <Text style={[styles.commentText, styles.commentTitle]}>{commentText.name}</Text>
                    <Text style={[styles.commentText]}>{commentText.comment}</Text>
                  </View>
                </View>
              })
            }
          </ScrollView>
        </View>
      </View>
    );
  }
};
