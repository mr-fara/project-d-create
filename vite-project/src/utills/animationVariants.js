export const fadeIn = (direction, delay) => {
    return {
        hidden : {
            y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
            opacity: 0,
            x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
        },
        show: {
            y: 0,
            opacity: 1,
            x: 0,
            transition: {
                type: 'tweem',
                delay: delay,
                duration: 0.6,
                else: [0.25, 0.26, 0.25, 0.75]
            }
        }
    }
}



