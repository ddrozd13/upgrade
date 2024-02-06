import { useState } from 'react';
import { FlatList, Image, Platform, Pressable } from 'react-native';
import { styles } from './EmojiList.styles.js';

const EmojiList = ({ onSelect, onCloseModal, pickedEmoji }) => {
  const [emoji] = useState([
    {id: 1, source: require('../../assets/images/emoji1.png')},
    {id: 2, source: require('../../assets/images/emoji2.png')},
    {id: 3, source: require('../../assets/images/emoji3.png')},
    {id: 4, source: require('../../assets/images/emoji4.png')},
    {id: 5, source: require('../../assets/images/emoji5.png')},
    {id: 6, source: require('../../assets/images/emoji6.png')},
  ]);

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === 'web'}
      data={emoji}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item, index }) => (
        <Pressable
          onPress={() => {
            onSelect([...pickedEmoji, index+1 === item.id &&  item]);
            onCloseModal();
          }}>
          <Image source={item.source} key={index} style={styles.image} />
        </Pressable>
      )}
    />
  );
};

export default EmojiList;
