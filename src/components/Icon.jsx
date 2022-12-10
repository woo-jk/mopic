export const LikeIcon = () => {
  return (
    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 19L8.55 17.7C6.86667 16.1834 5.475 14.875 4.375 13.775C3.275 12.675 2.4 11.6874 1.75 10.812C1.1 9.93736 0.646 9.13336 0.388 8.40002C0.129333 7.66669 0 6.91669 0 6.15002C0 4.58336 0.525 3.27502 1.575 2.22502C2.625 1.17502 3.93333 0.650024 5.5 0.650024C6.36667 0.650024 7.19167 0.833358 7.975 1.20002C8.75833 1.56669 9.43333 2.08336 10 2.75002C10.5667 2.08336 11.2417 1.56669 12.025 1.20002C12.8083 0.833358 13.6333 0.650024 14.5 0.650024C16.0667 0.650024 17.375 1.17502 18.425 2.22502C19.475 3.27502 20 4.58336 20 6.15002C20 6.91669 19.871 7.66669 19.613 8.40002C19.3543 9.13336 18.9 9.93736 18.25 10.812C17.6 11.6874 16.725 12.675 15.625 13.775C14.525 14.875 13.1333 16.1834 11.45 17.7L10 19ZM10 16.3C11.6 14.8667 12.9167 13.6374 13.95 12.612C14.9833 11.5874 15.8 10.696 16.4 9.93802C17 9.17936 17.4167 8.50402 17.65 7.91202C17.8833 7.32069 18 6.73336 18 6.15002C18 5.15002 17.6667 4.31669 17 3.65002C16.3333 2.98336 15.5 2.65002 14.5 2.65002C13.7167 2.65002 12.9917 2.87069 12.325 3.31202C11.6583 3.75402 11.2 4.31669 10.95 5.00002H9.05C8.8 4.31669 8.34167 3.75402 7.675 3.31202C7.00833 2.87069 6.28333 2.65002 5.5 2.65002C4.5 2.65002 3.66667 2.98336 3 3.65002C2.33333 4.31669 2 5.15002 2 6.15002C2 6.73336 2.11667 7.32069 2.35 7.91202C2.58333 8.50402 3 9.17936 3.6 9.93802C4.2 10.696 5.01667 11.5874 6.05 12.612C7.08333 13.6374 8.4 14.8667 10 16.3Z"
        fill="black"
      />
    </svg>
  );
};

export const MenuIcon = () => {
  return (
    <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 12V10H18V12H0ZM0 7V5H18V7H0ZM0 2V0H18V2H0Z" fill="black" />
    </svg>
  );
};

export const LeftArrowIcon = ({ color }) => {
  return (
    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 12L0 6L6 0L7.4 1.4L2.8 6L7.4 10.6L6 12Z" fill={color || "white"} />
    </svg>
  );
};

export const RightArrowIcon = () => {
  return (
    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 -5.24537e-07L8 6L2 12L0.600001 10.6L5.2 6L0.600001 1.4L2 -5.24537e-07Z" fill="white" />
    </svg>
  );
};

