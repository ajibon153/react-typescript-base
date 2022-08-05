import Counter from './counter';
import { Provider } from 'react-redux';
import { store } from './store/store';

const Index = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default Index;
