/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          main: '#FF5C8A',
          light: '#FF77A0',
          deep: '#E63D70',
          wine: '#B83258',
          soft: '#FF8FB0',
          pastel: '#FFD9E5',
          'very-pale': '#FFEDF3',
          'border-light': '#FFC2D4'
        },
        newtro: {
          red: '#E63D70',
          'red-deep': '#B83258',
          'red-cherry': '#FF4757',
          yellow: '#FFD700',
          'yellow-soft': '#FFE66D',
          mint: '#A8E0CF',
          stripe: '#FFE0EB'
        },
        yellow: {
          main: '#FFE66D',
          accent: '#FFC53D',
          kakao: '#FCE451'
        },
        blue: {
          main: '#B8E0F5',
          'pastel-light': '#DFF0F8',
          pastel: '#E4F2FA'
        },
        green: {
          main: '#A8D8B9',
          pastel: '#DCEFE3',
          'pastel-light': '#EAF5EE'
        },
        purple: {
          main: '#E0D4F0',
          pastel: '#F4EFFA',
          'pastel-deep': '#F9F4FA',
          border: '#C4A8D4'
        },
        ink: {
          main: '#1A1A1A'
        },
        cream: {
          main: '#FFFBF0'
        },
        text: {
          primary: '#1A1A1A',
          secondary: '#8B6B5A',
          tertiary: '#B89A8E',
          muted: '#C4A8B0',
          accent: '#C28FA8'
        },
        bg: {
          'grad-start': '#FFE5EC',
          'grad-mid': '#FFF0F4',
          'warm-end': '#FFE8D6'
        },
        member: {
          haneul: '#FFE66D',
          jiwon: '#A8D8B9',
          sumin: '#B8E0F5',
          yuna: '#E0D4F0'
        },
        'kakao-ui': {
          bg: '#ABC1D1',
          'my-message': '#FCE451',
          'other-message': '#FFFFFF'
        }
      },
      backgroundImage: {
        'grad-main': 'linear-gradient(165deg, #FFE5EC 0%, #FFF0F4 50%, #FFE5EC 100%)',
        'grad-cta': 'linear-gradient(180deg, #FF77A0 0%, #FF5C8A 55%, #E63D70 100%)',
        'polaroid-pink': 'linear-gradient(135deg, #FFD9E5 0%, #FFEDF3 100%)',
        'polaroid-blue': 'linear-gradient(135deg, #B8E0F5 0%, #DFF0F8 100%)',
        'polaroid-green': 'linear-gradient(135deg, #DCEFE3 0%, #EAF5EE 100%)',
        'polaroid-purple': 'linear-gradient(135deg, #F4EFFA 0%, #F9F4FA 100%)',
        'magazine-vol': 'linear-gradient(180deg, #FF8FB0 0%, #FF5C8A 100%)',
        'effect-glitter': 'radial-gradient(circle at 10% 6%, rgba(255,255,255,0.75) 0, rgba(255,255,255,0.75) 1.2px, transparent 1.6px)',
        'effect-glossy': 'radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.45) 0%, transparent 65%)',
        'effect-highlighter': 'linear-gradient(to top, #FFE66D 50%, transparent 50%)',
        'effect-dotted-h': 'repeating-linear-gradient(to right, #1A1A1A 0, #1A1A1A 3px, transparent 3px, transparent 7px)',
        'effect-dotted-light': 'repeating-linear-gradient(to right, #E0C8D2 0, #E0C8D2 3px, transparent 3px, transparent 6px)'
      },
      fontFamily: {
        sans: ['"SUIT Variable"', 'SUIT', 'Pretendard', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        mono: ['"Courier New"', 'monospace'],
        hand: ['"SUIT Variable"', 'SUIT', 'Pretendard', 'sans-serif'],
        cute: ['"SUIT Variable"', 'SUIT', 'Pretendard', 'sans-serif'],
        display: ['Dongle', '"Black Han Sans"', '"SUIT Variable"', 'sans-serif'],
        bold: ['"Black Han Sans"', '"SUIT Variable"', 'sans-serif'],
        pixel: ['Galmuri11', '"Galmuri11"', '"SUIT Variable"', 'monospace'],
        'pixel-sm': ['Galmuri9', '"Galmuri9"', 'Galmuri11', '"SUIT Variable"', 'monospace'],
        'pixel-lg': ['Galmuri14', '"Galmuri14"', 'Galmuri11', '"SUIT Variable"', 'monospace'],
        letter: ['"Nanum Pen Script"', 'Gaegu', 'cursive'],
        gowun: ['"Gowun Dodum"', 'Pretendard', 'sans-serif'],
        wanted: ['"Wanted Sans Variable"', '"Wanted Sans"', 'Pretendard', 'sans-serif'],
        suit: ['"SUIT Variable"', 'SUIT', 'Pretendard', 'sans-serif'],
        maru: ['"MaruBuri"', '"Nanum Myeongjo"', 'serif'],
        myeongjo: ['"Nanum Myeongjo"', '"MaruBuri"', 'serif']
      },
      fontSize: {
        display: '32px',
        h1: '28px',
        h2: '22px',
        h3: '19px',
        h4: '15px',
        body: '13px',
        'body-small': '12px',
        caption: '11px',
        label: '10px',
        meta: '9px',
        micro: '8px'
      },

      lineHeight: {
        tight: '1.2',
        snug: '1.3',
        normal: '1.4',
        relaxed: '1.5'
      },
      spacing: {
        '0': '0',
        '1': '4px',
        '2': '6px',
        '3': '8px',
        '4': '10px',
        '5': '12px',
        '6': '14px',
        '7': '16px',
        '8': '18px',
        '9': '20px',
        '10': '22px',
        '12': '26px',
        '14': '30px'
      },
      borderRadius: {
        none: '0',
        sm: '4px',
        md: '12px',
        lg: '14px',
        pill: '999px',
        'bubble-left': '20px 20px 20px 4px',
        'bubble-right': '14px 4px 14px 14px',
        'bubble-other': '4px 14px 14px 14px'
      },
      borderWidth: {
        thin: '1.2px',
        main: '1.5px',
        cta: '2.5px'
      },
      boxShadow: {
        card: '3px 4px 0 rgba(255, 92, 138, 0.22)',
        'card-deep': '4px 5px 0 rgba(255, 92, 138, 0.28)',
        'card-light': '2px 3px 0 rgba(0, 0, 0, 0.08)',
        'card-medium': '2px 3px 0 rgba(0, 0, 0, 0.12)',
        sticker: '1px 2px 0 rgba(0, 0, 0, 0.1)',
        tape: '1px 1px 0 rgba(0, 0, 0, 0.08)',
        cta: '2px 3px 0 #1A1A1A',
        'cta-inner': 'inset 0 6px 12px rgba(255, 255, 255, 0.45)'
      },
      rotate: {
        'subtle-left': '-1.5deg',
        'subtle-right': '1.5deg',
        'soft-left': '-3deg',
        'soft-right': '3deg',
        'tilt-left': '-5deg',
        'tilt-right': '5deg',
        'strong-left': '-7deg',
        'strong-right': '7deg'
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'float-delayed': 'float 3s ease-in-out 1.5s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-6px) scale(1.05)' },
        }
      }
    },
  },
  plugins: [],
}
