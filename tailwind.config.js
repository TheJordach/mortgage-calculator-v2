/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,ts}'],
    theme: {
        extend: {
            fontFamily: {
                'plus-jakarta-sans': ['Plus Jakarta Sans', 'sans-serif'],
            },
            colors: {
                'fontawesome-gray': 'rgba(241, 242, 244, 1.00)',
                'fontawesome-gray-800': 'rgba(240, 241, 243, 1.00)',
                'fontawesome-blue-dark': 'rgba(0, 30, 66, 1.00)',
                'fontawesome-blue-clear': 'rgba(20, 110, 189, 1.00)',
                'fontawesome-green-clear': 'rgba(99, 230, 190, 1.00)',
                'fontawesome-green-dark': 'rgba(14, 128, 105, 1.00)',
                'fontawesome-orange': 'rgba(243, 105, 68, 1.00)',
                'fontawesome-yellow-clear': 'rgba(255, 212, 59, 1.00)',
                'fontawesome-purple-dark': 'rgba(140, 21, 65, 1.00)',
                'fontawesome-pink': 'rgba(229, 153, 247, 1.00)',
                'fontawesome-purple-light': 'rgba(177, 151, 252, 1.00)',
                'challenge-white': 'rgba(241, 248, 248, 1.00)',
                'challenge-gray-dark': 'rgba(89, 113, 126, 1.00)',
                'challenge-gray-light': 'rgba(228, 244, 252, 1.00)',
                'challenge-gray-clear': 'rgba(120, 149, 167, 1.00)',
                'challenge-gray-lighted': 'rgba(35, 57, 70, 1.00)',
                'challenge-indigo': 'rgba(219, 220, 37, 1.00)',
                'challenge-yellow-clear': 'rgba(250, 250, 224, 1.00)',
                'challenge-blue-dark': 'rgba(19, 48, 64, 1.00)',
                'challenge-blue-super-dark': 'rgba(14, 36, 49, 1.00)',
                'custom-gray': 'rgba(144, 156, 194, 1.00)',
                'custom-blue': 'rgba(8, 72, 135, 1.00)',
                'custom-orange': 'rgba(245, 138, 7, 1.00)',
                'custom-orange-clear': 'rgba(249, 171, 85, 1.00)',
            },
        },
        plugins: [],
    },
}
