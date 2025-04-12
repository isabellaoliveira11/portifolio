import WorkCard from "../WorkCard";

const WebProjects = () => {
  return (
    <>
      <WorkCard
        title="Nanotícia"
        description="site-that-brings-together"
        tags={["Online", "Beta", "Next.js", "React.js", "Typescript"]}
        bannerUrl="https://user-images.githubusercontent.com/54003876/234693350-e9c7e550-f78b-484e-b67e-b92b02ff5d85.png"
        redirectUrl="https://nanoticia.vercel.app/"
        online
        beta
      />
      <WorkCard
        title="Simbook"
        description="simbook-description"
        tags={[
          "Online",
          "Node.js",
          "Fastify",
          "Next.js",
          "React.js",
          "Typescript",
          "Tailwind",
        ]}
        bannerUrl="https://i.postimg.cc/ZqtCWTsm/simbook-cover.png"
        redirectUrl="https://github.com/hsousadev/simbook-web"
        online
        beta
      />
      <WorkCard
        title="Rick And Morty Wiki"
        description="all-about-characters-episodes-and-more"
        tags={["Online", "Next.js", "React.js", "Typescript"]}
        bannerUrl="https://user-images.githubusercontent.com/54003876/245583973-6981008c-0103-4e96-9f81-d02ca218ddb1.png"
        redirectUrl="https://rickandmortysite.vercel.app/"
        online
      />
      <WorkCard
        title="Leadster | Landing Page"
        description="leadster-landing-page"
        tags={[
          "Online",
          "Next.js",
          "React.js",
          "Typescript",
          "Styled-components",
        ]}
        bannerUrl="https://user-images.githubusercontent.com/54003876/248530834-11d0e8a8-4a6b-49d7-a26c-1f852be8a5f5.png"
        redirectUrl="https://leadster-landing-page.vercel.app/"
        online
      />
    </>
  );
};

export default WebProjects;
