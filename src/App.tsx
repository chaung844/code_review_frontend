import { NavBar } from './components/NavBar';
import { Layout } from 'antd';
import { Hero } from './components/Hero';
import { VulnerabilityCheck } from './components/VulnerabilityCheck';

const { Footer, Content } = Layout;

function App() {
  return (
      <Layout>
          <NavBar />
          <Hero />
          <Content>
             <VulnerabilityCheck />
          </Content>
          <Footer>
          </Footer>
      </Layout>
  );
}

export default App;
