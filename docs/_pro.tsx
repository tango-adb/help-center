import React from "react";

import styles from "./_pro.module.css";

export default function Pro({
  feature,
  team,
}: {
  feature?: string;
  team?: boolean;
}) {
  return (
    <p>
      <span className={styles.pro}>{team ? "Team" : "Pro"}</span>
      <span>
        <span>{feature ?? "This feature"} requires </span>
        <a target="_blank" href="https://app.tangoapp.dev/pricing">
          {team ? "Team plan" : "Pro or higher plan"}
        </a>
        <span>.</span>
      </span>
    </p>
  );
}
