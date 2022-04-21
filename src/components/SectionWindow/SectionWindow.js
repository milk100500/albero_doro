import s from './styleSectionWindow.module.css'
import Button from "../Button/Button";
import Window from "../Window/Window";


const SectionWindow = ({paddingButton, windowText, alignStart, children}) => {
    return (
        <div style={{alignItems: alignStart ? 'flex-start' : '', display: 'flex', flexDirection: 'column'}}>
            <Button pad={paddingButton}>
                {children}
            </Button>
            <Window windowText={windowText}/>
        </div>
    )
}

export default SectionWindow;