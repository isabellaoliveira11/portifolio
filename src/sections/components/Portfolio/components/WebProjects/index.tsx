import styled from "styled-components";
import WorkCard from "../WorkCard";

const ProjectsContainer = styled.div`
  display: flex;
  gap: 20px; /* Espaçamento entre os cards (ajuste conforme necessário) */
  /* Se você quiser que os cards quebrem para a próxima linha em telas menores: */
  flex-wrap: wrap;
`;

const WebProjects = () => {
  return (
    <ProjectsContainer>
      <WorkCard
        title="TechNoticia"
        description="site-that-brings-together"
        tags={["Online", "Next.js", "React.js", "Typescript"]}
        bannerUrl="https://i.postimg.cc/cC8xws2n/technoticiacover.png"
        redirectUrl="https://technoticia-810safyso-isabelas-projects-bededd19.vercel.app/"
        online
        beta
      />
      <WorkCard
        title="Vendyx"
        description="vendyx-description"
        tags={[
          "Online",
          "React",
          "TypeScript",
          "TailwindCSS",
          "PostgreSQL",
        ]}
        bannerUrl="https://i.postimg.cc/SxRDBwDb/dash2-vendyx.png"
        redirectUrl="https://vendyx.vercel.app/"
        online
        beta
      />
    </ProjectsContainer>
  );
};

export default WebProjects;