export const ProfileIcon = () => {
  return (
    <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32.5" cy="32.5" r="32.5" fill="#EFEFEF" />
      <path
        d="M33 32.0274C31.4533 32.0274 30.1333 31.4823 29.04 30.3922C27.9467 29.3031 27.4 28.0103 27.4 26.5137C27.4 24.9909 27.9467 23.6912 29.04 22.6147C30.1333 21.5382 31.4533 21 33 21C34.5467 21 35.8667 21.5382 36.96 22.6147C38.0533 23.6912 38.6 24.9909 38.6 26.5137C38.6 28.0103 38.0533 29.3031 36.96 30.3922C35.8667 31.4823 34.5467 32.0274 33 32.0274ZM42.56 44H23.44C22.7467 44 22.1669 43.7705 21.7008 43.3116C21.2336 42.8516 21 42.2934 21 41.637V40.4949C21 39.7334 21.2133 39.0245 21.64 38.3682C22.0667 37.7118 22.64 37.1998 23.36 36.8322C24.9333 36.0708 26.5269 35.4995 28.1408 35.1182C29.7536 34.738 31.3733 34.5479 33 34.5479C34.6267 34.5479 36.2469 34.738 37.8608 35.1182C39.4736 35.4995 41.0667 36.0708 42.64 36.8322C43.36 37.1998 43.9333 37.7118 44.36 38.3682C44.7867 39.0245 45 39.7334 45 40.4949V41.637C45 42.2934 44.7664 42.8516 44.2992 43.3116C43.8331 43.7705 43.2533 44 42.56 44ZM23.4 41.637H42.6V40.4949C42.6 40.1798 42.5067 39.891 42.32 39.6284C42.1333 39.3659 41.88 39.1427 41.56 38.9589C40.1733 38.3025 38.7669 37.7968 37.3408 37.4419C35.9136 37.0879 34.4667 36.911 33 36.911C31.5333 36.911 30.0864 37.0879 28.6592 37.4419C27.2331 37.7968 25.8267 38.3025 24.44 38.9589C24.12 39.1427 23.8667 39.3659 23.68 39.6284C23.4933 39.891 23.4 40.1798 23.4 40.4949V41.637ZM33 29.6644C33.88 29.6644 34.6336 29.3556 35.2608 28.7381C35.8869 28.1216 36.2 27.3801 36.2 26.5137C36.2 25.6473 35.8869 24.9053 35.2608 24.2877C34.6336 23.6713 33.88 23.363 33 23.363C32.12 23.363 31.3669 23.6713 30.7408 24.2877C30.1136 24.9053 29.8 25.6473 29.8 26.5137C29.8 27.3801 30.1136 28.1216 30.7408 28.7381C31.3669 29.3556 32.12 29.6644 33 29.6644Z"
        fill="white"
      />
    </svg>
  );
};
export const KebabMenuIcon = () => {
  return (
    <svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2 16C1.45 16 0.979334 15.8043 0.588 15.413C0.196 15.021 0 14.55 0 14C0 13.45 0.196 12.979 0.588 12.587C0.979334 12.1957 1.45 12 2 12C2.55 12 3.021 12.1957 3.413 12.587C3.80433 12.979 4 13.45 4 14C4 14.55 3.80433 15.021 3.413 15.413C3.021 15.8043 2.55 16 2 16ZM2 10C1.45 10 0.979334 9.804 0.588 9.412C0.196 9.02067 0 8.55 0 8C0 7.45 0.196 6.979 0.588 6.587C0.979334 6.19567 1.45 6 2 6C2.55 6 3.021 6.19567 3.413 6.587C3.80433 6.979 4 7.45 4 8C4 8.55 3.80433 9.02067 3.413 9.412C3.021 9.804 2.55 10 2 10ZM2 4C1.45 4 0.979334 3.804 0.588 3.412C0.196 3.02067 0 2.55 0 2C0 1.45 0.196 0.979333 0.588 0.588C0.979334 0.196 1.45 0 2 0C2.55 0 3.021 0.196 3.413 0.588C3.80433 0.979333 4 1.45 4 2C4 2.55 3.80433 3.02067 3.413 3.412C3.021 3.804 2.55 4 2 4Z"
        fill="black"
      />
    </svg>
  );
};

