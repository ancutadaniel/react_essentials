import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS as data } from "../data";
import Section from "./Section";

const CoreConcepts = () => {
  return (
    <Section title="Core Concepts" id="core-concepts">
      <ul>
        {data.map((item) => (
          <CoreConcept key={item.title} {...item} />
        ))}
      </ul>
    </Section>
  );
};

export default CoreConcepts;