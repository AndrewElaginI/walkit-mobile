import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333'
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20
  },
  container: {
    flex: 1,
    padding: 20
  }
});

export const images = {
  ratings: {
    '1': require('../rating-1.png'),
    '2': require('../rating-2.png'),
    '3': require('../rating-3.png'),
    '4': require('../rating-4.png'),
    '5': require('../rating-5.png')
  }
};
