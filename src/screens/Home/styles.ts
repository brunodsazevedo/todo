import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },

  header: {
    width: '100%',
    height: 173,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0D0D0D',
  },

  form: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 24,
    marginTop: -25,
    marginBottom: 32,
  },

  inputContainer: {
    flex: 1,
    marginRight: 4,
  },

  content: {
    flex: 1,
    paddingHorizontal: 24,
  },

  tasksInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    paddingBottom: 20,
  },

  tasksInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  tasksCreatedText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#4EA8DE',
  },

  tasksCompletedText: {
    fontFamily: 'Inter_700Bold',
    fontSize: 14,
    color: '#8284FA',
  },

  counterContainer: {
    alignItems: 'center',
    justifyContent: 'center',

    marginLeft: 8,
    paddingVertical: 1,
    paddingHorizontal: 6,

    borderRadius: 10,

    backgroundColor: '#333333',
  },

  counterText: {
    fontFamily: 'Inter_700Bold',
    fontSize: 12,
    color: '#D9D9D9',
  },

  ListEmptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 48,
    borderTopWidth: 2,
    borderTopColor: '#262626',
  },

  title: {
    fontFamily: 'Inter_700Bold',
    fontSize: 14,
    color: '#808080',
    marginTop: 16,
  },

  subtitle: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#808080',
    marginTop: 2,
  },
});

export { styles }
