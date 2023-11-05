import { NavBar } from './components/NavBar';
import { Layout } from 'antd';
import { Hero } from './components/Hero';
import { VulnerabilityCheck } from './components/VulnerabilityCheck';
import { PageFooter } from './components/PageFooter';

const { Content } = Layout;

function App() {
  return (
      <Layout>
          <NavBar />
          <Hero />
          <Content>
             <VulnerabilityCheck />
          </Content>
          <PageFooter />
      </Layout>
  );
}

export default App;
