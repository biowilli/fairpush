import React from 'react';

function Header(props) {
  return (
    <div className="Header text-center">
        <h1 className="text-xl font-bold text-indigo-600">
            {props.title}
        </h1>
    </div>
  );
}

export default Header;
