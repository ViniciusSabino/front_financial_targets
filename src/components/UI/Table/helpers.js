import { TABLE_ACTIONS } from './constants';

const mountActions = (actions) => actions.reduce((acc, item) => `${acc ? `${acc} |` : ''} ${TABLE_ACTIONS[item]}`, '');

export {
  mountActions,
};
