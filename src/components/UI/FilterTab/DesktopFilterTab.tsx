import CollapsibleTab from "@/components/common/CollapsibleTab/CollapsibleTab";

import Choice from "../Choice/Choice";
import Checkbox from "../Checkbox/Checkbox";
import PriceRange from "../PriceRange/Range";

import styles from './desktopFilter.module.css'

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

export default function DesktopFilterTab() {

    return (
        <section className={styles.filter_tab}>
            <div className={styles.filter_tab_head}>
                <h1>Filters</h1>
            </div>
            <section className={styles.filter_tab_filters}>
                <CollapsibleTab isTabOpen={true} title="size">
                    <Choice role="size" sizes={sizes} width="80%" />
                </CollapsibleTab>

                <CollapsibleTab isTabOpen={true} title="color">
                    <Choice role="colour" colours={colours} width="80%" />
                </CollapsibleTab>

                <CollapsibleTab isTabOpen={true} title="category" >
                    <div className="" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '1rem'
                    }}>

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
                    </div>
                </CollapsibleTab>

                <CollapsibleTab isTabOpen={true} title="gender">
                    <div className="" style={{
                        display: "flex",
                        gap: '1rem',
                    }}>
                        {["male", "female"].map((item, index) => (
                            <Checkbox key={index} title={item} />
                        ))}
                    </div>
                </CollapsibleTab>

                <CollapsibleTab isTabOpen={true} title="price">
                    <PriceRange />
                </CollapsibleTab>
            </section>
        </section>
    )
}
