import * as React from 'react';
import {FC} from 'react';
import {
  CardWithIconProps,
} from './CardWithIcon/CardWithIcon';
import {
  JsonView,
  defaultStyles,
  allExpanded,
} from 'react-json-view-lite';
import MultilineCardWithIcon from './CardWithIcon/MultilineCardWithIcon';
import 'react-json-view-lite/dist/index.css';

export interface JsonFieldWigetProps extends Omit<CardWithIconProps, 'icon' | 'to'> {
  icon?: FC<any>;
  title?: string;
  data: JSON;
}

const JsonFieldWiget: FC<JsonFieldWigetProps> = (
  {
    data,
    ...rest
  },
) => {
  return (
    <MultilineCardWithIcon
      {...rest}
    >
      <JsonView
        data={data}
        shouldInitiallyExpand={allExpanded}
        style={defaultStyles}
      />
    </MultilineCardWithIcon>
  );
};

export default JsonFieldWiget;
