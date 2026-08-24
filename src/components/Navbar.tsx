import { Link } from 'react-router';
import { useStore } from '../store';

const Navbar = () => {
  const { loading } = useStore();

  const NavigasiLink = [
    {
      id: 1,
      name: 'home',
      path: '/',
    },
    {
      id: 2,
      name: 'upload',
      path: '/upload',
    },
    {
      id: 3,
      name: 'count',
      path: '/count',
    },
  ];

  return (
    <div className='flex gap-3 items-center justify-between p-5 bg-blue-400 fixed right-0 left-0'>
      <div>
        {NavigasiLink.map((nav) => (
          <Link
            key={nav.id}
            to={nav.path}
            className='text-white text-xl mx-2'
          >
            {nav.name}
          </Link>
        ))}
      </div>
      <div className='flex items-center gap-5'>
        <p className='text-white text-xl'>{loading && 'Uploading....'}</p>
        <p className='text-white text-xl'>1</p>
      </div>
    </div>
  );
};

export default Navbar;
