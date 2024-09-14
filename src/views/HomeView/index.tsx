import React, { useState, useEffect, useMemo, useCallback } from "react";
import { css } from "@emotion/css";
import { FaUserCircle, FaStar } from "react-icons/fa";
import { useRecoilState, useSetRecoilState } from "recoil";
import { currCategoryIdState, projectsLoadingState } from "@/store";
import { ProjectPanel, Navbar } from "@/components";
import { ReposApi } from "@/common/services";
import {
  PageContainer,
  MainContentContainer,
  MainContentCard,
  ContentSection,
} from "./styled";
import { useConfig } from "@/common/hooks";
import { Sidebar } from "@/components";

const formattedRepos = (origin) => {
  return origin?.map?.((item) => {
    return {
      ...item,
      id: item.url,
    };
  });
};

const HomeViews: React.FC = () => {
  const [result, setResult] = useState<any>({});
  const setLoading = useSetRecoilState(projectsLoadingState);

  const [{ layout }] = useConfig();

  const [categories] = useState([
    {
      id: "repositories",
      name: "Repositories",
      icon: FaUserCircle, // 更改为 FaUserCircle 图标
    },
    {
      id: "starredRepositories",
      name: "Starred",
      icon: FaStar,
    },
  ]);

  const getGithubReposByGrahql = useCallback(async () => {
    setLoading(true);
    try {
      const res = await ReposApi.getGithubReposByGrahql();
      const { repositories, starredRepositories } = res;
      const newRepositories = formattedRepos(repositories?.nodes);
      const newStarredRepositories = formattedRepos(starredRepositories?.nodes);
      setResult({
        repositories: newRepositories,
        starredRepositories: newStarredRepositories,
      });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [setLoading]);

  useEffect(() => {
    getGithubReposByGrahql();
  }, [getGithubReposByGrahql]);

  const [currCategoryId, setCurrCategoryId] =
    useRecoilState(currCategoryIdState);

  useEffect(() => {
    if (!currCategoryId && categories?.length > 0 && categories?.[0]?.id) {
      setCurrCategoryId(categories[0].id);
    }
  }, [categories, currCategoryId, setCurrCategoryId, result]);

  const projects = useMemo(() => {
    return result?.[currCategoryId] ?? [];
  }, [currCategoryId, result]);

  return (
    <PageContainer>
      <Sidebar categories={categories} />
      <MainContentContainer
        className={css`
          padding: ${layout.mainContent.padding}px;
        `}
      >
        <MainContentCard>
          <Navbar />
          <ContentSection>
            <ProjectPanel list={projects} />
          </ContentSection>
        </MainContentCard>
      </MainContentContainer>
    </PageContainer>
  );
};

export default HomeViews;