export const KakaoTalkIcon = () => {
  return (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21.0003 0H3.99968C1.79072 0 0 1.79072 0 3.99968V21.0003C0 23.2093 1.79072 25 3.99968 25H21.0003C23.2093 25 25 23.2093 25 21.0003V3.99968C25 1.79072 23.2093 0 21.0003 0Z"
        fill="black"
      />
      <path
        d="M12.4997 4.54102C7.56511 4.54102 3.56543 7.72136 3.56543 11.6443C3.56543 14.0759 5.1018 16.2217 7.44517 17.5023L6.79957 20.9648C6.76782 21.1368 6.95744 21.2638 7.10385 21.1668L10.9412 18.6391C10.9412 18.6391 11.9678 18.7476 12.4988 18.7476C17.4333 18.7476 21.433 15.5673 21.433 11.6443C21.433 7.72136 17.4342 4.54102 12.4997 4.54102Z"
        fill="white"
      />
      <path
        d="M8.88191 9.66406H6.30747C6.06493 9.66406 5.86914 9.86162 5.86914 10.105C5.86914 10.3485 6.06493 10.5469 6.30747 10.5469H7.14445V13.6558C7.14445 13.7687 7.19031 13.8789 7.27057 13.9601C7.34907 14.0403 7.45931 14.0862 7.57132 14.0862H7.66481C7.77682 14.0862 7.88618 14.0403 7.96556 13.961C8.04581 13.8798 8.09168 13.7696 8.09168 13.6567V10.5478H8.88279C9.12533 10.5478 9.32113 10.3502 9.32113 10.1059C9.32113 9.86162 9.12533 9.66494 8.88279 9.66494L8.88191 9.66406Z"
        fill="black"
      />
      <path
        d="M14.9073 13.2555H13.7105V10.0805C13.7105 9.81588 13.4971 9.60156 13.2351 9.60156C12.9732 9.60156 12.7598 9.81588 12.7598 10.0805V13.6559C12.7598 13.8773 12.9379 14.0572 13.1575 14.0572H14.9073C15.1278 14.0572 15.3051 13.8773 15.3051 13.6559C15.3051 13.4346 15.1278 13.2555 14.9073 13.2555Z"
        fill="black"
      />
      <path
        d="M18.7504 13.401L17.416 11.6345L18.6216 10.4191C18.7848 10.2551 18.7848 9.98786 18.6216 9.82382C18.4585 9.65889 18.193 9.65889 18.0298 9.82382L16.5367 11.3276V10.0805C16.5367 9.81588 16.3241 9.60156 16.0613 9.60156C15.7985 9.60156 15.5859 9.81588 15.5859 10.0805V13.6074C15.5859 13.872 15.7994 14.0872 16.0613 14.0872C16.3233 14.0872 16.5367 13.8729 16.5367 13.6074V12.5191L16.8083 12.2457L18.0704 13.9152C18.2106 14.104 18.4779 14.1428 18.6649 13.9999C18.8527 13.8579 18.8906 13.5889 18.7495 13.4002L18.7504 13.401Z"
        fill="black"
      />
      <path
        d="M12.476 13.5158L11.1927 9.97825C11.1927 9.97825 11.1892 9.97561 11.1883 9.97473C11.1063 9.75953 10.869 9.60254 10.5868 9.60254C10.5171 9.60254 10.4475 9.61224 10.3813 9.63164C10.3187 9.65016 10.2578 9.67662 10.2032 9.71278C10.1511 9.7463 10.1044 9.78775 10.0647 9.83626C10.0391 9.86801 10.0162 9.90329 9.99855 9.94033C9.98267 9.97296 9.92005 10.1538 9.89888 10.2102L9.87683 10.2693L9.85038 10.3399L9.82039 10.421L9.78687 10.5118L9.74983 10.6115L9.71014 10.7191L9.66781 10.8346L9.62283 10.9563L9.57609 11.0833L9.52758 11.2148L9.47731 11.3497L9.42615 11.4873L9.37412 11.6275L9.32208 11.7686L9.27005 11.9097L9.21801 12.0509L9.16686 12.1902L9.11659 12.3269L9.0672 12.461L9.01957 12.5906L8.97371 12.715L8.92961 12.834L8.88816 12.946L8.84935 13.051L8.81407 13.1471L8.78144 13.2344L8.75322 13.3112L8.72852 13.3773L8.70824 13.4311L8.69325 13.4726L8.68266 13.5008L8.67737 13.5158C8.59976 13.7398 8.71618 13.9841 8.93755 14.0626C9.1598 14.1411 9.40234 14.0238 9.48084 13.7998L9.69956 13.1718H11.4555L11.6743 13.7998C11.7519 14.0238 11.9953 14.1411 12.2167 14.0626C12.438 13.9841 12.5553 13.7398 12.4768 13.5158H12.476ZM9.9765 12.371L10.5665 10.6741C10.5736 10.6741 10.5789 10.6759 10.5859 10.6759L11.1751 12.371H9.9765Z"
        fill="black"
      />
    </svg>
  );
};

export const InstargramIcon = () => {
  return (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.7843 0H7.21569C3.23077 0 0 3.23077 0 7.21569V17.7843C0 21.7692 3.23077 25 7.21569 25H17.7843C21.7692 25 25 21.7692 25 17.7843V7.21569C25.0018 3.23077 21.771 0 17.7843 0ZM22.6986 17.9702C22.6986 20.615 20.5548 22.7606 17.9082 22.7606H7.09177C4.44696 22.7606 2.30137 20.6168 2.30137 17.9702V7.1555C2.30137 4.51069 4.44519 2.3651 7.09177 2.3651H17.9082C20.553 2.3651 22.6986 4.50892 22.6986 7.1555V17.972V17.9702Z"
        fill="black"
      />
      <path
        d="M12.5 6.07593C8.91694 6.07593 6.01367 8.98097 6.01367 12.5623C6.01367 16.1436 8.91871 19.0486 12.5 19.0486C16.0813 19.0486 18.9863 16.1436 18.9863 12.5623C18.9863 8.98097 16.0813 6.07593 12.5 6.07593V6.07593ZM12.5 16.7685C10.1774 16.7685 8.29557 14.8849 8.29557 12.564C8.29557 10.2432 10.1792 8.3596 12.5 8.3596C14.8209 8.3596 16.7044 10.2432 16.7044 12.564C16.7044 14.8849 14.8209 16.7685 12.5 16.7685Z"
        fill="black"
      />
      <path
        d="M19.2042 7.34128C20.0392 7.34128 20.716 6.66441 20.716 5.82945C20.716 4.99449 20.0392 4.31763 19.2042 4.31763C18.3693 4.31763 17.6924 4.99449 17.6924 5.82945C17.6924 6.66441 18.3693 7.34128 19.2042 7.34128Z"
        fill="black"
      />
    </svg>
  );
};

