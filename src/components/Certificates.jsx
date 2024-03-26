import styles from "../style";
import { certifications } from "../constants";

function Certificates() {
  return (
    <section id = 'certifications' className="mt-20">
      <h2 className={`${styles.heading2} text-center`}>Certificates</h2>
      <div className="flex gap-3 flex-col sm:flex-row items-center">
        {certifications.map((certification) => (
          <div key={certification.id}>
            <a
              href={certification.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={certification.image}
                alt={certification.name}
                className="rounded-lg w-[200px] sm:w-full"
              />
            </a>
          </div>
        ))}
        <div className="absolute z-[0] w-[50%] h-[50%] blue__gradient left-[-655px]"/>
      </div>
    </section>
  );
}

export default Certificates;
