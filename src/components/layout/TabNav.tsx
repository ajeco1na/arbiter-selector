import { useTabContext, type TabId } from '../../context';

const TABS: { id: TabId; label: string }[] = [
  { id: 'simulator', label: 'Simulator' },
  { id: 'explorer', label: 'Explorer' },
  { id: 'database', label: 'Database' },
];

export function TabNav() {
  const { activeTab, setActiveTab } = useTabContext();

  return (
    <nav className="tabs" role="tablist">
      {TABS.map(tab => (
        <button
          key={tab.id}
          role="tab"
          aria-selected={activeTab === tab.id}
          className={`tab ${activeTab === tab.id ? 'tab--active' : ''}`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
}
