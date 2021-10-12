import React from "react";
import {Linking, Alert} from 'react-native';
import BasicSectionList from '../components/views/BasicSectionList';

const ContributorsScreen = ({navigation}) => {
  const linkOpenFailedMessage = 'The link could not be opened.';

  const onItemSelected = id => {
    switch (id) {
      case 'johannesJakob':
        johannesJakobAction();
        break;
      default:
        break;
    }
  };

  async function johannesJakobAction() {
    let url = 'https://johjakob.com';

    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(linkOpenFailedMessage);
    }
  }

  const listSections = [
    {
      title: '',
      data: [
        {
          title: 'Johannes Jakob',
          subtitle: 'Development',
          id: 'johannesJakob',
        },
        {
          title: 'Cecilie Behr',
          subtitle: 'Illustrations',
          selectable: false,
          id: 'cecilieBehr',
        },
        {
          title: 'Markus Prokscha',
          subtitle: 'Testing',
          selectable: false,
          id: 'markusProkscha',
        },
      ],
    },
  ];

  return (
    <BasicSectionList
      sections={listSections}
      onItemSelected={id => onItemSelected(id)}
    />
  );
};

export default ContributorsScreen;