export const PersonIcon = () => {
  return(
    <svg width="18" height="17" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 11.0274C10.4533 11.0274 9.13333 10.4823 8.04 9.39219C6.94667 8.30311 6.4 7.01027 6.4 5.5137C6.4 3.99087 6.94667 2.69121 8.04 1.61473C9.13333 0.538242 10.4533 0 12 0C13.5467 0 14.8667 0.538242 15.96 1.61473C17.0533 2.69121 17.6 3.99087 17.6 5.5137C17.6 7.01027 17.0533 8.30311 15.96 9.39219C14.8667 10.4823 13.5467 11.0274 12 11.0274ZM21.56 23H2.44C1.74667 23 1.16693 22.7705 0.7008 22.3116C0.2336 21.8516 0 21.2934 0 20.637V19.4949C0 18.7334 0.213333 18.0245 0.64 17.3682C1.06667 16.7118 1.64 16.1998 2.36 15.8322C3.93333 15.0708 5.52693 14.4995 7.1408 14.1182C8.7536 13.738 10.3733 13.5479 12 13.5479C13.6267 13.5479 15.2469 13.738 16.8608 14.1182C18.4736 14.4995 20.0667 15.0708 21.64 15.8322C22.36 16.1998 22.9333 16.7118 23.36 17.3682C23.7867 18.0245 24 18.7334 24 19.4949V20.637C24 21.2934 23.7664 21.8516 23.2992 22.3116C22.8331 22.7705 22.2533 23 21.56 23ZM2.4 20.637H21.6V19.4949C21.6 19.1798 21.5067 18.891 21.32 18.6284C21.1333 18.3659 20.88 18.1427 20.56 17.9589C19.1733 17.3025 17.7669 16.7968 16.3408 16.4419C14.9136 16.0879 13.4667 15.911 12 15.911C10.5333 15.911 9.0864 16.0879 7.6592 16.4419C6.23307 16.7968 4.82667 17.3025 3.44 17.9589C3.12 18.1427 2.86667 18.3659 2.68 18.6284C2.49333 18.891 2.4 19.1798 2.4 19.4949V20.637ZM12 8.66438C12.88 8.66438 13.6336 8.35562 14.2608 7.73808C14.8869 7.1216 15.2 6.38014 15.2 5.5137C15.2 4.64726 14.8869 3.90527 14.2608 3.28774C13.6336 2.67126 12.88 2.36301 12 2.36301C11.12 2.36301 10.3669 2.67126 9.7408 3.28774C9.1136 3.90527 8.8 4.64726 8.8 5.5137C8.8 6.38014 9.1136 7.1216 9.7408 7.73808C10.3669 8.35562 11.12 8.66438 12 8.66438Z"
        fill="white"
      />
    </svg>
  );
}

export const XIcon = () => {
  return(
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.4 19.2L4.8 17.6L10.4 12L4.8 6.40005L6.4 4.80005L12 10.4L17.6 4.80005L19.2 6.40005L13.6 12L19.2 17.6L17.6 19.2L12 13.6L6.4 19.2Z" fill="black"/>
    </svg>
  );
}

export const CameraIcon = () => {
  return(
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 9.2081C6.74853 9.2081 7.37807 8.95307 7.8886 8.443C8.39913 7.93247 8.6544 7.3076 8.6544 6.5684C8.6544 5.82967 8.39913 5.20503 7.8886 4.6945C7.37807 4.18443 6.74853 3.9294 6 3.9294C5.26127 3.9294 4.63897 4.18443 4.1331 4.6945C3.6277 5.20503 3.375 5.82967 3.375 6.5684C3.375 7.3076 3.6277 7.93247 4.1331 8.443C4.63897 8.95307 5.26127 9.2081 6 9.2081ZM1.3919 11.25C1.0517 11.25 0.762367 11.131 0.523901 10.893C0.285901 10.6545 0.166901 10.3652 0.166901 10.025V3.1272C0.166901 2.787 0.285901 2.49767 0.523901 2.2592C0.762367 2.0212 1.0517 1.9022 1.3919 1.9022H3.1706L4.2353 0.75H7.7647L8.8434 1.9022H10.6081C10.9483 1.9022 11.2376 2.0212 11.4761 2.2592C11.7141 2.49767 11.8331 2.787 11.8331 3.1272V10.025C11.8331 10.3652 11.7141 10.6545 11.4761 10.893C11.2376 11.131 10.9483 11.25 10.6081 11.25H1.3919Z" fill="white"/>
    </svg>
  );
}