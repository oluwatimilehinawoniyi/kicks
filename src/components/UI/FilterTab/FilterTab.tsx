import { X } from "lucide-react";
import { ReactNode } from "react";
import CollapsibleTab from "@/components/common/CollapsibleTab/CollapsibleTab";
import Button from "@/components/common/Button/Button";

import styles from "./FilterTab.module.css";
import Choice from "../Choice/Choice";
import Checkbox from "../Checkbox/Checkbox";
import PriceRange from "../PriceRange/Range";

export default function FilterTab({
  handleFilterToggle,
}: {
  handleFilterToggle: () => void;
}) {
  const sizes = [
    { value: "38", available: true },
    { value: "39", available: true },
    { value: "40", available: true },
    { value: "41", available: false },
    { value: "42", available: true },
    { value: "43", available: true },
    { value: "44", available: false },
    { value: "45", available: true },
    { value: "46", available: true },
    { value: "47", available: false },
  ];
  const colours = [
    { value: "var(--blue)", available: true },
    { value: "var(--yellow)", available: true },
    { value: "var(--dark-gray)", available: true },
    { value: "white", available: true },
    { value: "#234D41", available: true },
    { value: "#353336", available: true },
    { value: "#677282", available: false },
    { value: "#925513", available: true },
    { value: "#BB8056", available: true },
    { value: "#F08155", available: false },
  ];
  return (
    <section className={styles.filter_tab}>
      <div className={styles.filter_tab_head}>
        <h1>Filters</h1>
        <X
          size={18}
          onClick={handleFilterToggle}
          style={{ cursor: "pointer" }}
        />
      </div>
      <section className={styles.filter_tab_filters}>
        <CollapsibleTab isTabOpen={false} title="size">
          <Choice role="size" sizes={sizes} width="80%" />
        </CollapsibleTab>

        <CollapsibleTab isTabOpen={false} title="color">
          <Choice role="colour" colours={colours} width="80%" />
        </CollapsibleTab>

        <CollapsibleTab isTabOpen={false} title="category">
          {[
            "casual shoes",
            "runner",
            "hiking",
            "sneaker",
            "basketball",
            "golf",
            "outdoor",
          ].map((item) => (
            <Checkbox key={item} title={item} />
          ))}
        </CollapsibleTab>

        <CollapsibleTab isTabOpen={false} title="gender">
          {["male", "female"].map((item, index) => (
            <Checkbox key={index} title={item} />
          ))}
        </CollapsibleTab>

        <CollapsibleTab isTabOpen={false} title="price">
          <PriceRange />
        </CollapsibleTab>
      </section>
      <div className={styles.filter_tab_btn}>
        <Button style={{ backgroundColor: "var(--dark-gray)" }}
        >reset</Button>
        <Button style={{ backgroundColor: "var(--blue)" }}
        >apply</Button>
      </div>
    </section>
  );
}

export function FilterTabModal({ children }: { children: ReactNode }) {
  return (
    <section className={styles.filter_tab_modal}>
      <div className={styles.filter_tab_content}>{children}</div>
    </section>
  );
}
