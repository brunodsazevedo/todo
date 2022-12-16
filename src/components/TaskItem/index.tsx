import { Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { styles } from './styles';

export interface Task {
  id: string;
  description: string;
  done: boolean;
}

interface Props {
  data: Task;
  onToggleTaskDone: () => void;
  onDelete: () => void;
}

export function TaskItem({ data, onToggleTaskDone, onDelete }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={data.done ? styles.buttonCheck : styles.buttonUncheck}
        onPress={onToggleTaskDone}
      >
        {data.done && (
          <View style={styles.checkContent}>
            <Feather
              name="check"
              size={10}
              color="white"
            />
          </View>
        )}
      </TouchableOpacity>

      <View style={styles.descriptionContainer}>
        <Text style={[
          styles.description,
          data.done && {
            textDecorationLine: 'line-through',
            color: '#808080',
          }
        ]}>
          {data.description}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.buttonDelete}
        onPress={onDelete}
      >
        <Feather
          name="trash-2"
          size={18}
          color="#808080"
        />
      </TouchableOpacity>
    </View>
  );
}
