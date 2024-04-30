import React from 'react';

import styles from './_pro.module.css';

export default function Pro() {
  return (
    <p>
      <span className={styles.pro}>Pro</span>
      <span>This feature requires Pro or a higher plan.</span>
    </p>
  );
}
