/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  Show,
  ShowProps,
  TabbedShowLayout,
} from 'react-admin';
import {
} from 'react-admin';

import MainTab from './MainTab';


const TagShow: FC<ShowProps> = (props: ShowProps) => (
  <Show {...props}>
    <TabbedShowLayout>
      <MainTab label="Summary" />
      
    </TabbedShowLayout>
  </Show>
);

export default TagShow;
