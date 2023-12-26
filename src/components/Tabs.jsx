const Tabs = ({ children, buttons, ButtonsContainer = "menu", as='as' }) => {
  // ButtonsContainer is a component identifier
  // pass the build-in element tag name as a prop to Tabs and use it to render the buttons container
  // need to be with capital letter
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
          {children}
    </>
  );
};

export default Tabs;
