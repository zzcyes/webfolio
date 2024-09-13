import React from "react";
import styled from "@emotion/styled";
import {
  FaGithub,
  FaHome,
  FaStar,
  FaCodeBranch,
  FaClone,
} from "react-icons/fa";
import useToast from "@/common/hooks/useToast";

interface IProps {
  item?: any;
}

const IconLink = styled.a``;

const ProjectCard: React.FC<IProps> = ({ item }) => {
  const { showToast } = useToast();

  if (!item) return null;
  const project = item;

  const owner = project?.owner?.login ?? "";
  const repo = project?.name ?? "";
  const forkRepoUrl = `https://github.com/${owner}/${repo}/network/members`;
  const startRepoUrl = `https://github.com/${owner}/${repo}/stargazers`;
  const cloneUrl = `https://github.com/${owner}/${repo}.git`;

  return (
    <ProjectItem key={project?.id}>
      <ProjectHeader>
        {project?.owner?.avatarUrl ? (
          <ProjectIcon src={project?.owner?.avatarUrl} alt={project.name} />
        ) : (
          <ProjectIconPlaceholder>{project?.name[0]}</ProjectIconPlaceholder>
        )}
        <ProjectName>{project?.name}</ProjectName>
      </ProjectHeader>
      <ProjectDescription>
        {project?.description ?? "No description"}
      </ProjectDescription>
      <ProjectStats>
        <StatItem
          title={startRepoUrl}
          onClick={() => {
            window.open(startRepoUrl, "_blank");
          }}
        >
          <FaStar />
          <span>{project?.stargazerCount}</span>
        </StatItem>
        <StatItem
          title={forkRepoUrl}
          onClick={() => {
            window.open(forkRepoUrl, "_blank");
          }}
        >
          <FaCodeBranch />
          <span>{project?.forkCount}</span>
        </StatItem>
        <StatItem
          title={cloneUrl}
          onClick={() => {
            navigator.clipboard.writeText(cloneUrl).then(() => {
              showToast(`Clone URL copied to clipboard: ${cloneUrl}`);
            });
          }}
        >
          <FaClone />
          clone
        </StatItem>
      </ProjectStats>
      <ProjectLinks>
        {project?.url && (
          <IconLink
            href={project?.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} title={project?.url} />
          </IconLink>
        )}
        {project?.homepageUrl && (
          <IconLink
            href={project?.homepageUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaHome size={24} title={project?.homepageUrl} />
          </IconLink>
        )}
      </ProjectLinks>
    </ProjectItem>
  );
};

export default ProjectCard;

const ProjectItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; // 改为左对齐
  justify-content: space-between; // 使内容均匀分布
  padding: 20px;
  height: 200px; // 设置最小高度，确保卡片有一致的高度
  border-radius: 10px;
  background-color: ${(props) => props.theme.background};
`;

const ProjectHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
`;

const ProjectIcon = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${(props) => props.theme.cardBackground};
`;

const ProjectIconPlaceholder = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.accent};
  color: ${(props) => props.theme.background};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-right: 10px;
`;

const ProjectName = styled.h3`
  font-size: 22px;
  width: calc(100% - 40px);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ProjectDescription = styled.p`
  margin-bottom: 20px;
  font-size: 16px;
  color: ${(props) => props.theme.textSecondary};
  width: 100%; // 确保宽度为100%
  display: -webkit-box;
  -webkit-line-clamp: 2; // 限制为两行
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 20px;

  a {
    color: ${(props) => props.theme.text};

    &:hover {
      color: ${(props) => props.theme.accent};
    }
  }
`;

const ProjectStats = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: ${(props) => props.theme.textSecondary};
  font-size: 14px;

  svg {
    font-size: 16px;
  }

  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.accent};
  }
`;
