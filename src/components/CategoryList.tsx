import React from "react";
import styled from "@emotion/styled";
import { useRecoilState } from "recoil";
import { currCategoryIdState } from "@/store";
import CategoryBlock from "./CategoryBlock";

interface SidebarProps {
  list: any[];
}

const CategoryList: React.FC<SidebarProps> = ({ list }) => {
  const [currCategoryId, setCurrCategoryId] =
    useRecoilState(currCategoryIdState);

  return (
    <CategoriesContainer>
      {list.map((item) => (
        <CategoryBlock
          key={item.id}
          active={item.id === currCategoryId}
          item={item}
          onClick={(item) => setCurrCategoryId(item.id)}
        />
      ))}
    </CategoriesContainer>
  );
};

export default CategoryList;

const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
