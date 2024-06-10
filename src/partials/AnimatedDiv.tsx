'use client'
import { ReactNode, DetailedHTMLProps, HTMLAttributes, useRef, useEffect, useState } from "react"
import { useIntersectionObserver } from "usehooks-ts"

export default function AnimatedDiv({ children, id, ...rest }: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>){
    const [ onScreenCounter, setOnScreenCounter ] = useState<number>(0)
    const { isIntersecting, ref } = useIntersectionObserver()

    useEffect(() => {        
        if (isIntersecting) setOnScreenCounter(onScreenCounter+1)
    }, [isIntersecting])

    useEffect(() => {
        if (onScreenCounter == 1) {
            const element = document.getElementById(id as string)
            element?.classList.add('appear-animation')
        }
    }, [onScreenCounter])

    return <div id={id} {...rest} ref={ref}>
        {children as ReactNode}
    </div>
}
