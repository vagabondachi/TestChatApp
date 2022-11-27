
import { createContext} from "react";


const initialState = {
  
    // Mode
    onToggleMode: () => {},
    onChangeMode: () => {},
};

const SettingsContext = createContext(initialState);
// Mode

const SettingsProvider = () => {

const onToggleMode = () => {
    setSettings({
      ...settings,
      themeMode: settings.themeMode === "light" ? "dark" : "light",
    });
}

  return (
    <SettingsContext.Provider
      value={{
        ...settings, // Mode
        onToggleMode,
        onChangeMode,
      }}>

      </SettingsContext.Provider>
  )
    }
  export {SettingsContext};
  export default SettingsProvider;