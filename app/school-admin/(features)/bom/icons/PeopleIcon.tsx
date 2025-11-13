interface IconProps {
  className?: string;
}

export function PeopleIcon({ className }: IconProps) {
  return (
    <svg 
      width="96" 
      height="96" 
      viewBox="0 0 96 96" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M24 28C29.5228 28 34 23.5228 34 18C34 12.4772 29.5228 8 24 8C18.4772 8 14 12.4772 14 18C14 23.5228 18.4772 28 24 28Z" 
        fill="currentColor"
      />
      <path 
        d="M72 28C77.5228 28 82 23.5228 82 18C82 12.4772 77.5228 8 72 8C66.4772 8 62 12.4772 62 18C62 23.5228 66.4772 28 72 28Z" 
        fill="currentColor"
      />
      <path 
        d="M24 34C13.5066 34 5 42.5066 5 53V70C5 72.2091 6.79086 74 9 74H39C41.2091 74 43 72.2091 43 70V53C43 42.5066 34.4934 34 24 34Z" 
        fill="currentColor"
      />
      <path 
        d="M72 34C61.5066 34 53 42.5066 53 53V70C53 72.2091 54.7909 74 57 74H87C89.2091 74 91 72.2091 91 70V53C91 42.5066 82.4934 34 72 34Z" 
        fill="currentColor"
      />
      <ellipse cx="48" cy="50" rx="8" ry="8" fill="currentColor"/>
      <path 
        d="M48 64C40.268 64 34 70.268 34 78V86C34 88.2091 35.7909 90 38 90H58C60.2091 90 62 88.2091 62 86V78C62 70.268 55.732 64 48 64Z" 
        fill="currentColor"
      />
    </svg>
  );
}