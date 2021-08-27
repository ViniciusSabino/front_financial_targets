/* eslint-disable import/prefer-default-export */
import { TABLE_ACTIONS_PT } from './constants';

const mountActions = (actions) => actions.reduce((acc, item) => `${acc ? `${acc} |` : ''} ${TABLE_ACTIONS_PT[item]}`, '');

const mountAction = (action) => TABLE_ACTIONS_PT[action];

export {
  mountActions,
  mountAction,
};
