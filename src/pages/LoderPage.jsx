import { Helmet } from 'react-helmet-async';

const LoderPage = () => {
  return (
    <div className="min-h-[calc(100vh-120px)] flex items-center justify-center">
      <span className="loader"></span>
      <Helmet>
        <title>Snowy Book | Loding...</title>
      </Helmet>
    </div>
  );
};

export default LoderPage;
