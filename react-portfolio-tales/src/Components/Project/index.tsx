import { ProjectStyle, ContainerCards, Container } from './styles'
import Cards from '../Cards'

const Project = () => (
  <ProjectStyle id="project">
    <h3 style={{ padding: '15px' }}>Projects</h3>
    <Container>
      <ContainerCards>
        {/* Innocent Laços */}
        <img src="/images/inocent.png" alt="Innocent Laços" />
        <Cards
          link="https://www.innocent-lacos.com/en"
          h2="Innocent Laços"
          descricao={'Technologies:'}
          tecnologia={`Frontend: Next.js, React, TypeScript
Styling: CSS Modules, Tailwind CSS
Features: i18n (multilingual), PWA, React Suspense, Parallel Routing
DevOps: Kubernetes, Docker, CI/CD
Performance: SSR, Streaming, Code Splitting`}
        />
      </ContainerCards>
      <ContainerCards>
        {/* Certificate Vault */}
        <img src="/images/certificate-vault.png" alt="Certificate Vault" />
        <Cards
          link="#"
          h2="Certificate Vault"
          descricao={'Technologies:'}
          tecnologia={`Frontend: React 19, Vite, TypeScript, Styled Components, Redux Toolkit, i18n, NGINX
Backend: Java 21, Spring Boot 4, Spring Security, JWT, PostgreSQL, OCR, PDF Processing
Blockchain: Solidity (EVM), BNB Chain Mainnet
DevOps: Docker, Kubernetes, ArgoCD, GitHub Actions, NGINX Ingress, Let's Encrypt`}
        />
      </ContainerCards>
      <ContainerCards>
        {/* Lux Store Games */}
        <img src="/images/GameFi.jpg" alt="Lux Store Games" />
        <Cards
          link="https://luxgames-git-main-talesportfolios-projects.vercel.app/"
          h2="Lux Store Games"
          descricao={'Technologies:'}
          tecnologia={`Blockchain: Hardhat, Solidity (ERC-20), OpenZeppelin
Frontend: Next.js, React, TypeScript, styled-components
Integration: Ethers.js (BrowserProvider), Alchemy (RPC), Hardhat Ignition, TypeChain
Backend: Next.js API Routes for token rewards
Deployment: Sepolia testnet & Vercel`}
        />
      </ContainerCards>
      <ContainerCards>
        <img src="/images/reminders3.png" alt="Reminders App" />
        <Cards
          link="https://reminders-app-sage.vercel.app/"
          h2="Reminders App"
          descricao={'Technologies:'}
          tecnologia={`Frontend: Next.js, React, TypeScript, Styled-Components
Backend: Node.js, Express, TypeScript, Prisma, PostgreSQL
Security: JWT, Bcrypt, Zod
Notifications: Nodemailer (e-mail), Twilio (WhatsApp), cron jobs
Deployment: Docker, Vercel`}
        />
      </ContainerCards>
      <ContainerCards>
        <img src="/images/disney.webp" />
        <Cards
          link="https://cloney-disneyplus.vercel.app/"
          h2="Clone Disney+"
          descricao={'Technologies:'}
          tecnologia="Frontend: HTML5, JavaScript
Styling: Sass (SCSS)
Build Tool: Gulp.js"
        />
      </ContainerCards>
      <ContainerCards>
        <img src="/images/govtechlab.png" />
        <Cards
          link="https://govtechlab.vercel.app/"
          h2="🏛️ GovTechLab"
          descricao={'Technologies:'}
          tecnologia="Frontend: Next.js 15, React 19, TypeScript, Styled Components
Libraries: Recharts, XLSX, Axios, camelcase-keys, ts-node"
        />
      </ContainerCards>
      <ContainerCards>
        <img src="/images/joias.jpg" />
        <Cards
          link="https://golden-charm-mu.vercel.app/en"
          h2="Golden Charm"
          descricao={'Technologies:'}
          tecnologia="Frontend: Next.js 15, React 19
Styling: Bootstrap 5, React-Bootstrap, Tailwind CSS, Styled Components
Features: react-slick, react-icons, next-intl (i18n)"
        />
      </ContainerCards>
      <ContainerCards>
        <img src="/images/C.jpg" />
        <Cards
          link="https://library-in-c.vercel.app/Printf"
          h2="Library in C"
          descricao={'Technologies:'}
          tecnologia="Frontend: React, JavaScript
State Management: React Redux
Routing: React Router DOM
Styling: Styled Components
Analytics: Google Analytics"
        />
      </ContainerCards>
      <ContainerCards>
        <img src="/images/to-do-lists.jpeg" />
        <Cards
          link="https://bloco-note.vercel.app/"
          h2="Mes tâches"
          descricao={'Technologies:'}
          tecnologia="Frontend: React, TypeScript, HTML5
Styling: Styled Components
Type Safety: TypeScript"
        />
      </ContainerCards>
      <ContainerCards>
        <img src="./images/spacex.jpg" />
        <Cards
          link="https://space-x-mauve.vercel.app/"
          h2="Clone SpaceX"
          descricao={'Technologies:'}
          tecnologia="Frontend: HTML5, JavaScript
Styling: Sass, Bootstrap
Libraries: AOS (Animate On Scroll)"
        />
      </ContainerCards>
      <ContainerCards>
        <img src="/images/github.jpg" />
        <Cards
          link="https://searching-git.vercel.app/"
          h2="Search Git-User"
          descricao={'Technologies:'}
          tecnologia="Frontend: HTML5, TypeScript
Styling: CSS, Bootstrap
Build Tool: Vite
API Integration: GitHub API"
        />
      </ContainerCards>
      <ContainerCards>
        <img src="/images/Movies.webp" />
        <Cards
          link="https://search-tv-show.vercel.app/"
          h2="Wat Watch"
          descricao="Technologies:"
          tecnologia="Frontend: React, HTML5, JavaScript
Styling: CSS Modules
API Integration: Movie/TV Show API"
        />
      </ContainerCards>
      <ContainerCards>
        <img src="/images/resto.png" />
        <Cards
          link="https://resto-lux.vercel.app/"
          h2="Restaurant"
          descricao={'Technologies:'}
          tecnologia="Frontend: HTML5, JavaScript
Styling: Sass
HTTP Client: Axios
Backend Integration: REST API with JWT Authentication"
        />
      </ContainerCards>
      <ContainerCards>
        <img src="/images/IPFS.jpg" />
        <Cards
          link="https://cryptosalve-a.vercel.app/en"
          h2="CriptoSalve"
          descricao={'Technologies:'}
          tecnologia="Frontend: Next.js, TypeScript, styled-components
Backend: Express.js, Sequelize, PostgreSQL
Blockchain: IPFS, Pinata, Web3.js"
        />
      </ContainerCards>
    </Container>
  </ProjectStyle>
)

export default Project
