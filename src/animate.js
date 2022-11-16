export  const viewPort = {
    once: false,
    amount: .5
}

export const button = {
    onScreen: {
        opacity:1,
        y:0,
        scale: 1,
    },
    offScreen: {
        opacity:0,
        y: 50,
        scale: .5
    }
}

export const fadeIn = {
    onScreen: {
        opacity:1,
    },
    offScreen: {
        opacity:0,
    },
}

export const fadeIn2 = {
    onScreen: {
        opacity:.1,
    },
    offScreen: {
        opacity:0,
    },
}

export const fadeUp = {
    onScreen: {
        opacity:1,
        y:0,
    },
    offScreen: {
        opacity:0,
        y: 100
    }
}

export const zoomIn = {
    onScreen: {
        opacity:1,
        scale: 1,
        rotate: 10
    },
    offScreen: {
        opacity:0,
        scale:.5,
        rotate:-10
    }
}
export const rotate = {
    onScreen: {
        rotate: 0
    },
    offScreen: {
        rotate:-10
    }
}

export const staggerUp = {
    onScreen: i => ({ 
        opacity:  1 , y:0,
        transition: {
            delay: i * 0.05,
        },  
    }),
    offScreen: { opacity: 0, y: 50 },
}
