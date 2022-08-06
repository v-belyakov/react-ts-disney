import React from 'react';

export type ListProps<T> = {
  items: T[];
  renderItem: (item: T, i: number) => React.ReactNode;
};

export default function List<T>(props: ListProps<T>) {
  return <div className="list">{props.items.map((item, i) => props.renderItem(item, i))}</div>;
}
