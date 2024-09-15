import React from "react";
import {
  FaGithub,
  FaHome,
  FaStar,
  FaCodeBranch,
  FaClone,
} from "react-icons/fa";
import useToast from "@/common/hooks/useToast";
import {
  ProjectItem,
  ProjectHeader,
  ProjectIcon,
  ProjectIconPlaceholder,
  ProjectName,
  ProjectDescription,
  ProjectStats,
  ProjectLinks,
  StatItem,
} from "./styled";
import { IProjectCardProps } from "./type";
import {
  createForkRepoUrl,
  createStartRepoUrl,
  createCloneUrl,
} from "@/common/utils";
import { useMediaQuery } from "react-responsive";
import { useConfig } from "@/common/hooks";

const ProjectCard: React.FC<IProjectCardProps> = ({ item: project }) => {
  const { showToast } = useToast();
  const [{ mediaQuery }] = useConfig();
  const isWeb = useMediaQuery({ minWidth: mediaQuery.web });

  const owner = project?.owner?.login ?? "";
  const repo = project?.name ?? "";
  const forkRepoUrl = createForkRepoUrl(owner, repo);
  const startRepoUrl = createStartRepoUrl(owner, repo);
  const cloneUrl = createCloneUrl(owner, repo);

  const iconStyle = {
    width: isWeb ? 30 : 24,
    height: isWeb ? 30 : 24,
  };

  const avatar = project?.owner?.avatarUrl ? (
    <ProjectIcon
      style={iconStyle}
      src={project?.owner?.avatarUrl}
      alt={project.name}
    />
  ) : (
    <ProjectIconPlaceholder style={iconStyle}>
      {project?.name?.[0]}
    </ProjectIconPlaceholder>
  );

  const linksSize = isWeb ? 24 : 18;

  const statsItems = [
    {
      title: startRepoUrl,
      onClick: () => {
        window.open(startRepoUrl, "_blank");
      },
      icon: <FaStar />,
      brief: project?.stargazerCount,
    },
    {
      title: forkRepoUrl,
      onClick: () => {
        window.open(forkRepoUrl, "_blank");
      },
      icon: <FaCodeBranch />,
      brief: project?.forkCount,
    },
    {
      title: cloneUrl,
      onClick: () => {
        navigator.clipboard.writeText(cloneUrl).then(() => {
          showToast(`Clone URL copied to clipboard: ${cloneUrl}`);
        });
      },
      icon: <FaClone />,
      brief: "clone",
    },
  ];

  const linksItems = [
    {
      href: project?.url,
      icon: <FaGithub size={linksSize} title={project?.url} />,
    },
    {
      href: project?.homepageUrl,
      icon: <FaHome size={linksSize} title={project?.homepageUrl} />,
    },
  ];

  return (
    <ProjectItem
      key={project?.id}
      style={{
        height: isWeb ? 200 : "auto",
        padding: isWeb ? 20 : 10,
      }}
    >
      <ProjectHeader>
        {avatar}
        <ProjectName
          style={{
            fontSize: isWeb ? 22 : 18,
          }}
        >
          {project?.name}
        </ProjectName>
      </ProjectHeader>
      <ProjectDescription
        style={{
          fontSize: isWeb ? 20 : 16,
        }}
      >
        {project?.description ?? "No description"}
      </ProjectDescription>
      <ProjectStats>
        {statsItems.map(({ title, onClick, icon, brief }) => (
          <StatItem
            key={title}
            title={title}
            onClick={() => {
              onClick?.();
            }}
          >
            {icon}
            <span>{brief}</span>
          </StatItem>
        ))}
      </ProjectStats>
      <ProjectLinks
        style={{
          gap: isWeb ? 20 : 15,
        }}
      >
        {linksItems.map(
          ({ href, icon }) =>
            href && (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {icon}
              </a>
            )
        )}
      </ProjectLinks>
    </ProjectItem>
  );
};

export default ProjectCard;
