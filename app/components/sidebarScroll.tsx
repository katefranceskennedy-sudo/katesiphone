"use client";
import React, { useState } from "react";
import styles from "./SidebarScroll.module.css";

export default function SidebarScroll() {
  const [active, setActive] = useState(false);

  return (
    <aside
      className={`${styles.sidebar} ${active ? styles.active : ""}`}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      onMouseLeave={() => setActive(false)}
      tabIndex={0}
      aria-label="Scroll bar"
    >
      <div className={styles.track}>
        <div className={styles.thumb} />
      </div>
    </aside>
  );
}
