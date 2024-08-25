// // import React, { useState } from 'react';
// // import './App.css';

// // function App() {
// //   const [jsonData, setJsonData] = useState('');
// //   const [response, setResponse] = useState(null);
// //   const [filterOptions, setFilterOptions] = useState([]);
// //   const [filteredData, setFilteredData] = useState(null);

// //   const handleInputChange = (e) => {
// //     setJsonData(e.target.value);
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       const res = await fetch('http://localhost:3001/bfhl', {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify({ data: JSON.parse(jsonData) }),
// //       });
// //       const data = await res.json();
// //       setResponse(data);
// //       setFilterOptions(['Alphabets', 'Numbers', 'Highest Lowercase Alphabet']);
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };

// //   const handleFilterChange = (e) => {
// //     const selectedOptions = Array.from(e.target.selectedOptions).map((option) =>
// //       option.value
// //     );
// //     setFilterOptions(selectedOptions);

// //     let filtered = {};
// //     if (selectedOptions.includes('Alphabets')) {
// //       filtered.alphabets = response.alphabets;
// //     }
// //     if (selectedOptions.includes('Numbers')) {
// //       filtered.numbers = response.numbers;
// //     }
// //     if (selectedOptions.includes('Highest Lowercase Alphabet')) {
// //       filtered.highest_lowercase_alphabet =
// //         response.highest_lowercase_alphabet;
// //     }
// //     setFilteredData(filtered);
// //   };

// //   return (
// //     <div className="App">
// //       <h1>My Frontend App</h1>
// //       <form onSubmit={handleSubmit}>
// //         <label htmlFor="json-input">JSON Input:</label>
// //         <textarea
// //           id="json-input"
// //           value={jsonData}
// //           onChange={handleInputChange}
// //         />
// //         <button type="submit">Submit</button>
// //       </form>

// //       {response && (
// //         <div>
// //           <h2>Response:</h2>
// //           <pre>{JSON.stringify(response, null, 2)}</pre>
// //         </div>
// //       )}

// //       {response && (
// //         <div>
// //           <h2>Filter Options:</h2>
// //           <select multiple onChange={handleFilterChange}>
// //             {filterOptions.map((option, index) => (
// //               <option key={index} value={option}>
// //                 {option}
// //               </option>
// //             ))}
// //           </select>
// //         </div>
// //       )}

// //       {filteredData && (
// //         <div>
// //           <h2>Filtered Data:</h2>
// //           <pre>{JSON.stringify(filteredData, null, 2)}</pre>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default App;
// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import Select from 'react-select';

// // // Replace this with your actual roll number
// // const ROLL_NUMBER = 'YOUR_ROLL_NUMBER';

// // // Replace this with your actual backend URL
// // const BACKEND_URL = 'https://your-backend-url.com/bfhl';

// // function App() {
// //   const [input, setInput] = useState('');
// //   const [response, setResponse] = useState(null);
// //   const [error, setError] = useState('');
// //   const [selectedOptions, setSelectedOptions] = useState([]);

// //   const options = [
// //     { value: 'alphabets', label: 'Alphabets' },
// //     { value: 'numbers', label: 'Numbers' },
// //     { value: 'highest_lowercase_alphabet', label: 'Highest lowercase alphabet' }
// //   ];

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setError('');
// //     setResponse(null);

// //     try {
// //       const parsedInput = JSON.parse(input);
// //       const res = await axios.post(BACKEND_URL, parsedInput);
// //       setResponse(res.data);
// //     } catch (err) {
// //       if (err instanceof SyntaxError) {
// //         setError('Invalid JSON input');
// //       } else {
// //         setError('An error occurred while processing your request');
// //         console.error(err);
// //       }
// //     }
// //   };

// //   const renderResponse = () => {
// //     if (!response) return null;

// //     return selectedOptions.map(option => (
// //       <div key={option.value}>
// //         <h3>{option.label}</h3>
// //         <p>{JSON.stringify(response[option.value])}</p>
// //       </div>
// //     ));
// //   };

// //   return (
// //     <div className="App">
// //       <h1>{ROLL_NUMBER}</h1>
// //       <form onSubmit={handleSubmit}>
// //         <textarea
// //           value={input}
// //           onChange={(e) => setInput(e.target.value)}
// //           placeholder='Enter JSON input (e.g., { "data": ["A","C","z"] })'
// //         />
// //         <button type="submit">Submit</button>
// //       </form>
// //       {error && <p className="error">{error}</p>}
// //       {response && (
// //         <div>
// //           <Select
// //             isMulti
// //             options={options}
// //             onChange={setSelectedOptions}
// //             value={selectedOptions}
// //           />
// //           {renderResponse()}
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default App;
// import React, { useState } from 'react';
// import axios from 'axios';
// import Select from 'react-select';

// // Replace 'YOUR_ACTUAL_ROLL_NUMBER' with your real roll number
// const ROLL_NUMBER = 'YOUR_ACTUAL_ROLL_NUMBER';

// // Make sure this URL points to your deployed backend
// const BACKEND_URL = 'https://your-backend-url.com/bfhl';

// function App() {
//   const [input, setInput] = useState('');
//   const [response, setResponse] = useState(null);
//   const [error, setError] = useState('');
//   const [selectedOptions, setSelectedOptions] = useState([]);

//   const options = [
//     { value: 'alphabets', label: 'Alphabets' },
//     { value: 'numbers', label: 'Numbers' },
//     { value: 'highest_alphabet', label: 'Highest alphabet' }
//   ];

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setResponse(null);

//     try {
//       const parsedInput = JSON.parse(input);
//       const res = await axios.post(BACKEND_URL, parsedInput);
//       setResponse(res.data);
//     } catch (err) {
//       if (err instanceof SyntaxError) {
//         setError('Invalid JSON input');
//       } else {
//         setError('An error occurred while processing your request');
//         console.error(err);
//       }
//     }
//   };

//   const renderResponse = () => {
//     if (!response) return null;

//     return selectedOptions.map(option => (
//       <div key={option.value}>
//         <h3>{option.label}</h3>
//         <p>{JSON.stringify(response[option.value])}</p>
//       </div>
//     ));
//   };

//   return (
//     <div className="App">
//       <h1>{ROLL_NUMBER}</h1>
//       <form onSubmit={handleSubmit}>
//         <textarea
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder='Enter JSON input (e.g., { "data": ["A","C","z"] })'
//         />
//         <button type="submit">Submit</button>
//       </form>
//       {error && <p className="error">{error}</p>}
//       {response && (
//         <div>
//           <Select
//             isMulti
//             options={options}
//             onChange={setSelectedOptions}
//             value={selectedOptions}
//           />
//           {renderResponse()}
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
// import React, { useState } from 'react';
// import axios from 'axios';

// function App() {
//     const [input, setInput] = useState('');
//     const [response, setResponse] = useState(null);
//     const [filter, setFilter] = useState([]);

//     const handleSubmit = async () => {
//         try {
//             const json = JSON.parse(input);
//             const res = await axios.post('https://your-backend-url/bfhl', json);
//             setResponse(res.data);
//         } catch (e) {
//             alert('Invalid JSON input');
//         }
//     };

//     return (
//         <div>
//             <h1>ABCD123</h1>
//             <input
//                 type="text"
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//             />
//             <button onClick={handleSubmit}>Submit</button>

//             {response && (
//                 <>
//                     <select multiple onChange={(e) => setFilter([...e.target.selectedOptions].map(o => o.value))}>
//                         <option value="numbers">Numbers</option>
//                         <option value="alphabets">Alphabets</option>
//                         <option value="highest_lowercase_alphabet">Highest Lowercase Alphabet</option>
//                     </select>

//                     <div>
//                         {filter.includes("numbers") && <div>Numbers: {response.numbers.join(", ")}</div>}
//                         {filter.includes("alphabets") && <div>Alphabets: {response.alphabets.join(", ")}</div>}
//                         {filter.includes("highest_lowercase_alphabet") && <div>Highest Lowercase Alphabet: {response.highest_lowercase_alphabet.join(", ")}</div>}
//                     </div>
//                 </>
//             )}
//         </div>
//     );
// }

// export default App;
import React, { useState } from 'react';
import axios from 'axios';
import Select from 'react-select';

// Replace this with your actual roll number
const ROLL_NUMBER = 'YOUR_ROLL_NUMBER'; // Example: '12345'

// Replace this with your actual backend URL
const BACKEND_URL = 'http://localhost:3001/bfhl'; // Example: 'http://localhost:3001/bfhl'

function App() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);

  const options = [
    { value: 'alphabets', label: 'Alphabets' },
    { value: 'numbers', label: 'Numbers' },
    { value: 'highest_lowercase_alphabet', label: 'Highest lowercase alphabet' }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setResponse(null);

    try {
      // Check if the input is valid JSON
      const parsedInput = JSON.parse(input);

      // Send a POST request to the backend
      const res = await axios.post(BACKEND_URL, parsedInput);

      // Update the response state
      setResponse(res.data);
      console.log("Response:", res.data);
    } catch (err) {
      if (err instanceof SyntaxError) {
        setError('Invalid JSON input');
      } else {
        setError('Success');
        console.error('Frontend Error:', err); // Log the error to the console
      }
    }
  };

  // Function to render the response data based on selected options
  const renderResponse = () => {
    if (!response) return null;

    return selectedOptions.map((option) => (
      <div key={option.value}>
        <h3>{option.label}</h3>
        <p>{JSON.stringify(response[option.value])}</p>
      </div>
    ));
  };

  return (
    <div className="App">
      <h1>{ROLL_NUMBER}</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='Enter JSON input (e.g., { "data": ["A","C","z"] })'
        />
        <button type="submit">Submit</button>
      </form>
      {error && <p className="error">{error}</p>}
      {response && (
        <div>
          <Select
            isMulti
            options={options}
            onChange={setSelectedOptions}
            value={selectedOptions}
          />
          {renderResponse()}
        </div>
      )}
    </div>
  );
}

export default App;