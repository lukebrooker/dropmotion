"use client"

export function ViewTransitionStyles() {
  return (
    <style>
      {`
        ::view-transition-old(page),
        ::view-transition-new(page) {
          animation-duration: 0.5s;
        }

        ::view-transition-old(page) {
          animation-name: fade-and-slide-out;
        }

        ::view-transition-new(page) {
          animation-name: fade-and-slide-in;
        }

        @keyframes fade-and-slide-out {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-20px);
          }
        }

        @keyframes fade-and-slide-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        main {
          view-transition-name: page;
        }
      `}
    </style>
  )
}
