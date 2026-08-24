import { useCountStore } from '../store/countStore';

const CounterPage = () => {
  const { count, dicrement, increment } = useCountStore();

  return (
    <div className='text-center h-screen flex justify-center items-center'>
      <div>
        <h1>CounterPage</h1>
        <p className='text-2xl my-10'>{count}</p>
        <div className='flex items-center gap-2'>
          <button
            onClick={dicrement}
            className='bg-blue-400 h-10 w-20 rounded-xl mt-3 text-white cursor-pointer'
          >
            -
          </button>
          <button
            onClick={increment}
            className='bg-blue-400 h-10 w-20 rounded-xl mt-3 text-white cursor-pointer'
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CounterPage;
