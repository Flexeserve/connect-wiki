import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Real Time',
    Svg: require('@site/static/img/RealTime.svg').default,
    description: (
      <>
        Connect gives real-time insights into your hot food holding units. Ensuring your food is always at the right temperature, and your customers are always satisfied.
      </>
    ),
  },
  {
    title: 'Automated Scheduling',
    Svg: require('@site/static/img/Scheduling.svg').default,
    description: (
      <>
        Set up daypart schedules and menu transitions once, then let Connect
        apply them automatically across stores. Reduce manual intervention and
        keep operations consistent throughout the day.
      </>
    ),
  },
  {
    title: 'Performance & Compliance',
    Svg: require('@site/static/img/Performance.svg').default,
    description: (
      <>
        Track holding performance, temperature compliance, and operational
        trends from one dashboard. Spot exceptions early, improve consistency,
        and support better decision-making across every location.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
