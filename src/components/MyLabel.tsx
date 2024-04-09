
import './MyLabel.css';


export interface Props {
    /**
     * Text to Display
     */
    label: string;
    /**
     * Label Size
     */
    size?: 'normal' | 'h1' | 'h2' | 'h3';

    /**
     * All Caps - uppercase or lowercase
     */

    AllCaps?: boolean;

    /**
     * Label color
     */

    color?: 'text-primary' | 'text-secondary' | 'text-tertiary';

    /**
     * font color
     */

    fontColor?: string;


}

export const MyLabel = ({ label, size = 'normal', color = 'text-primary', AllCaps = true, fontColor }: Props) => {
    return (
        <span
            className={`${size} ${color} label`}
            style={{ color: fontColor }}
        >
            {AllCaps ? label.toUpperCase() : label}
        </span>
    );
};

