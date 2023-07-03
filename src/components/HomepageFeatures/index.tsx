import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg?: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "⏰ 사랑하는 팀원의 시간을 낭비시키지 말아요",
    description: <>지각하지 말아요. 시작 시간과 끝 시간을 명확히 해요.</>,
  },
  {
    title: "📖 지식 공유의 가치를 믿어요",
    description: (
      <>
        <div>어떤 질문도 괜찮아요.</div>
        <div>새로 얻은 지식은 공유를 해요.</div>
        <div>팀 블로그를 적극적으로 작성해요.</div>
        <div>필요한 경우 팀원에게 지식 공유 요청을 해요</div>
      </>
    ),
  },
  {
    title: "😴 휴식이 필요하다는 것을 명심해요",
    description: (
      <>
        18시 이후의 시간을 보장해요. 회의중 잠시 쉬는 시간을 가지는 멈춰!권을
        보장해요.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        {Svg && <Svg className={styles.featureSvg} role="img" />}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
