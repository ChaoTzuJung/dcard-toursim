import { ReactComponent as ArrowLeftIcon } from '../../images/icons/arrow-left-dark.svg';
import { ReactComponent as ArrowRightIcon } from '../../images/icons/arrow-right-dark.svg';
import { S } from './styled';

interface IconProps {
	name: string,
	theme?: string,
	rotate?: number,
	onClick?: () => void,
}

interface SvgMap {
    [name: string]: JSX.Element
}

const Icon: React.FC<IconProps> = ({ name, onClick, theme, rotate }) => {

	const handleClick = () => {
		onClick && onClick()
	}

	const svgComponents: SvgMap = {
		arrow_left: <ArrowLeftIcon />,
		arrow_right: <ArrowRightIcon />,
	};

	return (
		<S.Icon
			role="button"
			tabIndex={0}
			onClick={handleClick}
			onKeyDown={handleClick}
			style={{ fill: theme }}
			rotate={rotate}
		>
			{svgComponents[name]}
		</S.Icon>
	);
};
export default Icon;
