import {View, StyleSheet, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import HeaderScreen from './HeaderScreen';
import {Card} from 'react-native-elements';

const url = '/api/productos';

const HomeScreen = () => {
  return (
    <ScrollView style={{flex: 1}}>
      <View>
        <HeaderScreen />
      </View>
      <View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}>
          <View style={{flexDirection: 'row'}}>
            <Card containerStyle={{...styles.cards}}>
              <Image
                source={require('../../assets/img/coca.png')}
                style={styles.images}
              />
              <Text style={{...styles.buttonText}}>coca</Text>
              <Text style={{...styles.buText}}>$13.00-$18.00</Text>
              <Text style={{...styles.bText}}>existencias: 30</Text>
            </Card>

            <Card containerStyle={{...styles.cards}}>
              <Image
                source={require('../../assets/img/danonino.jpg')}
                style={styles.images}
              />

              <Text style={{...styles.buttonText}}>danonino</Text>
              <Text style={{...styles.buText}}>$6.00-$12.00</Text>
              <Text style={{...styles.bText}}>existencias: 10</Text>
            </Card>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Card containerStyle={{...styles.cards}}>
              <Image
                source={require('../../assets/img/nito.jpg')}
                style={styles.images}
              />
              <Text style={{...styles.buttonText}}>nito</Text>
              <Text style={{...styles.buText}}>$9.00-$10.00</Text>
              <Text style={{...styles.bText}}>existencias: 7</Text>
            </Card>

            <Card containerStyle={{...styles.cards}}>
              <Image
                source={require('../../assets/img/pepsi.jpg')}
                style={styles.images}
              />
              <Text style={{...styles.buttonText}}>pepsi</Text>
              <Text style={{...styles.buText}}>$8.00-$9.00</Text>
              <Text style={{...styles.bText}}>existencias: 6</Text>
            </Card>
          </View>
          <View style={{flexDirection: 'row-reverse'}}>
            <Card containerStyle={{...styles.cards}}>
              <Image
                source={require('../../assets/img/sabritas.jpg')}
                style={styles.images}
              />
              <Text style={{...styles.buttonText}}>sabritas</Text>
              <Text style={{...styles.buText}}>$13.00-$14.00</Text>
              <Text style={{...styles.bText}}>existencias: 6</Text>
            </Card>

            <Card containerStyle={{...styles.cards}}>
              <Image
                source={require('../../assets/img/takis.jpg')}
                style={styles.images}
              />
              <Text style={{...styles.buttonText}}>takis</Text>
              <Text style={{...styles.buText}}>$13.00-$18.00</Text>
              <Text style={{...styles.bText}}>existencias: 30</Text>
            </Card>
          </View>
          <View style={{flexDirection: 'row-reverse'}}>
            <Card containerStyle={{...styles.cards}}>
              <Image
                source={require('../../assets/img/emperador.jpg')}
                style={styles.images}
              />
              <Text style={{...styles.buttonText}}>emperador</Text>
              <Text style={{...styles.buText}}>$16.00-$18.00</Text>
              <Text style={{...styles.bText}}>existencias: 4</Text>
            </Card>

            <Card containerStyle={{...styles.cards}}>
              <Image
                source={require('../../assets/img/cacahuates.jpg')}
                style={styles.images}
              />
              <Text style={{...styles.buttonText}}>cacahuates</Text>
              <Text style={{...styles.buText}}>$7.00-$10.00</Text>
              <Text style={{...styles.bText}}>existencias: 10</Text>
            </Card>
          </View>
          <View style={{flexDirection: 'row-reverse'}}>
            <Card containerStyle={{...styles.cards}}>
              <Image
                source={require('../../assets/img/crema.jpg')}
                style={styles.images}
              />
              <Text style={{...styles.buttonText}}>crema alpura</Text>
              <Text style={{...styles.buText}}>$25.00-$30.00</Text>
              <Text style={{...styles.bText}}>existencias: 4</Text>
            </Card>

            <Card containerStyle={{...styles.cards}}>
              <Image
                source={require('../../assets/img/atun.png')}
                style={styles.images}
              />
              <Text style={{...styles.buttonText}}>atún</Text>
              <Text style={{...styles.buText}}>$7.00-$10.00</Text>
              <Text style={{...styles.bText}}>existencias: 8</Text>
            </Card>
          </View>
        </View>
      </View>
      <View style={{height: 150}}></View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  cards: {
    width: 150,
    borderRadius: 15,
    elevation: 5,
    shadowColor: 'green',
  },
  images: {
    alignSelf: 'center',
    width: 100,
    height: 100,
  },
  buttonText: {
    color: '#EB1F4F',
    alignSelf: 'center',
    fontSize: 20,
  },
  bText: {
    color: '#000000',
    alignSelf: 'center',
    fontSize: 14,
  },
  buText: {
    color: '#000000',
    alignSelf: 'center',
    fontSize: 12,
  },
});
