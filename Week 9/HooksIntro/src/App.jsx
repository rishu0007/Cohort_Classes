import React, { useEffect, useState } from 'react'

function useDebounce(input, interval) {
  const [debounceValue, setDebounceValue] = useState(input);
  useEffect(() => {
    let timeoutNumber = setTimeout(() => {
      setDebounceValue(input);
    }, interval);

    return () => {
      clearTimeout(timeoutNumber);
    }
  }, [input]);
  
  return debounceValue;
} 

function App() {

  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 500); // 500 miliseconds debounce delay
  
  return (
    <>
    <div>
      The debounced value is : {debouncedValue}
    </div>
      <input 
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder='Search....'
      />
    </>
  )
};

export default App