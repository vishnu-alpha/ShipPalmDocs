import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Easy to Use</>,
    imageUrl: 'svg/undraw_bookmarks_r6up.svg',
    description: (
      <>
        MMS was designed from the ground up to be easily adopt into the 
        busy marine enviorment, to help mariners to plan and maintain their machineries.
      </>
    ),
  },
  {
    title: <>Focus on What Matters</>,
    imageUrl: 'svg/undraw_personal_goals_edgd.svg',
    description: (
      <>
        MMS lets you focus on your tasks at hand. Plan it once and get reminded when
        it's about time. MMS will capture all the required data and help you project
        the acheivements. 
      </>
    ),
  },
  {
    title: <>Multi Module Integration</>,
    imageUrl: 'svg/undraw_online_transactions_02ka.svg',
    description: (
      <>
        Seamless integration between modules. Can be integrated within the ShipPalm
        enviornment or to external APIs.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="A documentaion site for ShipPalm MMS">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/greeting')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map(({title, imageUrl, description}) => (
                  <Feature
                    key={title}
                    title={title}
                    imageUrl={imageUrl}
                    description={description}
                  />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
