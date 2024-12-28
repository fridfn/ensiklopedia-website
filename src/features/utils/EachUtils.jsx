import { Children } from 'react';

const EachUtils = ({ of, render }) => {
 return Children.toArray(of.map((items, index) => render(items, index)))
}

export default EachUtils;