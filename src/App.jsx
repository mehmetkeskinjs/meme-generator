import React from 'react';
import GenerateMeme from './components/GenerateMeme';
import Header from './components/Header';

function App() {
  return (
    <div className="App h-screen bg-gray-900 text-stone-800 md:grid place-items-center">
      <div className="w-full p-5 md:w-6/12 lg:mx-auto">
        <Header />
        <GenerateMeme />
      </div>
    </div>
  );
}

export default App;
