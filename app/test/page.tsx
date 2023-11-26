"use client";

import { useState } from "react";

export default function TestPage() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex w-screen h-screen items-center justify-center bg-cyan-400">
      {open ? (
        <svg
          width="191"
          height="23"
          viewBox="0 0 191 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="cursor-pointer"
            d="M0.347824 0.86957H88.7273C89.6438 0.86957 90.4828 1.38442 90.8981 2.20171L100.998 22.087H0.347824V0.86957Z"
            fill="#DAF2FF"
            onClick={() => setOpen(false)}
          />
          <path
            d="M37.7583 13.411V14.087H35.2751V13.411H37.7583ZM35.513 9.14129V14.087H34.6603V9.14129H35.513ZM38.1795 12.2901V12.212C38.1795 11.947 38.2177 11.7013 38.295 11.4749C38.3718 11.2462 38.4828 11.048 38.6278 10.8804C38.775 10.7106 38.9537 10.5793 39.1645 10.4864C39.3774 10.3913 39.6174 10.3438 39.8845 10.3438C40.1541 10.3438 40.3941 10.3913 40.6045 10.4864C40.8174 10.5793 40.9976 10.7106 41.1447 10.8804C41.2918 11.048 41.4038 11.2462 41.481 11.4749C41.5579 11.7013 41.5965 11.947 41.5965 12.212V12.2901C41.5965 12.555 41.5579 12.8007 41.481 13.0272C41.4038 13.2536 41.2918 13.4518 41.1447 13.6216C40.9976 13.7892 40.8188 13.9205 40.608 14.0156C40.3976 14.1085 40.1586 14.1549 39.8915 14.1549C39.6219 14.1549 39.3805 14.1085 39.1677 14.0156C38.9572 13.9205 38.7784 13.7892 38.631 13.6216C38.4838 13.4518 38.3718 13.2536 38.295 13.0272C38.2177 12.8007 38.1795 12.555 38.1795 12.2901ZM38.9979 12.212V12.2901C38.9979 12.4554 39.015 12.6117 39.049 12.7588C39.0828 12.906 39.136 13.0351 39.2087 13.1461C39.281 13.257 39.3739 13.3442 39.487 13.4076C39.6003 13.471 39.735 13.5027 39.8915 13.5027C40.0431 13.5027 40.1743 13.471 40.2852 13.4076C40.3986 13.3442 40.4915 13.257 40.5638 13.1461C40.6362 13.0351 40.6894 12.906 40.7235 12.7588C40.7597 12.6117 40.7777 12.4554 40.7777 12.2901V12.212C40.7777 12.0489 40.7597 11.8949 40.7235 11.75C40.6894 11.6028 40.6351 11.4726 40.5603 11.3594C40.488 11.2462 40.3951 11.1578 40.2821 11.0944C40.1711 11.0288 40.0386 10.9959 39.8845 10.9959C39.7304 10.9959 39.5969 11.0288 39.4838 11.0944C39.3729 11.1578 39.281 11.2462 39.2087 11.3594C39.136 11.4726 39.0828 11.6028 39.049 11.75C39.015 11.8949 38.9979 12.0489 38.9979 12.212ZM44.3548 13.3499V11.5972C44.3548 11.4658 44.3308 11.3526 44.2831 11.2575C44.2358 11.1624 44.1631 11.0888 44.0657 11.0367C43.9708 10.9846 43.8508 10.9586 43.7057 10.9586C43.5722 10.9586 43.4567 10.9812 43.3593 11.0265C43.2619 11.0718 43.1861 11.1329 43.1318 11.2099C43.0776 11.2869 43.0504 11.3741 43.0504 11.4715H42.2351C42.2351 11.3265 42.2703 11.1862 42.3405 11.0503C42.4104 10.9144 42.5123 10.7933 42.6459 10.6868C42.7798 10.5804 42.9395 10.4966 43.1249 10.4355C43.3106 10.3743 43.519 10.3438 43.7499 10.3438C44.0264 10.3438 44.271 10.3902 44.4838 10.483C44.6988 10.5759 44.8675 10.7162 44.9899 10.9042C45.1144 11.0899 45.1767 11.3231 45.1767 11.6039V13.2378C45.1767 13.4054 45.1878 13.5559 45.2104 13.6895C45.2355 13.8209 45.2706 13.9352 45.3158 14.0326V14.087H44.4769C44.4383 13.9986 44.408 13.8865 44.385 13.7507C44.3649 13.6126 44.3548 13.479 44.3548 13.3499ZM44.4734 11.8519L44.4803 12.358H43.8925C43.7409 12.358 43.6073 12.3727 43.4918 12.4022C43.3763 12.4294 43.28 12.4701 43.2031 12.5245C43.1263 12.5788 43.0685 12.6445 43.0299 12.7215C42.9913 12.7985 42.9722 12.8856 42.9722 12.983C42.9722 13.0804 42.9948 13.1698 43.04 13.2514C43.0852 13.3306 43.151 13.3929 43.2372 13.4382C43.3256 13.4835 43.432 13.5061 43.5565 13.5061C43.7238 13.5061 43.8699 13.4721 43.9944 13.4042C44.1214 13.334 44.2209 13.2491 44.2936 13.1495C44.3659 13.0476 44.4045 12.9513 44.409 12.8607L44.6741 13.2242C44.6466 13.317 44.6003 13.4167 44.5346 13.5231C44.4689 13.6295 44.383 13.7314 44.2765 13.8288C44.1722 13.9239 44.0466 14.0021 43.8995 14.0632C43.7544 14.1243 43.5868 14.1549 43.3969 14.1549C43.1569 14.1549 42.9426 14.1073 42.7548 14.0122C42.567 13.9149 42.4195 13.7847 42.313 13.6216C42.2066 13.4563 42.1534 13.2695 42.1534 13.0612C42.1534 12.8664 42.1899 12.6943 42.2623 12.5448C42.337 12.3931 42.4456 12.2663 42.5882 12.1644C42.7332 12.0625 42.9099 11.9855 43.1183 11.9334C43.3266 11.8791 43.5642 11.8519 43.8316 11.8519H44.4734ZM43.04 14.875C43.04 14.7573 43.0807 14.6588 43.1624 14.5795C43.2463 14.5002 43.3603 14.4606 43.5054 14.4606C43.6504 14.4606 43.7649 14.5002 43.8483 14.5795C43.9322 14.6588 43.9743 14.7573 43.9743 14.875C43.9743 14.9905 43.9322 15.0879 43.8483 15.1671C43.7649 15.2464 43.6504 15.286 43.5054 15.286C43.3603 15.286 43.2463 15.2464 43.1624 15.1671C43.0807 15.0879 43.04 14.9905 43.04 14.875ZM46.9089 10.4117V14.087H46.087V10.4117H46.9089ZM46.0327 9.44703C46.0327 9.32247 46.0734 9.21945 46.1548 9.13792C46.2386 9.05413 46.3541 9.01225 46.5012 9.01225C46.6463 9.01225 46.7607 9.05413 46.8445 9.13792C46.9283 9.21945 46.9701 9.32247 46.9701 9.44703C46.9701 9.56929 46.9283 9.67121 46.8445 9.75274C46.7607 9.83423 46.6463 9.875 46.5012 9.875C46.3541 9.875 46.2386 9.83423 46.1548 9.75274C46.0734 9.67121 46.0327 9.56929 46.0327 9.44703ZM50.1631 10.4117L50.8626 11.6311L51.576 10.4117H52.4762L51.3621 12.2153L52.5203 14.087H51.6202L50.873 12.8166L50.1256 14.087H49.2223L50.377 12.2153L49.2664 10.4117H50.1631ZM54.5889 14.1549C54.3172 14.1549 54.0717 14.1108 53.8518 14.0224C53.6344 13.9318 53.4487 13.8062 53.295 13.6454C53.143 13.4846 53.0264 13.2955 52.945 13.0781C52.8633 12.8607 52.8226 12.6264 52.8226 12.375V12.2391C52.8226 11.9516 52.8647 11.6911 52.9485 11.4579C53.032 11.2246 53.1489 11.0254 53.2981 10.8601C53.4476 10.6925 53.6243 10.5645 53.8282 10.4762C54.032 10.3879 54.2529 10.3438 54.4904 10.3438C54.753 10.3438 54.983 10.3879 55.1802 10.4762C55.377 10.5645 55.5402 10.6891 55.6692 10.8499C55.8003 11.0084 55.8977 11.1975 55.9614 11.4171C56.0268 11.6368 56.0598 11.8791 56.0598 12.144V12.4939H53.2202V11.9063H55.2515V11.8417C55.247 11.6945 55.2174 11.5564 55.1631 11.4273C55.111 11.2982 55.0306 11.1941 54.9217 11.1148C54.8132 11.0356 54.6682 10.9959 54.4869 10.9959C54.3513 10.9959 54.2299 11.0254 54.1235 11.0842C54.0195 11.1408 53.9322 11.2235 53.8623 11.3322C53.792 11.4409 53.7374 11.5722 53.6991 11.7262C53.6629 11.878 53.6449 12.0489 53.6449 12.2391V12.375C53.6449 12.5358 53.6661 12.6853 53.7092 12.8234C53.7544 12.9592 53.8202 13.0781 53.9061 13.18C53.9923 13.2819 54.0963 13.3623 54.2188 13.4212C54.3409 13.4778 54.4803 13.5061 54.6365 13.5061C54.8334 13.5061 55.009 13.4665 55.1631 13.3872C55.3169 13.308 55.4508 13.1959 55.5638 13.051L55.9951 13.4688C55.9158 13.5842 55.8129 13.6952 55.6863 13.8016C55.5593 13.9058 55.4042 13.9907 55.2209 14.0564C55.0396 14.1221 54.8289 14.1549 54.5889 14.1549Z"
            fill="#55595D"
          />
          <path
            d="M88.6957 0.521744H177.423C178.471 0.521744 179.429 1.11016 179.904 2.04421L190.261 22.4348H99.8261L88.6957 0.521744Z"
            fill="white"
          />
          <path
            d="M122.979 13.411V14.087H120.496V13.411H122.979ZM120.734 9.14129V14.087H119.881V9.14129H120.734ZM123.4 12.2901V12.212C123.4 11.947 123.439 11.7013 123.515 11.4749C123.593 11.2462 123.704 11.048 123.848 10.8804C123.996 10.7106 124.175 10.5793 124.385 10.4864C124.598 10.3913 124.838 10.3438 125.105 10.3438C125.375 10.3438 125.615 10.3913 125.825 10.4864C126.038 10.5793 126.218 10.7106 126.366 10.8804C126.513 11.048 126.625 11.2462 126.702 11.4749C126.779 11.7013 126.817 11.947 126.817 12.212V12.2901C126.817 12.555 126.779 12.8007 126.702 13.0272C126.625 13.2536 126.513 13.4518 126.366 13.6216C126.218 13.7892 126.039 13.9205 125.829 14.0156C125.618 14.1085 125.379 14.1549 125.112 14.1549C124.843 14.1549 124.601 14.1085 124.389 14.0156C124.178 13.9205 123.999 13.7892 123.852 13.6216C123.705 13.4518 123.593 13.2536 123.515 13.0272C123.439 12.8007 123.4 12.555 123.4 12.2901ZM124.219 12.212V12.2901C124.219 12.4554 124.236 12.6117 124.27 12.7588C124.304 12.906 124.357 13.0351 124.429 13.1461C124.502 13.257 124.595 13.3442 124.708 13.4076C124.821 13.471 124.956 13.5027 125.112 13.5027C125.264 13.5027 125.395 13.471 125.506 13.4076C125.619 13.3442 125.712 13.257 125.785 13.1461C125.857 13.0351 125.91 12.906 125.944 12.7588C125.981 12.6117 125.999 12.4554 125.999 12.2901V12.212C125.999 12.0489 125.981 11.8949 125.944 11.75C125.91 11.6028 125.856 11.4726 125.781 11.3594C125.709 11.2462 125.616 11.1578 125.503 11.0944C125.392 11.0288 125.259 10.9959 125.105 10.9959C124.951 10.9959 124.818 11.0288 124.704 11.0944C124.593 11.1578 124.502 11.2462 124.429 11.3594C124.357 11.4726 124.304 11.6028 124.27 11.75C124.236 11.8949 124.219 12.0489 124.219 12.212ZM129.575 13.3499V11.5972C129.575 11.4658 129.552 11.3526 129.504 11.2575C129.457 11.1624 129.384 11.0888 129.287 11.0367C129.192 10.9846 129.072 10.9586 128.927 10.9586C128.793 10.9586 128.678 10.9812 128.58 11.0265C128.483 11.0718 128.407 11.1329 128.353 11.2099C128.298 11.2869 128.271 11.3741 128.271 11.4715H127.456C127.456 11.3265 127.491 11.1862 127.561 11.0503C127.631 10.9144 127.733 10.7933 127.867 10.6868C128 10.5804 128.16 10.4966 128.346 10.4355C128.531 10.3743 128.74 10.3438 128.971 10.3438C129.247 10.3438 129.491 10.3902 129.704 10.483C129.92 10.5759 130.088 10.7162 130.21 10.9042C130.335 11.0899 130.398 11.3231 130.398 11.6039V13.2378C130.398 13.4054 130.409 13.5559 130.431 13.6895C130.456 13.8209 130.491 13.9352 130.537 14.0326V14.087H129.698C129.659 13.9986 129.629 13.8865 129.606 13.7507C129.586 13.6126 129.575 13.479 129.575 13.3499ZM129.694 11.8519L129.701 12.358H129.113C128.962 12.358 128.828 12.3727 128.713 12.4022C128.597 12.4294 128.501 12.4701 128.424 12.5245C128.347 12.5788 128.289 12.6445 128.251 12.7215C128.212 12.7985 128.193 12.8856 128.193 12.983C128.193 13.0804 128.216 13.1698 128.261 13.2514C128.306 13.3306 128.372 13.3929 128.458 13.4382C128.546 13.4835 128.653 13.5061 128.777 13.5061C128.945 13.5061 129.091 13.4721 129.215 13.4042C129.342 13.334 129.442 13.2491 129.514 13.1495C129.587 13.0476 129.625 12.9513 129.63 12.8607L129.895 13.2242C129.867 13.317 129.821 13.4167 129.755 13.5231C129.69 13.6295 129.604 13.7314 129.497 13.8288C129.393 13.9239 129.267 14.0021 129.12 14.0632C128.975 14.1243 128.808 14.1549 128.617 14.1549C128.377 14.1549 128.163 14.1073 127.976 14.0122C127.787 13.9149 127.64 13.7847 127.534 13.6216C127.427 13.4563 127.374 13.2695 127.374 13.0612C127.374 12.8664 127.41 12.6943 127.483 12.5448C127.558 12.3931 127.666 12.2663 127.809 12.1644C127.954 12.0625 128.131 11.9855 128.339 11.9334C128.547 11.8791 128.785 11.8519 129.052 11.8519H129.694ZM128.261 14.875C128.261 14.7573 128.302 14.6588 128.383 14.5795C128.467 14.5002 128.581 14.4606 128.726 14.4606C128.871 14.4606 128.985 14.5002 129.069 14.5795C129.153 14.6588 129.195 14.7573 129.195 14.875C129.195 14.9905 129.153 15.0879 129.069 15.1671C128.985 15.2464 128.871 15.286 128.726 15.286C128.581 15.286 128.467 15.2464 128.383 15.1671C128.302 15.0879 128.261 14.9905 128.261 14.875ZM132.13 10.4117V14.087H131.308V10.4117H132.13ZM131.254 9.44703C131.254 9.32247 131.294 9.21945 131.376 9.13792C131.459 9.05413 131.575 9.01225 131.722 9.01225C131.867 9.01225 131.982 9.05413 132.065 9.13792C132.149 9.21945 132.191 9.32247 132.191 9.44703C132.191 9.56929 132.149 9.6712 132.065 9.75274C131.982 9.83423 131.867 9.875 131.722 9.875C131.575 9.875 131.459 9.83423 131.376 9.75274C131.294 9.6712 131.254 9.56929 131.254 9.44703ZM135.954 13.4382L136.855 10.4117H137.704L136.427 14.087H135.897L135.954 13.4382ZM135.265 10.4117L136.182 13.4518L136.226 14.087H135.696L134.413 10.4117H135.265ZM139.086 10.4117V14.087H138.264V10.4117H139.086ZM138.21 9.44703C138.21 9.32247 138.251 9.21945 138.332 9.13792C138.416 9.05413 138.531 9.01225 138.679 9.01225C138.824 9.01225 138.938 9.05413 139.022 9.13792C139.105 9.21945 139.147 9.32247 139.147 9.44703C139.147 9.56929 139.105 9.6712 139.022 9.75274C138.938 9.83423 138.824 9.875 138.679 9.875C138.531 9.875 138.416 9.83423 138.332 9.75274C138.251 9.6712 138.21 9.56929 138.21 9.44703ZM142.537 11.1182V15.5H141.719V10.4117H142.473L142.537 11.1182ZM144.932 12.2153V12.2867C144.932 12.5539 144.901 12.8018 144.837 13.0306C144.776 13.257 144.684 13.4552 144.562 13.625C144.442 13.7926 144.294 13.9228 144.117 14.0156C143.94 14.1085 143.736 14.1549 143.505 14.1549C143.277 14.1549 143.076 14.113 142.904 14.0292C142.734 13.9432 142.591 13.822 142.473 13.6658C142.355 13.5095 142.26 13.3261 142.187 13.1155C142.117 12.9026 142.067 12.6694 142.038 12.4158V12.1406C142.067 11.8712 142.117 11.6266 142.187 11.4069C142.26 11.1873 142.355 10.9982 142.473 10.8397C142.591 10.6812 142.734 10.5589 142.904 10.4728C143.074 10.3868 143.272 10.3438 143.499 10.3438C143.73 10.3438 143.935 10.389 144.113 10.4796C144.292 10.5679 144.443 10.6948 144.565 10.8601C144.688 11.0231 144.779 11.2201 144.84 11.4511C144.902 11.6798 144.932 11.9345 144.932 12.2153ZM144.113 12.2867V12.2153C144.113 12.0455 144.098 11.8881 144.066 11.7432C144.034 11.596 143.984 11.4669 143.917 11.356C143.848 11.245 143.761 11.159 143.655 11.0978C143.551 11.0344 143.425 11.0027 143.278 11.0027C143.133 11.0027 143.008 11.0276 142.904 11.0775C142.8 11.125 142.713 11.1918 142.643 11.2778C142.573 11.3639 142.518 11.4647 142.48 11.5802C142.441 11.6934 142.414 11.8168 142.398 11.9504V12.6094C142.425 12.7724 142.472 12.9219 142.537 13.0577C142.603 13.1936 142.696 13.3023 142.816 13.3838C142.938 13.4631 143.094 13.5027 143.285 13.5027C143.432 13.5027 143.558 13.471 143.662 13.4076C143.766 13.3442 143.851 13.257 143.917 13.1461C143.984 13.0328 144.034 12.9026 144.066 12.7554C144.098 12.6082 144.113 12.452 144.113 12.2867ZM146.437 8.86957V14.087H145.622V8.86957H146.437ZM146.294 12.1135L146.029 12.1101C146.031 11.8564 146.066 11.6221 146.135 11.4069C146.205 11.1918 146.302 11.005 146.427 10.8465C146.553 10.6857 146.705 10.5623 146.882 10.4762C147.058 10.3879 147.254 10.3438 147.47 10.3438C147.65 10.3438 147.814 10.3687 147.959 10.4185C148.106 10.4683 148.233 10.5487 148.339 10.6597C148.446 10.7684 148.526 10.911 148.58 11.0877C148.637 11.262 148.665 11.4749 148.665 11.7262V14.087H147.843V11.7194C147.843 11.5428 147.817 11.4024 147.765 11.2982C147.715 11.1941 147.641 11.1193 147.544 11.0741C147.447 11.0265 147.328 11.0027 147.187 11.0027C147.04 11.0027 146.91 11.0321 146.797 11.091C146.686 11.1499 146.593 11.2303 146.518 11.3322C146.443 11.4341 146.387 11.5519 146.349 11.6855C146.312 11.8191 146.294 11.9617 146.294 12.1135ZM151.566 13.3499V11.5972C151.566 11.4658 151.542 11.3526 151.495 11.2575C151.447 11.1624 151.375 11.0888 151.277 11.0367C151.182 10.9846 151.062 10.9586 150.917 10.9586C150.784 10.9586 150.668 10.9812 150.571 11.0265C150.473 11.0718 150.398 11.1329 150.343 11.2099C150.289 11.2869 150.262 11.3741 150.262 11.4715H149.446C149.446 11.3265 149.481 11.1862 149.552 11.0503C149.622 10.9144 149.724 10.7933 149.857 10.6868C149.991 10.5804 150.151 10.4966 150.336 10.4355C150.522 10.3743 150.73 10.3438 150.961 10.3438C151.238 10.3438 151.482 10.3902 151.695 10.483C151.91 10.5759 152.079 10.7162 152.201 10.9042C152.326 11.0899 152.388 11.3231 152.388 11.6039V13.2378C152.388 13.4054 152.399 13.5559 152.422 13.6895C152.447 13.8209 152.482 13.9352 152.527 14.0326V14.087H151.688C151.65 13.9986 151.619 13.8865 151.597 13.7507C151.576 13.6126 151.566 13.479 151.566 13.3499ZM151.685 11.8519L151.691 12.358H151.104C150.952 12.358 150.819 12.3727 150.703 12.4022C150.587 12.4294 150.491 12.4701 150.414 12.5245C150.337 12.5788 150.28 12.6445 150.241 12.7215C150.203 12.7985 150.183 12.8856 150.183 12.983C150.183 13.0804 150.206 13.1698 150.251 13.2514C150.297 13.3306 150.362 13.3929 150.448 13.4382C150.537 13.4835 150.643 13.5061 150.768 13.5061C150.935 13.5061 151.081 13.4721 151.206 13.4042C151.333 13.334 151.432 13.2491 151.505 13.1495C151.577 13.0476 151.616 12.9513 151.62 12.8607L151.885 13.2242C151.858 13.317 151.811 13.4167 151.746 13.5231C151.68 13.6295 151.594 13.7314 151.488 13.8288C151.384 13.9239 151.258 14.0021 151.111 14.0632C150.966 14.1243 150.798 14.1549 150.608 14.1549C150.368 14.1549 150.154 14.1073 149.966 14.0122C149.778 13.9149 149.631 13.7847 149.525 13.6216C149.418 13.4563 149.365 13.2695 149.365 13.0612C149.365 12.8664 149.401 12.6943 149.473 12.5448C149.548 12.3931 149.657 12.2663 149.8 12.1644C149.944 12.0625 150.121 11.9855 150.329 11.9334C150.538 11.8791 150.776 11.8519 151.043 11.8519H151.685ZM150.251 14.875C150.251 14.7573 150.292 14.6588 150.374 14.5795C150.457 14.5002 150.572 14.4606 150.717 14.4606C150.862 14.4606 150.976 14.5002 151.06 14.5795C151.144 14.6588 151.185 14.7573 151.185 14.875C151.185 14.9905 151.144 15.0879 151.06 15.1671C150.976 15.2464 150.862 15.286 150.717 15.286C150.572 15.286 150.457 15.2464 150.374 15.1671C150.292 15.0879 150.251 14.9905 150.251 14.875ZM154.063 11.159V14.087H153.244V10.4117H154.015L154.063 11.159ZM153.93 12.1135L153.651 12.1101C153.651 11.8564 153.683 11.6221 153.746 11.4069C153.81 11.1918 153.903 11.005 154.025 10.8465C154.147 10.6857 154.299 10.5623 154.48 10.4762C154.664 10.3879 154.875 10.3438 155.115 10.3438C155.283 10.3438 155.436 10.3687 155.574 10.4185C155.714 10.466 155.835 10.5419 155.937 10.6461C156.042 10.7502 156.121 10.8838 156.175 11.0469C156.232 11.2099 156.26 11.4069 156.26 11.6379V14.087H155.442V11.7093C155.442 11.5303 155.414 11.39 155.36 11.288C155.308 11.1862 155.232 11.1137 155.133 11.0706C155.035 11.0254 154.919 11.0027 154.783 11.0027C154.629 11.0027 154.497 11.0321 154.389 11.091C154.282 11.1499 154.195 11.2303 154.127 11.3322C154.059 11.4341 154.009 11.5519 153.978 11.6855C153.946 11.8191 153.93 11.9617 153.93 12.1135ZM156.209 11.8961L155.825 11.981C155.825 11.7591 155.856 11.5496 155.917 11.3526C155.981 11.1533 156.072 10.979 156.192 10.8295C156.314 10.6778 156.465 10.5589 156.644 10.4728C156.823 10.3868 157.028 10.3438 157.259 10.3438C157.447 10.3438 157.614 10.3698 157.761 10.4219C157.911 10.4717 158.038 10.551 158.142 10.6597C158.246 10.7684 158.326 10.9099 158.38 11.0842C158.434 11.2564 158.461 11.4647 158.461 11.7093V14.087H157.639V11.7058C157.639 11.5201 157.612 11.3764 157.558 11.2745C157.506 11.1726 157.431 11.1024 157.334 11.0639C157.236 11.0231 157.12 11.0027 156.984 11.0027C156.857 11.0027 156.745 11.0265 156.647 11.0741C156.552 11.1193 156.472 11.1839 156.406 11.2677C156.341 11.3492 156.291 11.4432 156.257 11.5496C156.225 11.656 156.209 11.7715 156.209 11.8961Z"
            fill="#1C2A53"
          />
        </svg>
      ) : (
        <svg
          width="191"
          height="23"
          viewBox="0 0 191 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M89.7826 0.608698H178.162C179.079 0.608698 179.918 1.12355 180.333 1.94084L190.433 21.8261H89.7826V0.608698Z"
            fill="#DAF2FF"
            className="cursor-pointer"
            onClick={() => setOpen(true)}
          />
          <path
            d="M123.718 13.1501V13.8261H121.235V13.1501H123.718ZM121.473 8.88042V13.8261H120.62V8.88042H121.473ZM124.139 12.0292V11.9511C124.139 11.6862 124.178 11.4405 124.255 11.214C124.332 10.9853 124.443 10.7871 124.587 10.6196C124.735 10.4497 124.914 10.3184 125.124 10.2255C125.337 10.1304 125.577 10.0829 125.845 10.0829C126.114 10.0829 126.354 10.1304 126.565 10.2255C126.777 10.3184 126.958 10.4497 127.105 10.6196C127.252 10.7871 127.364 10.9853 127.441 11.214C127.518 11.4405 127.557 11.6862 127.557 11.9511V12.0292C127.557 12.2942 127.518 12.5399 127.441 12.7663C127.364 12.9928 127.252 13.1909 127.105 13.3607C126.958 13.5283 126.778 13.6597 126.568 13.7548C126.357 13.8476 126.118 13.894 125.851 13.894C125.582 13.894 125.341 13.8476 125.128 13.7548C124.917 13.6597 124.738 13.5283 124.591 13.3607C124.444 13.1909 124.332 12.9928 124.255 12.7663C124.178 12.5399 124.139 12.2942 124.139 12.0292ZM124.958 11.9511V12.0292C124.958 12.1945 124.975 12.3508 125.009 12.498C125.043 12.6452 125.096 12.7742 125.168 12.8852C125.241 12.9961 125.334 13.0833 125.447 13.1468C125.56 13.2102 125.695 13.2418 125.851 13.2418C126.003 13.2418 126.134 13.2102 126.245 13.1468C126.359 13.0833 126.451 12.9961 126.524 12.8852C126.596 12.7742 126.649 12.6452 126.683 12.498C126.72 12.3508 126.738 12.1945 126.738 12.0292V11.9511C126.738 11.788 126.72 11.6341 126.683 11.4891C126.649 11.342 126.595 11.2117 126.52 11.0985C126.448 10.9853 126.355 10.897 126.242 10.8336C126.131 10.7679 125.998 10.7351 125.845 10.7351C125.69 10.7351 125.557 10.7679 125.443 10.8336C125.333 10.897 125.241 10.9853 125.168 11.0985C125.096 11.2117 125.043 11.342 125.009 11.4891C124.975 11.6341 124.958 11.788 124.958 11.9511ZM130.314 13.089V11.3363C130.314 11.2049 130.291 11.0917 130.243 10.9966C130.196 10.9015 130.123 10.8279 130.026 10.7758C129.931 10.7237 129.811 10.6977 129.666 10.6977C129.532 10.6977 129.417 10.7204 129.319 10.7656C129.222 10.8109 129.146 10.8721 129.092 10.949C129.037 11.0261 129.01 11.1132 129.01 11.2106H128.195C128.195 11.0657 128.23 10.9253 128.3 10.7894C128.37 10.6535 128.472 10.5324 128.606 10.426C128.739 10.3195 128.899 10.2357 129.085 10.1746C129.271 10.1135 129.479 10.0829 129.71 10.0829C129.986 10.0829 130.231 10.1293 130.443 10.2222C130.659 10.315 130.827 10.4554 130.95 10.6433C131.074 10.829 131.137 11.0623 131.137 11.3431V12.9769C131.137 13.1445 131.148 13.2951 131.17 13.4287C131.195 13.56 131.231 13.6744 131.276 13.7718V13.8261H130.437C130.398 13.7378 130.368 13.6257 130.345 13.4898C130.325 13.3517 130.314 13.2181 130.314 13.089ZM130.433 11.591L130.44 12.0972H129.853C129.701 12.0972 129.567 12.1119 129.452 12.1413C129.336 12.1685 129.24 12.2093 129.163 12.2636C129.086 12.318 129.028 12.3836 128.99 12.4606C128.951 12.5376 128.932 12.6248 128.932 12.7222C128.932 12.8195 128.955 12.909 129 12.9905C129.045 13.0697 129.111 13.132 129.197 13.1773C129.285 13.2226 129.392 13.2453 129.516 13.2453C129.684 13.2453 129.83 13.2113 129.954 13.1433C130.081 13.0732 130.181 12.9882 130.254 12.8886C130.326 12.7867 130.365 12.6904 130.369 12.5999L130.634 12.9633C130.607 13.0562 130.56 13.1558 130.495 13.2622C130.429 13.3687 130.343 13.4706 130.237 13.5679C130.132 13.663 130.007 13.7412 129.859 13.8023C129.714 13.8634 129.547 13.894 129.357 13.894C129.117 13.894 128.903 13.8465 128.715 13.7514C128.527 13.654 128.379 13.5238 128.273 13.3607C128.167 13.1954 128.113 13.0086 128.113 12.8003C128.113 12.6055 128.15 12.4334 128.222 12.284C128.297 12.1322 128.406 12.0054 128.548 11.9036C128.693 11.8016 128.87 11.7246 129.078 11.6726C129.287 11.6182 129.524 11.591 129.791 11.591H130.433ZM129 14.6141C129 14.4964 129.041 14.3979 129.122 14.3186C129.206 14.2394 129.32 14.1997 129.465 14.1997C129.61 14.1997 129.725 14.2394 129.808 14.3186C129.892 14.3979 129.934 14.4964 129.934 14.6141C129.934 14.7296 129.892 14.827 129.808 14.9063C129.725 14.9855 129.61 15.0252 129.465 15.0252C129.32 15.0252 129.206 14.9855 129.122 14.9063C129.041 14.827 129 14.7296 129 14.6141ZM132.869 10.1508V13.8261H132.047V10.1508H132.869ZM131.993 9.18616C131.993 9.0616 132.033 8.95858 132.115 8.87705C132.199 8.79325 132.314 8.75138 132.461 8.75138C132.606 8.75138 132.721 8.79325 132.805 8.87705C132.888 8.95858 132.93 9.0616 132.93 9.18616C132.93 9.30842 132.888 9.41033 132.805 9.49186C132.721 9.57336 132.606 9.61412 132.461 9.61412C132.314 9.61412 132.199 9.57336 132.115 9.49186C132.033 9.41033 131.993 9.30842 131.993 9.18616ZM136.694 13.1773L137.594 10.1508H138.443L137.166 13.8261H136.636L136.694 13.1773ZM136.004 10.1508L136.921 13.1909L136.965 13.8261H136.435L135.152 10.1508H136.004ZM139.825 10.1508V13.8261H139.003V10.1508H139.825ZM138.949 9.18616C138.949 9.0616 138.99 8.95858 139.071 8.87705C139.155 8.79325 139.271 8.75138 139.418 8.75138C139.563 8.75138 139.677 8.79325 139.761 8.87705C139.845 8.95858 139.887 9.0616 139.887 9.18616C139.887 9.30842 139.845 9.41033 139.761 9.49186C139.677 9.57336 139.563 9.61412 139.418 9.61412C139.271 9.61412 139.155 9.57336 139.071 9.49186C138.99 9.41033 138.949 9.30842 138.949 9.18616ZM143.277 10.8573V15.2391H142.458V10.1508H143.212L143.277 10.8573ZM145.671 11.9545V12.0258C145.671 12.293 145.64 12.541 145.576 12.7697C145.515 12.9961 145.423 13.1943 145.301 13.3641C145.181 13.5317 145.033 13.6619 144.856 13.7548C144.679 13.8476 144.475 13.894 144.245 13.894C144.016 13.894 143.815 13.8521 143.643 13.7684C143.473 13.6823 143.33 13.5612 143.212 13.4049C143.094 13.2486 142.999 13.0652 142.927 12.8546C142.856 12.6418 142.807 12.4085 142.777 12.1549V11.8798C142.807 11.6103 142.856 11.3657 142.927 11.1461C142.999 10.9264 143.094 10.7373 143.212 10.5788C143.33 10.4203 143.473 10.298 143.643 10.212C143.813 10.1259 144.011 10.0829 144.238 10.0829C144.469 10.0829 144.674 10.1282 144.853 10.2188C145.031 10.3071 145.182 10.4339 145.304 10.5992C145.427 10.7622 145.518 10.9592 145.579 11.1902C145.641 11.4189 145.671 11.6737 145.671 11.9545ZM144.853 12.0258V11.9545C144.853 11.7847 144.837 11.6273 144.805 11.4823C144.773 11.3351 144.723 11.2061 144.656 11.0951C144.587 10.9841 144.501 10.8981 144.394 10.8369C144.29 10.7736 144.164 10.7418 144.017 10.7418C143.872 10.7418 143.747 10.7667 143.643 10.8166C143.539 10.8641 143.452 10.9309 143.382 11.017C143.312 11.103 143.257 11.2038 143.219 11.3193C143.18 11.4325 143.153 11.5559 143.137 11.6895V12.3485C143.165 12.5116 143.211 12.661 143.277 12.7969C143.342 12.9327 143.435 13.0414 143.555 13.123C143.677 13.2022 143.833 13.2418 144.024 13.2418C144.171 13.2418 144.297 13.2102 144.401 13.1468C144.505 13.0833 144.59 12.9961 144.656 12.8852C144.723 12.772 144.773 12.6418 144.805 12.4946C144.837 12.3474 144.853 12.1911 144.853 12.0258ZM147.176 8.6087V13.8261H146.361V8.6087H147.176ZM147.033 11.8526L146.768 11.8492C146.77 11.5956 146.806 11.3612 146.874 11.1461C146.944 10.9309 147.041 10.7441 147.166 10.5856C147.293 10.4248 147.444 10.3014 147.621 10.2153C147.798 10.127 147.993 10.0829 148.209 10.0829C148.39 10.0829 148.553 10.1078 148.698 10.1576C148.845 10.2074 148.972 10.2878 149.078 10.3988C149.185 10.5075 149.265 10.6501 149.319 10.8268C149.376 11.0012 149.404 11.214 149.404 11.4654V13.8261H148.582V11.4586C148.582 11.2819 148.556 11.1415 148.504 11.0374C148.454 10.9332 148.381 10.8585 148.283 10.8132C148.186 10.7656 148.067 10.7418 147.927 10.7418C147.779 10.7418 147.649 10.7713 147.536 10.8302C147.425 10.889 147.332 10.9694 147.257 11.0713C147.183 11.1732 147.126 11.291 147.088 11.4246C147.051 11.5582 147.033 11.7009 147.033 11.8526ZM152.305 13.089V11.3363C152.305 11.2049 152.281 11.0917 152.234 10.9966C152.186 10.9015 152.114 10.8279 152.016 10.7758C151.921 10.7237 151.801 10.6977 151.656 10.6977C151.523 10.6977 151.407 10.7204 151.31 10.7656C151.213 10.8109 151.137 10.8721 151.082 10.949C151.028 11.0261 151.001 11.1132 151.001 11.2106H150.185C150.185 11.0657 150.221 10.9253 150.291 10.7894C150.361 10.6535 150.463 10.5324 150.597 10.426C150.73 10.3195 150.89 10.2357 151.075 10.1746C151.261 10.1135 151.47 10.0829 151.701 10.0829C151.977 10.0829 152.221 10.1293 152.434 10.2222C152.649 10.315 152.818 10.4554 152.94 10.6433C153.065 10.829 153.127 11.0623 153.127 11.3431V12.9769C153.127 13.1445 153.138 13.2951 153.161 13.4287C153.186 13.56 153.221 13.6744 153.266 13.7718V13.8261H152.427C152.389 13.7378 152.358 13.6257 152.336 13.4898C152.315 13.3517 152.305 13.2181 152.305 13.089ZM152.424 11.591L152.431 12.0972H151.843C151.691 12.0972 151.558 12.1119 151.442 12.1413C151.327 12.1685 151.231 12.2093 151.153 12.2636C151.077 12.318 151.019 12.3836 150.98 12.4606C150.942 12.5376 150.922 12.6248 150.922 12.7222C150.922 12.8195 150.945 12.909 150.991 12.9905C151.036 13.0697 151.102 13.132 151.187 13.1773C151.276 13.2226 151.382 13.2453 151.507 13.2453C151.674 13.2453 151.821 13.2113 151.945 13.1433C152.072 13.0732 152.171 12.9882 152.244 12.8886C152.317 12.7867 152.355 12.6904 152.359 12.5999L152.624 12.9633C152.597 13.0562 152.551 13.1558 152.485 13.2622C152.419 13.3687 152.333 13.4706 152.227 13.5679C152.123 13.663 151.997 13.7412 151.85 13.8023C151.705 13.8634 151.537 13.894 151.347 13.894C151.107 13.894 150.893 13.8465 150.705 13.7514C150.517 13.654 150.37 13.5238 150.264 13.3607C150.157 13.1954 150.104 13.0086 150.104 12.8003C150.104 12.6055 150.14 12.4334 150.213 12.284C150.287 12.1322 150.396 12.0054 150.539 11.9036C150.683 11.8016 150.86 11.7246 151.069 11.6726C151.277 11.6182 151.515 11.591 151.782 11.591H152.424ZM150.991 14.6141C150.991 14.4964 151.031 14.3979 151.113 14.3186C151.197 14.2394 151.311 14.1997 151.456 14.1997C151.601 14.1997 151.715 14.2394 151.799 14.3186C151.883 14.3979 151.925 14.4964 151.925 14.6141C151.925 14.7296 151.883 14.827 151.799 14.9063C151.715 14.9855 151.601 15.0252 151.456 15.0252C151.311 15.0252 151.197 14.9855 151.113 14.9063C151.031 14.827 150.991 14.7296 150.991 14.6141ZM154.802 10.8981V13.8261H153.983V10.1508H154.754L154.802 10.8981ZM154.669 11.8526L154.391 11.8492C154.391 11.5956 154.422 11.3612 154.486 11.1461C154.549 10.9309 154.642 10.7441 154.764 10.5856C154.887 10.4248 155.038 10.3014 155.219 10.2153C155.403 10.127 155.615 10.0829 155.855 10.0829C156.022 10.0829 156.175 10.1078 156.313 10.1576C156.454 10.2052 156.575 10.281 156.677 10.3852C156.781 10.4894 156.86 10.623 156.914 10.786C156.971 10.949 156.999 11.1461 156.999 11.377V13.8261H156.181V11.4484C156.181 11.2695 156.153 11.1291 156.099 11.0272C156.047 10.9253 155.971 10.8528 155.872 10.8098C155.774 10.7645 155.658 10.7418 155.522 10.7418C155.368 10.7418 155.237 10.7713 155.128 10.8302C155.021 10.889 154.934 10.9694 154.866 11.0713C154.798 11.1732 154.749 11.291 154.717 11.4246C154.685 11.5582 154.669 11.7009 154.669 11.8526ZM156.949 11.6352L156.565 11.7201C156.565 11.4982 156.595 11.2887 156.656 11.0917C156.72 10.8925 156.811 10.7181 156.931 10.5686C157.054 10.4169 157.204 10.298 157.383 10.212C157.562 10.1259 157.767 10.0829 157.998 10.0829C158.186 10.0829 158.353 10.1089 158.501 10.161C158.65 10.2108 158.777 10.2901 158.881 10.3988C158.985 10.5075 159.065 10.649 159.119 10.8234C159.173 10.9955 159.2 11.2038 159.2 11.4484V13.8261H158.378V11.445C158.378 11.2593 158.351 11.1155 158.297 11.0136C158.245 10.9117 158.17 10.8415 158.073 10.803C157.975 10.7622 157.859 10.7418 157.723 10.7418C157.596 10.7418 157.484 10.7656 157.386 10.8132C157.291 10.8585 157.211 10.923 157.145 11.0068C157.08 11.0883 157.03 11.1823 156.996 11.2887C156.964 11.3952 156.949 11.5106 156.949 11.6352Z"
            fill="#55595D"
          />
          <path
            d="M0.739136 0.260872H89.4664C90.5141 0.260872 91.4727 0.849289 91.9471 1.78334L102.304 22.1739H0.739136V0.260872Z"
            fill="white"
          />
          <path
            d="M38.4974 13.1501V13.8261H36.0143V13.1501H38.4974ZM36.2522 8.88042V13.8261H35.3993V8.88042H36.2522ZM38.9186 12.0292V11.9511C38.9186 11.6862 38.9569 11.4405 39.0341 11.214C39.111 10.9853 39.2219 10.7871 39.367 10.6196C39.5141 10.4497 39.6929 10.3184 39.9037 10.2255C40.1165 10.1304 40.3565 10.0829 40.6237 10.0829C40.8932 10.0829 41.1332 10.1304 41.3437 10.2255C41.5565 10.3184 41.7367 10.4497 41.8838 10.6196C42.031 10.7871 42.143 10.9853 42.2202 11.214C42.297 11.4405 42.3357 11.6862 42.3357 11.9511V12.0292C42.3357 12.2942 42.297 12.5399 42.2202 12.7663C42.143 12.9928 42.031 13.1909 41.8838 13.3607C41.7367 13.5283 41.5579 13.6597 41.3471 13.7548C41.1367 13.8476 40.8977 13.894 40.6306 13.894C40.3611 13.894 40.1197 13.8476 39.9068 13.7548C39.6964 13.6597 39.5176 13.5283 39.3701 13.3607C39.223 13.1909 39.111 12.9928 39.0341 12.7663C38.9569 12.5399 38.9186 12.2942 38.9186 12.0292ZM39.737 11.9511V12.0292C39.737 12.1945 39.7541 12.3508 39.7882 12.498C39.8219 12.6452 39.8751 12.7742 39.9478 12.8852C40.0202 12.9961 40.113 13.0833 40.2261 13.1468C40.3395 13.2102 40.4741 13.2418 40.6306 13.2418C40.7823 13.2418 40.9134 13.2102 41.0244 13.1468C41.1377 13.0833 41.2306 12.9961 41.303 12.8852C41.3753 12.7742 41.4285 12.6452 41.4626 12.498C41.4988 12.3508 41.5169 12.1945 41.5169 12.0292V11.9511C41.5169 11.788 41.4988 11.6341 41.4626 11.4891C41.4285 11.342 41.3743 11.2117 41.2995 11.0985C41.2271 10.9853 41.1343 10.897 41.0212 10.8336C40.9103 10.7679 40.7777 10.7351 40.6237 10.7351C40.4696 10.7351 40.336 10.7679 40.223 10.8336C40.112 10.897 40.0202 10.9853 39.9478 11.0985C39.8751 11.2117 39.8219 11.342 39.7882 11.4891C39.7541 11.6341 39.737 11.788 39.737 11.9511ZM45.0939 13.089V11.3363C45.0939 11.2049 45.0699 11.0917 45.0223 10.9966C44.975 10.9015 44.9023 10.8279 44.8049 10.7758C44.7099 10.7237 44.5899 10.6977 44.4449 10.6977C44.3113 10.6977 44.1958 10.7204 44.0984 10.7656C44.0011 10.8109 43.9252 10.8721 43.871 10.949C43.8167 11.0261 43.7896 11.1132 43.7896 11.2106H42.9743C42.9743 11.0657 43.0094 10.9253 43.0797 10.7894C43.1496 10.6535 43.2515 10.5324 43.385 10.426C43.519 10.3195 43.6786 10.2357 43.864 10.1746C44.0497 10.1135 44.2581 10.0829 44.4891 10.0829C44.7656 10.0829 45.0101 10.1293 45.223 10.2222C45.4379 10.315 45.6066 10.4554 45.729 10.6433C45.8536 10.829 45.9158 11.0623 45.9158 11.3431V12.9769C45.9158 13.1445 45.927 13.2951 45.9496 13.4287C45.9746 13.56 46.0097 13.6744 46.055 13.7718V13.8261H45.216C45.1774 13.7378 45.1471 13.6257 45.1242 13.4898C45.104 13.3517 45.0939 13.2181 45.0939 13.089ZM45.2125 11.591L45.2195 12.0972H44.6317C44.48 12.0972 44.3464 12.1119 44.231 12.1413C44.1155 12.1685 44.0191 12.2093 43.9423 12.2636C43.8654 12.318 43.8077 12.3836 43.7691 12.4606C43.7304 12.5376 43.7113 12.6248 43.7113 12.7222C43.7113 12.8195 43.7339 12.909 43.7791 12.9905C43.8244 13.0697 43.8901 13.132 43.9764 13.1773C44.0647 13.2226 44.1711 13.2453 44.2957 13.2453C44.463 13.2453 44.609 13.2113 44.7336 13.1433C44.8605 13.0732 44.96 12.9882 45.0327 12.8886C45.105 12.7867 45.1437 12.6904 45.1482 12.5999L45.4132 12.9633C45.3857 13.0562 45.3395 13.1558 45.2737 13.2622C45.208 13.3687 45.1221 13.4706 45.0157 13.5679C44.9113 13.663 44.7857 13.7412 44.6386 13.8023C44.4936 13.8634 44.3259 13.894 44.136 13.894C43.896 13.894 43.6817 13.8465 43.4939 13.7514C43.3061 13.654 43.1586 13.5238 43.0522 13.3607C42.9457 13.1954 42.8925 13.0086 42.8925 12.8003C42.8925 12.6055 42.929 12.4334 43.0014 12.284C43.0762 12.1322 43.1847 12.0054 43.3273 11.9036C43.4724 11.8016 43.649 11.7246 43.8574 11.6726C44.0657 11.6182 44.3033 11.591 44.5708 11.591H45.2125ZM43.7791 14.6141C43.7791 14.4964 43.8198 14.3979 43.9016 14.3186C43.9854 14.2394 44.0995 14.1997 44.2445 14.1997C44.3896 14.1997 44.504 14.2394 44.5875 14.3186C44.6713 14.3979 44.7134 14.4964 44.7134 14.6141C44.7134 14.7296 44.6713 14.827 44.5875 14.9063C44.504 14.9855 44.3896 15.0252 44.2445 15.0252C44.0995 15.0252 43.9854 14.9855 43.9016 14.9063C43.8198 14.827 43.7791 14.7296 43.7791 14.6141ZM47.648 10.1508V13.8261H46.8261V10.1508H47.648ZM46.7718 9.18616C46.7718 9.0616 46.8125 8.95858 46.8939 8.87705C46.9777 8.79326 47.0932 8.75138 47.2404 8.75138C47.3854 8.75138 47.4998 8.79326 47.5837 8.87705C47.6675 8.95858 47.7092 9.0616 47.7092 9.18616C47.7092 9.30842 47.6675 9.41033 47.5837 9.49186C47.4998 9.57336 47.3854 9.61412 47.2404 9.61412C47.0932 9.61412 46.9777 9.57336 46.8939 9.49186C46.8125 9.41033 46.7718 9.30842 46.7718 9.18616ZM50.9023 10.1508L51.6017 11.3703L52.3151 10.1508H53.2153L52.1012 11.9545L53.2595 13.8261H52.3593L51.6122 12.5557L50.8647 13.8261H49.9614L51.1162 11.9545L50.0056 10.1508H50.9023ZM55.328 13.894C55.0564 13.894 54.8108 13.8499 54.591 13.7616C54.3736 13.671 54.1878 13.5453 54.0341 13.3845C53.8821 13.2237 53.7656 13.0346 53.6842 12.8173C53.6024 12.5999 53.5617 12.3655 53.5617 12.1141V11.9783C53.5617 11.6907 53.6038 11.4303 53.6877 11.197C53.7711 10.9638 53.888 10.7645 54.0372 10.5992C54.1868 10.4316 54.3635 10.3037 54.5673 10.2153C54.7711 10.127 54.992 10.0829 55.2296 10.0829C55.4922 10.0829 55.7221 10.127 55.9193 10.2153C56.1162 10.3037 56.2793 10.4282 56.4084 10.589C56.5395 10.7475 56.6369 10.9366 56.7005 11.1562C56.7659 11.3759 56.799 11.6182 56.799 11.8832V12.233H53.9593V11.6454H55.9906V11.5808C55.9861 11.4336 55.9565 11.2955 55.9023 11.1664C55.8501 11.0374 55.7697 10.9332 55.6609 10.854C55.5524 10.7747 55.4073 10.7351 55.2261 10.7351C55.0904 10.7351 54.969 10.7645 54.8626 10.8234C54.7586 10.88 54.6713 10.9626 54.6014 11.0713C54.5311 11.18 54.4765 11.3114 54.4383 11.4654C54.4021 11.6171 54.384 11.788 54.384 11.9783V12.1141C54.384 12.2749 54.4052 12.4244 54.4484 12.5625C54.4936 12.6984 54.5593 12.8173 54.6452 12.9192C54.7315 13.021 54.8355 13.1015 54.9579 13.1603C55.08 13.2169 55.2195 13.2453 55.3757 13.2453C55.5725 13.2453 55.7482 13.2056 55.9023 13.1264C56.056 13.0471 56.1899 12.935 56.303 12.7901L56.7343 13.2079C56.655 13.3234 56.552 13.4343 56.4254 13.5408C56.2984 13.6449 56.1433 13.7298 55.96 13.7955C55.7788 13.8612 55.568 13.894 55.328 13.894Z"
            fill="#1C2A53"
          />
        </svg>
      )}
    </div>
  );
}
