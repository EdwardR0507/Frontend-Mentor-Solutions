import { SearchIcon } from "../icons";
import styles from "./search-bar.module.css";

interface SearchBarProps {
  search: string;
  onUpdateSearch: (value: string) => void;
}

export const SearchBar = ({ search, onUpdateSearch }: SearchBarProps) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    onUpdateSearch(e.target.value);
  };

  return (
    <section className={styles.container}>
      <SearchIcon className={styles.icon} />
      <input
        className={styles.search}
        type="search"
        onChange={handleSearch}
        value={search}
        placeholder="Search for a country..."
      />
    </section>
  );
};
