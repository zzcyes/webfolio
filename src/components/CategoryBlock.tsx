import React from "react";
import styled from "@emotion/styled";
import { IconType } from "react-icons";

type ListItem = {
  id: string;
  name: string;
  icon: IconType;
};

interface IProps {
  style?: React.CSSProperties;
  active: boolean;
  item: ListItem;
  onClick?: (row: ListItem) => void;
}

const CategoryBlock: React.FC<IProps> = ({ style, active, item, onClick }) => {
  return (
    <CategoryItem
      style={style}
      className={active ? "active" : ""}
      key={item.id}
      onClick={() => onClick?.(item)}
      title={item.name}
    >
      {item.icon && <IconWrapper>{<item.icon />}</IconWrapper>}
      <span>{item.name}</span>
    </CategoryItem>
  );
};

export default CategoryBlock;

export const CategoryItem = styled.div`
  width: 100%;
  padding: 10px 15px;
  margin-bottom: 5px;
  border-radius: 5px;
  text-align: left;
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  transition: background-color 0.2s ease;
  display: flex;
  align-items: center;

  &.active,
  &:hover {
    background-color: ${(props) => props.theme.hover};
  }
`;

const IconWrapper = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
`;
