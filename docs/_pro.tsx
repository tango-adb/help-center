import React from 'react';

import styles from './_pro.module.css';

export default function Pro({ feature }: { feature?: string }) {
  return (
    <p>
      <span className={styles.pro}>Pro</span>
      <span>{feature ?? "This feature"} requires Pro or a higher plan.</span>
    </p>
  );
}
