const MAX_VISIBILITY = 3;
export const CARDS = 10;

export const loading = () => ({
    content: 'Prof. Avinash J Agrawal'
});

export const styleWatcher = (active, index) => {
    return {
        '--active': index === active ? 1 : 0,
        '--offset': (active - index) / 3,
        '--direction': Math.sign(active - index),
        '--abs-offset': Math.abs(active - index) / 3,
        'pointer-events': active === index ? 'auto' : 'none',
        'opacity': Math.abs(active - index) >= MAX_VISIBILITY ? '0' : '1',
        'display': Math.abs(active - index) > MAX_VISIBILITY ? 'none' : 'block',
      };
};