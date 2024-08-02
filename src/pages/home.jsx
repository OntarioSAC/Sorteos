import React from 'react';
import Header from '../components/headerHome';
import About from '../components/aboutHome';
import ProjectHome from '../components/projectHome';
import Form from '../components/form';
import Testimonials from '../components/testimonials';

function Home() {


  const styles = {
    container: {
      position: 'relative',
    },

  };

  return (
    <div className="home" style={styles.container}>
      <Header />
      <About />
      <ProjectHome />
      <Form />
      <Testimonials />
    </div>
  );
}

export default Home;
