import React from 'react';

const QualityItem = ({ children, color }) => {
  const badgeColor = 'badge' + ' ' + 'bg-' + color + ' mx-1';
  return <span className={badgeColor}>{children}</span>;
};

export default QualityItem;
