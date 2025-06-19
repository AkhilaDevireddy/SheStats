import React from 'react'

const SheStatsLogo = ({ size = 64, color = '#6a0dad' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="32" cy="32" r="30" stroke={color} strokeWidth="4" fill="none" />
    <circle cx="32" cy="20" r="8" stroke={color} strokeWidth="3" fill="none" />
    <line
      x1="32"
      y1="28"
      x2="32"
      y2="44"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
    />
    <line
      x1="24"
      y1="44"
      x2="40"
      y2="44"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
    />
    <rect x="18" y="46" width="6" height="10" fill={color} rx="1" />
    <rect x="28" y="40" width="6" height="16" fill={color} rx="1" />
    <rect x="38" y="34" width="6" height="22" fill={color} rx="1" />
  </svg>
)

export default SheStatsLogo
