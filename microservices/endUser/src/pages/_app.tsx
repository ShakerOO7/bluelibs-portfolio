import '../styles/globals.scss';

import { createApp } from '@bluelibs/x-ui-next';
import { kernel } from '../startup/kernel';

export default createApp({
  kernel,
});
