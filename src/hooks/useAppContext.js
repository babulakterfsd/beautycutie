import { useContext } from 'react';
import { AppContext } from '../context/GlobalContext';

const useAppContext = () => useContext(AppContext);

export default useAppContext;