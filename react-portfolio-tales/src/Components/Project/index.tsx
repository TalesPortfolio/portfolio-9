import { ProjectStyle, ContainerCards, Container } from './styles'
import Cards from '../Cards'

const Project = () => (
  <ProjectStyle id="project">
    <h3 style={{ padding: '15px' }}>Projects</h3>
    <Container>
      <ContainerCards>
        {/* Lux Store Games */}
        <img src="/images/GameFi.jpg" alt="Lux Store Games" />
        <Cards
          link="https://luxgames-git-main-talesportfolios-projects.vercel.app/"
          h2="Lux Store Games"
          descricao={'Technologies:'}
          tecnologia={`Hardhat, Solidity (ERC-20), OpenZeppelin
Next.js, React, TypeScript, styled-components
Ethers.js (BrowserProvider), Alchemy (RPC)
Hardhat Ignition, TypeChain
Next.js API Routes for token rewards
Deployed on Sepolia testnet & Vercel`}
        />
      </ContainerCards>
      <ContainerCards>
        <img src="/images/reminders3.png" alt="Reminders App" />
        <Cards
          link="https://reminders-app-sage.vercel.app/"
          h2="Reminders App"
          descricao={'Technologies:'}
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
          descricao={'Technologies:'}
          tecnologia="HTML, Sass, JavaScript, Gulp.js.
"
        />
      </ContainerCards>
      <ContainerCards>
        <img src="/images/govtechlab.png" />
        <Cards
          link="https://govtechlab.vercel.app/"
          h2="🏛️ GovTechLab"
          descricao={'Technologies:'}
          tecnologia="Next.js 15, React 19, TypeScript, Styled Components, Recharts, XLSX, Axios, camelcase-keys, ts-node"
        />
      </ContainerCards>
      <ContainerCards>
        <img src="/images/joias.jpg" />
        <Cards
          link="https://golden-charm-mu.vercel.app/en"
          h2="Golden Charm"
          descricao={'Technologies:'}
          tecnologia="Next.js 15, React 19, Bootstrap 5, React-Bootstrap, Tailwind CSS, Styled Components, react-slick, react-icons, next-intl"
        />
      </ContainerCards>
      <ContainerCards>
        <img src="/images/C.jpg" />
        <Cards
          link="https://library-in-c.vercel.app/Printf"
          h2="Library in c"
          descricao={'Technologies:'}
          tecnologia="React ,React Redux, React Router DOM, Styled Components.
"
        />
      </ContainerCards>
      <ContainerCards>
        <img src="/images/to-do-lists.jpeg" />
        <Cards
          link="https://bloco-note.vercel.app/"
          h2="Mes tâches "
          descricao={'Technologies:'}
          tecnologia="HTML, TypeScript, React, Styled Components.
"
        />
      </ContainerCards>
      <ContainerCards>
        <img src="./images/spacex.jpg" />
        <Cards
          link="https://space-x-mauve.vercel.app/"
          h2="Clone SpaceX"
          descricao={'Technologies:'}
          tecnologia=" HTML, Sass, Bootstrap, JavaScript.
"
        />
      </ContainerCards>
      <ContainerCards>
        <img src="/images/github.jpg" />
        <Cards
          link="https://searching-git.vercel.app/"
          h2="Search Git-User"
          descricao={'Technologies:'}
          tecnologia="HTML, CSS, Bootstrap, TypeScript, Vite.
"
        />
      </ContainerCards>
      <ContainerCards>
        <img src="/images/Movies.webp" />
        <Cards
          link="https://search-tv-show.vercel.app/"
          h2="Wat Watch"
          descricao="Technologies:"
          tecnologia="HTML, styles-module, JavaScrit, React.
"
        />
      </ContainerCards>
      <ContainerCards>
        <img src="/images/resto.png" />
        <Cards
          link="https://resto-lux.vercel.app/"
          h2="Restaurant"
          descricao={'Technologies:'}
          tecnologia="HTML, Sass, JavaScript.
"
        />
      </ContainerCards>
      <ContainerCards>
        <img src="/images/grammy2.png" />
        <Cards
          link="https://grammy-opal.vercel.app/"
          h2="Grammy Awards"
          descricao={'Technologies:'}
          tecnologia="Solidity, Web3.js, MetaMask, Foundry, Next.js, TypeScript, .
"
        />
      </ContainerCards>
      <ContainerCards>
        <img src="/images/IPFS.jpg" />
        <Cards
          link="https://cryptosalve-a.vercel.app/en"
          h2="CriptoSalve"
          descricao={'Technologies:'}
          tecnologia="Next.js, TypeScript, styled-components, Express.js, Sequelize, PostgreSQL, IPFS, Pinata, Web3.js"
        />
      </ContainerCards>
    </Container>
  </ProjectStyle>
)

export default Project
