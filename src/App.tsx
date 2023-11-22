/* eslint-disable no-template-curly-in-string */
import RichText from './components/RichText';

function App() {

  const options = [
    {
      value: '${data.supplierName}',
      text: '供应商名称'
    },
    {
      value: '${data.supplierAddress}',
      text: '供应商地址'
    }
  ]
  return (
    <>
      <RichText parameterOptions={options}/>
    </>
  );
}

export default App;
