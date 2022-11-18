import { FC, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './modules/Home';

const App: FC = () => {
  const [count, setCount] = useState(0);
  return (
    <main className='container mx-auto mt-4'>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/:id">
          <Route index element={<h1>Show!</h1>} />
          <Route path='edit' element={<h1>Edit!</h1>} />
        </Route>
        <Route path="*" element={<Navigate to='/' />} />
      </Routes>
    </main>
  );
};

export default App;
