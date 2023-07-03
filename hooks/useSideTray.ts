import { SideTrayContext } from "@/contexts/SideTray"
import { useContext } from "react"

export const useSideTray = () => {
    const context = useContext(SideTrayContext)
    if (!context) {
        console.log("useSideTray must be used within a SideTrayContextProvider")
    }
    return context
}