// src/components/SearchForm.tsx

import React from 'react';

interface SearchFormProps {
  username: string;
  setUsername: (value: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ username, setUsername, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className='m-auto flex w-full max-w-lg items-center gap-2 p-5 dark:text-slate-100'>
        <input
          className='w-full rounded-xl border-2 border-zinc-600 bg-transparent px-5 py-2 outline-none placeholder:text-zinc-500 focus:border-astral-800 dark:focus:border-white'
          type='text'
          placeholder='Enter GitHub username'
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <button
          className='rounded-xl bg-astral-400 px-5 py-3 text-sm font-medium  text-slate-100 active:scale-95'
          type='submit'
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
