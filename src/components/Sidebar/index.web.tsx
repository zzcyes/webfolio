import { CategoryList } from "@/components";
import { SidebarContainer } from "./styled";
import { useConfig, useCollapsed } from "@/common/hooks";
import { normalizeCssSize } from "@/common/utils";
import { SidebarHeader, SidebarTitle, SidebarContent } from "./styled";
import { useRecoilState } from "recoil";
import { currCategoryIdState } from "@/store";

const SidebarWeb = ({ categories }: any) => {
  const [collapsed] = useCollapsed();
  const [{ layout, sidebar }] = useConfig();
  const [currCategoryId, setCurrCategoryId] =
    useRecoilState(currCategoryIdState);

  return (
    <SidebarContainer
      style={{
        width: collapsed ? "0px" : normalizeCssSize(layout.sidebar.width),
      }}
      className={collapsed ? "fadeOutLeft" : "fadeInLeft"}
    >
      <SidebarHeader>
        <SidebarTitle>{sidebar.title} </SidebarTitle>
      </SidebarHeader>
      <SidebarContent>
        <CategoryList
          currCategoryId={currCategoryId}
          list={categories}
          onClick={(id) => setCurrCategoryId(id)}
        />
      </SidebarContent>
    </SidebarContainer>
  );
};

export default SidebarWeb;
