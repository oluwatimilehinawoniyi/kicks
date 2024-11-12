import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { ReactNode, useState } from "react";
import styles from "./collapsibleTab.module.css";

export default function CollapsibleTab({
  children,
  title,
  isTabOpen,
}: {
  children: ReactNode;
  title: string;
  isTabOpen: boolean;
}) {

  const [tabOpen, setTabOpen] = useState(isTabOpen);

  const handleTabToggle = () => setTabOpen(!tabOpen);

  return (
    <section className={styles.collapsible_tab}>
      <div onClick={handleTabToggle} className={styles.collapsible_title}>
        <p>{title}</p>
        <motion.div
          animate={{
            rotate: tabOpen ? 180 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={14} />
        </motion.div>
      </div>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: tabOpen ? "auto" : 0,
          opacity: tabOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className={styles.collapsible_content}
      >
        {children}
      </motion.div>
    </section>
  );
}
