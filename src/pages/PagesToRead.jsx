import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import { getStoreDta } from '../utility/localStore';
import { Helmet } from 'react-helmet-async';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const PagesToRead = () => {
  const dta = useLoaderData();
  const [read, setRead] = useState([]);

  useEffect(() => {
    const readStoreid = getStoreDta();
    const readed = dta.filter((dta) => readStoreid.includes(dta.bookId));
    setRead(readed);
  }, [dta]);
  // console.log(read);

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-92px)]">
      <Helmet>
        <title>Snowy Book | Page to Read</title>
      </Helmet>
      <ResponsiveContainer className="min-h-[400px] w-full">
        <BarChart data={read}>
          <Tooltip /> <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="bookName" />
          <YAxis dataKey={'totalPages'} />
          <Bar
            dataKey="totalPages"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: 'top' }}
          >
            {read.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

PagesToRead.propTypes = {
  // fill: PropTypes.func,
  // width: PropTypes.string,
  // height: PropTypes.string,
};
export default PagesToRead;
