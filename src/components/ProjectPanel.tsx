import React from "react";
import styled from "@emotion/styled";
import { useRecoilValue } from "recoil";
import { projectsLoadingState } from "@/store";
import ProjectCard from "./ProjectCard";
import { useConfig } from "@/common/hooks";
import { css } from "@emotion/css";

interface ProjectPanelProps {
  list?: {
    id: string;
    name: string;
    description: string;
    github: string;
    email: string;
    link: string;
  }[];
}

// NOTE：ProjectContainer padding, 父元素接管滚动条
const PROJECT_CONTAINER_PADDING = 20;

const ProjectPanel: React.FC<ProjectPanelProps> = ({ list }) => {
  const [{ layout }] = useConfig();
  const loading = useRecoilValue(projectsLoadingState);

  const hasNoProjects = !loading && !list?.length;

  const adjustProjectWith = css`
    width: calc(
      100vw - ${layout.sidebar.width}px -
        (${layout.mainContent.padding} + ${PROJECT_CONTAINER_PADDING}) * 2px
    );
  `;

  return (
    <>
      {loading ? (
        <LoadingMessage>loading...</LoadingMessage>
      ) : hasNoProjects ? (
        <NoProjectsMessage>No projects found.</NoProjectsMessage>
      ) : (
        <ProjectContainer className={adjustProjectWith}>
          <ProjectGrid>
            {list?.map((project) => (
              <ProjectCard item={project} key={project.id} />
            ))}
          </ProjectGrid>
        </ProjectContainer>
      )}
    </>
  );
};

export default ProjectPanel;

const ProjectContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
  margin: 0 auto; // 居中显示
`;

const LoadingMessage = styled.div`
  align-self: flex-start;
  padding-left: 20px;
  font-size: 18px;
  color: ${(props) => props.theme.textSecondary};
`;

const NoProjectsMessage = styled(LoadingMessage)``;
