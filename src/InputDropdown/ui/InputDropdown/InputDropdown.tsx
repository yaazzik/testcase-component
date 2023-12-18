import classNames from "classnames";
import {ChangeEvent, FormEventHandler, useCallback, useEffect, useRef, useState} from "react";
import { ReactComponent as DetailsIcon } from '../../assets/arrows-up-down-svgrepo-com.svg';
import {Dropdown} from "../Dropdown/Dropdown";
import {useClickOutside} from "../../../hooks/useClickOutside";

export interface optionListItem {
  name: string;
  isSelected: boolean;
  id: string;
}
interface InputDropdownProps {
    className?: string;
    initialState?: Array<optionListItem>;
    headerText?: string;
}

export const InputDropdown = (props:InputDropdownProps) => {
  const {
    className,
    initialState,
    headerText,
  } = props;

  const [optionList, setOptionList] = useState<Array<optionListItem>>(initialState?.length ? initialState : [])
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [hasOptions, setHasOptions] = useState<boolean>(false)
  const [inputData, setInputData] = useState<string>('')
  const menuRef = useRef(null);

  useClickOutside(menuRef, () => {
    if (isFocused) setTimeout(() => setIsFocused(false), 50);
  });

  const onIconClickHandler = () => {
    setIsFocused(prev => !prev)
  }

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => setInputData(e.target.value)

  const setFocus = () => {
    const el = document.getElementById('inputDrop');
    if (el) el.focus();
  }

  const submitHandler: FormEventHandler<HTMLFormElement> = useCallback ((e) => {
    e.preventDefault();
    if (inputData) {
      setOptionList((prev) => {
          const arrayCopy = [...prev];
          arrayCopy.push({
            name: inputData,
            id: Date.now().toString(),
            isSelected: false,
          });
          return arrayCopy
        }
      )
    }
    setInputData('')
  }, [inputData])

  useEffect(() => {
    if (optionList?.length) {
      setHasOptions(true)
    }
    else {
      setHasOptions(false)
    }
  }, [optionList?.length])

  return (
    <form onSubmit={submitHandler} ref={menuRef} className=' w-full h-full flex flex-col text-left'>
      { headerText && <header className='cursor-pointer' onClick={setFocus}>{headerText}</header> }
      <div  className={classNames(
        'relative flex border-2 rounded justify-between items-center h-full w-full p-2 hover:border-blue-400',
        {
          'border-2 border-blue-700': isFocused
        })
      }>
        <input
          className={classNames('h-full w-full focus:outline-0', className)}
          placeholder='Введите наименование группы...'
          value={inputData}
          onChange={changeHandler}
          id='inputDrop'

        />
        { hasOptions && <DetailsIcon className='h-10 w-10 z-10 cursor-pointer' onClick={onIconClickHandler} /> }
        { isFocused && <Dropdown optionList={optionList} setOptionList={setOptionList} /> }
      </div>
    </form>
  );
};
