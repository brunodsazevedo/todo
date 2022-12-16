import { useState } from 'react';
import { TextInput, TextInputProps } from 'react-native';

import { styles } from './styles';

interface Props extends TextInputProps {

}

export function Input({...rest}: Props) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TextInput
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      placeholderTextColor="#808080"
      style={[
        styles.input,
        {
          borderWidth: 1,
          borderColor: isFocused ? '#5E60CE' : '#0D0D0D',
        }
      ]}
      {...rest}
    />
  );
}
