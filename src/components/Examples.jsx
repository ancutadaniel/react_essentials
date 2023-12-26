import { useCallback, useMemo, useState } from "react";
import Section from "./Section";
import Tabs from "./Tabs";
import TabButton from "./TabButton";

import { EXAMPLES } from "../data";

const Examples = () => {
  const [selectedTab, setSelectedTab] = useState();

  const tabs = useMemo(
    () => ["components", "jsx", "state", "props", "noData"],
    []
  );

  const handleSelect = useCallback(
    (tab) => {
      setSelectedTab(tab);
    },
    [setSelectedTab]
  );

  const renderTabContent = () => {
    if (!selectedTab) {
      return <p>Please select a tab</p>;
    }

    if (!EXAMPLES[selectedTab]) {
      return <p>Coming soon</p>;
    }

    const { title, description, code } = EXAMPLES[selectedTab];
    return (
      <div id="tab-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <pre>
          <code>{code}</code>
        </pre>
      </div>
    );
  };

  const buttons = useMemo(
    () =>
      tabs.map((tab) => (
        <TabButton
          key={tab}
          isSelected={selectedTab === tab}
          onClick={() => handleSelect(tab)}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </TabButton>
      )),
    [tabs, selectedTab, handleSelect]
  );

  return (
    <Section title="Examples" id="examples">
      <Tabs buttons={buttons}>
        {renderTabContent()}
      </Tabs>
    </Section>
  );
};

export default Examples;
