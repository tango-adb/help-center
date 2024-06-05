import React from 'react';

export default function ImageCaption(props: { width: number, src: string, caption: string }) {
  return (
    <figure>
      <img style={{ display: 'block', margin: 'auto', maxWidth: props.width }} src={props.src} alt={props.caption} />
      <figcaption style={{ marginTop: 4, textAlign: 'center', opacity: 0.8 }}>{props.caption}</figcaption>
    </figure>
  )
}
