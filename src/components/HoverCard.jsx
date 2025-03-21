import PropTypes from "prop-types";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

const HoverCardComponent = ({
    trigger,
    content,
    className,
    style,
}) => {
    return (
        <HoverCard>
            <HoverCardTrigger>
                {trigger}
            </HoverCardTrigger>
            <HoverCardContent className={`hover-card-content ${className}`} style={style}>
                {content}
            </HoverCardContent>
        </HoverCard>
)}

HoverCardComponent.PropTypes = {
    children: PropTypes.node.isRequired,
    content: PropTypes.node.isRequired,
    className: PropTypes.string,
}

export default HoverCardComponent