import { ReactComponent as SelectedIcon } from '../../assets/check-svgrepo-com.svg';
import { ReactComponent as DeleteIcon } from '../../assets/delete-1487-svgrepo-com.svg';
import {optionListItem} from "../InputDropdown/InputDropdown";
import {Dispatch, SetStateAction, useCallback} from "react";

interface DropdownItemProps {
    option: optionListItem;
    setOptionList: Dispatch<SetStateAction<Array<optionListItem>>>;
    setLastSelected:Dispatch<SetStateAction<string>>
}

export const DropdownItem = (props:DropdownItemProps) => {
    const {
      option,
      setOptionList,
      setLastSelected,
    } = props;

    const deleteOption = useCallback(() => {
        setOptionList(
          (prev) => {
            if (prev.length) {
              const foundIndex = prev.findIndex((button) => button.id === option.id)
              if (foundIndex >= 0) {
                const arrayCopy = [...prev];
                arrayCopy.splice(foundIndex, 1)
                setLastSelected(prev => {
                  if (option.name === prev) {
                    return arrayCopy.find(el => el.isSelected)?.name || 'Введите наименование группы...'
                  }
                  return prev
                })

                return arrayCopy
              }
            }
            return prev
          })
      }
      , [option.id, option.name, setLastSelected, setOptionList])

    const handleClick = useCallback(() => {
        setOptionList(
        (prev) => {
          if (prev.length) {
            const foundIndex = prev.findIndex((button) => button.id === option.id)
            if (foundIndex >= 0) {
              const arrayCopy = [...prev];
              arrayCopy.splice(foundIndex, 1, {
                name: option.name,
                id: option.id,
                isSelected: !option.isSelected,
              })
              if (!option.isSelected) {
                setLastSelected(option.name)
              }
              else {
                setLastSelected(prev => {
                  if (option.name === prev) {
                    return arrayCopy.find(el => el.isSelected)?.name || 'Введите наименование группы...'
                  }
                  return prev
                })
              }
              return arrayCopy
            }
          }
          return prev
        })
        }
    , [option.id, option.isSelected, option.name, setLastSelected, setOptionList])

    return (
      <div onClick={handleClick} className='flex box-border justify-between items-center h-12 w-full my-2 border-b border-black'>
        <p>{option.name}</p>
        <div className='flex'>
          { option.isSelected && <SelectedIcon  className='h-6 w-6 z-20 my-auto' /> }
          <DeleteIcon onClick={deleteOption} className='h-6 w-6 z-20 my-auto' />
        </div>

      </div>
    );
};
