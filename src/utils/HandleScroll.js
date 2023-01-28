import { useEffect, useRef } from "react"

export const HandleScroll = () => {
    const revealRefs = useRef([])

    useEffect(() => {
        const handleScrolling = () => {
            for (let i = 0; i < revealRefs.current.length; i++){
                const windowHeight = window.innerHeight
                const elementTop = revealRefs.current[i].getBoundingClientRect().top
                const elementVisible = 25
            
                if(elementTop < windowHeight - elementVisible){
                    revealRefs.current[i].classList.add('active')
                }else{
                    revealRefs.current[i].classList.remove('active')
                }
            }
        }
        window.addEventListener('scroll', handleScrolling)
        return () => {
            window.removeEventListener('scroll', handleScrolling)
        }
    }, [])

    return revealRefs;
}