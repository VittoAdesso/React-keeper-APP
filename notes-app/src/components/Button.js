import React from 'react';

export default function Button(props) {
  return <Button {...props}>{props.children}</Button>;
}
