import { Region } from "../../interfaces";
import styles from "./filter.module.css";

interface FilterProps {
  region: Region | "all";
  onChangeRegion: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Filter = ({ region, onChangeRegion }: FilterProps) => {
  return (
    <div>
      <section className={styles.container}>
        <select
          name="region"
          id="region"
          className={styles.filter}
          onChange={onChangeRegion}
          value={region}
        >
          <option value="all" hidden>
            Filter by Region
          </option>
          <option value="all">All</option>
          <option value={Region.Africa}>Africa</option>
          <option value={Region.Americas}>America</option>
          <option value={Region.Asia}>Asia</option>
          <option value={Region.Europe}>Europe</option>
          <option value={Region.Oceania}>Oceania</option>
        </select>
      </section>
    </div>
  );
};
