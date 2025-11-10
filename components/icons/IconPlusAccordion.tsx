import React from "react";

const IconPlusAccordion = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.7144 8.33343C20.7144 7.93894 20.3946 7.61914 20.0001 7.61914C19.6056 7.61914 19.2858 7.93894 19.2858 8.33343V19.2858H8.33343C7.93894 19.2858 7.61914 19.6056 7.61914 20.0001C7.61914 20.3946 7.93894 20.7144 8.33343 20.7144H19.2858V31.6668C19.2858 32.0612 19.6056 32.381 20.0001 32.381C20.3946 32.381 20.7144 32.0612 20.7144 31.6668V20.7144H31.6668C32.0612 20.7144 32.381 20.3946 32.381 20.0001C32.381 19.6056 32.0612 19.2858 31.6668 19.2858H20.7144V8.33343Z"
        fill="#9D9FA2"
      />
    </svg>
  );
};

export default IconPlusAccordion;
