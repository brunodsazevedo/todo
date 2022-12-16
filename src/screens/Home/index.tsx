import { useState } from 'react';
import { FlatList, Text, View, Alert, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Feather } from '@expo/vector-icons';
import uuid from 'react-native-uuid';

import LogoSvg from '../../assets/Logo.svg';
import ClipboardSvg from '../../assets/Clipboard.svg';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { TaskItem, Task } from '../../components/TaskItem';

import { styles } from './styles';

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskText, setNewTaskText] = useState('');

  const countCompleteTasks = tasks.reduce((acc, current) => {
    if(current.done) {
      return acc = acc + 1;
    }
    
    return acc;
  }, 0);

  function handleAddNewTask() {
    const newTask: Task = {
      id: uuid.v4() as string,
      description: newTaskText,
      done: false,
    };

    setTasks(prevState => [...prevState, newTask]);
    setNewTaskText('');
  }

  function handleToggleTaskDone(id: string) {
    const updatedTasks = tasks.map(task => {
      if(task.id === id) {
        return {
          ...task,
          done: !task.done,
        }
      }

      return {...task}
    });

    setTasks(updatedTasks);
  }

  function handleDeleteTask(id: string) {
    const updatedTasks = tasks.filter(task => task.id !== id);

    Alert.alert('Remover tarefa', 'Deseja realmente delete essa tarefa?', [
      {
        text: 'Sim',
        onPress: () => setTasks(updatedTasks),
      },
      {
        text: 'Não',
        style: 'cancel',
      }
    ]);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.header}>
          <LogoSvg
            height={32}
            width={110}
          />
        </View>

        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <Input
              value={newTaskText}
              onChangeText={setNewTaskText}
              onSubmitEditing={handleAddNewTask}
              placeholder="Adicione uma nova tarefa"
            />
          </View>

          <Button
            onPress={handleAddNewTask}
          >
            <Feather
              name="plus-circle"
              size={18}
              color="#F2F2F2"
            />
          </Button>
        </View>

        <View style={styles.content}>
          <View style={styles.tasksInfoContainer}>
            <View style={styles.tasksInfo}>
              <Text style={styles.tasksCreatedText}>
                Criadas
              </Text>

              <View style={styles.counterContainer}>
                <Text style={styles.counterText}>
                  {tasks.length}
                </Text>
              </View>

            </View>

            <View style={styles.tasksInfo}>
              <Text style={styles.tasksCompletedText}>
                Concluídas
              </Text>

              <View style={styles.counterContainer}>
                <Text style={styles.counterText}>
                  {countCompleteTasks}
                </Text>
              </View>
            </View>
          </View>

          <FlatList
            data={tasks}
            keyExtractor={item => item.id}
            ListEmptyComponent={
              <View style={styles.ListEmptyContainer}>
                <ClipboardSvg
                  height={56}
                  width={56}
                />

                <Text style={styles.title}>
                  Você ainda não tem tarefas cadastradas
                </Text>

                <Text style={styles.subtitle}>
                  Crie tarefas e organize seus itens a fazer
                </Text>
              </View>
            }
            renderItem={({ item }) => (
              <TaskItem
                data={item}
                onToggleTaskDone={() => handleToggleTaskDone(item.id)}
                onDelete={() => handleDeleteTask(item.id)}
              />
            )}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
