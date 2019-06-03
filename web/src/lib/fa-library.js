import React from 'react';
import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEllipsisV, faTimes, faChevronRight, faChevronLeft, faCheck } from '@fortawesome/free-solid-svg-icons';

library.add([
  faEllipsisV,
  faTimes,
  faChevronRight,
  faChevronLeft,
  faCheck,
]);

export const ellipsisV = () => {
  return (
    <FontAwesomeIcon
      icon="ellipsis-v"
      size="lg"
    />
  );
}

export const times = () => {
  return (
    < FontAwesomeIcon
      icon="times"
      size="lg"
    />
  );
}
