import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@/components/ui/IconButton';

const WrappedButton = ({ icons }) => {
  return (
   <>
    <div className="wrapper">
      {icons.map((name, index) => {
       return <IconButton key={index} name={name} />
      })}
    </div>
   </>
  )
}

WrappedButton.propTypes = {
 icons: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default WrappedButton;