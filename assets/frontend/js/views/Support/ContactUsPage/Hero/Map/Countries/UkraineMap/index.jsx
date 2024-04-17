/* eslint-disable react/prop-types */
import React from 'react';

function UkraineMap({ setCountryLabel, iso2, currentCountry, onClick }) {
  const isActive = currentCountry === iso2;

  return (
    <path
      d="M1071.45 215.169L1071.27 215.243L1069.36 215.137L1069 215.172L1067.84 215.281L1066.88 216.346L1066.22 216.343L1065.34 216.621L1064.76 216.966L1064.11 217.715L1063.49 217.379L1062.79 217.388L1062.13 217.591L1061.37 218.091L1060.92 218.18L1059.98 218.036L1058.95 218.323L1056.83 219.965L1056.2 221.168L1055.94 221.403L1055.59 221.696L1055.18 221.845L1054.96 221.831L1055.96 220.975L1056.26 220.654L1056.29 220.419L1056.25 220.037L1055.86 219.563L1055.1 220.737L1054.6 220.907L1054 221.26L1054.06 222.046L1054.2 222.629L1054.55 223.364L1055.18 224.348L1054.89 224.38L1054.04 223.961L1053.93 223.272L1053.28 222.698H1052.39L1052 222.775L1051.4 222.126L1050.67 221.86L1050.16 221.937L1049.59 221.822L1048.32 221.133L1047.51 221.056L1047.54 221.552L1047.25 221.891L1046.74 222.009L1046.38 222.152L1045.43 221.69L1045.06 221.351L1043.68 221.702L1042.89 221.65L1041.18 221.974L1040.35 221.659L1038.66 220.775L1038.04 220.597L1037.53 220.634L1037.23 220.344L1037.55 220.198L1037.95 220.18L1038.35 220.074L1038.45 219.919L1038.39 219.629L1037.54 219.411L1036.76 219.348L1036.25 219.087L1035.85 218.788L1036.72 218.783L1037.62 219.009L1039.01 219.093L1040.28 219.325L1040.56 219.035L1041.23 218.533L1041.35 218.372L1040.17 218.717L1038.92 218.498L1038.44 218.191L1038.01 217.743L1037.8 217.233L1037.85 216.756L1037.63 215.898L1037.14 215.134L1036.96 214.715L1036.49 214.339L1037 215.189L1037.22 215.754L1037.52 216.277L1037.61 217.657L1037.5 218.142L1037.01 218.266L1036.34 218.194L1035.64 218.042L1035.74 217.281L1035.4 217.545L1034.97 218.286L1034.53 218.395L1033.53 218.315L1031.73 218.805L1031.66 219.339L1031.45 220.063L1031.22 220.485L1031.16 220.737L1030.48 221.828L1030.39 221.931L1029.04 223.444L1028.86 223.559L1027.93 223.912L1027.39 224.222L1026.96 224.36L1026.21 224.207L1025.92 224.426L1025.8 224.695L1025.85 225.255L1026.26 225.657L1026.69 226.997L1026.63 227.563L1026.3 227.195L1025.8 226.811L1024.88 226.478L1023.91 226.593L1022.88 227.152L1022.18 227.359L1021.78 227.216L1021.55 227.224L1021.48 227.385L1021.51 227.517L1021.64 227.617L1021.62 227.692L1021.48 227.738L1019.75 227.345L1018.99 226.972L1018.36 226.271L1018.63 226.044L1018.87 225.944L1019.74 225.887L1019.89 225.815V225.654L1019.94 225.445L1019.89 225.137L1019.76 224.813L1020.1 224.339L1020.64 223.946L1020.95 223.553V222.976L1021.52 222.695L1022.01 222.213L1022.1 221.687L1022.26 221.357L1021.85 220.599L1021.74 220.1L1021.68 219.681L1021.83 219.448L1022.3 219.187L1022.81 218.986L1023.03 219.006L1023.12 219.136L1023.21 219.985L1023.32 220.002L1023.48 219.896L1023.71 219.397L1023.91 219.543L1024.2 219.598L1024.41 219.469L1024.55 219.483L1024.74 219.612L1025.1 219.793L1025.43 219.853L1025.69 219.733L1025.9 219.517L1026.15 219.592L1026.68 220.183L1026.89 220.117L1027.95 219.997L1028.11 219.836L1028.22 219.69L1027.03 218.906L1027.03 218.323L1027.01 217.654L1026.84 217.258L1026.59 216.946L1025.7 216.581L1025.01 216.202L1024.85 216.033L1024.82 215.812L1024.76 215.47L1024.47 215.175L1024.42 214.925L1024.55 214.537L1024.55 214.124L1024.48 213.96L1024.32 213.828L1024.02 213.814L1023.61 213.576L1023.31 213.254L1022.55 212.789L1022.32 212.715L1022.17 212.485L1022.08 212.21L1022.2 211.868L1022.34 211.343L1022.42 210.852L1022.4 210.559L1022.24 209.836L1021.82 209.282L1021.64 209.207L1021.35 209.362L1021.02 209.491L1020.74 209.371L1020.4 209.072L1019.83 208.237L1018.89 208.071L1018.51 208.03L1018.18 208.432L1018.06 208.309L1017.93 208.053L1017.73 207.95L1017.49 208.068L1017.41 207.953L1017.49 207.606L1017.17 207.433L1016.46 207.436L1016.07 207.307L1016 207.046L1015.77 206.874L1015.36 206.79L1014.95 206.578L1014.54 206.236L1013.95 206.012L1013.19 205.909L1013.12 205.872L1013.05 205.823L1012.58 206.056L1012.31 206.239L1011.94 206.124L1011.4 206.538L1010.22 206.558L1009.64 206.535L1009.34 206.432L1008.29 207.057L1008.19 207.287L1007.94 207.364L1007.26 207.488L1006.54 207.663L1006.43 208.271L1006.24 208.602L1005.88 209.084L1004.53 209.253L1003.37 209.488L1002.18 209.635L1000.64 210.226L1000.16 210.749L999.662 210.895L999.202 210.938L998.883 210.648L997.824 209.87L997.41 209.503L996.893 209.394L996.345 209.454L995.825 209.635L995.268 209.669L994.616 209.408L994.55 209.434L994.309 209.468L992.715 209.153L992.566 209.101L992.494 209.087L992.276 209.064L991.095 209.104L989.953 208.467L989.614 208.447L989.37 208.705L989.194 208.992L988.451 209.276L988.264 209.391L988.149 209.302L988.083 209.055L988.126 208.837L988 208.63L987.695 208.395L987.621 208.297L987.259 208.314L987.161 208.337L987.124 208.332L986.607 208.134L986.245 207.654L985.714 207.399L985.315 207.313L985.122 207.106L984.99 206.833L984.855 206.627L984.841 206.607L984.738 206.294L984.614 206.262L984.591 206.254L984.083 206.308L984.077 205.212L984.847 204.422L985.022 204.023L985.275 203.162L985.479 202.76L985.731 202.427L985.929 202.103L985.99 201.828L986.208 201.799L986.871 202.049L987.457 202.178L987.609 202.057L987.664 201.896L987.629 201.773L987.144 201.406L986.84 201.17L986.814 201.027L986.897 200.702L986.929 200.341L986.837 199.948L986.466 199.078L986.383 198.708L986.656 198.257L987.566 197.186L987.865 196.784L988.278 196.299L989.41 195.137L990.128 194.462L990.619 194.089L991.328 193.441L991.635 193.105L992.999 192.887L993.146 192.574L993.373 192.229L993.559 192.083L993.542 191.506L993.235 190.803L993.011 190.553L992.847 190.384L992.933 190.226L993.083 190.18L993.269 190.157L993.49 189.988L993.424 189.804L992.81 189.353L992.534 189.006L992.075 188.116L991.21 187.192L990.938 186.893L990.88 186.612L990.975 186.331L990.84 185.972L990.524 185.513L990.564 185.464L990.495 184.898L990.685 184.778L990.995 184.695L991.44 184.723L991.828 184.809L992.302 185.068L992.439 185.028L993.18 184.54L993.924 183.811L994.119 183.389L994.303 183.196L994.992 183.093L995.595 183.05L995.983 183.059L996.925 182.987L997.479 182.906L997.953 182.777L998.995 182.728L1000.64 182.815L1001.71 182.82L1002.45 182.889L1004.27 183.277L1004.94 183.346L1005.27 183.552L1005.87 183.63L1006.97 183.836L1007.91 183.948L1008.54 183.902L1008.91 183.96L1009.66 184.878L1009.81 184.985L1010.08 185.008L1010.62 184.927L1011.4 184.956L1011.89 185.148L1011.87 185.696L1012 185.777L1012.21 185.745L1012.43 185.435L1012.61 185.114L1012.76 185.013L1013.57 185.229L1013.94 185.194L1014.25 184.95L1014.45 184.91L1015.03 185.082L1015.74 185.203L1016.3 185.211L1016.67 185.343L1016.98 185.915L1017.22 186.032L1017.44 186.07L1017.71 185.559L1017.98 185.361L1018.38 185.214L1018.63 185.151L1018.8 184.97L1019.03 184.795L1019.24 184.781L1019.43 184.85L1019.65 185.094L1020.01 185.648L1020.43 186.204L1020.7 186.405L1021.33 186.233L1021.74 186.058L1022.54 186.026L1023.59 185.903L1024.39 185.742L1024.9 185.771L1025.22 185.949L1025.73 186.291L1025.92 186.784L1026.57 187.123L1027.07 187.183L1027.2 186.83L1027.46 186.583L1027.32 186.245L1027.22 185.814L1026.95 185.415L1026.76 184.985L1026.95 184.37L1027.18 183.834L1027.29 183.541L1027.69 183.004L1028.12 182.619L1028.75 182.002L1029.24 181.799L1029.72 181.89L1029.99 181.974L1030.61 181.609L1031.8 181.592L1032.79 181.638L1032.89 181.649L1033.4 181.839L1033.93 181.999L1034.29 182.011L1034.71 181.974L1035.17 181.758L1035.49 181.552L1035.78 180.504L1035.9 180.355L1036.12 180.271L1036.5 180.263L1037.24 180.458L1038.1 180.633L1038.58 180.607L1039.8 180.05L1040.51 179.964L1041.39 180.096L1042.23 180.105L1042.85 180.025L1043.32 180.217L1043.91 180.642L1044.49 181.273L1045.16 182.441L1046.83 183.762L1046.89 184.02L1046.79 184.187L1046.08 184.347L1045.47 184.433V184.66L1045.67 184.907L1046 185.266L1046.11 185.728L1046.15 186.153L1046.33 186.529L1046.59 186.681L1046.64 186.87L1046.4 187.103L1046.34 187.246L1046.46 187.324L1047.81 187.37L1048.51 187.597L1049.04 187.803L1049.29 187.823L1049.84 187.691L1050.47 187.608L1050.86 187.597L1051.03 187.749L1051.2 188.148L1051.49 188.547L1051.71 188.661L1052.08 188.641L1052.31 188.661L1052.45 188.814L1052.35 189.04L1052.41 189.287L1052.62 189.591L1052.91 190.292L1053.12 190.501L1053.28 190.765L1053.32 191.07L1053.21 191.334L1053.14 191.543L1053.31 192.017L1053.79 192.548L1054.11 192.68L1054.42 193.153L1054.87 193.306L1055.47 192.907L1055.93 192.697L1056.57 192.812L1057.15 192.887L1057.58 193.159L1057.92 193.532L1058.28 193.742L1058.6 193.633L1059.31 193.742L1059.66 194.046L1060.01 194.218L1060.38 193.972L1060.66 193.667L1061.83 193.349L1062.57 193.268L1062.77 193.205L1063.18 192.978L1063.63 192.826L1064.06 192.866L1064.54 193.34L1065.02 193.667L1065.22 194.181L1065.84 194.887L1067.29 195.854L1067.85 196.15L1068.19 196.098L1068.36 196.021L1068.43 195.92L1068.43 195.447L1068.57 195.272L1068.84 195.266L1069.95 195.854L1070.49 195.918L1071 195.929L1071.75 196.388L1072.57 196.787L1073.15 196.83L1073.59 196.675L1073.89 196.581L1074.11 196.733L1074.35 197.077L1074.69 197.344L1075.05 197.422L1075.56 197.439L1076.51 197.956L1077.41 198.481L1077.93 198.509L1078.34 198.354L1078.71 198.314L1079 198.446L1079.11 198.676L1078.96 198.98L1079.03 199.419L1079.46 199.838L1079.54 200.252L1079.49 200.625L1079.34 200.969L1078.92 201.443L1078.52 201.885L1077.86 202.069L1077.5 202.261L1077.65 202.585L1077.95 202.887L1078.58 203.131L1079.27 203.309L1079.38 203.507L1079.29 203.604L1078.88 203.696L1078.27 203.601L1078.1 203.774L1077.87 204.061L1077.76 204.577L1077.7 205.057L1078.36 205.186L1078.77 205.381L1078.94 205.774L1079.15 206.211L1079.24 206.604L1079.06 206.796L1079.08 206.991L1079.19 207.089L1079.48 207.132L1079.7 207.221L1079.75 207.43L1079.42 207.898L1079.17 208.794L1079.03 209.27L1079.13 209.787L1078.94 210.074L1078.53 210.097L1077.1 210.149L1075.84 210.123L1075.29 210.048L1074.44 210.002L1074.04 210.123L1073.6 210.949L1073.22 211.274L1072.57 211.567L1071.81 211.65L1071.42 211.991L1071.34 212.528L1071.4 213.005L1071.36 213.243L1071.22 213.452L1071.18 213.602L1071.24 213.765L1071.43 213.825L1071.65 213.9L1071.67 214.018L1071.6 214.167L1071.39 214.331L1071.32 214.583L1071.38 214.85L1071.45 215.169ZM1038.58 221.171L1039.36 221.504L1038.59 221.415L1036.88 221.102L1036.11 220.806L1035.88 220.476L1035.73 220.025L1036.19 220.499L1036.5 220.706L1038.58 221.171Z"
      className={`abm-country ${isActive ? 'is-active' : ''}`}
      onClick={onClick}
      onMouseEnter={() => setCountryLabel(iso2)}
      onMouseLeave={() => setCountryLabel(null)}
    />
  );
}

export default UkraineMap;
