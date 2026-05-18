import { useTabContext } from './context';
import { Header, TabNav } from './components/layout';
import { SimulatorTab } from './components/simulator';
import { ExplorerTab } from './components/explorer';
import { DatabaseTab } from './components/database';

function TabContent() {
  const { activeTab } = useTabContext();

  switch (activeTab) {
    case 'simulator':
      return <SimulatorTab />;
    case 'explorer':
      return <ExplorerTab />;
    case 'database':
      return <DatabaseTab />;
    default:
      return <SimulatorTab />;
  }
}

export function App() {
  return (
    <div className="container">
      <Header />
      <TabNav />
      <main className="app-main">
        <TabContent />
      </main>
    </div>
  );
}
