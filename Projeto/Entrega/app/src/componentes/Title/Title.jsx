import React from 'react';

const Title = (props) => {
  const Component = props.type || 'span';

  return (
    <Component>{props.children}</Component>
  )
}

export default Title;