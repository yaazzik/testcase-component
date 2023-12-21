import './App.css';
import {InputDropdown, optionListItem} from "InputDropdown/public";

function App() {

  const initialState: optionListItem[] = [
    {
      name: 'Hello',
      id: '1',
      isSelected: true,
    },
    {
      name: 'Hello',
      id: '2',
      isSelected: true,
    },
    {
      name: 'Hello',
      id: '3',
      isSelected: true,
    },
    {
      name: 'Hello',
      id: '4',
      isSelected: true,
    },
    {
      name: 'Hello',
      id: '6',
      isSelected: false,
    },
    {
      name: 'Hello',
      id: '66',
      isSelected: true,
    },
    {
      name: 'Hello',
      id: '666',
      isSelected: true,
    },
  ]

  return (
    <div>
      <InputDropdown initialState={initialState} headerText='Header Text' />
      <InputDropdown initialState={initialState} headerText='Header Text' />
      <InputDropdown initialState={initialState} headerText='Header Text' />
    </div>

  );
}

export default App;
