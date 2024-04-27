import styles from "../style";
import { certifications } from "../constants/index";
import Atropos from "atropos/react";


function Certificates() {
  return (
      <section id="certifications" className="mt-20">
        <h2 className={`${styles.heading2} text-center`}>Certificates</h2>
        <div className="flex gap-3 flex-col sm:flex-row items-center">
          {certifications.map((certification) => (
            <Atropos key={certification.id} className="my-atropos">
              <div>
                <a
                  href={certification.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <picture>
                  <source
                    srcSet={certification.images.large}
                    media="(min-width: 1024px)"/>
                    <source
                    srcSet={certification.images.medium}
                    media="(min-width: 620px)"/>
                  <img
                    src={certification.images.small}
                    alt={certification.name}
                    className="rounded-lg w-[200px] sm:w-full"
                  />
                  </picture>
                </a>
              </div>
            </Atropos>
          ))}
          <div className="absolute z-[0] w-[50%] h-[50%] blue__gradient left-[-655px]" />
        </div>
      </section>
  );
}

export default Certificates;
