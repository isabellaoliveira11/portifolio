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
        redirectUrl="https://technoticia.vercel.app/"
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
            <WorkCard
        title="FitIA"
        description="fitia-description"
        tags={[
          "Online",
          "TailwindCSS",
          "JavaScript",
        ]}
        bannerUrl="https://i.postimg.cc/HL1GCNm3/FITIADASH.png"
        redirectUrl="https://fitia-theta.vercel.app/login.html"
        online
        beta
      />
    </ProjectsContainer>
  );
};

export default WebProjects;
