import CategoryBlock from "@/components/CategoryBlock";
import { CategoriesContainer } from "./styled";

interface CategoryListProps {
  currCategoryId?: string;
  list: any[];
  onClick?: (item: any) => void;
}

const CategoryList = ({ currCategoryId, list, onClick }: CategoryListProps) => {
  return (
    <CategoriesContainer>
      {list.map((item) => (
        <CategoryBlock
          key={item.id}
          active={item.id === currCategoryId}
          item={item}
          onClick={(item) => onClick?.(item.id)}
        />
      ))}
    </CategoriesContainer>
  );
};

export default CategoryList;
