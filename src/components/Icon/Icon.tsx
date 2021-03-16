import { ISvgMap } from '../../types';
import { ReactComponent as ArrowLeftIcon } from '../../images/icons/arrow-left-dark.svg';
import { ReactComponent as ArrowRightIcon } from '../../images/icons/arrow-right-dark.svg';
import { S } from './styled';

type IconProps = {
	name: string;
	theme?: string;
	rotate?: number;
	onClick?: () => void;
}

const Icon: React.FC<IconProps> = ({ name, onClick, theme, rotate }) => {

	const handleClick = () => {
		onClick && onClick()
	}

	const svgComponents: ISvgMap = {
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
