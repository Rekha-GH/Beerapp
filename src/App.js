import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import './App.css';

import BeerCard from './components/beer-card';
import Footer from './components/shared/footer';
import Header from './components/shared/header';
import Hero from './components/hero';
import Section from './components/layout/section';
import Wrapper from './components/layout/wrapper';
import Grid from './components/layout/grid';

const MainWrapper = styled.main``;

function App() {
  const [data, setData] = useState({ beers: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://api.punkapi.com/v2/beers?page=1&per_page=10',
      );

      setData({ beers: result.data });
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <MainWrapper>
        <Header />
        <Section>
          <Hero />
        </Section>

        <Section> 
          {loading &&
            <div>loading....</div>
          }

          {!loading &&
            <Wrapper>
              <Grid>
                {data.beers.map(item => (
                  <BeerCard
                    key={item.id}
                    image={item.image_url}
                    title={item.name}
                    description={item.brewers_tips}
                  />
                ))}
              </Grid>
            </Wrapper>
          }
        </Section>

        <Footer />
      </MainWrapper>
    </div>
  );
}

export default App;
