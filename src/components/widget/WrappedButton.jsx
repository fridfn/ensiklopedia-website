import React from 'react';
import PropTypes from 'prop-types';
import ButtonWithIcon from '@/components/common/ButtonWithIcon';

const WrappedButton = ({ array }) => {
  return (
   <>
    <div className="wrapper">
      {array.map((name, index) => {
       return <ButtonWithIcon key={index} icon={name} />
      })}
    </div>
   </>
  )
}

WrappedButton.propTypes = {
 array: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default WrappedButton;