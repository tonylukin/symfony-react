/* eslint-disable react/prop-types */
import React from 'react';

function ElSalvadorMap({ setCountryLabel, iso2, currentCountry, onClick }) {
  const isActive = currentCountry === iso2;

  return (
    <>
      <path
        d="M317.371 440.109L317.52 440.141L318.491 440.494L318.798 440.425L319.149 440.709L319.307 440.93L319.433 441.237L320.162 441.851L320.268 442.121L320.826 442.483L321.035 442.761L321.276 442.876L321.765 442.982L322.175 443.129L322.213 443.229L322.21 443.642L322.264 443.99L322.465 444.013L322.73 443.843L323.579 443.378L324.369 443.068L324.777 443.252L324.987 443.64L325.257 443.812L325.868 443.706L326.408 443.74L326.801 444.079L326.879 444.274L326.5 445.399L326.356 445.881L326.267 446.289L326.411 446.395L326.546 446.553L326.491 446.771L325.986 447.133L325.831 447.225L325.868 447.919L325.478 448.338L325.127 448.64L324.559 448.723L323.602 448.754L322.204 448.413L321.196 447.945L320.627 447.942L320.791 448.097L321.231 448.195L321.788 448.525L321.61 448.617L319.528 447.931L317.179 446.585L315.714 446.369L314.051 446.016L313.135 445.167L312.42 444.799L312.392 444.478L312.438 444.119L312.831 443.64L313.54 442.994L314 442.661L314.204 442.595L314.479 442.629L314.769 442.443L315.051 441.998L315.324 441.711L315.967 441.421L316.119 441.306L316.099 441.056L316.021 440.574L316.076 440.276L316.291 440.138L316.533 440.112L317.044 439.991L317.256 440.014L317.371 440.109Z"
        className={`abm-country ${isActive ? 'is-active' : ''}`}
        onClick={onClick}
        onMouseEnter={() => setCountryLabel(iso2)}
        onMouseLeave={() => setCountryLabel(null)}
      />
    </>
  );
}

export default ElSalvadorMap;
