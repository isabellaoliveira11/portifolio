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
        bannerUrl="https://user-images.githubusercontent.com/54003876/234693350-e9c7e550-f78b-484e-b67e-b92b02ff5d85.png"
        redirectUrl="https://technoticia.vercel.app/"
        online
        beta
      />
      <WorkCard
        title="LocalFit"
        description="localfit-description"
        tags={[
          "Em desenvolvimento",
          "Python",
          "Flask",
          "AI",
        ]}
        bannerUrl="https://i.postimg.cc/8khPpCR2/dashcover.png"
        redirectUrl=""
        online
        beta
      />
    </ProjectsContainer>
  );
};

export default WebProjects;
