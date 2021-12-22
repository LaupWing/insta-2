import { useRecoilState } from "recoil"
import { modalState } from "../atoms/modalAtom"

const Modal = () => {
    const [open, setOpen] = useRecoilState(modalState)
    
    return (
        <div>
            <h1>Im a modal</h1>
        </div>
    )
}

export default Modal
