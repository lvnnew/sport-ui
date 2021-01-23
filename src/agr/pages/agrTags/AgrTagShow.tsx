import React, {
  FC,
} from 'react';
import {
  Show,
  ShowProps,
  TabbedShowLayout,
  Tab,
  TextField
} from 'react-admin';


const AgrTagShow: FC<ShowProps> = (props: ShowProps) => (
  <Show {...props}>
    <TabbedShowLayout>
      <Tab label="Summary">
        <TextField source="id" />
        <TextField source="comment" />
      </Tab>
      
    </TabbedShowLayout>
  </Show>
);

export default AgrTagShow;
