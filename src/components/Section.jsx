const Section = ({ children, title, ...props }) => (
  <section {...props}>
    <h2>{title}</h2>
    {children}
  </section>
);

export default Section;
