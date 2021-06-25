import React from 'react'
import { css } from '@emotion/css'

const styles = {
  svgIcon: css`
    fill: currentColor;
    width: 1em;
    height: 1em;
    display: inline-block;
    font-size: 1.5rem;
    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    flex-shrink: 0;
    -moz-user-select: none;
  `,
}

/**
 * From: https://fonts.google.com/icons?selected=Material+Icons
 */
export const CancelIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg className={styles.svgIcon} focusable="false" viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path>
  </svg>
);

/**
 * From: https://fonts.google.com/icons?selected=Material+Icons
 */
 export const CancelOutlinedIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg className={styles.svgIcon} focusable="false" viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z"></path>
  </svg>
);

export const LoaderRings = (props: React.SVGProps<SVGSVGElement>) => (
  // By Sam Herbert (@sherb), for everyone. More @ http://goo.gl/7AJzbL
  <svg width="45" height="45" viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" {...props}>
    <g fill="none" fillRule="evenodd" transform="translate(1 1)" strokeWidth="2">
      <circle cx="22" cy="22" r="6" strokeOpacity="0">
        <animate attributeName="r" begin="1.5s" dur="3s" values="6;22" calcMode="linear" repeatCount="indefinite"/>
        <animate attributeName="stroke-opacity" begin="1.5s" dur="3s" values="1;0" calcMode="linear" repeatCount="indefinite"/>
        <animate attributeName="stroke-width" begin="1.5s" dur="3s" values="2;0" calcMode="linear" repeatCount="indefinite"/>
      </circle>
      <circle cx="22" cy="22" r="6" strokeOpacity="0">
        <animate attributeName="r" begin="3s" dur="3s" values="6;22" calcMode="linear" repeatCount="indefinite"/>
        <animate attributeName="stroke-opacity" begin="3s" dur="3s" values="1;0" calcMode="linear" repeatCount="indefinite"/>
        <animate attributeName="stroke-width" begin="3s" dur="3s" values="2;0" calcMode="linear" repeatCount="indefinite"/>
      </circle>
      <circle cx="22" cy="22" r="8">
        <animate attributeName="r" begin="0s" dur="1.5s" values="6;1;2;3;4;5;6" calcMode="linear" repeatCount="indefinite"/>
      </circle>
    </g>
  </svg>
)