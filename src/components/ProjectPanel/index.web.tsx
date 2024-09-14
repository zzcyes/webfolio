import ProjectCard from "@/components/ProjectCard";
import type { IProjectItem } from "@/components/ProjectCard";
import { PROJECT_CONTAINER_PADDING } from "./styled";
import { ProjectContainer, ProjectGrid, ProjectCardWrapper } from "./styled";
import { useConfig } from "@/common/hooks";
import { normalizeCssSizeNumber } from "@/common/utils";
import { css } from "@emotion/css";

const ProjectPanelWeb = ({ list }: { list: IProjectItem[] }) => {
  const [{ layout }] = useConfig();

  const adjustProjectWith = css`
    width: calc(
      100vw - ${normalizeCssSizeNumber(layout.sidebar.width)}px -
        (
          ${normalizeCssSizeNumber(layout.mainContent.padding)} +
            ${normalizeCssSizeNumber(PROJECT_CONTAINER_PADDING)}
        ) * 2px
    );
  `;

  return (
    <>
      <ProjectContainer className={adjustProjectWith}>
        <ProjectGrid>
          {list?.map((project) => (
            <ProjectCardWrapper key={project.id}>
              <ProjectCard item={project} />
            </ProjectCardWrapper>
          ))}
        </ProjectGrid>
      </ProjectContainer>
    </>
  );
};

export default ProjectPanelWeb;
