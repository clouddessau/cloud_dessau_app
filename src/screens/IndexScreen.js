import React, {useContext, useState} from 'react';
import {View, ScrollView, Linking, Alert, StyleSheet} from 'react-native';
import {AuthContext} from '../AuthProvider';
import BaseView from '../components/views/BaseView';
import LogoView from '../components/views/LogoView';
import StatusView from '../components/views/StatusView';
import ButtonControl from '../components/controls/ButtonControl';
import ToolbarButtonControl from '../components/controls/ToolbarButtonControl';
import firestore from '@react-native-firebase/firestore';

// Import theme variables
import theme from '../styles/theme';
// Import Firebase configuration
import firestoreConfig from '../config/firestore';

// Load Firebase document and field names for [cloud] status from configuration
// Use test collection in development environment
const statusCollection = __DEV__
  ? firestoreConfig.status.testCollection
  : firestoreConfig.status.collection;
const statusDoc = firestoreConfig.status.doc;
const open = firestoreConfig.status.open;
const windDown = firestoreConfig.status.windDown;

// Load Firebase document and field names for [cloud] status activity from configuration
// Use test collection in development environment
const activityCollection = __DEV__
  ? firestoreConfig.activity.testCollection
  : firestoreConfig.activity.collection;
const activityDoc = firestoreConfig.activity.doc;
const activityType = firestoreConfig.activity.type;
const activityDetail = firestoreConfig.activity.detail;

const IndexScreen = ({navigation}) => {
  const {user} = useContext(AuthContext);
  const [openState, setOpenState] = useState(false);
  const [windDownState, setWindDownState] = useState(false);
  const [activityTypeState, setActivityTypeState] = useState('');
  const [activityDetailState, setActivityDetailState] = useState('');

  const onFirestoreResult = snapshot => {
    snapshot.forEach(docSnapshot => {
      switch (docSnapshot.ref.path) {
        case `${statusCollection}/${statusDoc}`:
          onFirestoreStatusResult(docSnapshot);
          break;
        case `${activityCollection}/${activityDoc}`:
          onFirestoreActivityResult(docSnapshot);
          break;
        default:
          break;
      }
    });
  };

  const onFirestoreStatusResult = snapshot => {
    setOpenState(snapshot.get(open));
    setWindDownState(snapshot.get(windDown));
  };

  const onFirestoreActivityResult = snapshot => {
    setActivityTypeState(snapshot.get(activityType));
    setActivityDetailState(snapshot.get(activityDetail));
  };

  const onFirestoreError = error => {
    console.error(error);
  };

  firestore()
    .collection(statusCollection)
    .onSnapshot(onFirestoreResult, onFirestoreError);

  // Toggle [cloud] status
  const toggleOpenStatus = () => {
    // If [cloud] gets closed, toggle "Wind Down"
    if (openState) {
      toggleWindDownStatus();
    }

    firestore()
      .collection(statusCollection)
      .doc(statusDoc)
      .update({
        [open]: !openState,
      });
  };

  // Toggle "Wind Down"
  const toggleWindDownStatus = () => {
    firestore()
      .collection(statusCollection)
      .doc(statusDoc)
      .update({
        [windDown]: !windDownState,
      });
  };

  const linkOpenFailedMessage = 'The link could not be opened.';

  async function instagramAction() {
    let instagramURL = 'https://instagram.com/cloud_dessau';

    const supported = await Linking.canOpenURL(instagramURL);

    if (supported) {
      await Linking.openURL(instagramURL);
    } else {
      Alert.alert(linkOpenFailedMessage);
    }
  }

  async function discordAction() {
    let discordURL = 'https://discord.gg/DjSgmyU';

    const supported = await Linking.canOpenURL(discordURL);

    if (supported) {
      await Linking.openURL(discordURL);
    } else {
      Alert.alert(linkOpenFailedMessage);
    }
  }

  const styles = StyleSheet.create({
    toolbarTop: {
      marginBottom: theme.container.padding / 2,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    contentView: {
      flex: 1,
      justifyContent: 'space-between',
    },

    scrollView: {
      marginTop: theme.container.padding * -2,
      marginHorizontal: theme.container.padding * -1,
      overflow: 'visible',
      zIndex: 2,
    },

    bottomView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
    },

    socialLinksView: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },

    spacer: {
      width: theme.container.padding,
      height: theme.container.padding,
    },

    toggleButtonView: {
      zIndex: 1,
    },
  });

  return (
    <BaseView background="backgroundGrouped">
      <View style={styles.toolbarTop}>
        <LogoView width="35%" height={64} maxWidth={160} />
        <ToolbarButtonControl
          onPress={() => navigation.navigate('Settings')}
          icon="settings"
          color="text"
        />
      </View>
      <View style={styles.contentView}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={{
            paddingHorizontal: theme.container.padding,
            paddingVertical: theme.container.padding * 2,
          }}>
          <StatusView
            openStatus={openState}
            windDownStatus={windDownState}
          />
        </ScrollView>
        <View style={styles.bottomView}>
          {user && (
            <View style={styles.toggleButtonView}>
              <ButtonControl
                onPress={
                  openState
                    ? windDownState
                      ? () => toggleOpenStatus()
                      : () => toggleWindDownStatus()
                    : () => toggleOpenStatus()
                }
                icon={openState ? 'doorClosed' : 'doorOpen'}
                backgroundColor="default"
                iconColor={
                  openState ? (windDownState ? 'red' : 'yellow') : 'green'
                }
                iconSize={40}
                rounded={true}
                shadow={true}
              />
            </View>
          )}
          <View style={styles.socialLinksView}>
            <ToolbarButtonControl
              onPress={() => instagramAction()}
              icon="instagram"
              color="textTertiary"
              iconSize={theme.icon.size * 0.8}
            />
            <View style={styles.spacer} />
            <ToolbarButtonControl
              onPress={() => discordAction()}
              icon="discord"
              color="textTertiary"
            />
          </View>
        </View>
      </View>
    </BaseView>
  );
};

export default IndexScreen;
