import React, { useState, useRef, useEffect } from 'react';
import ArrowIcon from '../icons/ArrowIcon';

interface ISelectProps {
  options: string[];
  selectedValue: string;
  setSelectedValue: (value: string) => void;
}

const Select: React.FC<ISelectProps> = ({ options,selectedValue, setSelectedValue }) => {
  
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };


  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative" ref={ref}>
      <div onClick={handleToggle}
      className="block w-full text-left bg-slate-100 rounded-full px-5 py-3 flex items-center justify-between">
        <span>{selectedValue}</span>
        <ArrowIcon classes={`${isOpen ? 'rotate-180' : ''} duration-100`}/>
      </div>
      {isOpen && (
        <div className='absolute mt-5 w-full rounded-lg bg-white shadow-lg overflow-hidden z-10 '>
            <ul className='list-none flex flex-col'>
              {options.map((option, index) => (
                <li key={index} className="px-5 py-3 pr-9 hover:bg-slate-100 cursor-pointer" onClick={() => handleSelect(option)}>
                  {option}
                </li>
              ))}
            </ul>
        </div>
      )}
    </div>
  );
};

export default Select;
