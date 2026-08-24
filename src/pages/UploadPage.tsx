import { mockApiCall } from '../api';
import { useStore } from '../store';

const UploadPage = () => {
  const {loading, setLoading} = useStore()
  const onUploadClick = async () => {
    try {
      setLoading(true);
      await mockApiCall();
    } catch (error) {
      alert('server error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='text-center h-screen flex justify-center items-center'>
      <div>
        <h1>UploadPage</h1>
        <button
          onClick={onUploadClick}
          className='bg-blue-400 px-2 py-3 rounded-xl mt-3 text-white cursor-pointer disabled:cursor-no-drop disabled:opacity-80'
          disabled={loading}
        >
          {loading ? 'uploading...' : 'start upload'}
        </button>
      </div>
    </div>
  );
};

export default UploadPage;
