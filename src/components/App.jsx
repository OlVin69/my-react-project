// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React is amazing</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App;

// import { Alert } from "./Alert";
// import { HiCurrencyEuro } from "react-icons/hi";
// export const App = () => {
//   return (
//     <>
//       <Alert variant="info">Would you like to browse our recommended products?</Alert>
//       <Alert variant="error">There was an error during your last transaction!</Alert>
//       <Alert variant="success"><HiCurrencyEuro />Payment received, thank you for your purchase!</Alert>
//       <Alert variant="warning">
//         Please update your profile contact information
//       </Alert>
//     </>

//   );
// };
const CustomButton = ({ message, children }) => {
  return <button onClick={() => alert(message)}>{children}</button>;
};

export const App = () => {
  return (
    <>
      <CustomButton message="Playing music!">Play some music</CustomButton>
      <CustomButton message="Uploading your data!">Upload data</CustomButton>
    </>
  );
};
