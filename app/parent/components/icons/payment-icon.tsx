import * as React from "react";

export const PaymentIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
    ({ className, ...props }, ref) => (
        <svg
            ref={ref}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 110 110"
            fill="none"
            className={className}
            {...props}
        >
            <circle cx="55" cy="55" r="54" fill="#FFA500" stroke="white" strokeWidth="2" />
            <rect
                x="28"
                y="28"
                width="54"
                height="40"
                rx="6"
                fill="white"
            />
            <path
                d="M44 55l6-10h12l-6 10h-12z"
                fill="#FFA500"
            />
            <rect x="34" y="40" width="42" height="5" fill="#FFA500" />
            <circle cx="78" cy="74" r="9" fill="white" />
            <path d="M73 74l3 3 5-5" stroke="#FFA500" strokeWidth="2" strokeLinecap="round" />
        </svg>
    )
);

PaymentIcon.displayName = "PaymentIcon";
