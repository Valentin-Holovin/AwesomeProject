import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Avatar, Button} from '@react-native-material/core';

interface HeaderProps {
  title: string;
}

export const Header = ({title}: HeaderProps) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.profile_wrapper}>
        <Avatar
          image={{
            uri: 'https://m.media-amazon.com/images/S/pv-target-images/dbf6812f59e5080cf420f1056bfceb66f7d6a43a8df19ace503ea70596afc0ff._SX1080_FMjpg_.jpg',
          }}
          size={38}
        />
        <Button
          style={styles.button}
          titleStyle={styles.button_text}
          variant="outlined"
          title="PROFILE"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6200ee',
    width: '100%',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    color: 'white',
    fontWeight: '700',
    marginLeft: 20,
  },
  profile_wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    elevation: 0,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0,
    shadowRadius: 0,
    marginHorizontal: 10,
  },
  button_text: {
    color: '#FFFFFF',
  },
});
