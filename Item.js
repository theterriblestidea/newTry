import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Item extends React.Component {
  render() {
    const { navigation } = this.props;
    const param = navigation.getParam('param', 'NO-ID');
    return (
      <View style={styles.container}>
        <>
          <Text>
            {param}
          </Text>
          <Button
            title="Back to Home"
            onPress={() =>
              this.props.navigation.navigate('Home')
            }
          />
        </>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});