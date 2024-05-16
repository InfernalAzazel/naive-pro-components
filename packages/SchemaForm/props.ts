import { FormProps } from 'naive-ui'

export interface Column {
  label: string;
  prop: string;
  component: string | any;
  props?: Record<string, any>; // 组件传入的额外属性
  span?: number; // 栅格布局的跨度
}

export interface ProSchemaFormProps extends  /* @vue-ignore */ FormProps {
  columns: Column[];
  cols?: number;
  xGap?: number;
  yGap?: number;
  grid?: boolean;
}