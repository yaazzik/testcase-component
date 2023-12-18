import {optionListItem} from "../InputDropdown/InputDropdown";
import {Dispatch, SetStateAction} from "react";
import {DropdownItem} from "./DropdownItem";


interface DropdownProps {
    optionList: Array<optionListItem>;
    setOptionList: Dispatch<SetStateAction<Array<optionListItem>>>;
}

export const Dropdown = (props:DropdownProps) => {
    const {
      optionList,
      setOptionList
    } = props;

    return (
        <div className='flex border-2 items-center absolute top-16 left-0 border-2 border-blue-600 h-64 w-full flex-col overflow-auto p-2 z-10'>
          { optionList.length && optionList.map((option) => {
            return (
              <DropdownItem key={option.id} option={option} setOptionList={setOptionList} />
            )
          })
          }
        </div>
    );
};
