import ProductForm from './components/ProductForm';

const Page: React.FC = async () => {
  return (
    <div className="grid grid-rows-[1fr,200px]">
      <div className="flex justify-center">
        <ProductForm />
      </div>
    </div>
  );
};

export default Page;
