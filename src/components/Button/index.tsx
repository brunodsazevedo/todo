import { ReactNode } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { styles } from './styles';

interface Props extends TouchableOpacityProps {
  children: ReactNode;
}

export function Button({ children, ...rest }: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.button}
      {...rest}
    >
      {children}
    </TouchableOpacity>
  );
}
