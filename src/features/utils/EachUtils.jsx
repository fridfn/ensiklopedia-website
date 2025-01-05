import { Children } from 'react';
import PropTypes from 'prop-types';

const EachUtils = ({ of, render }) => {
  if (!Array.isArray(of)) {
    return <p className='tiny'>{of}</p>
  }
  
  
  return Children.toArray(of.map((items, index) => render(items, index)));
}

export default EachUtils;