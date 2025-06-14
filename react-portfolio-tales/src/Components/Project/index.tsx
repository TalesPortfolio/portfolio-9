import { ProjectStyle, ContainerCards, Container } from './styles'
import Cards from '../Cards'

const Project = () => (
  <ProjectStyle id="project">
    <h3 style={{ padding: '15px' }}>Projects</h3>
    <Container>
      <ContainerCards>
        <img src="/images/reminders3.png" alt="Reminders App" />
        <Cards
          link="https://reminders-app-sage.vercel.app/"
          h2="Reminders App"
          descricao="Full-stack reminder & notification app:"
          tecnologia={`Next.js, React, TypeScript, Styled-Components Node.js, Express, TypeScript, Prisma, PostgreSQL
        JWT, Bcrypt, Zod
        Nodemailer (e-mail), Twilio (WhatsApp), cron jobs
        Docker, Vercel`}
        />
      </ContainerCards>
      <ContainerCards>
        <img src="/images/disney.webp" />
        <Cards
          link="https://cloney-disneyplus.vercel.app/"
          h2="Clone Disney+"
          descricao="Technologies used in the project:"
          tecnologia="HTML, Sass, JavaScript, Gulp.js.
"
        />
      </ContainerCards>
      <ContainerCards>
        <img src="/images/govtechlab.png" />
        <Cards
          link="https://govtechlab.vercel.app/"
          h2="🏛️ GovTechLab"
          descricao="GovTechLab is a web project that makes government data more accessible and interactive"
          tecnologia="Technologies: Next.js 15, React 19, TypeScript, Styled Components, Recharts, XLSX, Axios, camelcase-keys, ts-node"
        />
      </ContainerCards>
      <ContainerCards>
        <img src="/images/joias.jpg" />
        <Cards
          link="https://golden-charm-mu.vercel.app/en"
          h2="Golden Charm"
          descricao="Golden Charm is a multilingual, responsive website currently under construction, focused on elegant UI and smooth user experience."
          tecnologia="Technologies: Next.js 15, React 19, Bootstrap 5, React-Bootstrap, Tailwind CSS, Styled Components, react-slick, react-icons, next-intl"
        />
      </ContainerCards>
      <ContainerCards>
        <img src="/images/C.jpg" />
        <Cards
          link="https://library-in-c.vercel.app/Printf"
          h2="Library in c"
          descricao="Technologies used in the project:"
          tecnologia="React ,React Redux, React Router DOM, Styled Components.
"
        />
      </ContainerCards>
      <ContainerCards>
        <img src="/images/to-do-lists.jpeg" />
        <Cards
          link="https://bloco-note.vercel.app/"
          h2="Mes tâches "
          descricao="Technologies used in the project:"
          tecnologia="HTML, TypeScript, React, Styled Components.
"
        />
      </ContainerCards>
      <ContainerCards>
        <img src="./images/spacex.jpg" />
        <Cards
          link="https://space-x-mauve.vercel.app/"
          h2="Clone SpaceX"
          descricao="Technologies used in the project:"
          tecnologia=" HTML, Sass, Bootstrap, JavaScript.
"
        />
      </ContainerCards>
      <ContainerCards>
        <img src="/images/github.jpg" />
        <Cards
          link="https://searching-git.vercel.app/"
          h2="Search Git-User"
          descricao="Technologies used in the project:"
          tecnologia="HTML, CSS, Bootstrap, TypeScript, Vite.
"
        />
      </ContainerCards>
      <ContainerCards>
        <img src="/images/Movies.webp" />
        <Cards
          link="https://search-tv-show.vercel.app/"
          h2="Wat Watch"
          descricao="Technologies used in the project:"
          tecnologia="HTML, styles-module, JavaScrit, React.
"
        />
      </ContainerCards>
      <ContainerCards>
        <img src="images/massaMuscular.jpg" />
        <Cards
          link="https://www.robertocoach.lu/"
          h2="robertocoach.lu"
          descricao="Technologies used in the project:"
          tecnologia="HTML, Sass, JavaScript, Gulp.js.
"
        />
      </ContainerCards>
      <ContainerCards>
        <img src="/images/resto.png" />
        <Cards
          link="https://resto-lux.vercel.app/"
          h2="Restaurant"
          descricao="Technologies used in the project:"
          tecnologia="HTML, Sass, JavaScript.
"
        />
      </ContainerCards>
      <ContainerCards>
        <img src="/images/grammy2.png" />
        <Cards
          link="https://grammy-opal.vercel.app/"
          h2="Grammy Awards"
          descricao="Technologies used in the project:"
          tecnologia="Solidity, Web3.js, MetaMask, Foundry, Next.js, TypeScript, .
"
        />
      </ContainerCards>
      <ContainerCards>
        <img src="/images/IPFS.jpg" />
        <Cards
          link="https://cryptosalve-a.vercel.app/en"
          h2="CriptoSalve"
          descricao="Technologies used in the project:"
          tecnologia="Next.js, TypeScript, styled-components, Express.js, Sequelize, PostgreSQL, IPFS, Pinata, Web3.js"
        />
      </ContainerCards>
    </Container>
  </ProjectStyle>
)

export default Project
