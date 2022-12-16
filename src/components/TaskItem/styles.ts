import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },

  buttonCheck: {
    alignItems: 'center',
    justifyContent: 'center',

    height: 24,
    width: 24,

    borderRadius: 9999,
    backgroundColor: '#5E60CE',
  },

  buttonUncheck: {
    alignItems: 'center',
    justifyContent: 'center',

    height: 24,
    width: 24,

    borderRadius: 9999,
    borderWidth: 2,
    borderColor: '#4EA8DE',
  },

  checkContent: {},

  descriptionContainer: {
    flex: 1,
    marginHorizontal: 8, 
  },

  description: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#F2F2F2',
  },

  buttonDelete: {
    height: 32,
    width: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export { styles }
